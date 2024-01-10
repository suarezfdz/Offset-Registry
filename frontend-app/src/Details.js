// DetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Chart from 'chart.js/auto';
import Layout from './Layout';

const Details = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {

        const apiHost = 'https://offset-registry.vercel.app'; // Use the environment variable or a default value
//        const apiHost = process.env.SERVER_API_HOST || 'http://localhost:5000'; // Use the environment variable or a default value

        const response = await fetch(
          `${apiHost}/api/offsets/${itemId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setItem(data);

        const years = Array.from({ length: 18 }, (_, i) => `Year ${2006 + i}`);

        const datasets = Object.keys(data)
          .filter((key) => key.includes('credits'))
          .map((key) => ({
            label: key.replace('credits', 'Credits ') + ' by year',
            data: years.map((year) => data[key + year]),
            backgroundColor: 'rgba(113,195,97, 0.2)',
            borderColor: 'rgba(113,195,97,1)',
            borderWidth: 1,
          }));

        configureChart(document.getElementById('myChart'), years, datasets);

      } catch (error) {
        console.error('Error fetching item details', error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const configureChart = (ctx, labels, chartData) => {
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: chartData,
        },
      });
    } else {
      console.error('Canvas element with ID "myChart" not found.');
    }
  };

  return (
    <Layout
        path={['Home', 'Details']}
    >
      {item ? (
        <div className="container" style={{ 'color': 'white'  }}><h1 className="mb-4">{item["projectname"]}</h1>
            <div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <p><b>Project Owner:</b> {item["projectowner"]}</p>
                  <p><b>Offset Project Operator:</b> {item["offsetprojectoperator"]}</p>
                  <p><b>Authorized Project Designee:</b> {item["authorizedprojectdesignee"]}</p>
                  <p><b>Verifier:</b> {item["verifier"]}</p>
                  <p><b>Estimated Annual Emission Reductions:</b> {item["estimatedannualemissionreductions"]}</p>
                  <p><b>PERs:</b> {item["pers"]}</p>
                  <p><b>Registry / ARB:</b> {item["registryarb"]}</p>
                  <p><b>ARB Project Detail:</b> {item["arbprojectdetail"]}</p>

                </div>
                <div className="col-md-6">
                  <p><b>ARB ID:</b> {item["arbid"]}</p>
                  <p><b>Project Listed:</b> {item["projectlisted"]}</p>
                  <p><b>Project Registered:</b> {item["projectregistered"]}</p>
                  <p><b>CCB / Certifications:</b> {item["ccb_certifications"]}</p>
                  <p><b>Project Type:</b> {item["projecttype"]}</p>
                  <p><b>Registry Documents:</b> {item["registrydocuments"]}</p>
                  <p><b>Project Website: </b>
                    <Link href={item['projectwebsite']} target="_blank" >
                        Visit Project Website
                    </Link></p>
                </div>
              </div>
            </div>
            <div className="mt-4">
                <h3></h3>
                <canvas id="myChart" width="400" height="200"></canvas>
            </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default Details;

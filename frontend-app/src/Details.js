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
        const response = await fetch(`http://localhost:5000/api/items/${itemId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setItem(data);

        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Year 2006",
                   "Year 2007",
                   "Year 2008",
                   "Year 2009",
                   "Year 2010",
                   "Year 2011",
                   "Year 2012",
                   "Year 2013",
                   "Year 2014",
                   "Year 2015",
                   "Year 2016",
                   "Year 2017",
                   "Year 2018",
                   "Year 2019",
                   "Year 2020",
                   "Year 2021",
                   "Year 2022",
                   "Year 2023"],
          datasets: [
            {
              label: 'Credits issued by vintage',
              data: [data["Credits issued by vintage year 2006"],
                     data["Credits issued by vintage year 2007"],
                     data["Credits issued by vintage year 2008"],
                     data["Credits issued by vintage year 2009"],
                     data["Credits issued by vintage year 2010"],
                     data["Credits issued by vintage year 2011"],
                     data["Credits issued by vintage year 2012"],
                     data["Credits issued by vintage year 2013"],
                     data["Credits issued by vintage year 2014"],
                     data["Credits issued by vintage year 2015"],
                     data["Credits issued by vintage year 2016"],
                     data["Credits issued by vintage year 2017"],
                     data["Credits issued by vintage year 2018"],
                     data["Credits issued by vintage year 2019"],
                     data["Credits issued by vintage year 2020"],
                     data["Credits issued by vintage year 2021"],
                     data["Credits issued by vintage year 2022"],
                     data["Credits issued by vintage year 2023"]],
              backgroundColor: [
                'rgba(113,195,97, 0.2)',
              ],
              borderColor: [
                'rgba(113,195,97,1)',
              ],
              borderWidth: 1,
            },{
              label: 'Credits retired by year',
              data: [data["Credits retired in 2006"],
                     data["Credits retired in 2007"],
                     data["Credits retired in 2008"],
                     data["Credits retired in 2009"],
                     data["Credits retired in 2010"],
                     data["Credits retired in 2011"],
                     data["Credits retired in 2012"],
                     data["Credits retired in 2013"],
                     data["Credits retired in 2014"],
                     data["Credits retired in 2015"],
                     data["Credits retired in 2016"],
                     data["Credits retired in 2017"],
                     data["Credits retired in 2018"],
                     data["Credits retired in 2019"],
                     data["Credits retired in 2020"],
                     data["Credits retired in 2021"],
                     data["Credits retired in 2022"],
                     data["Credits retired in 2023"]],
              backgroundColor: [
                'rgba(59,126,161,0.2)',
              ],
              borderColor: [
                'rgba(59,126,161,1)',
              ],
              borderWidth: 1,
            },{
              label: 'Credits remaining by vintage by year',
              data: [data["Credits remaining by vintage: 2006"],
                     data["Credits remaining by vintage: 2007"],
                     data["Credits remaining by vintage: 2008"],
                     data["Credits remaining by vintage: 2009"],
                     data["Credits remaining by vintage: 2010"],
                     data["Credits remaining by vintage: 2011"],
                     data["Credits remaining by vintage: 2012"],
                     data["Credits remaining by vintage: 2013"],
                     data["Credits remaining by vintage: 2014"],
                     data["Credits remaining by vintage: 2015"],
                     data["Credits remaining by vintage: 2016"],
                     data["Credits remaining by vintage: 2017"],
                     data["Credits remaining by vintage: 2018"],
                     data["Credits remaining by vintage: 2019"],
                     data["Credits remaining by vintage: 2020"],
                     data["Credits remaining by vintage: 2021"],
                     data["Credits remaining by vintage: 2022"],
                     data["Credits remaining by vintage: 2023"]],
              backgroundColor: [
                'rgba(170,31,64,0.2)',
              ],
              borderColor: [
                'rgba(170,31,64,1)',
              ],
              borderWidth: 1,
            },{
              label: 'Credits issued by issuance year',
              data: [data["Credits issued by issuance year 2006"],
                     data["Credits issued by issuance year 2007"],
                     data["Credits issued by issuance year 2008"],
                     data["Credits issued by issuance year 2009"],
                     data["Credits issued by issuance year 2010"],
                     data["Credits issued by issuance year 2011"],
                     data["Credits issued by issuance year 2012"],
                     data["Credits issued by issuance year 2013"],
                     data["Credits issued by issuance year 2014"],
                     data["Credits issued by issuance year 2015"],
                     data["Credits issued by issuance year 2016"],
                     data["Credits issued by issuance year 2017"],
                     data["Credits issued by issuance year 2018"],
                     data["Credits issued by issuance year 2019"],
                     data["Credits issued by issuance year 2020"],
                     data["Credits issued by issuance year 2021"],
                     data["Credits issued by issuance year 2022"],
                     data["Credits issued by issuance year 2023"]],
              backgroundColor: [
                'rgba(196, 130, 14, 0.2)',
              ],
              borderColor: [
                'rgba(196, 130, 14, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        });

      } catch (error) {
        console.error('Error fetching item details', error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  return (
    <Layout
        path={['Home', 'Details']}
    >
      {item ? (
        <div className="container" style={{ 'color': 'white'  }}><h1 className="mb-4">{item["Project Name"]}</h1>
            <div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <p><b>Project Owner:</b> {item["Project Owner"]}</p>
                  <p><b>Offset Project Operator:</b> {item["Offset Project Operator"]}</p>
                  <p><b>Authorized Project Designee:</b> {item["Authorized Project Designee"]}</p>
                  <p><b>Verifier:</b> {item["Verifier"]}</p>
                  <p><b>Estimated Annual Emission Reductions:</b> {item["Estimated Annual Emission Reductions"]}</p>
                  <p><b>PERs:</b> {item["PERs"]}</p>
                  <p><b>Registry / ARB:</b> {item["Registry / ARB"]}</p>
                  <p><b>ARB Project Detail:</b> {item["ARB Project Detail"]}</p>

                </div>
                <div className="col-md-6">
                  <p><b>ARB ID:</b> {item["ARB ID"]}</p>
                  <p><b>Project Listed:</b> {item["Project Listed"]}</p>
                  <p><b>Project Registered:</b> {item["Project Registered"]}</p>
                  <p><b>CCB / Certifications:</b> {item["CCB / Certifications"]}</p>
                  <p><b>Project Type:</b> {item["Project Type"]}</p>
                  <p><b>Registry Documents:</b> {item["Registry Documents"]}</p>
                  <p><b>Project Website: </b>
                    <Link href={item['Project Website']} target="_blank" >
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

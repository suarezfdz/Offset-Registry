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

        const apiHost = process.env.SERVER_API_HOST || 'http://localhost:5000'; // Use the environment variable or a default value

        const response = await fetch(
          `${apiHost}/api/items/${itemId}`
        );

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
              data: [data["creditsissuedbyvintageyear2006"],
                     data["creditsissuedbyvintageyear2007"],
                     data["creditsissuedbyvintageyear2008"],
                     data["creditsissuedbyvintageyear2009"],
                     data["creditsissuedbyvintageyear2010"],
                     data["creditsissuedbyvintageyear2011"],
                     data["creditsissuedbyvintageyear2012"],
                     data["creditsissuedbyvintageyear2013"],
                     data["creditsissuedbyvintageyear2014"],
                     data["creditsissuedbyvintageyear2015"],
                     data["creditsissuedbyvintageyear2016"],
                     data["creditsissuedbyvintageyear2017"],
                     data["creditsissuedbyvintageyear2018"],
                     data["creditsissuedbyvintageyear2019"],
                     data["creditsissuedbyvintageyear2020"],
                     data["creditsissuedbyvintageyear2021"],
                     data["creditsissuedbyvintageyear2022"],
                     data["creditsissuedbyvintageyear2023"]],
              backgroundColor: [
                'rgba(113,195,97, 0.2)',
              ],
              borderColor: [
                'rgba(113,195,97,1)',
              ],
              borderWidth: 1,
            },{
              label: 'Credits retired by year',
              data: [data["creditsretiredin2006"],
                     data["creditsretiredin2007"],
                     data["creditsretiredin2008"],
                     data["creditsretiredin2009"],
                     data["creditsretiredin2010"],
                     data["creditsretiredin2011"],
                     data["creditsretiredin2012"],
                     data["creditsretiredin2013"],
                     data["creditsretiredin2014"],
                     data["creditsretiredin2015"],
                     data["creditsretiredin2016"],
                     data["creditsretiredin2017"],
                     data["creditsretiredin2018"],
                     data["creditsretiredin2019"],
                     data["creditsretiredin2020"],
                     data["creditsretiredin2021"],
                     data["creditsretiredin2022"],
                     data["creditsretiredin2023"]],
              backgroundColor: [
                'rgba(59,126,161,0.2)',
              ],
              borderColor: [
                'rgba(59,126,161,1)',
              ],
              borderWidth: 1,
            },{
              label: 'Credits remaining by vintage by year',
              data: [data["creditsremainingbyvintageyear2006"],
                     data["creditsremainingbyvintageyear2007"],
                     data["creditsremainingbyvintageyear2008"],
                     data["creditsremainingbyvintageyear2009"],
                     data["creditsremainingbyvintageyear2010"],
                     data["creditsremainingbyvintageyear2011"],
                     data["creditsremainingbyvintageyear2012"],
                     data["creditsremainingbyvintageyear2013"],
                     data["creditsremainingbyvintageyear2014"],
                     data["creditsremainingbyvintageyear2015"],
                     data["creditsremainingbyvintageyear2016"],
                     data["creditsremainingbyvintageyear2017"],
                     data["creditsremainingbyvintageyear2018"],
                     data["creditsremainingbyvintageyear2019"],
                     data["creditsremainingbyvintageyear2020"],
                     data["creditsremainingbyvintageyear2021"],
                     data["creditsremainingbyvintageyear2022"],
                     data["creditsremainingbyvintageyear2023"]],
              backgroundColor: [
                'rgba(170,31,64,0.2)',
              ],
              borderColor: [
                'rgba(170,31,64,1)',
              ],
              borderWidth: 1,
            },{
              label: 'Credits issued by issuance year',
              data: [data["creditsissuedbyissuanceyear2006"],
                     data["creditsissuedbyissuanceyear2007"],
                     data["creditsissuedbyissuanceyear2008"],
                     data["creditsissuedbyissuanceyear2009"],
                     data["creditsissuedbyissuanceyear2010"],
                     data["creditsissuedbyissuanceyear2011"],
                     data["creditsissuedbyissuanceyear2012"],
                     data["creditsissuedbyissuanceyear2013"],
                     data["creditsissuedbyissuanceyear2014"],
                     data["creditsissuedbyissuanceyear2015"],
                     data["creditsissuedbyissuanceyear2016"],
                     data["creditsissuedbyissuanceyear2017"],
                     data["creditsissuedbyissuanceyear2018"],
                     data["creditsissuedbyissuanceyear2019"],
                     data["creditsissuedbyissuanceyear2020"],
                     data["creditsissuedbyissuanceyear2021"],
                     data["creditsissuedbyissuanceyear2022"],
                     data["creditsissuedbyissuanceyear2023"]],
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

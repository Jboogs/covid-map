import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [infectionNumber, setInfectionNumber] = useState([]);
  const [infectionDate, setInfectionDate] = useState([]);

  const chart = () => {
    let infNumber = [];
    let infDate = [];

    Axios.get(
      "https://drive.google.com/file/d/1kjDSPKBtXDcnbLoAU_wsi6zWfxVxnzUo/view?usp=sharing"
    )
      .then((res) => {
        console.log(res);
        for (const dataObj of res.properties) {
          infNumber.push(parseInt(dataObj.infection_number));
          infDate.push(parseInt(dataObj.infection_date));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(infNumber, infDate);

    setChartData({
      labels: ["March", "April", "May", "June", "July", "August", "September"],
      datasets: [
        {
          label: "Confirmed COVID-19 Infections",
          data: [10, 20, 30, 40, 50, 60, 90],
          backgroundColor: ["rgba(150, 202, 184, 0.6)"],
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      {/* <h4 style={{ textAlign: "center" }}>COVID Chart By County</h4> */}
      <div style={{ height: "auto", width: "500px" }}>
        <Line
          data={chartData}
          options={{
            responsive: true,
            // title: { text: "Covid-19 Test Test test", display: true },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;

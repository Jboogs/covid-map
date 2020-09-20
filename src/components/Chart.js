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

    Axios.get("./data/geojson.json")
      .then((res) => {
        console.log(res);
        for (const features of res.properties) {
          infNumber.push(parseInt(features.properties.infectionNumber));
          infDate.push(parseInt(features.properties.infectionDate));
        }
        setChartData({
          labels: infDate,
          datasets: [
            {
              label: "Confirmed COVID-19 Infections",
              data: infNumber,
              backgroundColor: ["rgba(150, 202, 184, 0.6)"],
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(infNumber, infDate);
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

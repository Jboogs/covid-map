import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./App.css";
// import data from "./data/data.json";
import datageo from "./data/datageo.json";
// import * as data from "./data/data.json";
// import * as d3 from "d3";
// import Test from "./components/Test";
// import Map from "./components/Map";

export default function App() {
  // Viewport Settings
  const [viewport, setViewport] = useState({
    latitude: 39.7837759,
    longitude: -95.4460149,
    width: "100vw",
    height: "100vh",
    zoom: 4,
  });

  var geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.032, 38.913],
        },
        properties: {
          title: "Mapbox",
          description: "Washington, D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-122.414, 37.776],
        },
        properties: {
          title: "Mapbox",
          description: "San Francisco, California",
        },
      },
    ],
  };

  return (
    <div>
      <ReactMapGL
        // Map Connect & Logic
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/achatmajian/ckf7k6fnp0hwy19qkq0o6vfdq"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      

        {features.map((infection) => (
          // Map Connect & Logic
          <Marker
            
            latitude={geojson.features.geometry.coordinates[1]}
            longitude={geojson.features.geometry.coordinates[0]}
          >
            <div>INFECTION</div>
          </Marker>
        ))}
></ReactMapGL>
    </div>
  );
}

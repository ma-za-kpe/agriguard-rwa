import * as MUI from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
} from "recharts";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const goToFarm = (event) => {
    event.preventDefault();
    // check if farmer already exists
    navigate("/farm");
  };

  const [imageData, setImageData] = useState(null);
  const [ndviData, setNdviData] = useState([]);

  useEffect(() => {
    // Define the URL of your backend endpoint
    // https://ecedilink.onrender.com

    const backendURL = `https://ecedilink.onrender.com/farmfields/${Cookies.get(
      "farmerId"
    )}`; // Replace with your actual backend URL

    // Make a GET request to fetch the data
    axios
      .get(backendURL)
      .then((response) => {
        // Split the data into lines and parse each line
        const ndviData = response.data[0].ndvi_chart
          .split("\n")
          .slice(1)
          .map((line) => {
            const [date, ndvi] = line.split(",");
            return { date, ndvi: parseFloat(ndvi) };
          });
        setNdviData(ndviData);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  const saveChartImage = () => {
    const chartContainer = document.getElementById("chart-container");
    html2canvas(chartContainer).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      setImageData(imageData);
    });
  };

  return (
    <MUI.Container
      maxWidth="m"
      sx={{
        display: "flex",
        flexDirection: "column", // Ensure items are stacked vertically
        alignItems: "center", // Center items horizontally
        minHeight: "100vh", // Ensure the container takes up the full height of the viewport
        padding: "20px", // Add padding for spacing
      }}
    >
      <MUI.Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
        <MUI.Typography variant="h5" gutterBottom>
          Welcome, Farmer! Get started by adding your farm to our system.
        </MUI.Typography>
        <MUI.Button
          variant="contained"
          color="success"
          onClick={goToFarm}
          href="/add-farm"
        >
          Add Farm
        </MUI.Button>
      </MUI.Paper>
      <div id="chart-container">
        <MUI.Paper elevation={3} style={{ padding: 20, width: "100%" }}>
          <MUI.Typography variant="h6" gutterBottom>
            Carbon NDVI Chart
          </MUI.Typography>
          <LineChart
            width={800}
            height={400}
            data={ndviData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="ndvi" stroke="#ff7300" yAxisId={0} />
          </LineChart>
        </MUI.Paper>
      </div>
      {/* <MUI.Button variant="contained" color="primary" onClick={saveChartImage}>
        Save Chart Image
      </MUI.Button> */}
      {imageData && (
        <div>
          <MUI.Paper
            elevation={3}
            style={{ padding: 20, marginTop: 20, width: "100%" }}
          >
            <MUI.Typography variant="h6" gutterBottom>
              Saved Image
            </MUI.Typography>
            <img
              src={imageData}
              alt="Saved chart"
              style={{ maxWidth: "100%" }}
            />
          </MUI.Paper>
        </div>
      )}
    </MUI.Container>
  );
};

export default Dashboard;

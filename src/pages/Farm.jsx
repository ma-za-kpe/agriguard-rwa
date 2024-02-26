import React, { useState } from 'react';
import axios from 'axios';
import * as MUI from '@mui/material';
import { useNavigate } from "react-router-dom";


const Farm = () => {
  const [formData, setFormData] = useState({
    farmName: "Farm 1",
    farmLocation1: "-0.210134, 5.6325847",
    farmLocation2: "-0.209353, 5.617903",
    farmLocation3: "-0.193386, 5.624380",
    farmLocation4: "-0.205448, 5.640788",
    ownershipType: "family-owned",
    ndvi_chart: "",
    cropTree: "cocoa",
    irrigationSystem: "drip irrigation",
    insurer: "Ghana Agricultural Insurance Pool (GAIP)",
    farmerFields: "65dbe4b08b121f1cc8c95a43"
  });

    // Format farmLocation array
    const farmLocation = [
        { type: "Point", coordinates: formData.farmLocation1.split(',').map(parseFloat) },
        { type: "Point", coordinates: formData.farmLocation2.split(',').map(parseFloat) },
        { type: "Point", coordinates: formData.farmLocation3.split(',').map(parseFloat) },
        { type: "Point", coordinates: formData.farmLocation4.split(',').map(parseFloat) }
    ];

  const requestData = {
    "title": "Example Location",
    "polygon": {
        "type": "Polygon",
        "coordinates": [
            [
                {"lng": farmLocation[0].coordinates[0], "lat": farmLocation[0].coordinates[1]},
                {"lng": farmLocation[1].coordinates[0], "lat": farmLocation[1].coordinates[1]}, 
                {"lng": farmLocation[2].coordinates[0], "lat": farmLocation[2].coordinates[1]},  
                {"lng": farmLocation[3].coordinates[0], "lat": farmLocation[3].coordinates[1]}
            ]
        ]
    }
};

 // Extracting coordinates
 const coordinates = requestData.polygon.coordinates[0].map(coord => [coord.lng, coord.lat]);

 // Creating new request data with only coordinates
 const requestDataWithCoordinates = {
     "coordinates": coordinates,
 };

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

        console.log("farmLocation ", requestData);
        // Making the request with only coordinates
        const response = await fetch(
            "https://ndvi-vwp8.onrender.com/ndvi/",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(requestData),
            }
          );
        
        console.log("response ", response);

        //  // Updated formData object
        //  const updatedFormData = {
        //     farmName: "Farm 1",
        //     farmLocation: farmLocation,
        //     ownershipType: "family-owned",
        //     ndvi_chart: "",
        //     cropTree: "cocoa",
        //     irrigationSystem: "drip irrigation",
        //     insurer: "Ghana Agricultural Insurance Pool (GAIP)",
        //     farmerFields: "65dbe4b08b121f1cc8c95a43"
        //   };
        // console.log(updatedFormData);
  
        // const response = await fetch(
        //   "https://ecedilink.onrender.com/farm-fields",
        //   {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(updatedFormData),
        //   }
        // );
  
        // if (!response.ok) {
        //   throw new Error(`Error: ${response.statusText}`);
        // }
  
        // const data = await response.json();
        // // calculate ndvi
        // // // Extracting coordinates
        // // const coordinates = requestData.polygon.coordinates[0].map(coord => [coord.lng, coord.lat]);

        // // // Creating new request data with only coordinates
        // // const requestDataWithCoordinates = {
        // //     "coordinates": coordinates,
        // //     "start_date": requestData.start_date,
        // //     "end_date": requestData.end_date
        // // };
        // // update the users profile with new ndvi chat data
        // // save id to cookie
        // console.log("Farmer data created successfully:", data);
        // navigate("/dashboard");
      } catch (error) {
        console.error("Error sending form data:", error.code);
      }
  };

  return (
    <MUI.Container maxWidth="sm">
      <MUI.Typography variant="h5" gutterBottom>
        Farm Fields Registration
      </MUI.Typography>
      <MUI.Box component="form" onSubmit={handleSubmit}>
        <MUI.TextField
          label="Farm Name"
          name="farmName"
          value={formData.farmName}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Farm Location 1"
          name="farmLocation1"
          value={formData.farmLocation1}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Farm Location 2"
          name="farmLocation2"
          value={formData.farmLocation2}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Farm Location 3"
          name="farmLocation3"
          value={formData.farmLocation3}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Farm Location 4"
          name="farmLocation4"
          value={formData.farmLocation4}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Ownership Type"
          name="ownershipType"
          value={formData.ownershipType}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="NDVI Chart"
          name="ndvi_chart"
          value={formData.ndvi_chart}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Crop/Tree"
          name="cropTree"
          value={formData.cropTree}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Irrigation System"
          name="irrigationSystem"
          value={formData.irrigationSystem}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Insurer"
          name="insurer"
          value={formData.insurer}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Farmer Fields"
          name="farmerFields"
          value={formData.farmerFields}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.Button type="submit" variant="contained" color="primary">
          Submit
        </MUI.Button>
      </MUI.Box>
    </MUI.Container>
  );
};

export default Farm;

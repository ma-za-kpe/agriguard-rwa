import React, { useState } from 'react';
import axios from 'axios';
import * as MUI from '@mui/material';

const Farm = () => {
  const [formData, setFormData] = useState({
    farmName: "",
    farmLocation1: "",
    farmLocation2: "",
    farmLocation3: "",
    farmLocation4: "",
    ownershipType: "",
    ndvi_chart: "",
    cropTree: "",
    irrigationSystem: "",
    insurer: "",
    farmerFields: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make API call to submit form data
      const response = await axios.post('/api/submit-form', formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
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
        <MUI.Typography variant="h6" gutterBottom>
          Farm Location
        </MUI.Typography>
        <MUI.TextField
          label="Location 1"
          name="farmLocation1"
          value={formData.farmLocation1}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Location 2"
          name="farmLocation2"
          value={formData.farmLocation2}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Location 3"
          name="farmLocation3"
          value={formData.farmLocation3}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <MUI.TextField
          label="Location 4"
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

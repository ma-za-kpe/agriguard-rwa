import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

const OwnershipTypeOptions = ['family-owned', 'corporate-owned', 'community-owned']; // Enum options for ownership type
const IrrigationSystemOptions = ['drip irrigation', 'sprinkler irrigation', 'flood irrigation']; // Enum options for irrigation system
const InsurerOptions = ['Ghana Agricultural Insurance Pool (GAIP)', 'Other Insurer']; // Enum options for insurer

const MySecondForm = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    farmLocation: '',
    ownershipType: '',
    ndvi_chart: '',
    cropTree: '',
    irrigationSystem: '',
    insurer: '',
    farmerFields: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="farmName"
        label="Farm Name"
        value={formData.farmName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="farmLocation"
        label="Farm Location"
        value={formData.farmLocation}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl >
        <InputLabel>Ownership Type</InputLabel>
        <Select
          name="ownershipType"
          value={formData.ownershipType}
          onChange={handleChange}
          required
        >
          {OwnershipTypeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="ndvi_chart"
        label="NDVI Chart"
        value={formData.ndvi_chart}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      {/* Add more TextField and Select components for other fields */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

export default MySecondForm;

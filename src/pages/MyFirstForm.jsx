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

const GenderOptions = ['Male', 'Female', 'Other']; // Gender options

const MyFirstForm = () => {
//   const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    gender: '',
    dob: '',
    ghCard: '',
    password: '',
    contactNumber: '',
    cooperativeName: '',
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
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        name="emailAddress"
        label="Email Address"
        type="email"
        value={formData.emailAddress}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl >
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          {GenderOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="dob"
        label="Date of Birth"
        type="date"
        value={formData.dob}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {/* Add more TextField components for other fields */}
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

export default MyFirstForm;

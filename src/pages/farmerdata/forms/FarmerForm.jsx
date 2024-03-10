/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";

function FarmerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    gender: "",
    contactNumber: "",
    dob: "",
    ghCard: "",
    cooperativeName: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  let url;
  if (process.env.NODE_ENV === "development") {
    // Use localhost URL for development
    url = "http://localhost:3000";
  } else {
    // Use production URL for other environments
    url = "https://ecedilink.onrender.com";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);

      const response = await fetch(`${url}/farmer-fields`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Farmer data created successfully:", data);
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex
          bg="white"
          p={10}
          rounded="2xl"
          shadow="lg"
          flexDir="column"
          gap={5}
          m={5}
          w={800}
          h={500}
        >
          <Flex gap={5}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                type="name"
                id="firstName"
                name="firstName"
                placeholder="Kwashie"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Kabutey"
                type="name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="kabuteykwashie@gmail.com"
                type="email"
                name="emailAddress"
                id="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Select Gender"
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isRequired>
              <FormLabel>Phone number</FormLabel>
              <Input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isRequired>
              <FormLabel>Ghana Card Number</FormLabel>
              <Input
                type="text"
                name="ghCard"
                id="ghCard"
                value={formData.ghCard}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Co-operative Name</FormLabel>
              <Input
                type="text"
                name="cooperativeName"
                id="cooperativeName"
                value={formData.cooperativeName}
                onChange={handleInputChange}
              />
            </FormControl>
          </Flex>
          <Button size="lg" w="fit-content" colorScheme="green" type="submit">
            Continue
          </Button>
        </Flex>
      </form>
    </>
  );
}

export default FarmerForm;

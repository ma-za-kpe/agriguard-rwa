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

function FarmForm() {
  const [formData, setFormData] = useState({
    farmName: "",
    coordinate1: "",
    coordinate2: "",
    coordinate3: "",
    coordinate4: "",
    ownershipType: "",
    cropTree: "",
    irrigationSystem: "",
    insurer: "",
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

      const response = await fetch(`${url}/farm-fields`, {
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
              <FormLabel>Farm name</FormLabel>
              <Input
                type="text"
                id="farmName"
                name="farmName"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Farm Location</FormLabel>
              <Flex gap={5} mb={2}>
                <Input
                  type="number"
                  id="coordinate1"
                  name="coordinate1"
                  placeholder="coordinate1"
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  id="coordinate2"
                  name="coordinate2"
                  placeholder="coordinate2"
                  onChange={handleInputChange}
                />
              </Flex>
              <Flex gap={5}>
                <Input
                  type="number"
                  id="coordinate3"
                  name="coordinate3"
                  placeholder="coordinate3"
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  id="coordinate4"
                  name="coordinate4"
                  placeholder="coordinate4"
                  onChange={handleInputChange}
                />
              </Flex>
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isRequired>
              <FormLabel>Ownership Type</FormLabel>
              <Select
                placeholder="Select Ownership Type"
                id="ownershipType"
                name="ownershipType"
                onChange={handleInputChange}
              >
                <option value="Individual">Individual</option>
                <option value="Family-Owned">Family-Owned</option>
                <option value="Cooperative-Owned">Cooperative-Owned</option>
                <option value="Leased">Leased</option>
                <option value="Rented">Rented</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Crop Tree</FormLabel>
              <Input
                type="text"
                id="cropTree"
                name="cropTree"
                onChange={handleInputChange}
              />
            </FormControl>
          </Flex>
          <Flex gap={5}>
            <FormControl isRequired>
              <FormLabel>Irrigation System</FormLabel>
              <Select
                placeholder="Select Irrigation System"
                name="irrigationSystem"
                onChange={handleInputChange}
              >
                <option value="Drip">Drip Irrigation</option>
                <option value="Sprinkler">Sprinkler Irrigation</option>
                <option value="Flood">Flood Irrigation</option>
                <option value="Rain-fed">Rain-fed Irrigation</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Insurance Provider</FormLabel>
              <Select
                placeholder="Select Insurance Provider"
                name="insurer"
                onChange={handleInputChange}
              >
                <option value="GAIP">
                  Ghana Agricultural Insurance Pool (GAIP)
                </option>
                <option value="SIC">SIC Insurance Company</option>
                <option value="GNIC">Ghana National Insurance Company</option>
                <option value="Star">Star Assurance</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex justifyContent="space-between" mt={10}>
            <Button w="fit-content" size="lg" colorScheme="green" type="submit">
              Submit
            </Button>
            <Button
              w="fit-content"
              size="lg"
              isDisabled
              colorScheme="green"
              type="submit"
            >
              Proceed
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
}

export default FarmForm;

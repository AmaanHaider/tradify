import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import React from "react";

const ModalForm = () => {
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input type="email" />
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormLabel>Experience</FormLabel>
      <Input type="email" />
      <FormLabel>Expected CTC</FormLabel>
      <Input type="email" />
      <Button mt={2} fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
        Upload CV
      </Button>
    </FormControl>
  );
};

export default ModalForm;

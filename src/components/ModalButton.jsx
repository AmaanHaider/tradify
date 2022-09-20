import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useColorModeValue
} from "@chakra-ui/react";
import ModalForm from "./ModalForm.jsx";
const ModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        bg={useColorModeValue("#151f21", "gray.900")}
        color={"white"}
        onClick={onOpen}
      >
        Apply
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody><ModalForm/></ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue"  onClick={onClose} variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalButton;

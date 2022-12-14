import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack, Text ,Heading} from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../config/login";

export default function LoginPage() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div
      style={{
        backgroundColor: "#748DA6",
      }}
    >
      <Box>
        <title>Login</title>
      </Box>

      <Center h="100vh">
    

        <Stack
          align="center"
          bgColor="#9CB4CC"
          p={12}
          rounded="3xl"
          spacing={20}
          boxShadow="lg"
          // w="22%"
          // h="45%"
        >
          <Box
            bgColor="blue.500"
            w="fit-content"
            p={5}
            rounded="3xl"
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Box><Text>Tradify-Job Portal</Text></Box>

          <Button
            boxShadow="md"
            onClick={() => signInWithGoogle("", { prompt: "select_account" })}
            _hover={{ bg: "black", color: "white", cursor: "pointer" }}
          >
            Sign In with Google
          </Button>
        </Stack>
      </Center>
    </div>
  );
}

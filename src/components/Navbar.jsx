import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  
  Stack,
  useColorMode,
  Center,
  Heading
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/login";
import { signOut } from 'firebase/auth';


export default function Navbar() {
  const [user] = useAuthState(auth);

  const { colorMode, toggleColorMode } = useColorMode();
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Box mt={2} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box><Heading>Tradify Services</Heading></Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={user.photoURL} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={user.photoURL} />
                  </Center>
                  <br />
                  <Center>
                    <p>{user.displayName}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem> */}
                  <MenuItem>
                    <Button
                      onClick={handleSignOut}
                      colorScheme="red"
                      w={"full"}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

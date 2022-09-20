import { Box ,CircularProgress} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import JobsPage from "./components/JobsPage";
import { auth } from "./config/login";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Box mt={50} textAlign="center">
        <CircularProgress />
      </Box>
    )
  }
  if (!user) {
    return <LoginPage/>
  }
  
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes>
        <Route path="/" element={<JobsPage />} />
      </Routes>
    </Box>
  );
}

export default App;

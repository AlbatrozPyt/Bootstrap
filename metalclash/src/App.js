import { useEffect } from "react";
import Login from "./pages/Login";
import RoutesPage from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";

function App() {
  useEffect(() => {
    localStorage.setItem("AlbatrozPyt", "dandadan");
  }, []);

  return (
    <UserProvider>
      <RoutesPage />
    </UserProvider>
  );
}

export default App;

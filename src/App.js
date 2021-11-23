import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedin")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
      <CssBaseline />
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

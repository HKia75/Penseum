import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartingPage from "./pages/dashboard/startingPage";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/auth" element={<Auth />} />        
      </Routes>
    </>
  );
}

export default App;

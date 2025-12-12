import "./index.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrackPage from "./pages/TrackPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/difficulty/:trackId" element={<TrackPage/>} />
      <Route path="/history" element={<HistoryPage/>} />
    </Routes>
  );
}

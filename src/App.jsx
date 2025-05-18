import React from "react";
import DeloCloneUI from "./component/Delo";
import CameraPage from "./component/CameraPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DeloCloneUI />} />
      <Route path="/camera" element={<CameraPage />} />
    </Routes>
  );
}

export default App;

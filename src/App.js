import Card from "./components/Card";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PdfSearch from "./components/PdfSearch";
import Modal from "./modal/Modal";
import List from "./modal/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/pdfSearch" element={<PdfSearch />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

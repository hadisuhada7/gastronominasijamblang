import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import VisitorForm from "@/pages/VisitorForm";
import VisitorData from "@/pages/VisitorData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/visitor-form" element={<VisitorForm />} />
          <Route path="/visitor-data" element={<VisitorData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

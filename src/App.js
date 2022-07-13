import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageContent from "./PageContent/PageContent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

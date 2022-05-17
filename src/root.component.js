import ViewUserComponent from "./components/ViewUserComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Root(props) {
  return (
    <Router>
      <Routes>
        <Route path="/view/:id" element={<ViewUserComponent />} />
      </Routes>
    </Router>
  );
}

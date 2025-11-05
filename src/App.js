import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/board/board";

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/note/:id" element={<Board />}/>
      </Routes>
   </Router>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HelloWorld/>} />
  </Routes>
    </div>
  );
}

export default App;

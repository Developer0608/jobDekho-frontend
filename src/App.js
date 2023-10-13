import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <main className="App">
     <Router>
      <Routes> {/* Use `Routes` instead of `Switch` */}
        <Route path="/" element={<Login />} /> {/* Use `element` instead of `component` */}
        <Route path="/register" element={<Register />} /> {/* Use `element` instead of `component` */}
      </Routes>
    </Router>
    </main>
  )
}
export default App;
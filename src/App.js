//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Pnf } from "./pages/pnf";
import { Start } from "./pages/start";
import { Play } from "./pages/play";
import { Result } from "./pages/result";
import {Explain} from "./pages/explain";
import {Company} from "./pages/company";
import {Coupon} from "./pages/coupon";

function App() {

  return (
    <div className="app">
    <BrowserRouter basename='/100program'>
      <ul>
      </ul>
      <Routes>
        <Route path="*"element={<Pnf />}/>
        <Route path="/"element={<Start />}/>
        <Route path="/start"element={<Start />}/>
        <Route path="/play"element={<Play />}/>
        <Route path="/result"element={<Result />}/>
        <Route path="/explain"element={<Explain/>}/>
        <Route path="/company"element={<Company/>}/>
        <Route path="/coupon"element={<Coupon/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

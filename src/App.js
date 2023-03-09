import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Footer from "./Footer";
import IconBand from "./IconBand";
import Main from "./Main";
import NavMenu from "./NavMenu";
import Article from "./Article";

function App() {
  return (
    <div className="App">
      <IconBand />
      <NavMenu />

      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="about" element={<Article />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

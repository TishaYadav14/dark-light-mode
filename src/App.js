import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import About from "./Pages/about";
import Blog from "./Pages/blog";
import { ThemeProvider } from "./theme-context";
import Navbar from "./Components/navbar";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/near-me-app/" element={<HomePage />} />
        <Route path="/near-me-app/about" element={<AboutPage />} />
        <Route path="/near-me-app/search/:query" element={<SearchPage />} />
        <Route path="/near-me-app/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

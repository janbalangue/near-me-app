import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  return (
    <div className="App">
      <APIProvider
        apiKey={process.env.REACT_APP_GM_JS_API_KEY}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </APIProvider>
    </div>
  );
}

export default App;

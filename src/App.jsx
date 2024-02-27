import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer Section/Footer";
import Header from "./components/Header Section/Header";

import MainComponent from "./components/Main component/MainComponent";
import Privacy from "./components/Policy/Privacy";
import Terms from "./components/Policy/Terms";
import Refund from "./components/Policy/Refund";

function App() {
  return (
    <div className='app-div'>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/cancellation&refund' element={<Refund />} />
        </Routes>
      </BrowserRouter>
      {/* <Hero />
      <PreFeature />
      <Features2 />
      <Features />
      <Partner />
      <Resources />
      <CTA />*/}
      <Footer />
    </div>
  );
}

export default App;

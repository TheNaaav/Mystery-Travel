import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import GetStart from './pages/GetStart/GetStart';
import ResultsPage from './pages/ResultsPage/ResultsPage';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow bg-gray-800">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getstart" element={<GetStart />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

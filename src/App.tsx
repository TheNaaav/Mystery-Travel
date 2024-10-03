import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GetStart from './pages/GetStart/GetStart';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <BrowserRouter>
        <Header />
        <main className='flex-grow'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getstart" element={<GetStart />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

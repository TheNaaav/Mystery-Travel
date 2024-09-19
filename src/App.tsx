import Footer from './components/Footer/Footer';
import GifBackground from './components/GifBackground/GifBackground';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="p-4">
      <section>
          <GifBackground/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

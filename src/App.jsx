import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionsOverview from './components/SectionsOverview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SectionsOverview />
      </main>
      <Footer />
    </div>
  );
}

export default App;

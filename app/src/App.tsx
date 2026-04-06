import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Info from './sections/Info';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <div id="info">
          <Info />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

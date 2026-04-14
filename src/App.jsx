import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Analyze from './pages/Analyze'
import AnalysisResults from './pages/AnalysisResults'
import Lenis from 'lenis'
import './App.css'

function App() {
  // for smooth scrolling effect 
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // cubic ease-out
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/analysis-results" element={<AnalysisResults />} />
      </Routes>
    </div>
  )
}

export default App

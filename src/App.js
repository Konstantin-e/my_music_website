import React from 'react';
import './scss/App.scss';
import Navigation from './components/Navigation'
import FrontPage from './components/FrontPage'
import MusicSection from './components/MusicSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <FrontPage />
      <MusicSection />
      <Footer />
      
    </div>
  );
}

export default App;

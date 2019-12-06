import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

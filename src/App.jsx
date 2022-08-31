import React from 'react';

import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
};

export default App;
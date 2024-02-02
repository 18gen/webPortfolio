import { BrowserRouter } from "react-router-dom";

import { About, Hero, Navbar, Tech, Works, Resume, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Resume />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
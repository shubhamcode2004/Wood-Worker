import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import FeedBack from './components/FeedBack';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Contact />
      <FeedBack />
      <Footer />
    </>
  );
}

export default App;

import './App.scss';
import AboutSection from './layouts/AboutSection';
import BlogSection from './layouts/BlogSection';
import Courses from './layouts/Courses';
import EventsSection from './layouts/EventsSection';
import Footer from './layouts/Footer';
import MenuBox from './layouts/MenuBox';
import ServiceSection from './layouts/ServiceSection';
import Statistics from './layouts/Statistics';
import Testimonials from './layouts/Testimonials';

function App() {


  return (
    <div className="App">
      <MenuBox />
      <AboutSection />
      <ServiceSection />
      <Courses />
      <EventsSection />
      <Statistics />
      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

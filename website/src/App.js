import "./App.css";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="flex flex-col gap-40 pb-40">
      <Navbar />
      <Heading />
      <Companies />
      <Features />
      <Testimonials />
    </div>
  );
}

export default App;

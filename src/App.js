import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Next from "./components/NextMeetup";
import About from "./components/About";
import Members from "./components/Member";
import Footer from "./components/Footer";
import Past from "./components/PastMeet";
function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Next />
      <About />
      <Members />
      <Past />
      <Footer />
    </div>
  );
}

export default App;


import './App.css';
import AllTabs from './Components/AllTabs';
import AboutUs from './Components/Dropdown/AboutUs';
import FirstDropdown from './Components/Dropdown/FirstDropdown';


function App() {
  return (
    <div className="App">
      <AllTabs />

      <h2>First Dropdown</h2>
      <FirstDropdown />
      <h2>AboutUs Dropdown</h2>
      <AboutUs />
    </div>
  );
}

export default App;

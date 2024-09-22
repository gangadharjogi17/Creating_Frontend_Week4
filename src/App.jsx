import "./App.css";
import RandomButton from "./components/RandomButton";
import SpecificVerse from "./components/SpecificVerse";

function App() {
  return(
  <>
    <h1>Bible Verse Generator</h1>
	<RandomButton/>
	 <SpecificVerse />
  </>
  );
}

export default App;
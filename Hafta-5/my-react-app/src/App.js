import "./App.css";

import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <MainSection />
      <Footer />

      {/* <div id="data" hidden>
        {
          "todo": [
            {
              "done": true,
              "text": "Taste JavaScript"
            },
            {
              "text": "Code furiously",
              "done": true
            },
            {
              "text": "Promote Mavo",
              "done": false
            },
            {
              "text": "Give talks",
              "done": false
            },
            {
              "text": "Write tutorials",
              "done": true
            },
            {
              "text": "Have a life!",
              "done": false
            }
          ]
        }
      </div> */}
    </div>
  );
}

export default App;

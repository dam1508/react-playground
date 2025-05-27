import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/navigation/Navigation";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navigation />
         </div>
      </BrowserRouter>
   );
}

export default App;

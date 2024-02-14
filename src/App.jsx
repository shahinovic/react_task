import { Footer, MainNavbar } from "./Components";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <MainNavbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

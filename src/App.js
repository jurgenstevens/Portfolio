import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home"
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

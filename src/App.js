import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main"
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header className="header-component" />
      <Sidebar className="sidebar-component" />
      <Main className="main-component" />
    </div>
  );
}

export default App;

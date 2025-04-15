import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <div className="content">To do list will go here</div>
        <Footer />
      </div>
    </>
  );
}

export default App;

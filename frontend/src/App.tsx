import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;

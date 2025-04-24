import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;

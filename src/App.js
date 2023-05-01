import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import Header from "./componnets/Header";
import Footer from "./componnets/footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreens from "./Screens/ProductScreens";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/Product/:id" component={ProductScreens}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

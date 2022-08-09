import "./App.css";
import { Fragment } from "react";
import MainNavigation from "./component/UI/MainNavigation";
import { Redirect, Route } from "react-router-dom";
import Youritem from "./Pages/YourItem";
import AddedItem from "./Pages/AddedItem";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <header>
        <MainNavigation />
      </header>
      <main>
        <Route path="/">
          <Redirect to="/home">
            <Home />
          </Redirect>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/food-gallery">
          <Youritem />
        </Route>
        <Route path="/added-food">
          <AddedItem />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;

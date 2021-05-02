import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// "react-router-dom" is the library that will exposed the necessary react components for client side routing
// BrowserRouter or simply Router must wrap the application to insert the context necessary for the routing mechanism
// Route will mount or unmount components is child page component based on the current url
// Switch will make sure mount only one Route, without it we cloud have rendered multiply routes

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" id="app">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

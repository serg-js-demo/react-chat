import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "routes/Home";
import Trades from "routes/Trades";
import NotImplemented from "routes/NotImplemented";
import Layout from "components/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/trades" component={Trades} />
            <Route path="*" component={NotImplemented} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;

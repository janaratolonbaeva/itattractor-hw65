import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Admin from "./containers/Admin/Admin";
import Page from "./containers/Page/Page";
import Home from "./containers/Home/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/pages/admin"  component={Admin}/>
        <Route path="/pages/:id" exact component={Page}/>
      </Switch>
    </Layout>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            <HomePage />
        </Route>
        <Route path='/menu'>
            <MenuPage />
        </Route>
        <Route path='/contact-us'>
            <ContactUs />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

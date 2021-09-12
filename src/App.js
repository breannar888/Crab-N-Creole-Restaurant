import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import GalleryPage from "./pages/Gallery";
/*removes padding at the edge of the browser to make app fill in the
entire browser - npm install normalize.css
*/
import 'normalize.css';

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
        <Route path='/gallery'>
            <GalleryPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import GalleryPage from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
/*removes padding at the edge of the browser to make app fill in the
entire browser - npm install normalize.css
*/
import "normalize.css";
import OrderPage from "./pages/Order";
import CheckoutPage from "./pages/CheckoutPage";
import CartContextProvider from "./context/CartContext";
import CheckoutConfirmation from "./components/Confirmation";
function App() {
  return (
    <>
      <CartContextProvider>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/menu">
              <MenuPage />
            </Route>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Route path="/order">
              <OrderPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/confirm">
              <CheckoutConfirmation />
            </Route>
          </Switch>
        </Layout>
      </CartContextProvider>
    </>
  );
}

export default App;
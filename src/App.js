import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import Cart from '../src/components/Cart';
import NoMatch from '../src/components/NoMatch';
import NoMatchProduct from '../src/components/NoMatchProduct';
import Order from '../src/components/Order';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from "./contexts/CartContext";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>
    <CartProvider>
      <Router>
        <Navbar />
          <Switch>

            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:catId">
              <ItemListContainer />
            </Route>

            <Route exact path="/detalle/:prodId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart/">
              <Cart />
            </Route>

            <Route exact path="/cart/order">
              <Order />
            </Route>

            <Route path="/*">
              <NoMatch />
            </Route>

            <Route path="/detalle/*">
              <NoMatchProduct />
            </Route>         

          </Switch>
      </Router>
    </CartProvider>
  </>
}

export default App;
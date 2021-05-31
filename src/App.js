import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from '../src/components/ItemDetailContainer';
import NoMatch from '../src/components/NoMatch';
import NoMatchProduct from '../src/components/NoMatchProduct';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
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

          <Route path="/*">
            <NoMatch />
          </Route>

          <Route path="/detalle/*">
            <NoMatchProduct />
          </Route>         

        </Switch>
    </Router>
  </>
}

export default App;
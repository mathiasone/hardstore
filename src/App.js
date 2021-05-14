import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
    <Navbar />
    <ItemListContainer />
  </>
}

export default App;
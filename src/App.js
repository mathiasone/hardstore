import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import MyItemListContainer from './components/ItemListContainer';

function App() {
  return <>
    <Navbar />
    <MyItemListContainer />
  </>;
}

export default App;

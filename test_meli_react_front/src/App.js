import './App.css';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import LayoutView from './components/LayoutView';

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LayoutView />}/>
          <Route path='/item' element={<ProductList />} />
          <Route path='/items/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import LayoutView from './components/LayoutView';
import NotFound from './components/NotFound';

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
          <Route path='/items' element={<ProductList />} />
          <Route path='/items/:id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

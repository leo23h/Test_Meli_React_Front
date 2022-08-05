import './App.css';
import logo from './assets/Logo_ML_2x.png'
import search_logo from './assets/ic_Search_2x.png'
import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='container'>
          <div className='w-10 py-7 pb-0'>
            <img src={logo} alt='logo' className='img-logo'></img>
          </div>
          <div className='w-90 py-7 pb-0'>
            <div className='group'>
              <input type='text' className='inp-search' placeholder='Nunca dejes de Buscar'></input>
              <button type='button' className='btn-search'>
                <img src={search_logo} alt='logo-search' className='img-search'></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact>
             <Route path='item' element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

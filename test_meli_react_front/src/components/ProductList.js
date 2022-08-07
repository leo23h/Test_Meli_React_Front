import React, { useState, useEffect, useCallback} from 'react'
import CarShipping from '../assets/ic_shipping.png'
import Header from './Header'
import {
    useLocation
  } from "react-router-dom";


function ProductList() {
    
    const [listData, setListData] = useState({
        autor: {},
        categories:[],
        items: []
    });
    
    //function for get query params
    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    // capture functions query
    let criterialSearch =  useQuery();
    
    // function for get for a callback the product list
    const getProducts = useCallback(async () => {
        // get product list
        let response = await fetch(`http://localhost:4000/api/items?q=${criterialSearch.get("search")}`);
        // get value data response
        const {data} = await response.json(response);
        // get value data
        setListData(data);
        // every time param search changed, a new product list will be loaded
    }, [criterialSearch.get("search")])

    useEffect(() => {
        // call function for get products
        getProducts();
    }, [getProducts])
    
    // function for capital case
    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    const numberFormat = (value, currencyType) =>
        new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: currencyType
    }).format(value);

    const translateState = (value) => {
       switch (value) {
        case 'new':
            return 'Nuevo';
            break;

        case 'used':
            return 'Usado';
            break;
        
        case 'not_specified':
            return 'No especificado';
            break;
        
       }
    }
       

  return (
    <>
    <Header />
    <div className='body-list'>
       <div className='container-body'>
          <div className='breadcrumb'>{capitalize(criterialSearch.get('search'))}{' >'}</div>
          {listData.items.map((item, index) =>(
            <div className='container-row' key={index}>
                <div className='row'>
                    <div className='m-16'>
                        <a href='#'>
                        <img className='img-item' src={item.picture} alt='img'></img>
                        </a>
                    </div>
                    <div className='item-detail'>
                        <a href='#'>
                            <div className='txt-price'>{numberFormat(item.price.amount, item.price.currency)}
                            { item.free_shipping ? <img className='c-shipp' src={CarShipping} alt='shipping'></img> : null }
                            </div>
                        </a>
                        <a href='#'>
                            <div className='txt-item-name'>{item.title}</div>
                        </a>
                        <div className='txt-item-status'>{translateState(item.condition)}</div>
                    </div>
                    <div className='item-city'>
                        <div className='txt-city'>{item.city}</div>
                    </div>
                </div>
                <div className='line'></div>
            </div>
          ))}
       </div>     
    </div>
    </>
  )
}

export default ProductList
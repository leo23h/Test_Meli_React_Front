import React, { useState, useEffect, useCallback} from 'react'
import CarShipping from '../assets/ic_shipping.png'
import Header from './Header'
import Loading from '../assets/loading.jpeg'
import {
    useLocation
  } from "react-router-dom";


function ProductList() {
    const [loading, setLoading] = useState(true);
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
        setLoading(false);
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
    
    // function for format currency
    const numberFormat = (value, currencyType) =>
        new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: currencyType
    }).format(value);
   
    // function for translate product conditions
    const translateState = (value) => {
        switch (value) {
         case 'new':
            return 'Nuevo';
    
         case 'used':
            return 'Usado';
         
         case 'not_specified':
            return 'No especificado';
    
          default:
            return ''
        }
    }
       
  return (
    <>
    <Header />
    {!loading ? <div className='body-list'>
       <div className='container-body'>
          <div className='breadcrumb'>{capitalize(criterialSearch.get('search'))}{' >'}</div>
          {listData.items.map((item, index) =>(
            <div className='container-row' key={index}>
                <div className='row'>
                    <div className='m-16'>
                        <a href={'/items/'+item.id}>
                          <img className='img-item' src={item.picture} alt='img'></img>
                        </a>
                    </div>
                    <div className='item-detail'>
                        <a href={'/items/'+item.id}>
                            <div className='txt-price'>{numberFormat(item.price.amount, item.price.currency)}
                            { item.free_shipping ? <img className='c-shipp' src={ CarShipping } alt='shipping'></img> : null }
                            </div>
                        </a>
                        <a href={'/items/'+item.id}>
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
    </div> : <div className='bx-loading'>
                <img className='img-loading' src={ Loading } alt='img-loading'></img>
            </div>
      }
    </>
  )
}

export default ProductList
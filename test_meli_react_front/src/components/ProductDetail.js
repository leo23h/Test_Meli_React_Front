import React, { useState, useEffect, useCallback} from 'react'
import {
  useParams
} from "react-router-dom";
// import ImgIphone from '../assets/img-iphone.jpeg'
import Header from './Header'
import Loading from '../assets/loading.jpeg'


function ProductDetail() {
  const [loading, setLoading] = useState(true);
  const [dataDetail, setDataDetail] = useState({
    autor: {},
    categories:[],
    item: {
      price:{
        currency: "ARS",
      }
    }
  });

  let { id } = useParams();

  // function for get for a callback the product detail
  const getProductDetail = useCallback(async () => {
    // get product detail
    let response = await fetch(`http://localhost:4000/api/items/${id}`);
    // get value data response
    const {data} = await response.json(response);
    console.log("data", data)
    // get value data
    setLoading(false)
    setDataDetail(data);
    // every time param search changed, a new product list will be loaded
  }, [id])

  useEffect(() => {
      // call function for get products
      getProductDetail();
  }, [getProductDetail])

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

  // function for capital case
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  const numberFormat = (value, currencyType) =>
   new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currencyType
  }).format(value);

  const buyProduct =()=>{
    alert('Página para compra en construcción!')
  }

  return (
    <>
    <Header />
    {!loading ? <div className='body-list'>
       <div className='container-body'>
          <div className='breadcrumb'>{capitalize(dataDetail.item.title)}{' >'}</div>
           <div className='bkg-w px-32 d-flex'>
              <div className='w-60'>
                <div className='pb-50 pt-32'>
                  <img className='img-detail' src={ dataDetail.item.picture } alt='imagen detalle'></img>
                </div>
                <div className='txt-description'>
                  <div className='txt-ttl-des'>
                    Descripción del producto
                  </div>
                  <div className='txt-det-des'>
                    {dataDetail.item.description}
                  </div>
                </div>
              </div>
              <div className='w-40 pt-32'>
                  <div className='txt-st-prod d-flex'>
                      <span className='pl-5'>{translateState(dataDetail.item.condition) } </span>{' - '}
                      <span className='px-5'>{ dataDetail.item.sold_quantity} vendidos</span>
                  </div>
                  <div className='txt-nm-prod'>
                     <span>{dataDetail.item.title}</span>
                  </div>
                  <div className='txt-price-det'>
                     <span>{numberFormat(dataDetail.item.price.amount, dataDetail.item.price.currency)}</span>
                  </div>
                  <div className='box-button'>
                     <button type='button' className='btn-buy' onClick={buyProduct}>
                      Comprar
                     </button>
                  </div>
              </div>
           </div>
       </div>     
    </div> : <div className='bx-loading'>
          <img className='img-loading' src={ Loading } alt='img-loading'></img>
      </div>}
    </>
  )
}

export default ProductDetail
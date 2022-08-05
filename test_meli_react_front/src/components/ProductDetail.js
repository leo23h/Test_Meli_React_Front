import React from 'react'
import ImgIphone from '../assets/img-iphone.jpeg'

function ProductDetail() {
  return (
    <div className='body-list'>
       <div className='container-body'>
          <div className='breadcrumb'>Miga de pan &gt;</div>
           <div className='bkg-w px-32 d-flex'>
              <div className='w-60'>
                <div className='pb-50'>
                  <img className='img-detail' src={ImgIphone} alt='imagen detalle'></img>
                </div>
                <div className='txt-description'>
                  <div className='txt-ttl-des'>
                    Descripción del producto
                  </div>
                  <div className='txt-det-des'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
              </div>
              <div className='w-40 pt-32'>
                  <div className='txt-st-prod d-flex'>
                      <span> Nuevo </span>
                      <span> - 234 vendidos</span>
                  </div>
                  <div className='txt-nm-prod'>
                     <span>Deco Reverse Sombrero Oxford</span>
                  </div>
                  <div className='txt-price-det'>
                     <span>$ 1.980</span>
                  </div>
                  <div className='box-button'>
                     <button type='button' className='btn-buy'>
                      Comprar
                     </button>
                  </div>
              </div>
           </div>
       </div>     
    </div>
  )
}

export default ProductDetail
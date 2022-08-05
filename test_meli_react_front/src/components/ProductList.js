import React from 'react'
import ImgIphone from '../assets/img-iphone.jpeg'
import CarShipping from '../assets/ic_shipping.png'


function ProductList() {
  return (
    <div className='body-list'>
       <div className='container-body'>
          <div className='breadcrumb'>Miga de pan &gt;</div>
           <div className='container-row'>
                <div className='row'>
                    <div className='m-16'>
                        <img className='img-item' src={ImgIphone} alt='img'></img>
                    </div>
                    <div className='item-detail'>
                        <div className='txt-price'>$ 1.980 
                        <img className='c-shipp' src={CarShipping} alt='shipping'></img>
                        </div>
                        <div className='txt-item-name'>Nuevo Iphone 13 de 128GB en estado nuevo</div>
                        <div className='txt-item-status'>Completo Unico!</div>
                    </div>
                    <div className='item-city'>
                        <div className='txt-city'>Capital Federal</div>
                    </div>
                </div>
                <div className='line'></div>
           </div>
           <div className='container-row'>
                <div className='row'>
                    <div className='m-16'>
                        <img className='img-item' src={ImgIphone} alt='img'></img>
                    </div>
                    <div className='item-detail'>
                        <div className='txt-price'>$ 1.980 
                        <img className='c-shipp' src={CarShipping} alt='shipping'></img>
                        </div>
                        <div className='txt-item-name'>Nuevo Iphone 13 de 128GB en estado nuevo</div>
                        <div className='txt-item-status'>Completo Unico!</div>
                    </div>
                    <div className='item-city'>
                        <div className='txt-city'>Capital Federal</div>
                    </div>
                </div>
                <div className='line'></div>
           </div>
           <div className='container-row'>
                <div className='row'>
                    <div className='m-16'>
                        <img className='img-item' src={ImgIphone} alt='img'></img>
                    </div>
                    <div className='item-detail'>
                        <div className='txt-price'>$ 1.980 
                        <img className='c-shipp' src={CarShipping} alt='shipping'></img>
                        </div>
                        <div className='txt-item-name'>Nuevo Iphone 13 de 128GB en estado nuevo</div>
                        <div className='txt-item-status'>Completo Unico!</div>
                    </div>
                    <div className='item-city'>
                        <div className='txt-city'>Capital Federal</div>
                    </div>
                </div>
                <div className='line'></div>
           </div>
           <div className='container-row'>
                <div className='row'>
                    <div className='m-16'>
                        <img className='img-item' src={ImgIphone} alt='img'></img>
                    </div>
                    <div className='item-detail'>
                        <div className='txt-price'>$ 1.980 
                        <img className='c-shipp' src={CarShipping} alt='shipping'></img>
                        </div>
                        <div className='txt-item-name'>Nuevo Iphone 13 de 128GB en estado nuevo</div>
                        <div className='txt-item-status'>Completo Unico!</div>
                    </div>
                    <div className='item-city'>
                        <div className='txt-city'>Capital Federal</div>
                    </div>
                </div>
           </div>
       </div>     
    </div>
    
  )
}

export default ProductList
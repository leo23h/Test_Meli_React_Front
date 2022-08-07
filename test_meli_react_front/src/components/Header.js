import React from 'react'
import logo from '../assets/Logo_ML_2x.png'
import search_logo from '../assets/ic_Search_2x.png'
import { useRef } from 'react';
import {
    useNavigate
  } from "react-router-dom";

function Header() {
  const inp_search = useRef();
  const navigate = useNavigate();

  const addUrlQueryParam = () => {
     console.log("inp_search.current.value", inp_search.current.value);
     navigate(`/items?search=${inp_search.current.value}`);
  }

  const handleKeyPress = (event) => {
    if(event.keyCode == 13){
        addUrlQueryParam();
    }
  }

  return (
    <div className='header'>
        <div className='container'>
          <div className='w-10 py-7 pb-0'>
            <a href={'/'}>
               <img src={logo} alt='logo' className='img-logo'></img>
            </a>
          </div>
          <div className='w-90 py-7 pb-0'>
            <div className='group'>
              <input type='text' className='inp-search' id='inp-search' name='inp-search' onKeyDown={handleKeyPress} ref={inp_search} placeholder='Nunca dejes de Buscar'></input>
              <button type='button' className='btn-search' onClick={addUrlQueryParam}>
                <img src={search_logo} alt='logo-search' className='img-search'></img>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
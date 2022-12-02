import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <ThreeDots 
        height="100" 
        width="100" 
        radius="9"
        color="#d8d8d8" 
        ariaLabel="three-dots-loading"
        visible={true}
      />
      <div className={s.loadText}>Loading....</div>
    </div>
  )
}

export default Loader;
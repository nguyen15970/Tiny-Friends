import React from 'react';
import './button.scss'

const Button = ({text,w,h}) => {

    return (
           <button className='button'  style={{width: w , height:h}}>{text}</button>
    );
}

export default Button;

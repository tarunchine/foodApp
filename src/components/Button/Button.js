import React from 'react';
import './Button.css';

const Button = (props) => {
    let { classname='', onClickHandler, text } = props;
    return (
        <button className={[classname, "btn"].join(" ")} onClick={onClickHandler}>{text}</button>
    ) 
  
}
export default Button;
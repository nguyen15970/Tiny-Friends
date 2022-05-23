import React from 'react'
import './info.scss'

export default function Info({img,text,key,price}) {
  return (
        <div className="info-item" key={key}>
            <img src={img} alt="" />
            <p>{text}</p>
            <div className="info-price">{price}</div>
        </div>
  )
}

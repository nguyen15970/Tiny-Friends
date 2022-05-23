import React from 'react'

export default function Slider({img, id,active,slider}) {
  return (
    <img className={slider==id ? 'active-slider' :''} src={img} id={id} alt="" />
  )
}

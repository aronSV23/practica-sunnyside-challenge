import React from 'react'

export const Image = ({imgMobil, imgDesktop, order=''}) => {
  return (
    <picture className={order}>
        <source media='(max-width:639px)' srcSet={imgMobil} />
        <source media='(max-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobil} alt="imagen servicio" />
    </picture>
  )
}

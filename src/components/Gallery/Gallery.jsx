import React from 'react'
import coneImageDesktop from '../../assets/desktop/image-gallery-cone.jpg'
import milkBottlesImageDesktop from '../../assets/desktop/image-gallery-milkbottles.jpg'
import orangeImageDesktop from '../../assets/desktop/image-gallery-orange.jpg'
import sugarImageDesktop from '../../assets/desktop/image-gallery-sugarcubes.jpg'
import coneImageMobil from '../../assets/mobile/image-gallery-cone.jpg'
import milkBottlesImageMobil from '../../assets/mobile/image-gallery-milkbottles.jpg'
import orangeImageMobil from '../../assets/mobile/image-gallery-orange.jpg'
import sugarImageMobil from '../../assets/mobile/image-gallery-sugar-cubes.jpg'

import { Image } from '../Image/Image'

export const Gallery = () => {
  return (
    <div className='grid grid-cols-2 sm:flex'>
        <Image 
        imgDesktop={milkBottlesImageDesktop}
        imgMobil={milkBottlesImageMobil}
        />
        <Image 
        imgDesktop={orangeImageDesktop}
        imgMobil={orangeImageMobil}
        />
        <Image 
        imgDesktop={coneImageDesktop}
        imgMobil={coneImageMobil}
        />
        <Image 
        imgDesktop={sugarImageDesktop}
        imgMobil={sugarImageMobil}
        />
    </div>
  )
}

import React from 'react'
import graphicImgDesktop from '../../assets/desktop/image-graphic-design.jpg'
import photoImgDesktop from '../../assets/desktop/image-photography.jpg'
import glassImgDesktop from '../../assets/desktop/image-stand-out.jpg'
import eggImgDesktop from '../../assets/desktop/image-transform.jpg'
import graphicImgMobile from '../../assets/mobile/image-graphic-design.jpg'
import photoImgMobile from '../../assets/mobile/image-photography.jpg'
import glassImgMobile from '../../assets/mobile/image-stand-out.jpg'
import eggImgMobile from '../../assets/mobile/image-transform.jpg'
import { Image } from '../Image/Image'
import { ImageTexts } from '../ImageTexts/ImageTexts'
import { Texts } from '../Texts/Texts'

export const Services = () => {
  return (
    <section className='tablet:grid tablet:grid-cols-2'>
      <Image 
        order='order-2'
        imgMobil={eggImgMobile}
        imgDesktop={eggImgDesktop}
      />
      <Texts 
      order='order-1'
      title='Transform your brand'
      text='We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your clients through compelling visuals that do most of the marketing for you.'
      color='bg-Yellow'
      />
      <Image 
        order='order-3'
        imgMobil={glassImgMobile}
        imgDesktop={glassImgDesktop}
      />
      <Texts 
      order='order-4'
      title='Stand out to the right audience'
      text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
      color='bg-Soft-red'
      />
      <ImageTexts 
      order='order-5'
      imgDesktop={graphicImgDesktop}
      imgMobile={graphicImgMobile}
      title='Graphic design'
      text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
      />
      <ImageTexts 
      order='order-6'
      imgDesktop={photoImgDesktop}
      imgMobile={photoImgMobile}
      title='Photography'
      text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
      />
    </section>
  )
}

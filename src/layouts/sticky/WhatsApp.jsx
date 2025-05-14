import style from './WhatsApp.module.css'
import stickyWhatsApp from '@/assets/sticky/stickyWhatsApp.png'

export const WhatsApp = () => {
  return (
    <>
      <a href="">
        <img 
          className={style.sticky} 
          src={stickyWhatsApp} 
        />
      </a>
    </>
  )
}
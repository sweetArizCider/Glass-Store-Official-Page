import {Button} from '@/layouts/button/Button'
import {FormInput} from '@/layouts/inputs/FormInput'
import glass from '@/assets/glass.png'
import image from '@/assets/loginImage.png'
import style from './Login.module.css'


export const Login = () => {
    return (
      <main className={style.main}>
        <section className={style.leftContainer}>
          <article className={style.header}>
            <figure className={style.imageContainer}>
              <img 
                src={glass} 
                className={style.image}/>
            </figure>
            <h1 
              className={style.title}
            >
              INICIAR SESIÓN
            </h1>
            <p
              className={style.text}
            >
              ¿No tienes una cuenta? 
              <a 
                className={style.link}
                href="/register"
              >Registrarse</a>
            </p>
          </article>
          <article className={style.formContainer}>
            <form className={style.form}>
              <FormInput 
                placeholder="Nombre de Usuario" 
                id="username"
              />
              <FormInput 
                placeholder="Contraseña" 
                id="password"
              />
              <Button 
                text="Continuar" 
                onClick={() => console.log('Iniciar sesión')}
              />
            </form>
          </article>
        </section>
        <section className={style.rightContainer}>
          <img src={image} className={style.rightImage}/>
        </section>
      </main>
    )
}
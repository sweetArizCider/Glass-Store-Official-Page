import { Button } from '@/layouts/button/Button';
import { FormInput } from '@/layouts/inputs/FormInput';
import glass from '@/assets/glass.png';
import image from '@/assets/loginImage.png'; // Replace with the appropriate image
import style from './Register.module.css';

export const Register = () => {
  return (
    <main className={style.main}>
      <section className={style.leftContainer}>
        <img src={image} className={style.leftImage} />
      </section>
      <section className={style.rightContainer}>
        <article className={style.header}>
          <img src={glass} className={style.image} />
          <h1 className={style.title}>CREAR CUENTA</h1>
          <p className={style.text}>
            ¿Ya tienes una cuenta? 
            <a 
              className={style.link} 
              href="/login"
              > Iniciar sesión
            </a>
          </p>
        </article>
        <article className={style.formContainer}>
          <form className={style.form}>
            <FormInput placeholder="Nombre" id="firstName" />
            <FormInput placeholder="Apellido Paterno" id="lastName1" />
            <FormInput placeholder="Apellido Materno" id="lastName2" />
            <FormInput placeholder="Correo" id="email" />
            <FormInput placeholder="Teléfono" id="phone" />
            <FormInput placeholder="Nombre de Usuario" id="username" />
            <FormInput placeholder="Contraseña" id="password" />
            <Button text="Continuar" onClick={() => {}} />
          </form>
        </article>
      </section>
    </main>
  );
};
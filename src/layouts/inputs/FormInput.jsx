import style from './FormInput.module.css'

export const FormInput = ({placeholder, id}) => {
	return (
	<>
    <input 
      type="text"
      id={id}
      className={style.formInput}
      placeholder={placeholder}
    />
	</> 
	)
}
import {Button} from '@/layouts/button/Button'
import {FormInput} from '@/layouts/inputs/FormInput'
export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <FormInput placeholder="Username" id="username" />
                <FormInput placeholder="Password" id="password" />
                <Button text="Continuar" onClick={() => {}} />
            </form>
        </div>
    )
}
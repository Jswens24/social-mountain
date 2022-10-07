import { useState } from 'react'
import axios from 'axios'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(true)

    const submitHandler = e => {
        e.preventDefault()
        const body = {
            username,
            password
        };

        if (register) {
            axios
                .post('https://socialmtn.devmountain.com/register', body)
                .then((res) => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        } else {
            axios
                .post('https://socialmtn.devmountain.com/login', body)
                .then((res) => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err);
                    setUsername('');
                    setPassword('');
                })
        }

        console.log('submitHandler called')
        console.log(username)
        console.log(password)
        console.log(register)
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const buttonClickHandler = () => {
        setRegister(!register);
    };



    return (
        <main>
            <h1>Welcome!</h1>
            <form className='form auth-form' onSubmit={submitHandler}>
                <input
                    onChange={usernameHandler}
                    className='form-input'
                    type='text'
                    placeholder='enter username'
                    value={username}
                />
                <input
                    onChange={passwordHandler}
                    className='form-input'
                    type='password'
                    placeholder='enter password'
                    value={password}
                />
                <button className='form-btn'>
                    {register ? 'Sign Up' : 'Login'}
                </button>
            </form>
            <button onClick={buttonClickHandler} className='form-btn'>Need to {register ? 'Login' : 'Sign Up'}?</button>
        </main>
    )
}

export default Auth
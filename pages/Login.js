import React, { useContext } from 'react'
import User from '../utils/context';
import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import config from '../utils/config'

if (!firebase.apps.length) firebase.initializeApp(config)

const Login = () => {
    const stateUser = useContext(User)
    const [form, setForm] = React.useState(null)

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const firebaseLogin = () => {
        firebase.auth().signInWithEmailAndPassword(`${form.username}@test.com`, `${form.password}`)
    }

    const firebaseLogout = () => {
        firebase.auth().signOut()
    }

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                stateUser.setUser(user)
            } else {
                stateUser.setUser(null)
            }
        })
    }, [])

    if (stateUser.user)
        return (
            <div>
                <button onClick={firebaseLogout}>Logout</button>
            </div>
        )

    else
        return (
            <div>
                <label htmlFor="username" >Username</label>
                <input name="username" onChange={handleChange} />
                <label htmlFor="password" >Password</label>
                <input name="password" onChange={handleChange} />
                <button onClick={firebaseLogin}> Login</button >
            </div>
        )
}

export default Login
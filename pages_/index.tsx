import React, { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import User from '../utils/context';
import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import config from '../utils/config'

if (!firebase.apps.length) firebase.initializeApp(config)

const Index = () => {
    const stateUser = useContext(User)
    const { t } = useTranslation()
    const title: string = t`common:title`

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                stateUser.setUser(user)
            } else {
                stateUser.setUser(null)
            }
        })

    }, [])

    return (
        <div className="index-container">
            <section className="header">
                <h1>webiwrite</h1>
                <h2>สร้างเว็บไซต์ได้ง่ายเพียงปลายนิ้ว</h2>
            </section>
        </div>
    )
}

export default Index
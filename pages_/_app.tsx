import React, { Provider } from 'react'
import App from 'next/app'
import { CookiesProvider } from 'react-cookie';
import NavigationBar from '../component/NavigationBar'
import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import config from '../utils/config'
import UserContext from '../utils/context'
import Footer from '../component/Footer'
import '../styles.css'

const MyApp = ({ Component, pageProps }) => {
    const [user, setUser] = React.useState({})
    if (!firebase.apps.length) firebase.initializeApp(config)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <CookiesProvider>
                <NavigationBar>
                    <Footer>
                        <Component {...pageProps} />
                        <style>{`body{margin:0;padding:0;}`}</style>
                    </Footer>
                </NavigationBar>
            </CookiesProvider>
        </UserContext.Provider>
    )
}

export default MyApp
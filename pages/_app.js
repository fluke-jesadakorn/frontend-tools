import React from 'react'
import App from 'next/app'
import NavigationBar from '../component/NavigationBar'
import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import config from '../utils/config'
import UserContext from '../utils/context'
import Footer from '../component/Footer'

const MyApp = ({ Component, pageProps }) => {
    const [user, setUser] = React.useState({})
    if (!firebase.apps.length) firebase.initializeApp(config)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div className="root-container">
                <NavigationBar />
                <Component {...pageProps} />
                <style jsx global>{`
                        :root {
                            font-size: 16px;
                        }
                        html, body {
                            margin:0;
                            padding:0;
                            min-height: 100vh;
                        }
                        .root-container {
                            display: grid;
                            grid-template-columns: repeat(12, 1fr);
                            grid-template-rows: auto auto auto;
                        }
                    `}</style>
                <Footer />
            </div>
        </UserContext.Provider>
    )
}

export default MyApp
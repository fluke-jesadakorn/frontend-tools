import React from 'react'
import App from 'next/app'
import NavigationBar from '../component/NavigationBar'
import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import 'firebase/storage';
import config from '../utils/config'
import Context from '../utils/context'
import Footer from '../component/Footer'
import 'react-quill/dist/quill.snow.css'

const MyApp = ({ Component, pageProps }) => {
    const [user, setUser] = React.useState({})
    if (!firebase.apps.length) firebase.initializeApp(config)

    return (
        <Context.Provider value={{
            firebase: firebase,
            User: [user, setUser],
        }}>
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
        </Context.Provider >
    )
}

export default MyApp
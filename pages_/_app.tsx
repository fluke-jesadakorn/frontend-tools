import App from 'next/app'
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
    return (
            <CookiesProvider>
                <Component {...pageProps} />
                <style>{`body{margin:0;padding:0;}`}</style>
            </CookiesProvider>
    )
}

export default MyApp
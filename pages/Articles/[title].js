import React from 'react'
import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { useRouter } from 'next/router'

const Article = ({ findTitle }) => {
    // const { titleT } = useRouter().query
    // const findTitle = titleT
    const [news, setNews] = React.useState({
        title: "",
        urlToImage: "",
        description: ""
    })

    const firebaseRef = firebase.firestore().collection('articles')

    const initialNews = async () => {
        const result = await firebaseRef.where('title', '==', findTitle).get()
        if (!result.empty) {
            result.forEach(res => setNews(res.data()))
        }
    }

    React.useEffect(() => {
        initialNews()
    }, [])

    const { title, urlToImage, description } = news

    return (
        <div>
            <p>{title}</p>
            <img src={urlToImage} alt="img" />
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

Article.getInitialProps = async ({ asPath }) => {
    let sub = asPath.split('/')
    sub = sub[sub.length - 1]
    return { findTitle: sub }
}

export default Article

import React from 'react'
import firebase from '../../utils/firebaseUtils'

const Article = ({ news }) => {

    const { title, urlToImage, description } = news

    return (
        <div>
            <p>{title}</p>
            <img src={urlToImage} alt="img" />
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

export async function getStaticPaths() {
    const firebaseRef = firebase.firestore().collection('articles')
    const result = await firebaseRef.get()

    let paths = []

    result.forEach(post => paths.push({ params: { title: post.data().title } }))

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const firebaseRef = firebase.firestore().collection('articles')
    const result = await firebaseRef.where('title', '==', params.title).get()
    let news
    if (!result.empty) {
        result.forEach(res => news = res.data())
    }
    return {
        props: {
            news
        }
    }
}

export default Article

import React from 'react'
import Card from '../component/Card'
import Context from '../utils/context'
import Router from 'next/router'
import firebase from '../utils/firebaseUtils'

const Index = ({ articles }) => {

    const handleGotoRoute = (titleT) => {
        Router.push(`/Articles/${titleT}`)
    }

    return (
        <div className="articles-container">

            <div className="banner">
            </div>
            <div className="hilight">
                <div onClick={() => handleGotoRoute(articles[0].title)}>
                    <img src={articles[0].urlToImage} />
                    <p>{articles[0].title}</p>
                    <p dangerouslySetInnerHTML={{ __html: articles[0].description }}></p>
                </div>
                <div>
                    <img src={articles[0].urlToImage} />
                    <p>{articles[0].title}</p>
                    <p dangerouslySetInnerHTML={{ __html: articles[0].description }}></p>
                </div>
                <div>
                    <img src={articles[0].urlToImage} />
                    <p>{articles[0].title}</p>
                    <p dangerouslySetInnerHTML={{ __html: articles[0].description }}></p>
                </div>
            </div>
            <div className="list-news-card" onClick={() => handleGotoRoute(articles[0].title)}>
                {articles.map((item, key) => {
                    const { title, urlToImage, description } = item
                    return <Card key={key} title={title} img={urlToImage} description={description} />
                })}
            </div>
            <div className="list-string-news">
                {articles.map((item, key) => {
                    const { title, description } = item
                    return (
                        <div key={key} onClick={() => handleGotoRoute(title)}>
                            <p>{title}</p>
                            <p dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
                .articles-container {
                    min-height: 85vh;
                    grid-column: span 12;
                    display: grid;
                    grid-template-rows: auto auto auto;
                    grid-template-columns: repeat(12, 1fr);
                    background: url("background/white-marble-stone.jpg") no-repeat;
                }

                .list-news-card {
                    grid-column: span 6;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: flex-start;
                }

                .hilight {
                    grid-column: span 6;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: flex-start;
                    padding: 0 0 0 20px;
                }

                .hilight > div {
                    text-align: center;
                    background: #FFF;
                    width: 100%;
                    padding: 3rem 1rem 1rem 1rem;
                    margin: 1rem 1rem 1rem 3rem;
                    border-radius: 10px;
                    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .hilight > div > img {
                    width: 40vw;
                }

                .hilight > div > p {
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    hyphens: auto;
                }

                .banner {
                    grid-column: span 12;
                }

                .banner > img {
                    width: 100%;
                }

                .list-string-news {
                    grid-column: span 12;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-content: space-around;
                }

                .list-string-news > div {
                    border:5px solid wheat;
                    width: 25vw;
                    height: 20vh;
                    color: red;
                }
                
                .list-string-news > div > p{
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    hyphens: auto;
                }

            @media only screen and (max-width:500px) {
                .hilight {
                    display: none;
                }

                .list-news-card {
                    grid-column: span 12;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: flex-start;
                }

                .list-string-news > div {
                    border:5px solid wheat;
                    width: 85vw;
                    color: red;
                }
            }
            `}</style>
        </div >
    )
}

Index.getInitialProps = async () => {
    let temp = []
    const ref = await firebase.firestore().collection('articles').orderBy('timeStamp', 'desc').limit(5).get()
    if (!ref.empty) {
        ref.forEach(res => temp.push(res.data()))
    } else {
        console.log('Empty Value')
    }
    return { articles: temp }
}

export default Index
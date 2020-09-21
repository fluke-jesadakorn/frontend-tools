import React from 'react'
import axios from 'axios'
import Card from '../component/Card'

const Index = ({ news }) => {

    const { articles } = news
    return (
        <div className="articles-container">

            <div className="banner">banner</div>
            <div className="hilight">
                <img src="background/white-marble-stone.jpg" />
            </div>
            <div className="list-news-card">
                {articles.map((item, key) => {
                    const { title, urlToImage } = item
                    return <Card key={key} title={title} img={urlToImage} />
                })}
            </div>
            <div className="list-string-news">List news string</div>
            <style jsx>{`
            .articles-container {
                grid-column: span 12;
                display: grid;
                grid-template-rows: 100px auto 800px;
                grid-template-columns: repeat(12, 1fr);
            }

            .hilight > img {
                z-index: -100;
            }

            .hilight, .list-news-card {
                grid-column: span 6;
                display: flex;
                flex-wrap: wrap;
            }

            .banner {
                grid-column: span 12;
                background: #242526;
            }

            .list-string-news {
                grid-column: span 12;
                background: #5a5f64;
            }
            `}</style>
        </div >
    )
}

Index.getInitialProps = async () => {
    const result = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-21&sortBy=publishedAt&apiKey=0dd17e86f06247fca94954754a3c5860`)
    return { news: result.data }
}

export default Index
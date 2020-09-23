import React from 'react'
import axios from 'axios'
import Card from '../component/Card'

const Index = ({ news }) => {

    const { articles } = news

    return (
        <div className="articles-container">

            <div className="banner">
                <img src="https://www.sogoodweb.com/upload/1/RAfsvGmCoG.jpg" alt="banner" />
            </div>
            <div className="hilight">
                <div>
                    <img src={articles[0].urlToImage} />
                    <p>{articles[0].title}</p>
                    <p>{articles[0].description}</p>
                </div>
                <div>
                    <img src={articles[0].urlToImage} />
                    <p>{articles[0].title}</p>
                    <p>{articles[0].description}</p>
                </div>
                <div>
                    <img src={articles[0].urlToImage} />
                    <p>{articles[0].title}</p>
                    <p>{articles[0].description}</p>
                </div>
            </div>
            <div className="list-news-card">
                {articles.map((item, key) => {
                    const { title, urlToImage, description } = item
                    return <Card key={key} title={title} img={urlToImage} description={description} />
                })}
            </div>
            <div className="list-string-news">
                {articles.map((item, key) => {
                    const { title, description } = item
                    return (
                        <div key={key}>
                            <p>{title}</p>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
            .articles-container {
                grid-column: span 12;
                display: grid;
                grid-template-rows: 100px auto 800px;
                grid-template-columns: repeat(12, 1fr);
                background: url("background/white-marble-stone.jpg");
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
                width: 100%;
                background: #FFF;
                padding: 1rem;
                margin: 1rem;
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
                height: 100%;
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
            `}</style>
        </div >
    )
}

Index.getInitialProps = async () => {
    // const result = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-21&sortBy=publishedAt&apiKey=0dd17e86f06247fca94954754a3c5860`)
    // return { news: result.data }
    const articles = [
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
    ]

    return { news: { articles: articles } }
}

export default Index
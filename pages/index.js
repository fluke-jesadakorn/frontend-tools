import React from 'react'
import Card from '../component/Card'
import AdSense from 'react-adsense';
import Context from '../utils/context'
// import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const Index = ({ news }) => {
    const { firebase } = React.useContext(Context)

    const [lists, setLists] = React.useState({})
    const [articles, setArticles] = React.useState([
        {
            title: "",
            urlToImage: "",
            description: "",
        }
    ])

    // const { articles } = news

    const initialValue = async () => {
        let temp = []
        const ref = await firebase.firestore().collection('articles').limit(5).get()
        if (!ref.empty) {
            ref.forEach(res => temp.push(res.data()))
            setArticles(temp)
        } else {
            console.log('Empty Value')
        }
        console.log(temp)
    }

    React.useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
        initialValue()
    }, []);

    return (
        <div className="articles-container">

            <div className="banner">
                <ins
                    className="adsbygoogle adbanner-customize"
                    style={{
                        display: "block"
                    }}
                    data-ad-client="8999924984179147"
                />
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
    // const result = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-21&sortBy=publishedAt&apiKey=0dd17e86f06247fca94954754a3c5860`)
    // return {news: result.data }

    const articles = [
        {
            title: "lasdskadfpsdmcpvlmdsvpms",
            urlToImage: "https://images.unsplash.com/photo-1560420713-b279b33e9abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
            description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
        },
    ]
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1600711269860-ff440f53ed42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1574349992039-de3cd48c4172?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1599179747782-d87446e88d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1592342743932-4ff3f37ccb95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1576069458552-470a05f63d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1580057751243-3224a43ac851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://images.unsplash.com/photo-1519449468716-d66efc34b8fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    //     {
    //         title: "lasdskadfpsdmcpvlmdsvpms",
    //         urlToImage: "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
    //         description: "texxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxttexxt"
    //     },
    // ]

    // return { news: { articles: articles } }

    return { news: { articles: articles } }
}

export default Index
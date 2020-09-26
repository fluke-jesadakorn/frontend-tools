import React from 'react'
import Router from 'next/router'

const Card = ({ title, img }) => {

    const click = () => {
        Router.push({
            pathname: `/Articles`,
            query: { title: title }
        })
    }

    return (
        <div onClick={click}>

            <img src={img} alt="img" />
            <p>{title}</p>

            <style jsx>{`
                div {
                    text-align: center;
                    align-content: center;
                    width: 35%;
                    height: 20vw;
                    padding: 2em 10px 10px 10px;
                    margin: 10px;
                    background: rgba(232, 232, 232, .9);
                    border-radius: 5px;
                    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                img {
                    border-radius:5px;
                    width: 15vw;
                    height: 13vw;
                }

                p {
                    margin: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                @media only screen and (max-width:500px) {
                    div {
                        text-align: center;
                        align-content: center;
                        width: 85vw;
                        height: 50vw;
                        padding: 2em 10px 10px 10px;
                        margin: 10px;
                        background: rgba(232, 232, 232, .9);
                        border-radius: 5px;
                        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    }

                    img {
                        border-radius:5px;
                        width: 70vw;
                        height: 40vw;
                    }
            }
            `}</style>
        </div>
    )
}

export default Card

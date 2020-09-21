import React from 'react'

const Card = ({ title, img }) => {
    return (
        <div>
                <img src={img} alt="img" />
                <p>{title}</p>

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    text-align: center;
                    align-content: center;
                    width: 20vw;
                    height: 25vw;
                    padding: 10px;
                    margin: 5px;
                    text-overflow: ellipsis; 
                    overflow: hidden;
                    background: #e8e8e8;
                    border-radius: 10px;
                    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.9), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
                img {
                    border-radius: 10px;
                    width: 18vw;
                    height: 13vw;
                }
                p {
                    margin: 5px;
                }
            `}</style>
        </div>
    )
}

export default Card

import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container">
            Copyright
            <style jsx>{`
            .footer-container {
                grid-column: span 12;
                background: #000;
                color: #FFF;
                height: 50px;
            }    
            `}</style>
        </div>
    )
}

export default Footer
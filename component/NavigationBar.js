import React from 'react'
import Router from 'next/router'
import User from '../utils/context'

const NavigationBar = () => {
    const stateLogin = React.useContext(User)
    const [hamburgerMenu, setHamburgermenu] = React.useState(false)
    const ref = React.useRef()
    const bodyRef = React.useRef()

    const hamburgerToggle = () => {
        setHamburgermenu(!hamburgerMenu)
        if (window.innerWidth < 500)
            ref.current.style.display !== 'flex'
                ? ref.current.style.display = 'flex'
                : ref.current.style.display = 'none'
    }

    const handleTabClose = () => {
        if (hamburgerMenu) setHamburgermenu(!hamburgerMenu)
        if (window.innerWidth < 500)
            ref.current.style.display = 'none';
    }

    const handleRoute = (url) => {
        Router.push(url)
    }

    React.useEffect(() => {

    }, [])

    return (
        <div className="navbar-container">
            {
                !hamburgerMenu && <div onClick={hamburgerToggle} className="hamburger-container">
                    <img className="hamburger" src="/icon/Hamburger_icon.svg.png" alt="Hambuger Menu" />
                </div>
            }
            {
                <div ref={ref} onClick={hamburgerToggle} className="menu-navbar-container">
                    <span onClick={() => handleRoute('/')}>หน้าแรก</span>
                    <span onClick={() => handleRoute('/Articles/Create')}>เขียนบทความ</span>
                    <span>บริการ</span>
                    <span>เกี่ยวกับเรา</span>
                    <span>ติดต่อ</span>
                </div>
            }
            {/* {true && <button onClick={() => {
                console.log(bodyRef.current)
                // ref.current.style.display = "flex"
                // ref.current.append('test')
                // ref.current.className.toggle(styles.container)
                // ref.current.classList.remove(styles.container)
            }}>Debug</button>} */}
            <div onClick={handleTabClose}></div>
            <style jsx>{`
            .navbar-container {
                grid-column: span 12;
            }

            .menu-navbar-container {
                display: none;
                flex-direction: column;
                justify-content: space-around;
                background-color: #000;
                align-items: center;
                align-content: center;
                color: #FFF;
            }

            div.hamburger-container {
                display: block;
                background: #000;
            }

            div > span {
                cursor: pointer;
            }

            @media screen and (min-width:500px) {
                div.hamburger-container {
                    display: none;
                    background: #000;
                }
                div.menu-navbar-container {
                    grid-column: span 12;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-content: center;
                    align-items: center;
                    background-color: #000;
                    align-items: center;
                    color: #FFF;
                }
                div > span {
                    cursor: pointer;
                }
            }

            img.hamburger {
                width: 40px;
                height: 40px;
                margin: 5px;
                filter: invert(100%);
            }

            .menu-navbar-container>span {
                font-family: 'Itim', cursive;
                margin: 5px;
            }
            `}</style>
        </div>
    )
}

export default NavigationBar
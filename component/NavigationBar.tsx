import React, { HtmlHTMLAttributes } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next/router'
import User from '../utils/context'

const NavigationBar = () => {
    const { t } = useTranslation()
    const title: string = t`common:title`
    const stateLogin = React.useContext(User)
    const [hamburgerMenu, setHamburgermenu] = React.useState(false)
    const ref = React.useRef<HTMLDivElement>()
    const bodyRef = React.useRef<HTMLDivElement>()

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

    const handleRoute = (url: string) => {
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
                    <span onClick={() => handleRoute('/Articles')}>บทความ</span>
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
        </div>
    )
}

export default NavigationBar
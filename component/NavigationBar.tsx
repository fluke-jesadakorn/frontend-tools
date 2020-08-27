import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next/router'
import User from '../utils/context'

const NavigationBar = ({ children }) => {
    const { t } = useTranslation()
    const title: string = t`common:title`
    const stateLogin = React.useContext(User)
    const [hamburgerMenu, setHamburgermenu] = React.useState(false)
    const ref = React.useRef()
    const bodyRef = React.useRef()

    const hamburgerToggle = () => {
        setHamburgermenu(!hamburgerMenu)
        if (window.innerWidth < 500)
            ref.current.style.display !== 'flex' ? ref.current.style.display = 'flex' : ref.current.style.display = 'none'
    }

    const handleTabClose = () => {
        if (hamburgerMenu) setHamburgermenu(!hamburgerMenu)
        if (window.innerWidth < 500)
            ref.current.style.display = 'none';
    }

    React.useEffect(() => {

    }, [])

    return (
        <div>
            {
                !hamburgerMenu && <div onClick={hamburgerToggle} className="hamburger-container">
                    <img className="hamburger" src="/icon/Hamburger_icon.svg.png" alt="Hambuger Menu" />
                </div>
            }
            {
                <div ref={ref} onClick={hamburgerToggle} className="navbar-container">
                    <span>หน้าแรก</span>
                    <span>บทความ</span>
                    <span>บริการ</span>
                    <span>เกี่ยวกับเรา</span>
                    <span>ติดต่อ</span>
                </div>
            }
            {true && <button onClick={() => {
                console.log(bodyRef.current)
                // ref.current.style.display = "flex"
                // ref.current.append('test')
                // ref.current.className.toggle(styles.container)
                // ref.current.classList.remove(styles.container)
            }}>Debug</button>}
            <div onClick={handleTabClose}>{children}</div>
        </div>
    )
}

export default NavigationBar
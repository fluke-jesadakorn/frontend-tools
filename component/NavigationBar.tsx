import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next/router'
import User from '../utils/context'

const NavigationBar = ({ children }) => {
    const { t } = useTranslation()
    const title: string = t`common:title`
    const stateLogin = React.useContext(User)

    const ref = React.useRef()

    React.useEffect(() => {
        // if (!stateLogin.user) Router.push('./Login')
    })

    return (
        <div>
            <div className="hamburger-container">
                <img className="hamburger" src="/icon/Hamburger_icon.svg.png" alt="Hambuger Menu" />
            </div>

            <div ref={ref} className="navbar-container">
                <span>หน้าแรก</span>
                <span>บทความ</span>
                <span>บริการ</span>
                <span>เกี่ยวกับเรา</span>
                <span>ติดต่อ</span>
            </div>
            {false && <button onClick={() => {
                // ref.current.style.display = "flex"
                // ref.current.append('test')
                // ref.current.className.toggle(styles.container)
                // ref.current.classList.remove(styles.container)
            }}>Debug</button>}
            {children}
        </div>
    )
}

export default NavigationBar
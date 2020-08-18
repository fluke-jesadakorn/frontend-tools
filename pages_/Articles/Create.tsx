import React, { useRef, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/styles.module.css';
import { useCookies } from 'react-cookie';
import { Rnd } from 'react-rnd';
import styled from 'styled-components';

const Index = () => {
    const { t } = useTranslation()
    const ref = useRef()
    const title: string = t(`common:title`)
    const [cookie, setCookie] = useCookies(["position"])
    const [drag, setDrag] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    })

    const Box = () => (
        <div
            className={styles.box}
            style={{ margin: 0, height: '100%', paddingBottom: '40px' }}
        >
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="https://avatars1.githubusercontent.com/u/10220449?v=3&s=460" draggable="false" alt="github avatar" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>bokuweb</strong> <small>@bokuweb17</small> <small>31m</small>
                            <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas.
                  Nullam condimentum luctus turpis.
                </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small"><i className="fa fa-reply" /></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fa fa-retweet" /></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fa fa-heart" /></span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );

    useEffect(() => {
        if (cookie.position) setDrag(cookie.position)
    }, [])

    return (
        <div className={styles.container}>
            <button onClick={() => console.log(cookie)}>Ref</button>
            <div className={styles.navBar}><img width={200} height={200} src="/icon/Hamburger_icon.svg.png" alt="Hambuger Menu" /></div>
            <input className={styles.header} />
            <div contentEditable="true" ref={ref} onInput={(e) => console.log(e.currentTarget.innerText)} className={styles.content} ></div>
            <div className={styles.footer}></div>

            <Rnd
                minWidth={100}
                minHeight={90}
                size={{ width: drag.width, height: drag.height }}
                position={{ x: drag.x, y: drag.y }}
                onDragStop={(e, d) => {
                    setDrag({ x: d.x, y: d.y })
                    setCookie('position', { ...drag })
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setDrag({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                    setCookie('position', JSON.stringify({
                        ...drag
                    }))
                }}
            >
                <div className={styles.box}>TEst</div>
            </Rnd>

            <div onClick={() => console.log(JSON.parse(cookie.name))}>Test</div>
        </div>
    )
}

export default Index

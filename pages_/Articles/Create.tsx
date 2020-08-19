import React, { useRef, useState, useEffect, createElement, } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/styles.module.css';
import { useCookies } from 'react-cookie';
import { Rnd } from 'react-rnd';

const Index = () => {
    const { t } = useTranslation()
    const ref = useRef()
    const title: string = t(`common:title`)
    const [cookie, setCookie] = useCookies(["position"])
    const [drag, setDrag] = useState<{
        x?: string | number;
        y?: string | number;
        width?: number | string;
        height?: number | string;
    }>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    })


    const dynamicCreate = () => {
        return (
            <Rnd
                minWidth={100}
                minHeight={90}
                size={{ width: drag.width, height: drag.height }}
                position={{ x: +drag.x, y: +drag.y }}
                onDragStop={(e, d) => {
                    setDrag({ ...drag, x: d.x, y: d.y })
                    setCookie('position', JSON.stringify({ ...drag, x: d.x, y: d.y }))
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setDrag({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                    setCookie('position', JSON.stringify({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    }))
                }}
            >
                <div className={styles.box}>TEst</div>
            </Rnd>
        )
    }

    const Paper = () => {
        return (
            <div className={styles.content} >
                <div
                    contentEditable="true"
                    onInput={(e) => console.log(e.currentTarget.innerText)}
                >
                </div>
                <div className={styles.tools}>
                    <button className={styles.tool}>เว้นวรรค</button>
                    <button className={styles.tool}>เลื่อนซ้าย</button>
                    <button className={styles.tool}>เลื่อนขวา</button>
                    <button className={styles.tool}>ขึ้นบน</button>
                    <button className={styles.tool}>ลงล่าง</button>
                    <button className={styles.tool}>ขึ้นบรรทัดใหม่</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (cookie.position) setDrag(cookie.position)
    }, [])

    return (
        <div className={styles.container}>
            <div ref={ref} className={styles.navBar}>
                <img height="100%" src="/icon/Hamburger_icon.svg.png" alt="Hambuger Menu" />
            </div>
            <h1 className={styles.headerLabel}>หัวข้อ</h1>
            <input className={styles.header} />
            <h2 className={styles.contentLabel}>เนื้อหา</h2>
            <Paper />
            <div className={styles.footer}></div>
            {false && <button onClick={() => console.log(cookie)}>Test</button>}
        </div>
    )
}

export default Index

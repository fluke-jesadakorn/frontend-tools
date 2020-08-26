import React, { useRef, useState, useEffect, createElement, } from 'react';
import useTranslation from 'next-translate/useTranslation';
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
                <div className="box">TEst</div>
            </Rnd>
        )
    }

    const Paper = () => {
        return (
            <div className="content">
                <p
                    ref={ref}
                    className="editable"
                    placeholder="เริ่มเขียนเนื้อเรื่อง"
                    onClick={(e) => e.currentTarget.focus()}
                    contentEditable="true"
                    onInput={(e) => console.log(e.currentTarget.innerText)}
                >
                </p>
                <div className="tools">
                    <button className="tool">เว้นวรรค</button>
                    <button className="tool">เลื่อนซ้าย</button>
                    <button className="tool">เลื่อนขวา</button>
                    <button className="tool">ขึ้นบน</button>
                    <button className="tool">ลงล่าง</button>
                    <button className="tool">ขึ้นบรรทัดใหม่</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (cookie.position) setDrag(cookie.position)
    }, [])

    return (
        <div className="container">
            <h1 className="headerLabel">หัวข้อ</h1>
            <input className="header" />
            <h2 className="contentLabel">เนื้อหา</h2>
            <Paper />
            <div className="footer"></div>
            {/* {true && <button onClick={() => ref.current.appendChild(document.createTextNode('sss'))}>Test</button>} */}
        </div >
    )
}

export default Index

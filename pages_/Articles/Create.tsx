import React, { useRef, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useCookies } from 'react-cookie';
import { Rnd } from 'react-rnd';
import ContentEditable from 'react-contenteditable'

const Index = () => {
    const { t } = useTranslation()
    const titleRef = useRef()
    const contentRef = useRef()
    // const title: string = t(`common:title`)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

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

    const handleEditableTitle = e => {
        setTitle(e.target.value)
    }

    const handleEditableContent = e => {
        setContent(e.target.value)
    }

    useEffect(() => {
        if (cookie.position) setDrag(cookie.position)
    }, [])

    return (
        <div className="create-container">
            <ContentEditable
                placeholder="ชื่อเรื่อง"
                className="create-header"
                innerRef={titleRef}
                disabled={false}
                html={title} // innerHTML of the editable div
                onChange={handleEditableTitle} // handle innerHTML change
                tagName='h1'
                onFocus={e => e.currentTarget.focus()}
            />

            <div className="create-tools">
                <button className="create-tool">เว้นวรรค</button>
                <button className="create-tool">เลื่อนซ้าย</button>
                <button className="create-tool">เลื่อนขวา</button>
                <button className="create-tool">ขึ้นบน</button>
                <button className="create-tool">ลงล่าง</button>
                <button className="create-tool">ขึ้นบรรทัดใหม่</button>
            </div>

            <ContentEditable
                placeholder="เริ่มเขียนบทความ"
                className="create-editable"
                title="content"
                innerRef={contentRef}
                html={content} // innerHTML of the editable div
                onChange={handleEditableContent} // handle innerHTML change
                tagName='p'
                onFocus={e => e.currentTarget.focus()}
            />

            {/* {true && <button onClick={() => ref.current.appendChild(document.createTextNode('sss'))}>Test</button>} */}
            {true && <button onClick={() => {
                // <img src="https://images.all-free-download.com/images/graphiclarge/blue_abstract_background_310971.jpg"/>
                setContent(`${content}<img src="https://images.all-free-download.com/images/graphiclarge/blue_abstract_background_310971.jpg"/>`)
            }}>Test</button>}
            {/* {true && <button onClick={() => console.log(content)}>Test</button>} */}
            {/* {true && <button onClick={() => { }}>Focus</button>} */}
        </div>
    )
}

export default Index

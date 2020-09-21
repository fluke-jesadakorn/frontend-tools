import React, { useRef, useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import ContentEditable from 'react-contenteditable'

const Index = () => {
    const titleRef = useRef()
    const contentRef = useRef(null)
    const [showtools, setShowtools] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [drag, setDrag] = useState({
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
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setDrag({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
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

    const Tools = () => {
        return (
            <div className="add-img">
                <div className="img">

                </div>
            </div>
        )
    }

    const handleTools = () => {
        // console.log(evt.type, window.getSelection().getRangeAt(0).startOffset);
    }

    useEffect(() => {
        // contentRef.current.addEventListener('keydown', _e => console.log(window.getSelection().getRangeAt(0).startOffset))
        // contentRef.current.addEventListener('keydown', (e) => { if (e.which == 9) e.preventDefault(); console.log(e) })
        // contentRef.current.addEventListener('keyup', e => {
        //     console.log('Caret at: ', e)
        // })
    }, [])

    return (
        <div className="create-container">
            <ContentEditable
                id="title"
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
                <button className="create-tool" onClick={() => {
                    const el = document.getElementById('content').childNodes
                    console.log(contentRef.current.childNodes.length)
                    // var range = document.createRange()
                    // var sel = window.getSelection()

                    // range.setStart(el.childNodes[0], 6)
                    // range.collapse(true)

                    // sel.removeAllRanges()
                    // sel.addRange(range)
                }}>เลื่อนขวา</button>
                <button className="create-tool">ขึ้นบน</button>
                <button className="create-tool">ลงล่าง</button>
                <button className="create-tool">ขึ้นบรรทัดใหม่</button>
            </div>

            {/* <textarea id="content" ><img src="https://images.all-free-download.com/images/graphiclarge/blue_abstract_background_310971.jpg" /></textarea> */}

            <ContentEditable
                id="content"
                placeholder="เริ่มเขียนบทความ"
                className="create-editable"
                title="content"
                // innerRef={contentRef}
                innerRef={contentRef}
                html={content}
                onChange={(e) => {
                    handleEditableContent(e)
                }}
                tagName='p'
                onFocus={e => {
                    e.currentTarget.focus()
                    setShowtools(true)
                }}
                onBlur={e => {
                    setShowtools(false)
                }}
            />

            {/* {true && <button onClick={() => ref.current.appendChild(document.createTextNode('sss'))}>Test</button>} */}
            {true && <button onClick={() => {
                // <img src="https://images.all-free-download.com/images/graphiclarge/blue_abstract_background_310971.jpg"/>
                setContent(`${content}<img src="https://images.all-free-download.com/images/graphiclarge/blue_abstract_background_310971.jpg"/>`)
            }}>Test</button>}
            {true && <button onClick={handleTools}>Ref</button>}
            {true && <button onClick={() => {
                console.log(contentRef.current.setSelectionRange(0, 0))
                contentRef.current.focus()
            }}>cursor</button>}
            {/* {true && <button onClick={() => { }}>Focus</button>} */}
            <style jsx>{`
            .create-container {
                grid-column: span 12;
                display: grid;
                border-radius: 5px;
                grid-template-columns: repeat(12, 1fr);
                grid-template-rows: auto auto auto;
                background-color: hsl(0, 0%, 90%);
                color: black;
                padding: 10px;
            }

            .create-header {
                grid-column: span 12;
                grid-row: span 1;
                height: 40px;
                align-self: center;
                border-radius: 5px;
                font-size: large;
                background: #FFF;
            }

            .create-content {
                grid-column: 1/13;
                background-color: hsla(0, 0%, 97%, 1);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 50px;
            }

            .create-editable {
                grid-column: span 12;
                display: flex;
                min-height: 70vh;
                flex-direction: column;
                background-color: hsla(0, 0%, 97%, 1);
                white-space: pre;
                background-origin:content-box;
            }

            .create-header:empty:not(:focus):before {
                font-size: 30px;
                content: attr(placeholder);
            }

            .create-editable:empty:not(:focus):before {
                font-size: 20px;
                content: attr(placeholder);
            }

            .add-img {
                display: block;
                width: 50px;
                height: 50px;
                z-index: 50;
                background: yellow;
            }

            .create-tools {
                grid-column: span 12;
                grid-row: 3/4;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-end;
            }

            .create-tool {
                background-color: hsla(0, 0%, 90%, 1);
                border-color: black;
                border-style: double;
                width: 100%;
                height: 50px;
            }
            `}</style>
        </div>
    )
}

export default Index

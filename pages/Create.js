import React from 'react'
import dynamic from 'next/dynamic'
import Context from '../utils/context'
// import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import 'firebase/storage';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */


const Create = () => {
    const { firebase } = React.useContext(Context)

    const [state, setState] = React.useState()
    const quill = React.createRef()

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image', 'video'],
            ['clean'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    }

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
    ]

    const handleImage = (e) => {
        const temp = e.split('"')
        const temp2 = temp.filter(item => item.startsWith('data:image/'))
        setState(temp2)
    }

    const handleClick = e => {
        console.log(e)
    }

    const handleFile = e => {
        console.log(e.target.files[0])
    }

    React.useEffect(() => {

    }, [])

    return (
        <div>
            <buton onClick={() => {
                firebase.auth().signInWithEmailAndPassword('test@test.com', "123456")
                const task = firebase.storage().ref('img/img.txt').putString('data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB')
                task.on('state_changed', (snapshot) => { console.log(snapshot.ref.getDownloadURL().then(res => console.log(res))) })
            }}>FileTest</buton>
            <QuillNoSSRWrapper ref={quill} modules={modules} formats={formats} theme="snow" onChange={handleImage} onClick={handleClick} />
            <button onClick={() => console.log(state)}>State</button>
            <style jsx>{`
            div {
                grid-column: span 12;
                min-height: 85vh;
            }    
        `}</style>
        </div >
    )
}

export default Create
import React from 'react'
import dynamic from 'next/dynamic'
import Context from '../utils/context'
// import * as firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

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
    const [post, setPost] = React.useState()

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

    const handleChange = async (e) => {
        setPost(e)
    }

    const postToFirestore = async () => {
        let keepImgUrl = []
        let tempPost = post
        const temp = post.split('"')
        const temp2 = temp.filter(item => item.startsWith('data:image/'))
        for (let i in temp2) {
            keepImgUrl.push(await uploadToStorage(temp2[i]))
        }
        for (let i in temp2) {
            tempPost = tempPost.replace(temp2[i], keepImgUrl[i])
        }
        setPost(tempPost)
        postArticle()
    }

    const uploadToStorage = async (data) => {
        const ref = firebase.storage().ref(`images/${Date.now()}.png`)
        const uploadTask = await ref.putString(data, 'data_url')
        const result = await uploadTask.ref.getDownloadURL()
        return result
    }

    const handleClick = e => {
        console.log(e)
    }

    const postArticle = () => {
        firebase.firestore().collection('articles').add({ article: post })
    }

    React.useEffect(() => {

    }, [])

    return (
        <div>

            <QuillNoSSRWrapper
                modules={modules}
                formats={formats}
                theme="snow"
                onChange={handleChange}
                onClick={handleClick}
            />

            <buton onClick={postToFirestore}>บันทึกบทความ</buton>

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
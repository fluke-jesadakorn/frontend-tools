import React from 'react'
import dynamic from 'next/dynamic'
import Context from '../utils/context'
// import * as firebase from 'firebase/app'
import Router from 'next/router'
import 'firebase/firebase-database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// import QuillNoSSRWrapper from 'react-quill'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
*/

const Create = ({ client }) => {
    const { firebase } = React.useContext(Context)
    const [post, setPost] = React.useState("")
    const [header, setHeader] = React.useState('')
    const [cover, setCover] = React.useState(null)
    const [isClient, setIsClient] = React.useState(client)

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
        postArticle(tempPost)
    }

    const uploadToStorage = async (data) => {
        const type = data.split(';')[0].split('data:image/')[1]
        const ref = firebase.storage().ref(`images/${Date.now()}.${type}`)
        const uploadTask = await ref.putString(data, 'data_url')
        const result = await uploadTask.ref.getDownloadURL()
        console.log(result)
        return result
    }

    const handleClick = e => {
        console.log(e)
    }

    const postArticle = async (article) => {
        const imgType = cover.type.split('/')[1]
        const ref = firebase.storage().ref(`images/cover/${Date.now()}.${imgType}`)
        const task = await ref.put(cover, { contentType: imgType })
        const coverUrl = await task.ref.getDownloadURL()
        await firebase
            .firestore()
            .collection('articles')
            .add({ title: header, urlToImage: coverUrl, description: article, timeStamp: Date.now() })
        alert('เพิ่มบทความของท่านแล้ว')
        Router.push({ pathname: 'Articles', query: { title: header } })
    }

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="create-container">
            <div>
                <label required htmlFor="header-form" placeholder="หัวข้อ">หัวข้อ</label>
            </div>
            <div>
                <input id="header-form" onChange={(e) => setHeader(e.target.value)} />
            </div>
            <div>
                <label required htmlFor="header-form">เลือกรูปภาพหน้าปก</label>
            </div>
            <div>
                <input name="hello" type="file" accept="image/*" onChange={(e) => setCover(e.target.files[0])} />
            </div>
            <div>
                {isClient ? <QuillNoSSRWrapper
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    onChange={handleChange}
                    onClick={handleClick}
                /> : ""}
            </div>

            <button onClick={postToFirestore}>บันทึกบทความ</button>
            <button onClick={() => console.log(post)}>Log Post</button>

            <style jsx>{`
            
                .create-container {
                    grid-column: span 12;
                    padding:1rem 5rem 1rem 5rem;
                } 

                div > div:nth-child(2) > input {
                    width: 100%;
                    height: 3rem;
                    font-size: 2rem;
                }

                div > div:nth-child(4) > input {
                }

                div > div:nth-child(5) {
                    min-height: 85vh;
                }

                div > div:last-child {

                }

                @media only screen and (max-width:500px){
                    .create-container {
                        grid-column: span 12;
                        padding:1rem 1rem 1rem 1rem;
                    } 
                }
        `}</style>
        </div >
    )
}

Create.getInitialProps = () => {
    return { client: false }
}

export default Create
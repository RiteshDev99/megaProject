import React, {useEffect, useState} from 'react'
import dataBaseService from "../appwrite/config.js";
import {Container, PostCard} from '../components/index.js'
import {useSelector} from "react-redux";

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        dataBaseService.getPost().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    const authStatus = useSelector((state)=> state.auth.status)


    if (posts.length === 0) {


        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">

                            {authStatus ? (
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                   No Post Available
                                </h1>
                             ):(
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Login to read posts
                                </h1>
                            )
                            }
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

import React, {useEffect, useState} from "react";
import dataBaseService from "../appwrite/config.js";
import {Container, PostCard} from "../components/index.js";


const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        dataBaseService.getPots([]).then((posts)=>{
            if (posts){
                setPosts(posts.documents)
            }
        })
    },[])



    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>{
                        <div key={post.$id} className='py-2 w-1'>
                            <PostCard post={post} />
                        </div>
                    })}
                </div>
            </Container>

        </div>
    )
}

export default  AllPosts

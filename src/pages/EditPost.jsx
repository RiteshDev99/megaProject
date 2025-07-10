import React, {useEffect, useState} from "react";
import {Container, PostCard} from '../components/index.js'
import dataBaseService from "../appwrite/config.js";
import {useNavigate, useParams} from "react-router-dom";


const EditPost = () => {

    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug){
            dataBaseService.getPost(slug)
                .then((post)=> {
                    if(post){
                        setPost(post);
                    }
                })
        }else {
            navigate("/")
        }

    },[slug, navigate])

    return post ? (
        <div className='py-8'>
        <Container>
            <PostCard  post={post} />
        </Container>
        </div>
    ) : null
}

export default EditPost

import React from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Container, Logo, LogoutBtn} from "../index.js";
import {logger} from "../../utils/logger.js";


function Header () {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    logger.info("Header authStatus:", authStatus);




    const navItems = [
        {
           name: "Home",
            slug:'/',
            active: true,
        },
        {
            name: "Login",
            slug:'/login',
            active: !authStatus,

        },
        {
            name:"Signup",
            slug:'/signup',
            active: !authStatus,
        },
        {
            name : "All Posts",
            slug:'/all-posts',
            active: authStatus,

        },
        {
            name : "Add Post",
            slug:'/add-post',
            active: authStatus,

        },
    ]


    return (

        <header className="py-3 shadow bg-gray-500 w-[85%] my-3 rounded-2xl">
            <Container>
                <nav className="flex items-center ">
                    <div className="mr-4">
                        <Link to="/" >
                            <Logo width={"70px"}  />
                        </Link>
                    </div>
                    <ul  className="ml-auto flex items-center">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 duration-200 hover:bg-[#eb7724] hover:text-amber-50 rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className='px-6 py-2 hover:bg-[#eb7724] hover:text-amber-50 rounded-full'>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>

        </header>
    )
}

export default Header


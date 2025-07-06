import {useDispatch} from "react-redux";
import {logout} from '../../store/feature/auth/authSlice.js'
import authservice from "../../appwrite/authServices.js";

const LogoutBtn = () => {
    const dispatch = useDispatch();


    const logoutHandler = () => {
        authservice.logout()
            .then(() =>{
                dispatch(logout())
            })
            .catch((error)=>{
                console.log("Appwrite error", error)
            })
    }
    
    return (
        <button onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn

import {useDispatch} from "react-redux";
import {logout} from '../../store/feature/auth/authSlice.js'
import authService from "../../appwrite/authServices.js";

const LogoutBtn = () => {
    const dispatch = useDispatch();


    const logoutHandler = () => {
        authService.logout()
            .then(() => {
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

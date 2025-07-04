import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authServices from "./appwrite/authServices.js";
import {login, logout} from './store/feature/auth/authSlice.js'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser()
        .then((userData)=>{
          if (userData){
            dispatch(login({userData}))
          }else{
            dispatch(logout())
          }
        })
        .catch((error)=>{
            console.log("user not found", error)
            setLoading(false)
        })
        .finally(()=>setLoading(false))
  },[])


  return !loading ?(
              <div className='min-h-screen bg-gray-700 w-[100%] flex flex-wrap content-between justify-center'>
                  <Header/>
                  <min className="mincontainer bg-green-700 w-[100%]">
                  </min>
                  <Footer/>
              </div>
          ):null

}

export default App

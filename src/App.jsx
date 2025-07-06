import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/authServices.js";
import {login, logout} from './store/feature/auth/authSlice.js'
import {Header, Footer} from './components/index.js'


function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
        .then((userData)=>{
          if (userData){
            dispatch(login({userData}))
          }else{
            dispatch(logout())
          }
        })
        .catch((error)=>{
            console.log("user not found", error)
        })
        .finally(()=>setLoading(false))
  },[])


  return !loading ?(
      <div className='flex flex-col flex-wrap justify-between min-h-screen w-full items-center  bg-gray-700'>
                  <Header/>
                  <min>
                  </min>
                  <Footer/>
              </div>
          ):null

}

export default App

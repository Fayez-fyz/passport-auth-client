import { useState,createContext,useEffect } from "react";
import axios from 'axios'
import { useRouter } from "next/router";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        name: null,
        role: null,
        email: null,
    });

    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.withCredentials = true;
    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get("http://localhost:5000/api/user", { withCredentials: true });
            setState(res.data);
            // console.log(state)
        };
        getUser();
    }, []);


    
    return(
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    )
}
 
export {UserContext,UserProvider}






// const UserProvider = ({children}) =>{
//    const [state,setState ] = useState({
//        user:{},
//        token:"",
//    })
//    useEffect(() => {
//       setState(JSON.parse(window.localStorage.getItem('auth')));
//    }, [])

//    const router = useRouter()
//    const token = state && state.token ? state.token : '';
//    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
//    axios.defaults.headers.common['Authorization']= `Bearer ${token}`;

//    axios.interceptors.response.use(
//        function (response) {
//            return response
//        },
//        function(error){
//             let res = error.response
//             if(res.status ===401 && res.config && !res.config.__isRetryRequest){
//                 setState(null)
//                 window.localStorage.removeItem('auth')
//                 router.push('/login')
//             }
//        }
//    )


//    return (
//        <UserContext.Provider value={[state,setState]}>
//            {children}
//        </UserContext.Provider>
//    )
// }

// export {UserContext,UserProvider}
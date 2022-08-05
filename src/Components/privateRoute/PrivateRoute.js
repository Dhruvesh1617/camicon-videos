import { Navigate, Route } from "react-router-dom";
import { useData } from "../../Context/DataContext"


export const PrivateRoute = ({path,...props}) =>{
    const {isAuthenticated} = useData()
    console.log(path)
    return isAuthenticated?
        <Route  path={path} {...props} /> : <Navigate state={{from:path}} replace to="/login"/>
}
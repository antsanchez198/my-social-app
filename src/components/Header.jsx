import { useNavigate } from "react-router-dom"
import {auth} from "../firebase"

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-slate-700 w-full h-15">
            <div className="max-w-[90%] mx-auto flex justify-between items-center py-3">
                <div className="">
                    <img></img>
                </div>
                <ul className="flex space-x-5 text-white">
                    <li className="cursor-pointer" onClick={() => navigate("/")}>Feed</li>
                    <li className="cursor-pointer" onClick={() => navigate("/post")}>Post</li>
                    {auth.currentUser ? 
                    <li className="cursor-pointer" onClick={() => navigate("/profile")}>Profile</li> :
                    <li className="cursor-pointer" onClick={() => navigate("/sign-in")}>Sign In</li>
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default Header
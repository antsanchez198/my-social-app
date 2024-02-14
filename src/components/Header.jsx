import { useNavigate } from "react-router-dom"

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
                    <li className="cursor-pointer" onClick={() => navigate("/")}>Account</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
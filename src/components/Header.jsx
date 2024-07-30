import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { IoMdAddCircleOutline } from "react-icons/io";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
            <div className="max-w-[90%] mx-auto flex justify-between items-center py-3">
                <div className="">
                    <img></img>
                </div>
                <ul className="flex space-x-5 text-slate-600">
                    <li className="cursor-pointer" onClick={() => navigate("/")}>Feed</li>
                    <li className="cursor-pointer" onClick={() => navigate("/post")}>Post</li>
                    {auth.currentUser ?
                        <div className='flex gap-2 items-center'>
                            <IoMdAddCircleOutline
                                className='text-2xl cursor-pointer tranform hover:scale-125 transition duration-300 hover:text-red-600'
                                onClick={() => setIsOpen(true)}
                            />
                            <img
                                // src={session.user.image}
                                // alt={session.user.name}
                                className='h-10 w-10 rounded-full cursor-pointer'
                                onClick={signOut}
                            />
                        </div> :
                        <li className="cursor-pointer" onClick={() => navigate("/sign-in")}>Sign In</li>
                    }

                </ul>
            </div>
        </div>
    )
}

export default Header
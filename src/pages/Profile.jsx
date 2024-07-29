import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast
            navigate("/");

        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    return (
        <div>
            <div>Profile</div>
            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md
          hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
                onClick={logout}>Log Out</button>

        </div>

    )
    // Testing commit
}

export default Profile
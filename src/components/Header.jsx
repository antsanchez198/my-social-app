import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import Modal from 'react-modal';
import { useEffect, useRef, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiCamera } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { signOut } from "firebase/auth";


const Header = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);

    async function logout(e) {
        e.preventDefault();
        signOut(auth).then(() => {
            // Sign-out successful.
            // toast
            navigate("/sign-in");

        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    const filePickerRef = useRef(null);

    function addImageToPost(e) {
        const file = e.target.files[0];
        if (file) {
          setSelectedFile(file);
          setImageFileUrl(URL.createObjectURL(file));
        }
      }

    return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
            <div className="max-w-[90%] mx-auto flex justify-between items-center gap-10ß py-3">
                <div className="">
                    <img></img>
                </div>
                <ul className="flex space-x-5 text-slate-600 font-bold">
                    <li className="cursor-pointer" onClick={() => navigate("/")}>Feed</li>
                    {auth.currentUser ?
                        <div className='flex gap-2'>
                            <div
                                className="cursor-pointer"
                                onClick={logout}
                            >Sign Out</div>
                            <div>
                                <IoMdAddCircleOutline
                                    className='text-2xl cursor-pointer tranform hover:scale-125 transition duration-300 hover:text-red-600'
                                    onClick={() => setIsOpen(true)}
                                />
                                <img
                                    // src={session.user.image}
                                    // alt={session.user.name}
                                    className='h-10 w-10 rounded-full cursor-pointer'
                                // onClick={signOut}
                                />
                            </div>
                        </div> :
                        <li className="cursor-pointer" onClick={() => navigate("/sign-in")}>Sign In</li>
                    }

                </ul>
            </div>
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    className='max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md'
                    onRequestClose={() => setIsOpen(false)}
                    ariaHideApp={false}
                >
                    <div className='flex flex-col justify-center items-center h-[100%]'>
                        {selectedFile ? (
                            <img
                                onClick={() => setSelectedFile(null)}
                                src={imageFileUrl}
                                alt='selected file'
                                className={`w-full max-h-[250px] object-over cursor-pointer ${imageFileUploading ? 'animate-pulse' : ''
                                    }`}
                            />
                        ) : (
                            <HiCamera
                                onClick={() => filePickerRef.current.click()}
                                className='text-5xl text-gray-400 cursor-pointer'
                            />
                        )}
                        <input
                            hidden
                            ref={filePickerRef}
                            type='file'
                            accept='image/*'
                            onChange={addImageToPost}
                        />
                    </div>
                    <input
                        type='text'
                        maxLength='150'
                        placeholder='Please enter you caption...'
                        className='m-4 border-none text-center w-full focus:ring-0 outline-none'
                        // onChange={(e) => setCaption(e.target.value)}
                    />
                    <button
                        // onClick={handleSubmit}
                        disabled={
                            !selectedFile ||
                            caption.trim() === '' ||
                            postUploading ||
                            imageFileUploading
                        }
                        className='w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'
                    >
                        Upload Post
                    </button>
                    <AiOutlineClose
                        className='cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300'
                        onClick={() => setIsOpen(false)}
                    />
                </Modal>
            )}
        </div>
    )
}

export default Header
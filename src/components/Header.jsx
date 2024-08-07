import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import Modal from 'react-modal';
import { useEffect, useRef, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiCamera } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { signOut } from "firebase/auth";
import WordPost from "./WordPost";
import ImgPost from "./ImgPost";
import Images from "./Images";
import { getDownloadURL, getStorage, ref, uploadBytesResumable, } from 'firebase/storage';
import { app, db } from "../firebase";
import { ToastContainer } from "react-toastify";

const Header = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploading, setImageFileUploading] = useState(false);
    const [postUploading, setPostUploading] = useState(false);
    const [postType, setPostType] = useState("worded");

    const [formData, setFormData] = useState({
        type: postType,
        decisionTitle: "",
        choices: {},
    })

    const [uploadImages, setUploadImages] = useState(null);

    useEffect(() => {
        console.log(formData)
    }, [formData])

    useEffect(() => {
        console.log(uploadImages)
    }, [uploadImages])

    async function uploadImagesToStorage() {
        const storage = getStorage(app);
        uploadImages.map((currentImage) => {
            const fileName = new Date().getTime() + '-' + currentImage.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, currentImage);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.error(error);
                    setUploadImages(false);
                },
                () => {
                    setIsOpen(false);
                    <ToastContainer
                        position="bottom-center"
                        autoClose={2500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                        transition:Bounce
                    />
                });
        }
        );
    }

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
        <div className='shadow-sm border-b sticky top-0 bg-whites p-3 z-10'>
            <div className="max-w-[90%] mx-auto flex justify-between items-center gap-10 py-3">
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
                    className='max-w-2xl w-[90%] z-20 p-6 absolute top-40 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md flex flex-col gap-10 overflow-y-visible'
                    onRequestClose={() => {
                        setIsOpen(false);
                        setFormData((prevState) => ({
                            ...prevState,
                            decisionTitle: "",
                            choices: {},
                        }))
                    }}
                    ariaHideApp={false}
                >
                    <ul className='flex justify-center items-center space-x-3'>
                        <li onClick={() => {
                            setPostType("images");
                            setFormData(prevState => ({ ...prevState, choices: {} }));
                        }} className='cursor-pointer hover:border-b-slate-300'>Images</li>
                        <li onClick={() => {
                            setPostType("worded");
                            setFormData(prevState => ({ ...prevState, choices: {} }));
                        }}>Worded</li>
                    </ul>
                    <input
                        type='text'
                        maxLength='150'
                        placeholder='Please enter you your title...'
                        className='m-4 border-none text-center w-full focus:ring-0 outline-none'
                        onChange={e =>
                            setFormData((prevState) => ({
                                ...prevState,
                                decisionTitle: e.target.value,
                            }))
                        }
                    />
                    {postType == "worded" ?
                        <WordPost /> :
                        <Images setFormData={setFormData} setUploadImages={setUploadImages} />
                    }
                    <button
                        onClick={uploadImagesToStorage}
                        // disabled={
                        //     formData.decisionTitle == "" &&
                        //     formData.choices.length == 0
                        // }
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
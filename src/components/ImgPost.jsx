import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import Modal from 'react-modal';
import { useEffect, useRef, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiCamera } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { signOut } from "firebase/auth";
import WordPost from "./WordPost";

const ImgPost = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploading, setImageFileUploading] = useState(false);
    const [postUploading, setPostUploading] = useState(false);
    const [postType, setPostType] = useState("worded");
    const filePickerRef = useRef(null);

    function addImageToPost(e) {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    }

    return (
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
                <div className="flex gap-5">
                    <div className="border-2 border-slate-400 w-40 h-40 rounded-lg flex justify-center items-center cursor-pointer shadow-md hover:shadow-lg"
                        onClick={() => filePickerRef.current.click()}>
                        <HiCamera
                            className='text-5xl text-gray-400'
                        />
                    </div>
                    <div className="border-2 border-slate-400 w-40 h-40 rounded-lg flex justify-center items-center cursor-pointer shadow-md hover:shadow-lg"
                        onClick={() => filePickerRef.current.click()}>
                        <HiCamera
                            className='text-5xl text-gray-400'
                        />
                    </div>
                </div>
            )}
            <input
                hidden
                ref={filePickerRef}
                type='file'
                accept='image/*'
                onChange={addImageToPost}
            />
        </div>
    )
}

export default ImgPost
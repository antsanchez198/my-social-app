import React from "react";
import ImageUploading from "react-images-uploading";
import { HiCamera } from 'react-icons/hi';
import { useEffect } from "react";

const Images = ({ setFormData }) => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 6;

    useEffect(() => {
        const imageObject = images.map((image) => ({
            image,
            likes: 0, // Initialize likes for each image to 0
        }));
        setFormData((prevState) => ({
            ...prevState,
            choices: imageObject,
        }));
    }, [images, setFormData]); // Depend on images and setFormData

    const onChange = (imageList) => {
        setImages(imageList);
        console.log(images);
    };

    return (
        <div className="">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className="flex justify-center items-center flex-col">
                        <div>Click or Drop here</div>
                        <div
                            className="border-2 border-slate-400 w-40 h-40 rounded-lg flex justify-center items-center cursor-pointer shadow-md hover:shadow-lg"
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <HiCamera
                                className={`text-5xl ${isDragging ? 'text-red-600' : 'text-gray-400'}`}
                            />
                        </div>
                        <button
                            onClick={() => {
                                onImageRemoveAll();
                                setFormData((prevState) => ({
                                    ...prevState,
                                    choices: {},
                                }));
                            }}
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >Remove all images</button>
                        <div className="flex flex-row gap-3 my-7 w-100 flex-wrap">
                            {imageList.map((image, index) => (
                                <div key={index} className="flex flex-col w-60 h-60">
                                    <img src={image.data_url} alt="" className="w-full" />
                                    <div className="flex justify-center items-center">
                                        <button
                                            onClick={() => onImageUpdate(index)}
                                            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                        >Update</button>
                                        <button
                                            onClick={() => onImageRemove(index)}
                                            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                        >Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                )}
            </ImageUploading>
        </div>
    )
}

export default Images
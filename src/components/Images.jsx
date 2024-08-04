import React from "react";
import ImageUploading from "react-images-uploading";
import { HiCamera } from 'react-icons/hi';

const Images = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 6;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
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
                        <div className="border-2 border-slate-400 w-40 h-40 rounded-lg flex justify-center items-center cursor-pointer shadow-md hover:shadow-lg"
                            onClick={() => filePickerRef.current.click()}>
                            <HiCamera
                                className={`text-5xl ${isDragging ? 'text-red-600' : 'text-gray-400'}`}
                            />    
                            </div>
                        {/* <button
                            style={isDragging ? { color: "red" } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </button> */}
                        &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    )
}

export default Images
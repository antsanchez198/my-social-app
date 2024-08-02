import React from 'react'

const ImgPost = () => {
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
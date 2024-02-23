import { useState } from 'react'

const Post = () => {

  const [postType, setPostType] = useState("double");

  const [formData, setFormData] = useState({
    type: postType,
    decisionTitle: "",
    choices: {},
  })

  const onFileChange = (e) => {
    const filesArray = Array.from(e.target.files);

    if (filesArray.length >= 2 && filesArray.length <= 6) {
      const imagesWithLikes = filesArray.map((file) => ({
        file,
        likes: 0, // Initialize likes for each image to 0
      }));

      setFormData((prevState) => ({
        ...prevState,
        choices: imagesWithLikes,
      }));
    } else {
      // Handle error: Number of files out of range
      console.error('Number of files must be between 2 and 6');
    }
  };

  const onWordedChange = (e, index) => {
    const { value } = e.target;
    setFormData(prevState => {
      const updatedChoices = [...prevState.choices];
      updatedChoices[index] = { choice: value, likes: 0 };
      return { ...prevState, choices: updatedChoices };
    });
  };


  console.log(formData)

  return (
    <div className='mx-auto my-10 max-w-[90%]'>
      <ul className='flex justify-center items-center space-x-3'>
        <li onClick={() => {
          setPostType("double");
          setFormData(prevState => ({ ...prevState, choices: {} }));
        }} className='cursor-pointer hover:border-b-slate-300'>Images</li>
        <li onClick={() => {
          setPostType("worded");
          setFormData(prevState => ({ ...prevState, choices: {} }));
        }}>Worded</li>
      </ul>
      <div className="">
        <p className="text-lg mt-6 font-semibold">Title</p>
        <input type="text" id="name" placeholder="Title" maxLength="32" minLength="10" required onChange={onFileChange}
          className="w-full p-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
      </div>
      {postType == "worded" ?
        <>
          <p className="text-lg font-semibold">Worded Question</p>
          <textarea type="text" id="address" placeholder="Worded" required
            className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

          <p className="text-lg font-semibold">Choice 1</p>
          <textarea type="text" id="choice1" placeholder="Worded" required onChange={(e) => onWordedChange(e, 1)}
            className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

          <p className="text-lg font-semibold">Choice 2</p>
          <textarea type="text" id="choice2" placeholder="Worded" required onChange={(e) => onWordedChange(e, 1)}
            className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
        </>
        :
        <>
          <input
            type="file"
            id="images"
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            mb-5 focus:bg-white focus:border-slate-600"
            onChange={onFileChange}
          />
          <p className="italic font-semibold">Min number of Images: 2</p>
          <p className="italic font-semibold">Max number of Images: 6</p>
        </>
      }
    </div>
  )
}

export default Post
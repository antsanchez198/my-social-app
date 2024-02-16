import { useState } from 'react'

const Post = () => {

  const [postType, setPostType] = useState("double");
  const [numberOfOptions, setNumberOfOptions] = useState(2)

  const [formData, setFormData] = useState({
    type: postType,
    decisionTitle: "",
    choices: {},
  })

  const onChange = (e) => {
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        choices: e.target.files,
      }));
    }
  }

  return (
    <div className='mx-auto my-10 max-w-[90%]'>
      <ul className='flex justify-center items-center space-x-3'>
        <li onClick={() => setPostType("double")}>Double</li>
        <li onClick={() => setPostType("multiple")}>Multiple</li>
        <li onClick={() => setPostType("worded")}>Worded</li>
      </ul>
      <div className="">
        <p className="text-lg mt-6 font-semibold">Title</p>
        <input type="text" id="name" placeholder="Title" maxLength="32" minLength="10" required
          className="w-full p-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
      </div>
      {postType == "worded" ?
        <>
          <p className="text-lg font-semibold">Worded Question</p>
          <textarea type="text" id="address" placeholder="Worded" required
            className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

          {/* <p className="text-lg font-semibold">Number of Choices</p>
          <input type='number' value={numberOfOptions} onChange={e => setNumberOfOptions(e.target.value)}
          className='p-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
          focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'></input> */}

          <p className="text-lg font-semibold">Choice 1</p>
          <textarea type="text" id="choice1" placeholder="Worded" required
            className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

          <p className="text-lg font-semibold">Choice 2</p>
          <textarea type="text" id="choice2" placeholder="Worded" required
            className="w-full px-4 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
        </>
        :
        <input
          type="file"
          id="images"
          accept=".jpg,.png,.jpeg"
          multiple
          required
          className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
        />
      }
    </div>
  )
}

export default Post
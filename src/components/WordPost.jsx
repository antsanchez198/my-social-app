import React from 'react'

const WordPost = () => {
    return (
        <div><>
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
        </></div>
    )
}

export default WordPost
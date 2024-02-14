

const Header = () => {
    return (
        <div className="bg-slate-700 w-full h-15">
            <div className="max-w-[90%] mx-auto flex justify-between items-center py-3">
                <div className="">
                    <img></img>
                </div>
                <ul className="flex space-x-5 text-white">
                    <li className="cursor-pointer">Feed</li>
                    <li className="cursor-pointer">Post</li>
                    <li className="cursor-pointer">Account</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
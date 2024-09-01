import { useEffect } from "react"

export default function DoubleImgTemp({ images }) {

    useEffect(() => {
        console.log(images)
    })

    return (
        <div>
            {images && images.map((image) => (                
                <img
                    src={image.image[0]}
                    // alt={post.caption}
                    className='object-cover w-full'
                />
            ))}
        </div>
    )
}
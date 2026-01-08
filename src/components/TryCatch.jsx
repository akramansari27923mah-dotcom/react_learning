/* eslint-disable react-hooks/immutability */
import React, { useEffect, useState } from 'react'

const TryCatch = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json()
            console.log(data)
            setPhotos(data)
        }
        catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <h1 className='text-center'>Try_Catch</h1>
            <button onClick={fetchData} className='py-2 px-7 w-30 bg-indigo-500 text-white rounded-lg'>Fatch</button>
            <h1 className='text-center text-2xl font-bold'>products</h1>
            <div className='flex flex-wrap gap-10'>
                {
                    photos.map(({ title, image, description, category, id }) => (
                        <div key={id} className='w-60 flex flex-col gap-2'>
                            <img className='w-50' src={image} />
                            <p className='font-bold'>title : {title}</p>
                            <p className='text-gray-500'>{description.slice(0, 70)}</p>
                            <p className='font-semibold'>{category}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TryCatch
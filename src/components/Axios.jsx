/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

const Axios = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetchData()
    }, [refresh]) 

    const fetchData = async () => {

        try {
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products')
            const data = response.data
            setPhotos(data)
        }
        catch (err) {
            console.log(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <h1 className='text-center'>Try_Catch</h1>
            <button onClick={fetchData} className='py-2 px-7 w-30 bg-indigo-500 text-white rounded-lg cursor-pointer'>Fatch</button>
            <button onClick={() =>setRefresh(!refresh)} className='py-2 px-7 w-30 bg-indigo-500 text-white rounded-lg text-nowrap cursor-pointer'>re-fetch</button>
            <h1 className='text-center text-2xl font-bold'>products</h1>
            {
                loading &&
                <h1 className='text-center'><i className=' fa fa-spinner fa-spin' style={{
                    fontSize: 50
                }}></i></h1>
            }
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

export default Axios
/* eslint-disable react-hooks/immutability */
import { useState, useEffect } from 'react'
import 'font-awesome/css/font-awesome.min.css'
const UseEffect = () => {
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')

            .then((response) =>response.json())

            .then((data) => {
                setUserData(data)
                setLoading(false)
            })

            .catch((error) => {
                console.log('failed', error)
            })

    }


    return (
        <div>
            <h1 className='text-center'>Fetch data</h1>

            <div className='flex flex-col items-start gap-y-10'>
                <button onClick={fetchData} className='py-2 px-8 rounded-sm bg-indigo-500 text-white cursor-pointer'>fetch</button>
                {loading &&  <i className='fa fa-spinner fa-spin' style={{
                    fontSize : '50px'
                }}></i>}
            </div>
            <div className='mt-5'>
                {
                    userData.map((users) => {
                        return (
                            <div className='shadow-lg p-3 m-3' key={users.id}>
                                <h1>{users.id} : </h1>
                                <h1>name : {users.name}</h1>
                                <h1>email : <span className='text-blue-600'>{users.email}</span></h1>
                                <h1>phone : {users.phone}</h1>
                                <h1>userName : {users.username}</h1>
                                <h1>website : {users.website}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UseEffect
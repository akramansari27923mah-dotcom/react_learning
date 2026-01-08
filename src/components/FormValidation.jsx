import { useState } from "react"


const FormValidation = () => {

    const model = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        username: '',
        number: ''
    }

    const errModel = {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        username: null,
        number: null
    }

    const [value, setValue] = useState(model)
    const [error, setError] = useState(errModel)

    const validation = (key, value) => {
        if(!value.length)
        {
            setError({
                ...error,
                [key] : `${key} field is required`
            })
        }
        else{
            setError({
                ...error,
                [key] : null
            })
        }
    }

    const getValueInput = (e) => {
        const input = e.target
        const value = input.value
        const key = input.name

        setValue({
            ...value,
            [key]: value
        })

        validation(key, value)
    }
    


    return (
        <div className="flex justify-center min-h-screen  items-center ">
            <div className="flex justify-center items-center py-3  w-120 rounded-lg shadow-2xl animate__animated animate__zoomIn">
                <form className="flex flex-col gap-y-5 bg-white">

                    <div className="flex flex-col gap-y-1">
                        <label className="text-lg">Firstname</label>
                        <input
                            onChange={getValueInput}
                            type="text"
                            name="firstname"
                            placeholder="Enter first name"
                            className="w-100 outline-none border border-gray-300 p-2 rounded-lg "
                        />
                        {
                            error &&
                            <small className="text-rose-500 font-semibold">{error.firstname}</small>
                        }
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-lg">Lastname</label>
                        <input
                            onChange={getValueInput}
                            type="text"
                            name="lastname"
                            placeholder="Enter last name"
                            className="w-100 outline-none border border-gray-300 p-2 rounded-lg "
                        />
                        {
                            error &&
                            <small className="text-rose-500 font-semibold">{error.lastname}</small>
                        }
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-lg">Email</label>
                        <input
                            onChange={getValueInput}
                            type="email"
                            name="email"
                            placeholder="email@gmail.com"
                            className="w-100 outline-none border border-gray-300 p-2 rounded-lg "
                        />
                       {
                            error &&
                            <small className="text-rose-500 font-semibold">{error.email}</small>
                        }
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-lg">Password</label>
                        <input
                            onChange={getValueInput}
                            type="password"
                            name="password"
                            placeholder="**************"
                            className="w-100 outline-none border border-gray-300 p-2 rounded-lg "
                        />
                        {
                            error &&
                            <small className="text-rose-500 font-semibold">{error.password}</small>
                        }
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-lg">Username</label>
                        <input
                            onChange={getValueInput}
                            type="password"
                            name="username"
                            placeholder="@username"
                            className="w-100 outline-none border border-gray-300 p-2 rounded-lg "
                        />
                         {
                            error &&
                            <small className="text-rose-500 font-semibold">{error.username}</small>
                        }
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-lg">Number</label>
                        <input
                            onChange={getValueInput}
                            type="number"
                            name="number"
                            placeholder="123456789"
                            className="w-100 outline-none border border-gray-300 p-2 rounded-lg "
                        />
                         {
                            error &&
                            <small className="text-rose-500 font-semibold">{error.number}</small>
                        }
                        </div>
                    <button type="submit" className="py-3 px-6 bg-indigo-600 text-white border-none cursor-pointer rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default FormValidation
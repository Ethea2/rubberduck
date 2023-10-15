import { useState } from "react"
import { toast } from "react-toastify"

const useRegister = () => {
    const [isLoading, setLoading] = useState<boolean | null>(null)
    const [isError, setError] = useState<string | null>(null)

    const signup = async (username:string, email:string, password:string) => {
        setLoading(true)
        setError(null)

        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password, username })
        })

        const json = await response.json()

        if (!response.ok){
            setLoading(false)
            setError(json.error)
            toast("Registration unsuccessful", {type: "error"})
            return
        }

        toast("Registration Successful", {
            type: "success"
        })
        console.log(json)

    }

    return { signup, isLoading, isError}
}

export default useRegister
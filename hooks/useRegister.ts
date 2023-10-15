import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { toast, Id } from "react-toastify"
// import { RedirectType, redirect } from "next/navigation"

const useRegister = () => {
    const [isLoading, setLoading] = useState<boolean | null>(null)
    const [isError, setError] = useState<string | null>(null)
    const toastID = useRef<Id>()
    const router = useRouter()

    const signup = async (username:string, email:string, password:string) => {
        toastID.current = toast.loading("Registering now...")
        setLoading(true)
        setError(null)
        console.log(process.env.NEXT_PUBLIC_API_URL)
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password, username })// hello
            })
    
            const json = await response.json()


            if (!response.ok){
                setLoading(false)
                setError(json.error)
                toast.update(toastID.current ?? "", {
                    render: json.message,
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    type: "error",
                    isLoading: false
                })
                return
            }
    
            toast.update(toastID.current ?? "", {
                render: json.message,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "success",
                isLoading: false
            })
            router.push('/signin')
        }
        catch (e) {
            toast.update(toastID.current ?? "", {
                render: "Oops! Something went wrong!",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                type: "error",
                isLoading: false
            })
        }
    }
    return { signup, isLoading, isError}
}

export default useRegister
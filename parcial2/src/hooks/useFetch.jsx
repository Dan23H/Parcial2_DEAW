import { useEffect, useState } from "react"

export const useFetch = ({ url }) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true
    })

    const getFetch = async () => {
        const api = await fetch(url)
        const data = await api.json()

        setState({
            data,
            isLoading: false
        })
    }

    useEffect(() => {
        getFetch()
    }, [url])

    useEffect(() => {
        getFetch()
    }, [url])
    return { ...state }

}
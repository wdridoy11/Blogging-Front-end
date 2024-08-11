import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const useSave = () => {
    const [axiosSecure] = useAxiosSecure()

    const {refetch, data: save = []} = useQuery({
        queryKey: ["save"],
        queryFn : async () =>{
            const res = await axiosSecure(`/save`);
            return res.data;
        }
    })
    return[save, refetch]
}

export default useSave
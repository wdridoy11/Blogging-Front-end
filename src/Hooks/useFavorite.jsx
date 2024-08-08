import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useFavorite = () => {
    const [axiosSecure] = useAxiosSecure()

    const {refetch, data: favorite = []} = useQuery({
        queryKey: ["favorite"],
        queryFn : async () =>{
            const res = await axiosSecure(`/favorite`);
            return res.data;
        }
    })
    return[favorite, refetch]
}

export default useFavorite
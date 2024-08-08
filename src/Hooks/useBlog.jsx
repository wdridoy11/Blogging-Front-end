import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';


const useBlog = () => {

    const [axiosSecure] = useAxiosSecure()

    const {refetch, data: blogs = []} = useQuery({
        queryKey: ["blogs"],
        queryFn : async () =>{
            const res = await axiosSecure(`/blogs`);
            return res.data;
        }
    })
    return[blogs, refetch]
}

export default useBlog;
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';


const useBlog = () => {

    const [axiosSecure] = useAxiosSecure()

    const {refetch, data: blogs = []} = useQuery({
        queryKey: ["blogs"],
        queryFn : async () =>{
            const res = await axiosSecure(`/blogs`)
            console.log(`${process.env.REACT_APP_API_URL}/blogs`);
            return res.data;
        }
    })
    return[blogs, refetch]
}

export default useBlog;
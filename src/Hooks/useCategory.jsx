import { useQuery } from '@tanstack/react-query';

const useCategory = () => {
    // const [categories, setCategories] = useState([]);
    const {refatch, data: categories = [], isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn : async () =>{
            const respons = await fetch(`blog.json`);
            console.log("date",respons);
            return respons.json();
        }
    })
    return [categories, refatch]

 }

export default useCategory
export const getCategoriesData = async ()=>{
    const response = await fetch(`categories.json`);
    const data = await response.json();
    return data;
}



//blogs
//
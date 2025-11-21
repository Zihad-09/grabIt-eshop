import { useEffect, useState } from 'react';

const useData = () => {
    const [categorys, setCategory] = useState([])
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    
    return { categorys, products }
};
export default useData;
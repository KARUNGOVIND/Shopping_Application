import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Productcard.css';
import Topbar from './Topbar';

function Products() {
    const [ApiRes,SetApiRes]=useState([]);
    const [list, setList] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [categories,setcategory]=useState();
    
    

    useEffect(() => {
        fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
            .then((res) => res.json())
            .then((json) => {
                SetApiRes(json);
                console.log(json);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const categoriesSet = new Set();
        ApiRes.forEach(product => categoriesSet.add(product.category));
        const uniqueCategoriesArray = Array.from(categoriesSet);
        setUniqueCategories(uniqueCategoriesArray);
    }, [ApiRes]);

    // console.log(uniqueCategories)
    // console.log(categories)

    useEffect(()=>{
        if(categories===""){
            setList(ApiRes)
            console.log(list)
        }
        else{
        const res=ApiRes.filter(obj=>obj.category===categories)
        setList(res)
    }
    },[categories])

    useEffect(()=>{
        const res=ApiRes.filter(obj=>obj.category===categories)
            setList(ApiRes)
    },[ApiRes])
    return (
        <>
        <div>
        <Topbar category={uniqueCategories} setcategory={setcategory} />
        </div>
        <div className="container">
                {list.map((product) => (
                    <ProductCard product={product} categories={categories}/>
                ))}
        </div>
        </>
    );
}

export default Products;

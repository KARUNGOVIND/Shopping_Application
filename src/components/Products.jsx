import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Productcard.css';
import Topbar from './Topbar';
import Counter from './Counter';
import App from '../App';

function Products() {
    const [ApiRes, SetApiRes] = useState([]);
    const [list, setList] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [categories, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
            .then((res) => res.json())
            .then((json) => {
                SetApiRes(json);
                
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const categoriesSet = new Set();
        ApiRes.forEach(product => categoriesSet.add(product.category));
        const uniqueCategoriesArray = Array.from(categoriesSet);
        setUniqueCategories(uniqueCategoriesArray);
    }, [ApiRes]);

    useEffect(() => {
        let filteredList = ApiRes;

        if (categories) {
            filteredList = filteredList.filter(product => product.category === categories);
        }

        if (searchTerm) {
            filteredList = filteredList.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setList(filteredList);
    }, [categories, searchTerm, ApiRes]);

    return (
        <>
        <App/>
            <div>
                <Topbar 
                    category={uniqueCategories} 
                    setCategory={setCategory} 
                    setSearchTerm={setSearchTerm} 
                />
            </div>
            
            <div className="container">
                {list.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}

export default Products;

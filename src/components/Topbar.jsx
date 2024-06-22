import React from 'react';
import './Topbar.css';

function Topbar(props) {
    const handleCategoryChange = (e) => {
        props.setCategory(e.target.value);
    }

    const handleSearchChange = (e) => {
        props.setSearchTerm(e.target.value);
    }

    return (
        <div className="topbar">
            <select onChange={handleCategoryChange}>
                <option value="">Select...</option>
                {props.category.map((i, index) => (
                    <option key={index} value={i}>{i}</option>
                ))}
            </select>
            <input 
                type="text" 
                placeholder="Search by title..." 
                onChange={handleSearchChange} 
            />
        </div>
    );
}

export default Topbar;

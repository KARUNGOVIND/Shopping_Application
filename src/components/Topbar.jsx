import React from 'react'

function Topbar(props) {
    console.log("Topbar",props.category)
    const Handlecategory=(e)=>{
        props.setcategory(e.target.value);
    }
  return (
    <div>
        <select onChange={Handlecategory}>
            <option value="">Select...</option>
            {props.category.map((i)=><option  value={i}>{i}</option>)}
       </select>
    </div>
  )
}
export default Topbar

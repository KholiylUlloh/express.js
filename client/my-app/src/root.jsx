import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
 
const Root = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
       fetch('http://localhost:3001/users/all').then(res => res.json()).then(res => setData(res))
    }, [])
 
  return (
    <div>
   {
    data.map((users)=>
    <NavLink to={users.id} key={users.id}>
        <h1>Name: {users.name}</h1>
        <h1>Age: {users.age}</h1>
    </NavLink>
    
    )
   }
    </div>
  )
}

export default Root
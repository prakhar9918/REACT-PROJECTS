import React, { useEffect, useState } from "react";

export default function Github(){
    const [data,setData] = useState([])
    useEffect(()=>{
     fetch('https://api.github.com/users/prakhar9918')
     .then(res => res.json())
     .then(data => setData(data));
    }
    ,[])
    return(
      <>
      <div>
        <p>
            Followers : {data.followers}
        </p>
      </div>
      </>
    )
}
import React , {useEffect, useState} from "react";

function useCurrencyInfo (currency) {
const [data,setData] = useState({});
useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/461abdbff8da569124c1cf9b/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => setData(res[conversion_rates]))
},[currency])
return data;
}

export default useCurrencyInfo;
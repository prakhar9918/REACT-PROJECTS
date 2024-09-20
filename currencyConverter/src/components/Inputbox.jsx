// import React from "react";

// function InputBox(
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
// ) {
//     return (  
//         <>
//         <div>
//             <label>{label}</label>
//             <input
//             type="number"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
//             />
//         </div>
//         <div>
//             <label>Currency Exchanger</label>
//             <select
//             value={selectCurrency}
//             onCurrencyChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//             >
//             {
//             currencyOptions.map((Currency) => (
//                 <option key={Currency} value={Currency}>
//                 {Currency}  
//                 </option>
//             ))
//             }    
//             </select>
//         </div>
//         </>
//     );
// }

// export default InputBox;

import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
}) {
    return (
        <>
            <div>
                <label>{label}</label>
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Currency Exchanger</label>
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    );
}

export default InputBox;

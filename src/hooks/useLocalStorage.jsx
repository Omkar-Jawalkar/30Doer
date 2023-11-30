/*
 *
 *
 *https://www.geeksforgeeks.org/reactjs-uselocalstorage-custom-hook/
 *
 */

// import { useState, useEffect } from "react";

// const useLocalStorage = ({ key, valueOrFunction }) => {
//     const [state, setState] = useState(() => {
//         try {
//             let value = localStorage.getItem(key);
//             if (value) {
//                 return JSON.parse(value);
//             } else {
//                 return valueOrFunction;
//             }
//         } catch {
//             return valueOrFunction;
//         }
//     });

//     const updateState = (valueOrFunction) => {
        

//     };

//     return <div>useLocalStorage</div>;
// };

// export default useLocalStorage;

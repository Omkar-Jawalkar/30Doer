/*
 *
 *
 *https://www.geeksforgeeks.org/reactjs-uselocalstorage-custom-hook/
 *
 */

import { useState } from "react";

const useLocalStorage = (key, valueOrFunction) => {
    const [state, setState] = useState(() => {
        try {
            let value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            } else {
                return valueOrFunction;
            }
        } catch (err) {
            console.log(err);
            return valueOrFunction;
        }
    });

    const updateState = (valueOrFunction) => {
        try {
            const finalValue =
                valueOrFunction instanceof Function
                    ? valueOrFunction(state)
                    : valueOrFunction;
            setState(finalValue);
            localStorage.setItem(key, JSON.stringify(finalValue));
        } catch (error) {
            console.log(error);
        }
    };

    return [state, updateState];
};

export default useLocalStorage;

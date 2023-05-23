"use client";
import useLocalStorage from "./useLocalStorage";
import { useEffect} from "react";

const useColorMode = () => {
    const [colorMode, setColorMode] = useLocalStorage('color-mode', 'light')
    useEffect(() => {
        const className = 'dark';
        const bodyClasses = window.document.body.classList;
        if (colorMode === 'dark') {
            bodyClasses.add(className);
        } else {
            bodyClasses.remove(className);
        }
    }, [colorMode]);
    return [colorMode, setColorMode];
}

export default useColorMode;
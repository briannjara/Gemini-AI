import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();


const ContextProvider = (props) => {


    const [input, setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");
     



    const onSent = async (prompt) => {
       await run(input)
    }

   






    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        input,
        setInput,
        recentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider;
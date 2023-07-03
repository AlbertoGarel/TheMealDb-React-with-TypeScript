import { useEffect, useState } from "react";

export default function useSearch(words: string | number) {
  const [result, getResult] = useState("");

  const request = async (word: string | number) => {
    try{

    }catch(err){

    }
  }

  useEffect(() => {
    
  }, [words]);

  return result;
}

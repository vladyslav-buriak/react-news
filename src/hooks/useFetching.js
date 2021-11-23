import { useState } from "react";
const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const fetchingPosts = async () => {
      try {
        setIsLoading(true);
        await callback();
      }finally {
        setIsLoading(false);
      }
    };
  
    return [fetchingPosts, isLoading,];
  };

  export default useFetching;
import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title}-LostLocator`;
  }, [title]);
};

export default useTitle;

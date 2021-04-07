import { MutableRefObject, useEffect } from "react";

/*====================*/

function useShowOnScroll(element: MutableRefObject<any>, setActive: Function) {
  function handler() {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();

      const isVisible = rect.top >= 0 && rect.bottom / 1.25 <= window.innerHeight;
      if (isVisible) {
        setActive(true);
      }
    }
  }

  /*====================*/

  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
}

/*====================*/

export default useShowOnScroll;

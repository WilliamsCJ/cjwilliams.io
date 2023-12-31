"use client";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      // get the scroll top position
      const scrolled = documentElement.scrollTop;

      // calculate the max height of the document
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;

      // calculate the percentage
      const scrollPercent = (scrolled / maxHeight) * 100;

      // update state
      setScroll(scrollPercent);

      console.log(scrollPercent)
    };
    // add event listener
    window.addEventListener("scroll", handler);


    // remove event listener on unmount
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="z-40 fixed top-0 h-1 w-screen">
      <div
        className="bg-brand h-full"
        style={{ width: scroll + "%" }}
      ></div>
    </div>
  );
};
export default ScrollIndicator;
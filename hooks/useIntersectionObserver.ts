// @ts-nocheck

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const useIntersectionObserver = () => {
  const [activeId, setActiveId] = useState("");
  const path = useRouter().pathname.substring(1);

  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback: IntersectionObserverCallback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px 0px 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h1, h2"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [path]);
  return activeId;
};

export default useIntersectionObserver;

import React, { useEffect, useState } from "react";

const useObserver = ({
  target,
  root = null,
  rootMargin = "0px",
  scrollMargin = "0px",
  threshold = 0,
  delay = 0,
  trackVisibility = false,
  callback = () => {},
}) => {
  const [observer, setObserver] = useState(null);
  const [isActive, setIsActive] = useState(false);

  // Create observer
  useEffect(() => {
    const options = {
      root,
      rootMargin,
      scrollMargin,
      threshold,
      delay,
      trackVisibility,
    };
    const intersectionCallback = (entries, observer) => {
      const updateIsActive = (bool) => setIsActive(bool);
      callback(entries, observer, updateIsActive);
    };
    setObserver(new IntersectionObserver(intersectionCallback, options));
  }, [
    root,
    rootMargin,
    scrollMargin,
    threshold,
    delay,
    trackVisibility,
    callback,
  ]);

  // Set observer
  useEffect(() => {
    observer && observer.observe(target);
  }, [observer, target]);

  return isActive;
};

export default useObserver;

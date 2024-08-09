import { useState, useEffect } from "react";

const NoResults = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      {" "}
      {isVisible && <h2 className="mt-5 text-center">No results found</h2>}
    </div>
  );
};

export default NoResults;

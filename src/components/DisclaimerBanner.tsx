import type React from "react";
import { useState, useEffect } from "react";

type DisclaimerBannerProps = {
  show: boolean;
};

const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    const bannerHidden = localStorage.getItem("bannerHidden") === "true";
    setIsVisible(!bannerHidden);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("bannerHidden", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-blue/25 border backdrop-blur-md gap-1 border-white/25 text-white text-sm p-2 fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 w-full lg:max-w-xl rounded-lg flex justify-between items-center md:max-w-[90%] px-3 sm:px-4">
      <span className="flex-1 text-center sm:text-left">
        Disclaimer: This website and the component library are under active
        development. Features and components might change. Use at your own risk.
      </span>
      <button type="button" onClick={handleClose} className="ml-2 sm:ml-0">
        &#x2715;
      </button>
    </div>
  );
};

export default DisclaimerBanner;

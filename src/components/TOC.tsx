import type React from "react";

const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80; // Height of the sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const TOC: React.FC = () => {
  return (
    <div className="w-48 h-full">
      <ul>
        <li>
          <button
            type="button"
            className="text-left w-full text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
            onClick={() => scrollTo("seo")}
          >
            Description
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-left w-full text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
            onClick={() => scrollTo("visual")}
          >
            Showcase
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-left w-full text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
            onClick={() => scrollTo("import-use")}
          >
            How to Import and Use
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-left w-full text-blue-500 hover:text-blue-700 focus:outline-none focus:underline"
            onClick={() => scrollTo("source-code")}
          >
            Source Code
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TOC;

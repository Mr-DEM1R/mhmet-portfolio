import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
  websiteLink: string;
  reportLink: string;
}

const YourCustomProjectCard = ({ src, title, description, githubLink, websiteLink, reportLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Add three buttons */}
        <div className="mt-4 space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            GitHub
          </a>
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Website
          </a>
          <a
            href={reportLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded"
          >
            Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default YourCustomProjectCard;

import React from "react";

const TeamMember = ({ name, description, imageSrc }) => (
  <div className="p-4">
    <div className="mb-4 text-center opacity-90">
      <a href="/" className="relative block">
        <img src={imageSrc} className="mx-auto object-cover rounded-full h-40 w-40" alt="imageSrc"/>
      </a>
    </div>
    <div className="text-center">
      <p className="text-2xl text-gray-800 dark:text-white">{name}</p>
      <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
        {description}
      </p>
    </div>
  </div>
);

export default TeamMember;

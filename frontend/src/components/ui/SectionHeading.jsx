import React from 'react';

export const SectionHeading = ({ title, subtitle, accent }) => {
  const titleParts = title.split(accent);
  return (
    <div className="mb-12 text-center sm:text-left">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        {titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{accent}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="text-text-secondary text-lg max-w-2xl">{subtitle}</p>}
    </div>
  );
};

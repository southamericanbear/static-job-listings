import React from "react";

export const JobsCard = ({
  company,
  logo,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  isFeatured,
  isNew,
  jobTags,
}) => {
  return (
    <div className="job-card" style={{ border: "solid 2px purple" }}>
      <div className="left-container flex flex-row sm:flex-row  md:flex-row lg:flex-col">
        <div className="img">
          <img src={logo} alt={company} />
        </div>
        <div className="job-info">
          <div className="title">
            <span>{company}</span>
            {isNew && <h2>New!</h2>}
            {isFeatured && <h2>Featured</h2>}
          </div>
          <h1>{position}</h1>
          <div className="details">
            <span>{postedAt}</span>
            <span className="dot">&#8226;</span>
            <span>{contract}</span>
            <span className="dot">&#8226;</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="right-container">
        {jobTags.map((tag, index) => {
          return (
            <button className="tag-btn" key={index}>
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

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
  handleFilter,
}) => {
  let border =
    isFeatured === true
      ? { borderLeft: "5px solid hsl(180, 29%, 50%)" }
      : { borderLeft: "0px solid transparent" };

  return (
    <div className="job-card" style={border}>
      <div className="left-container flex flex-row sm:flex-row  md:flex-row lg:flex-col">
        <div className="img">
          <img src={logo} alt={company} />
        </div>
        <div className="job-info">
          <div className="title">
            <span>{company}</span>
            {isNew && <h2 className="new">New!</h2>}
            {isFeatured && <h2 className="featured">Featured</h2>}
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
            <button
              className="tag-btn"
              key={index}
              onClick={() => handleFilter(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

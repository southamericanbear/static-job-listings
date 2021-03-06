import React from "react";
import jobData from "../data/data.json";
import { JobsCard } from "./JobsCard";

export const Home = () => {
  return (
    <div className="container">
      <div className="container">
        {jobData.map((jobs) => {
          let jobTags = [
            jobs.role,
            jobs.level,
            ...(jobs.languages || []),
            ...(jobs.tools || []),
          ];

          return (
            <JobsCard
              key={jobs.id}
              company={jobs.company}
              logo={jobs.logo}
              position={jobs.position}
              role={jobs.role}
              level={jobs.level}
              postedAt={jobs.postedAt}
              contract={jobs.contract}
              location={jobs.location}
              isFeatured={jobs.featured}
              isNew={jobs.new}
              jobTags={jobTags}
            />
          );
        })}
      </div>
    </div>
  );
};

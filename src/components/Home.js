import React, { useState } from "react";
import jobData from "../data/data.json";
import { Filter } from "./Filter";
import { JobsCard } from "./JobsCard";

export const Home = () => {
  const [filters, setFilters] = useState([]);

  const handleFilter = (tag) => {
    if (filters.indexOf(tag) === -1) {
      setFilters((prevValue) => [...prevValue, tag]);
    }
  };

  const clearAll = () => {
    setFilters([]);
  };

  const clearFilter = (tag) => {
    setFilters(filters.filter((item) => item !== tag));
  };

  return (
    <>
      {filters.length > 0 && (
        <Filter
          filters={filters}
          clearAll={clearAll}
          clearFilter={clearFilter}
        />
      )}

      <div className="container">
        {jobData.map((jobs) => {
          let jobTags = [
            jobs.role,
            jobs.level,
            ...(jobs.languages || []),
            ...(jobs.tools || []),
          ];

          let filterJobs = (jobTags, filters) =>
            filters.every((value) => jobTags.includes(value));

          return filters.length === 0 ? (
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
              handleFilter={handleFilter}
            />
          ) : (
            filterJobs(jobTags, filters) && (
              <JobsCard
                key={jobs.id}
                logo={jobs.logo}
                company={jobs.company}
                position={jobs.position}
                postedAt={jobs.postedAt}
                contract={jobs.contract}
                location={jobs.location}
                isFeatured={jobs.featured}
                isNew={jobs.new}
                handleFilter={handleFilter}
                jobTags={jobTags}
              />
            )
          );
        })}
      </div>
    </>
  );
};

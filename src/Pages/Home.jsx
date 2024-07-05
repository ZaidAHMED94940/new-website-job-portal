import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs data:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }
  const filterData=(jobs,selected,query )=>{
    let filteredJobs =jobs;
    // filtering input items
    if(query){
      filteredJobs = filteredItems
    }
    // categeory filtering
  }

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* Render filtered jobs here if needed */}\
    </div>
  );
};

export default Home;

// your code goes here.

async function fetchJobs(query) {
    try {
      const response = await fetch(`http://localhost:3000/jobs?q=${query}`);
      const jobs = await response.json();
      return jobs;
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }
  
  function renderJobs(jobs) {
    const jobList = document.getElementById('searched-jobs');
    jobList.innerHTML = '';
  
    jobs.forEach((job) => {
      const jobItem = document.createElement('li');
      jobItem.innerHTML = `<h5>${job.title}</h5><p>${job.company} - ${job.location}</p>`;
      jobList?.appendChild(jobItem);
    });
  }
  
  export { fetchJobs, renderJobs };
  
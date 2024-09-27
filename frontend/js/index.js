// your code goes here.
import { fetchJobs, renderJobs } from './api/jobs.js';

document.getElementById('search-jobs-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.getElementById('query-input')?.value;
  
  const jobs = await fetchJobs(query);
  renderJobs(jobs);
});

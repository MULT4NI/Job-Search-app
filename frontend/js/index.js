console.log("hanji");

document.getElementById("search-jobs-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const query = document.getElementById("query-input").value;
    const jobsList = document.getElementById("searched-jobs");
    jobsList.innerHTML = ""; // Clear existing results
  
    const response = await fetch(`../backend/jobs.json`);
    const data = await response.json();
    const jobs = data.job_postings;
  
    // Inject job results dynamically into the searched-jobs section
    jobs.forEach(job => {
      const li = document.createElement("li");
      li.innerHTML = `<h5>${job.title}</h5><p>${job.description}</p>`;
      li.addEventListener("click", () => showJobDetails(job));
      jobsList.appendChild(li);
    });
});

function showJobDetails(job) {
  const jobDetailsCard = document.getElementById("job-details-card");
  jobDetailsCard.innerHTML = `
    <h5>${job.title}</h5>
    <p><strong>Company:</strong> ${job.company}</p>
    <p><strong>Location:</strong> ${job.location}</p>
    <p><strong>Job Type:</strong> ${job.job_type}</p>
    <p><strong>Description:</strong> ${job.description}</p>
    <p><strong>Qualifications:</strong> ${job.qualifications}</p>
  `;
};

function fetchData() {
    console.log("script connected sucessfully") // Comfirmation checker message
    fetch('./script/data.json')
        // Hämtar json
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            populateWorkExperience(data.jobs);
            // data.jobs.forEach(function(job) {
            //     // Create a div-element with classname "work-header"
            //     const div = document.createElement("div");
            //     div.classList.add("work-header");
            //     // Create a h4-element with classname "work-header"
            //     const h4 = document.createElement("h4");
            //     h4.classList.add("employer");
            //     // Create a p-element with classname "work-header"
            //     const p = document.createElement("p");
            //     p.classList.add("start-end-date");
            //     // Add h4 and p in div
            //     div.appendChild(h4);
            //     div.appendChild(p);
            //     // Add div in body
            //     document.body.appendChild(div)
            // })
        })
        .catch(function(error) {
            console.error("Fel vid hämtning av JSON:", error);
        });

        function populateWorkExperience(jobs) {
            const cvSection = document.querySelector(".cv");

            jobs.forEach(function(job) {
                // Create work-container div
                const workContainer = document.createElement("div");
                // Adding class name "work-container"
                workContainer.classList.add("work-container");

                // Create work-header
                const workHeader = document.createElement("div");
                // Adding class name "work-header"
                workHeader.classList.add("work-header");

                // Create employer-name
                const employerElement = document.createElement("h4");
                // Adding class name "employer"
                employerElement.classList.add("employer");
                // Populating h4 with job employer name from .json
                employerElement.textContent = job.employer;

                // Start-End-Date
                // - Create paragraph for start-end-date
                const dateElement = document.createElement("p");
                // Adding class name "start-end-date"
                dateElement.classList.add("start-end-date");
                // Populating paragraph with start and end date from .json
                dateElement.textContent = job.start_date + " - " + job.end_date;

                // Append/add elements to "work-header" div
                workHeader.appendChild(employerElement);
                workHeader.appendChild(dateElement);

                // Create Job description paragraph
                const descriptionElement = document.createElement("p");
                descriptionElement.classList.add("description");
                descriptionElement.textContent = job.description;

                // Append elements to work-container div
                workContainer.appendChild(workHeader);
                workContainer.appendChild(descriptionElement);

                // Append work container to cv section
                cvSection.appendChild(workContainer);
            })
        }

}

fetchData();
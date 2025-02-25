function fetchData() {
    console.log("script connected sucessfully")
    fetch('./script/data.json')
        // Hämtar json
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.jobs.forEach(function(job) {
                // Create a div-element with classname "work-header"
                const div = document.createElement("div");
                div.classList.add("work-header");
                // Create a h4-element with classname "work-header"
                const h4 = document.createElement("h4");
                h4.classList.add("employer");
                // Create a p-element with classname "work-header"
                const p = document.createElement("p");
                p.classList.add("start-end-date");
                // Add h4 and p in div
                div.appendChild(h4);
                div.appendChild(p);
                // Add div in body
                document.body.appendChild(div)
            })
        })
}

fetchData();
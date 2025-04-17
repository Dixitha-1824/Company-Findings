let itbtn = document.querySelector("#btn-it");
const modelll = document.querySelector("#Modal");
const closeeebtn = document.querySelector(".close-btn");

function itcom(data) {
    const complist = document.querySelector(".company-list");
    complist.innerHTML = "";

    data.forEach(element => {
        const compcard = document.createElement('div');
        compcard.classList.add('company-card');
        compcard.innerHTML = `
            <img src="${element.logo}">
            <h2>Company Name : ${element.name}</h2>
            <h5 class="type">Type : ${element.type}</h5>
            <p class="para">Location : ${element.location}</p>
            <a href="${element.map_url}" target="_blank">View map</a>
            <br>`;

        let btn = document.createElement('button');
        btn.innerText = "Click for more Information";
        compcard.appendChild(btn);

        btn.addEventListener("click", () => {
            document.querySelector(".company-name").innerText=`${element.name}`;
            document.querySelector("#highest-salary").innerHTML = `<strong>Highest salary :</strong> ${element.highest_salary}`;
            document.querySelector("#industry").innerHTML = `<strong>Indutry: </strong>${element.industry}`;
            document.querySelector("#description").innerHTML = `<strong>Description:</strong> ${element.company_description}`;
            document.querySelector("#website").href = element.website_url;
            document.querySelector("#linkedin").href = element.linkedin;
            document.querySelector("#jobopenings").href = element.job_openings_url;
            document.querySelector("#facebook").href = element.social_media_links.facebook;
            document.querySelector("#twitter").href = element.social_media_links.twitter;
            document.querySelector("#instagram").href = element.social_media_links.instagram;
            modelll.style.display = "block";
        });

        complist.appendChild(compcard);
    });
}

closeeebtn.addEventListener("click", () => {
    modelll.style.display = "none";
});

itbtn.addEventListener("click", () => {
    fetch("itcom.json")
        .then(res => res.json())
        .then(data => itcom(data));
});

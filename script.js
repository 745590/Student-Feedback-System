let selectedRating = 0;

// Handle star rating click
const stars = document.querySelectorAll('.stars span i');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;

        // Highlight stars up to clicked one
        stars.forEach((s, i) => {
            s.classList.remove('fa-solid');
            s.classList.add('fa-regular');
            if (i < selectedRating) {
                s.classList.remove('fa-regular');
                s.classList.add('fa-solid');
            }
        });
    });
});

// Handle form submission
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const nameInput = document.querySelector('input[type="text"]');
    const commentInput = document.querySelector('textarea');
    const feedbacks = document.querySelector('.feedbacks');

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name && comment && selectedRating > 0) {
        const feed = document.createElement('div');
        feed.classList.add('feed');

        const nameElement = document.createElement('h4');
        nameElement.textContent = name;

        const commentElement = document.createElement('p');
        commentElement.textContent = comment;

        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('rating');

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.innerHTML = `<i class="fa-star ${i < selectedRating ? 'fa-solid' : 'fa-regular'}"></i>`;
            ratingDiv.appendChild(star);
        }

        feed.appendChild(nameElement);
        feed.appendChild(commentElement);
        feed.appendChild(ratingDiv);
        feedbacks.appendChild(feed);

        // Reset form
        nameInput.value = '';
        commentInput.value = '';
        selectedRating = 0;
        stars.forEach(s => {
            s.classList.remove('fa-solid');
            s.classList.add('fa-regular');
        });

    } else {
        alert("Please fill all fields and select a rating!");
    }
});


let theme = document.getElementById("theme");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let nav = document.querySelector(".nav ul");
let a = document.querySelector("a");
let form= document.querySelector("form");
let feedbacks = document.querySelector(".feedbacks");
let navItems = document.querySelectorAll(".nav ul li");

let isDark = false;

theme.addEventListener("click", () => {
    if (!isDark) {
        container.style.backgroundColor = "#183153";
        nav.style.backgroundColor = "#212121";
        form.style.backgroundColor = "#212121";
        feedbacks.style.backgroundColor = "#212121";
        body.style.color = "#fff";
a.style.color  = "#fff";
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        navItems.forEach((li) => {
            li.style.color = "#fff";
        });

        isDark = true;
    } else {
        container.style.backgroundColor = "aliceblue";
        nav.style.backgroundColor = "#fff";
        form.style.backgroundColor = "#fff";
        feedbacks.style.backgroundColor = "#fff";
        body.style.color = "#000";
a.style.color = "rgba(0, 0, 0, 0.676)";
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
        navItems.forEach((li) => {
            li.style.color = "rgba(0, 0, 0, 0.676)";
        });

        isDark = false;
    }
});
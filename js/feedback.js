document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star-rating .fa");
    const ratingInput = document.getElementById("rating");

    // Star Rating System
    stars.forEach(star => {
        star.addEventListener("click", function() {
            const value = this.getAttribute("data-value");
            ratingInput.value = value;
            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    // Feedback Form Submission
    document.getElementById("feedback-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        if (name && email && rating > 0 && comment) {
            const reviewList = document.getElementById("review-list");

            const review = document.createElement("div");
            review.classList.add("review");
            review.innerHTML = `
                <h4>${name}</h4>
                <p>${comment}</p>
                <p>Rating: ${"⭐".repeat(rating)}</p>
            `;

            reviewList.appendChild(review);

            this.reset();
            stars.forEach(s => s.classList.remove("active"));
            ratingInput.value = "0";
        } else {
            alert("Please fill all fields and select a rating.");
        }
    });
});

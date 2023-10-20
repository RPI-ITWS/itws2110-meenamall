document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    function rotateCards() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    // Initially, show the first card
    showCard(currentIndex);

    // Rotate the cards every 3 seconds (adjust the time interval as needed)
    setInterval(rotateCards, 3000);
});

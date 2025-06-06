document.getElementById("styleForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your personalized glam style is being generated...");
    // Here you can later connect to AI logic or backend API
  });
  const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert(`You clicked on ${card.textContent} 💅`);
  });
});
// Get all blog cards
const blogCards = document.querySelectorAll(".blog-card");

// Blog messages
const blogMessages = [
  "🌿 Skincare Tip: Always cleanse, tone, and moisturize daily for glowing skin!",
  "👗 Fashion Insight: Know your body shape before picking a dress — it changes everything!",
  "💅 Quick Glow Tip: Exfoliate 2x a week & drink plenty of water for radiant skin!",
  "✨ Haircare Reminder: Use a silk pillowcase to reduce hair frizz and breakage!"
];

// Add click event to each blog card
blogCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    alert(blogMessages[index]);
  });
});

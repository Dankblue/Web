function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  }
  function filterReviews()
  {
      const searchInput = document.getElementById('search').value.toLowerCase();
      const reviewsContainer = document.getElementById('reviews-container');

      reviewsData.forEach((review, index) => {
          const reviewElement = reviewsContainer.children[index];
          if (review.text.toLowerCase().includes(searchInput))
          {
              reviewElement.style.display = 'block';
          } else
          {
              reviewElement.style.display = 'none';
          }
      });
  }
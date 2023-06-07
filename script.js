// select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableCards = document.querySelectorAll('.filterable-cards .card');

// define the filtercards function
const filterCards = (e) => {
  document.querySelector('.active').classList.remove('active');
  e.target.classList.add('active');

  // iterate over each filterable card

  filterableCards.forEach((card) => {
    // Add "hide" class to hide the card initially
    card.classList.add('hide');
    // check if the card matches the selected filter or "all" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === 'all'
    ) {
      card.classList.remove('hide');
    }
  });
};

// add click event listener to each filter button
filterButtons.forEach((button) =>
  button.addEventListener('click', filterCards)
);

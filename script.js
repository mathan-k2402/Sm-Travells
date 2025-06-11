document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value;
  const vehicle = this.vehicle.value;
  document.getElementById('bookingMessage').innerText =
    `Thanks, ${name}! Your ${vehicle} booking request has been received. We’ll contact you soon.`;
  this.reset();
});

  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });




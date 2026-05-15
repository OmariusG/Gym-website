// Membership types array demonstrates JavaScript arrays
const membershipTypes = ["Basic", "Premium", "Student", "Family"];

// Registration form validation
const form = document.getElementById("registrationForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
}

function validateForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = document.getElementById("age").value.trim();
  const membership = document.getElementById("membership").value;
  const goal = document.getElementById("goal").value.trim();
  const startDate = document.getElementById("startDate").value;
  const experience = document.getElementById("experience").value;

  const errorBox = document.getElementById("errorBox");
  const successBox = document.getElementById("successBox");
  let errors = [];

  const requiredFields = [fullName, email, phone, age, membership, goal, startDate, experience];

  for (let i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i] === "") {
      errors.push("All fields must be filled out.");
      break;
    }
  }

  if (!isValidEmail(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!isValidPhone(phone)) {
    errors.push("Phone number must follow this pattern: 555-555-5555.");
  }

  if (isNaN(age) || Number(age) < 13 || Number(age) > 100) {
    errors.push("Age must be a number between 13 and 100.");
  }

  if (!membershipTypes.includes(membership)) {
    errors.push("Please choose a valid membership type.");
  }

  if (goal.length < 10) {
    errors.push("Fitness goals must be at least 10 characters long.");
  }

  if (errors.length > 0) {
    errorBox.style.display = "block";
    successBox.style.display = "none";
    errorBox.innerHTML = errors.join("<br>");
  } else {
    errorBox.style.display = "none";
    successBox.style.display = "block";
    successBox.textContent = "Registration submitted successfully! Welcome to Iron Pulse Gym.";
    form.reset();
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{3}-\d{3}-\d{4}$/.test(phone);
}

// Creative page: workout generator
const workoutButton = document.getElementById("workoutButton");
const workoutText = document.getElementById("workoutText");

const workouts = [
  "20 push-ups, 20 squats, 30-second plank, and 10 lunges per leg.",
  "15 minutes treadmill, 3 sets of dumbbell curls, and 3 sets of shoulder press.",
  "Jump rope for 5 minutes, 25 sit-ups, 20 mountain climbers, and stretch.",
  "Bike for 10 minutes, 3 sets of leg press, and 3 sets of calf raises."
];

if (workoutButton) {
  workoutButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * workouts.length);
    workoutText.textContent = workouts[randomIndex];
  });
}

// Creative page: dark mode toggle
const themeButton = document.getElementById("themeButton");

if (themeButton) {
  themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
}

// Creative page: slideshow
const slideImage = document.getElementById("slideImage");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

const slideImages = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
];

let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = slideImages.length - 1;
  } else if (index >= slideImages.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  if (slideImage) {
    slideImage.src = slideImages[currentSlide];
  }
}

if (prevSlide && nextSlide) {
  prevSlide.addEventListener("click", function() {
    showSlide(currentSlide - 1);
  });

  nextSlide.addEventListener("click", function() {
    showSlide(currentSlide + 1);
  });
}

// Creative page: countdown clock
const countdown = document.getElementById("countdown");

function updateCountdown() {
  if (!countdown) return;

  const promoDate = new Date("May 18, 2026 23:59:59").getTime();
  const now = new Date().getTime();
  const timeLeft = promoDate - now;

  if (timeLeft <= 0) {
    countdown.textContent = "The promotion has ended.";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

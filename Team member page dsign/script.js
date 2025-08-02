// Team Profiles Data
const profiles = {
  member1: {
    name: "<h1>Alice Johnson</h1>",
    role: "<h2>Project Manager</h2>",
    bio: `
      <h3>Overview</h3>
      <p>Alice is a strategic leader with 10+ years of experience in delivering digital projects globally. She ensures goals are met through clear communication, precise planning, and agile execution.</p>
      <h3>Highlights</h3>
      <ul>
        <li>10+ years in tech project management</li>
        <li>Delivered 50+ web and mobile projects</li>
        <li>Certified PMP & ScrumMaster</li>
        <li>Skilled in JIRA, Trello, MS Project</li>
      </ul>
      <h3>Strengths</h3>
      <ul>
        <li>Agile & Scrum methodologies</li>
        <li>Risk and stakeholder management</li>
        <li>Budget planning & resource allocation</li>
        <li>Calm, focused, and team-oriented leadership</li>
      </ul>
    `
  },

  member2: {
    name: "<h1>Bob Smith</h1>",
    role: "<h2>UI/UX Designer</h2>",
    bio: `
      <h3>Overview</h3>
      <p>Bob crafts elegant, user-friendly designs that combine creativity with usability. He ensures that digital experiences are engaging, intuitive, and conversion-focused.</p>
      <h3>Highlights</h3>
      <ul>
        <li>7+ years in UI/UX design</li>
        <li>Expert in Figma, Adobe XD, Sketch</li>
        <li>Strong knowledge of usability principles</li>
        <li>Collaborates closely with dev teams</li>
      </ul>
      <h3>Strengths</h3>
      <ul>
        <li>Design thinking & accessibility</li>
        <li>Wireframing to high-fidelity prototyping</li>
        <li>UX research & user flows</li>
        <li>Trend-aware and detail-oriented</li>
      </ul>
    `
  },

  member3: {
    name: "<h1>Carol White</h1>",
    role: "<h2>Front-End Developer</h2>",
    bio: `
      <h3>Overview</h3>
      <p>Carol builds high-performance, responsive websites with clean, maintainable code. She bridges the gap between design and function for seamless user experiences.</p>
      <h3>Highlights</h3>
      <ul>
        <li>6+ years in front-end development</li>
        <li>Skilled in HTML, CSS, JavaScript, React</li>
        <li>Expert in responsive design & accessibility</li>
        <li>Focused on UI consistency and performance</li>
      </ul>
      <h3>Strengths</h3>
      <ul>
        <li>Cross-browser compatibility</li>
        <li>Pixel-perfect implementation</li>
        <li>Collaboration with UI/UX teams</li>
        <li>Continuous performance optimization</li>
      </ul>
    `
  },

  member4: {
    name: "<h1>David Lee</h1>",
    role: "<h2>Back-End Developer</h2>",
    bio: `
      <h3>Overview</h3>
      <p>David designs and maintains secure, scalable server-side systems. He powers data-heavy applications and APIs with robust logic and efficient code.</p>
      <h3>Highlights</h3>
      <ul>
        <li>8+ years in back-end development</li>
        <li>Proficient in Node.js, Python, PHP</li>
        <li>Database expert (MySQL, MongoDB, PostgreSQL)</li>
        <li>Builds scalable, RESTful APIs</li>
      </ul>
      <h3>Strengths</h3>
      <ul>
        <li>Authentication & security integration</li>
        <li>System architecture & deployment</li>
        <li>Cross-team collaboration</li>
        <li>Performance and data integrity focus</li>
      </ul>
    `
  }
};


// Open Modal on Card Click
function openModal(memberKey) {
  const modal = document.getElementById("profileModal");
  const content = profiles[memberKey];
  const modalDetails = document.getElementById("modalDetails");

modalDetails.innerHTML = `
  <h2>${content.name}</h2>
  <h2>Role: ${content.role}</h2>
   ${content.bio}`;

  modal.style.display = "flex";
}

// Close Modal
function closeModal() {
  document.getElementById("profileModal").style.display = "none";
}

//  On Load - Add Card Click Events
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".team-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const memberId = card.getAttribute("data-member");
      openModal(memberId);
    });
  });

  // Dark Mode Toggle
  const toggle = document.getElementById("darkToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

// Filter Cards by Role
function filterByRole() {
  const selectedRole = document.getElementById("roleFilter").value;
  const cards = document.querySelectorAll(".team-card");

  cards.forEach(card => {
    const roleText = card.querySelector(".role").textContent;
    if (selectedRole === "All" || roleText === selectedRole) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const exercises = [
  {
    id: "tennis-ball-roll",
    title: "Tennis Ball Foot Roll",
    category: "Foot release",
    level: "Beginner",
    equipment: "Tennis ball",
    dose: "1-2 minutes per foot",
    why: "Can reduce plantar stiffness and improve tolerance for toe mobility work.",
    summary:
      "Roll slowly from heel to forefoot, then pause in tender spots without forcing pressure.",
    goals: ["Pain relief", "Mobility"],
  },
  {
    id: "toe-splay",
    title: "Toe Splay Practice",
    category: "Foot control",
    level: "Beginner",
    equipment: "None",
    dose: "2 sets of 6-8 slow reps",
    why: "Encourages intrinsic foot muscle control and awareness of big-toe position.",
    summary:
      "Spread the toes gently, keeping the big toe long rather than gripping the floor.",
    goals: ["Foot strength", "Mobility"],
  },
  {
    id: "short-foot",
    title: "Short Foot Hold",
    category: "Foot control",
    level: "Intermediate",
    equipment: "Chair or wall for balance",
    dose: "3 sets of 20-second holds",
    why: "Builds arch support without curling the toes, which may help distribute load better.",
    summary:
      "Draw the ball of the foot slightly toward the heel while keeping the toes relaxed.",
    goals: ["Foot strength", "Balance"],
  },
  {
    id: "ankle-dorsiflexion",
    title: "Wall Ankle Dorsiflexion",
    category: "Ankle mobility",
    level: "Beginner",
    equipment: "Wall",
    dose: "2 sets of 8 reps per side",
    why: "Improved ankle motion may reduce compensations through the forefoot and big toe.",
    summary:
      "Drive the knee toward the wall over the second toe while the heel stays grounded.",
    goals: ["Mobility", "Walking comfort"],
  },
  {
    id: "tibial-rotation",
    title: "Seated Tibial Rotation",
    category: "Knee mobility",
    level: "Beginner",
    equipment: "Chair",
    dose: "2 sets of 8 reps per side",
    why: "Helps coordinate shin rotation, which influences foot mechanics during gait.",
    summary:
      "Rotate the shin inward and outward gently while the foot stays light on the floor.",
    goals: ["Mobility", "Walking comfort"],
  },
  {
    id: "step-down",
    title: "Supported Step-Down",
    category: "Knee control",
    level: "Intermediate",
    equipment: "Low step, wall or rail",
    dose: "2 sets of 6 reps per side",
    why: "Builds knee tracking control so the foot is less likely to collapse inward.",
    summary:
      "Tap the heel down slowly and keep the knee stacked over the middle of the foot.",
    goals: ["Balance", "Walking comfort"],
  },
  {
    id: "hip-90-90",
    title: "90/90 Hip Switch",
    category: "Hip mobility",
    level: "Beginner",
    equipment: "Mat",
    dose: "1-2 minutes",
    why: "Hip rotation can affect how the knee and foot load during standing and walking.",
    summary:
      "Switch both knees side to side with control, staying tall through the torso.",
    goals: ["Mobility", "Walking comfort"],
  },
  {
    id: "hip-abduction",
    title: "Side-Lying Hip Abduction",
    category: "Hip strength",
    level: "Beginner",
    equipment: "Mat",
    dose: "2 sets of 10 reps per side",
    why: "Stronger lateral hip muscles can improve lower-limb alignment and balance.",
    summary:
      "Lift the top leg slightly behind you, keeping the pelvis stacked and steady.",
    goals: ["Balance", "Walking comfort"],
  },
  {
    id: "single-leg-balance",
    title: "Single-Leg Balance Reach",
    category: "Balance",
    level: "Intermediate",
    equipment: "Wall nearby",
    dose: "3 rounds of 20 seconds per side",
    why: "Challenges foot tripod control and whole-leg stability during stance.",
    summary:
      "Balance on one foot and reach the other leg lightly forward and to the side.",
    goals: ["Balance", "Foot strength"],
  },
];

const milestoneDefinitions = [
  {
    points: 60,
    title: "First Foundation",
    detail: "You have built the first layer of daily foot-care consistency.",
  },
  {
    points: 180,
    title: "Steady Support",
    detail: "You are stacking enough reps to reinforce better movement habits.",
  },
  {
    points: 360,
    title: "Chain Builder",
    detail: "Your practice now includes the foot, knee, and hip working together.",
  },
];

const focusOptions = [
  {
    label: "Pain relief",
    picks: ["tennis-ball-roll", "toe-splay", "ankle-dorsiflexion"],
    title: "Foot release + gentle mobility",
    description:
      "Begin with calming soft-tissue work, then restore movement through the foot and ankle.",
    playlistId: "37i9dQZF1DX3rxVfibe1L0",
  },
  {
    label: "Mobility",
    picks: ["tennis-ball-roll", "ankle-dorsiflexion", "hip-90-90", "tibial-rotation"],
    title: "Foot and chain mobility",
    description:
      "This sequence opens the foot, ankle, shin, and hips so walking mechanics can feel less restricted.",
    playlistId: "37i9dQZF1DX1s9knjP51Oa",
  },
  {
    label: "Foot strength",
    picks: ["toe-splay", "short-foot", "single-leg-balance"],
    title: "Intrinsic foot control",
    description:
      "A short progression focused on arch support, toe awareness, and stance control.",
    playlistId: "37i9dQZF1DX6VdMW310YC7",
  },
  {
    label: "Balance",
    picks: ["short-foot", "hip-abduction", "single-leg-balance", "step-down"],
    title: "Stability from hip to foot",
    description:
      "Use this when you want more control through single-leg stance and knee tracking.",
    playlistId: "37i9dQZF1DX8ymr6UES7vc",
  },
  {
    label: "Walking comfort",
    picks: ["ankle-dorsiflexion", "tibial-rotation", "hip-90-90", "step-down"],
    title: "Walking mechanics support",
    description:
      "A chain-based routine for smoother roll-through and better lower-limb coordination.",
    playlistId: "37i9dQZF1DX889U0CL85jj",
  },
];

const spotifyConfig = {
  clientId: "YOUR_SPOTIFY_CLIENT_ID",
  scopes: ["user-read-email", "user-read-private", "streaming"],
};

const storageKey = "toe-align-progress";
const spotifyStorageKey = "toe-align-spotify-connected";
const today = new Date().toISOString().slice(0, 10);
const categoryFilters = ["All", ...new Set(exercises.map((exercise) => exercise.category))];

const categoryFiltersNode = document.querySelector("#category-filters");
const goalFiltersNode = document.querySelector("#goal-filters");
const cardsNode = document.querySelector("#exercise-cards");
const routineListNode = document.querySelector("#routine-list");
const pointsValueNode = document.querySelector("#points-value");
const streakValueNode = document.querySelector("#streak-value");
const sessionsValueNode = document.querySelector("#sessions-value");
const milestoneListNode = document.querySelector("#milestone-list");
const spotifyStatusNode = document.querySelector("#spotify-status");
const spotifyConnectNode = document.querySelector("#spotify-connect");
const spotifyOpenNode = document.querySelector("#spotify-open");
const spotifyEmbedNode = document.querySelector("#spotify-embed");
const template = document.querySelector("#exercise-card-template");
const focusTitleNode = document.querySelector("#focus-title");
const focusDescriptionNode = document.querySelector("#focus-description");

let activeCategory = "All";
let activeGoal = focusOptions[1].label;
let progress = loadProgress();

function loadProgress() {
  const fallback = {
    points: 0,
    streak: 0,
    sessionsCompleted: 0,
    lastCompletionDate: null,
    completedByDate: {},
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function renderChips(container, options, activeValue, onClick) {
  container.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${option === activeValue ? " active" : ""}`;
    button.textContent = option;
    button.addEventListener("click", () => onClick(option));
    container.appendChild(button);
  });
}

function updateProgress(exerciseId) {
  const completedToday = new Set(progress.completedByDate[today] ?? []);
  const firstExerciseToday = completedToday.size === 0;
  const isNewExerciseToday = !completedToday.has(exerciseId);

  if (isNewExerciseToday) {
    progress.points += 15;
    completedToday.add(exerciseId);
    progress.completedByDate[today] = Array.from(completedToday);
  } else {
    progress.points += 5;
  }

  if (firstExerciseToday) {
    progress.sessionsCompleted += 1;

    if (!progress.lastCompletionDate) {
      progress.streak = 1;
    } else {
      const previousDate = new Date(progress.lastCompletionDate);
      const currentDate = new Date(today);
      const dayGap = Math.round((currentDate - previousDate) / 86400000);

      if (dayGap === 1) {
        progress.streak += 1;
      } else if (dayGap > 1) {
        progress.streak = 1;
      }
    }

    progress.lastCompletionDate = today;
  }

  saveProgress();
  renderDashboard();
}

function renderDashboard() {
  pointsValueNode.textContent = progress.points;
  streakValueNode.textContent = progress.streak;
  sessionsValueNode.textContent = progress.sessionsCompleted;
  milestoneListNode.innerHTML = "";

  milestoneDefinitions.forEach((milestone) => {
    const complete = progress.points >= milestone.points;
    const remainingPoints = Math.max(milestone.points - progress.points, 0);
    const item = document.createElement("article");
    item.className = `milestone-item${complete ? " complete" : ""}`;
    item.innerHTML = `
      <strong>${complete ? "Unlocked" : `${remainingPoints} pts to go`} · ${milestone.title}</strong>
      <p>${milestone.detail}</p>
    `;
    milestoneListNode.appendChild(item);
  });
}

function renderCards() {
  cardsNode.innerHTML = "";

  const filteredExercises = exercises.filter((exercise) => {
    const categoryMatch = activeCategory === "All" || exercise.category === activeCategory;
    const goalMatch = exercise.goals.includes(activeGoal);
    return categoryMatch && goalMatch;
  });

  const visibleExercises =
    filteredExercises.length > 0
      ? filteredExercises
      : exercises.filter(
          (exercise) => activeCategory === "All" || exercise.category === activeCategory,
        );

  visibleExercises.forEach((exercise, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const goalsNode = card.querySelector(".card-goals");

    card.style.animationDelay = `${index * 70}ms`;
    card.querySelector(".card-category").textContent = exercise.category;
    card.querySelector(".card-level").textContent = exercise.level;
    card.querySelector(".card-title").textContent = exercise.title;
    card.querySelector(".card-summary").textContent = exercise.summary;
    card.querySelector(".card-why").textContent = exercise.why;
    card.querySelector(".card-dose").textContent = exercise.dose;
    card.querySelector(".card-equipment").textContent = exercise.equipment;

    exercise.goals.forEach((goal) => {
      const tag = document.createElement("span");
      tag.textContent = goal;
      goalsNode.appendChild(tag);
    });

    card.querySelector(".complete-button").addEventListener("click", () => {
      updateProgress(exercise.id);
    });

    cardsNode.appendChild(card);
  });
}

function renderRoutine() {
  const selectedFocus = focusOptions.find((option) => option.label === activeGoal) ?? focusOptions[0];
  focusTitleNode.textContent = selectedFocus.title;
  focusDescriptionNode.textContent = selectedFocus.description;
  routineListNode.innerHTML = "";

  selectedFocus.picks
    .map((id) => exercises.find((exercise) => exercise.id === id))
    .filter(Boolean)
    .forEach((exercise) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${exercise.title}</strong>
        <span>${exercise.dose}</span>
        <span>${exercise.summary}</span>
      `;
      routineListNode.appendChild(item);
    });
}

function renderSpotify() {
  const selectedFocus = focusOptions.find((option) => option.label === activeGoal) ?? focusOptions[0];
  const embedUrl = `https://open.spotify.com/embed/playlist/${selectedFocus.playlistId}?utm_source=generator`;
  const openUrl = `https://open.spotify.com/playlist/${selectedFocus.playlistId}`;
  const spotifyAuthorized = localStorage.getItem(spotifyStorageKey) === "true";

  spotifyEmbedNode.src = embedUrl;
  spotifyOpenNode.href = openUrl;
  spotifyStatusNode.textContent = spotifyAuthorized
    ? `Spotify is marked connected. Current playlist matches your ${activeGoal.toLowerCase()} focus.`
    : "Spotify auth is scaffolded. Add your client ID in app.js to turn the connect button into OAuth, or use the embedded playlist now.";
}

function setCategory(option) {
  activeCategory = option;
  renderChips(categoryFiltersNode, categoryFilters, activeCategory, setCategory);
  renderCards();
}

function setGoal(option) {
  activeGoal = option;
  renderChips(goalFiltersNode, focusOptions.map((item) => item.label), activeGoal, setGoal);
  renderRoutine();
  renderCards();
  renderSpotify();
}

function connectSpotify() {
  if (spotifyConfig.clientId === "YOUR_SPOTIFY_CLIENT_ID") {
    spotifyStatusNode.textContent =
      "Add your Spotify app client ID in app.js to enable OAuth. The embedded playlist is already working without login.";
    return;
  }

  const redirectUri = window.location.href;
  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.set("client_id", spotifyConfig.clientId);
  authUrl.searchParams.set("response_type", "token");
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", spotifyConfig.scopes.join(" "));
  window.location.href = authUrl.toString();
}

if (window.location.hash.includes("access_token")) {
  localStorage.setItem(spotifyStorageKey, "true");
  history.replaceState({}, document.title, window.location.pathname);
}

spotifyConnectNode.addEventListener("click", connectSpotify);

renderChips(categoryFiltersNode, categoryFilters, activeCategory, setCategory);
renderChips(goalFiltersNode, focusOptions.map((option) => option.label), activeGoal, setGoal);
renderDashboard();
renderRoutine();
renderCards();
renderSpotify();

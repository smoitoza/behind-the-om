/* ============================================================
   YogaRate — App Logic
   ============================================================ */

// ==================== DATA ====================

const STUDIOS = [
  {
    id: "goleta",
    name: "CorePower Yoga Goleta",
    address: "6992 Market Place Drive",
    city: "Goleta",
    state: "CA",
    zip: "93117",
    county: "Santa Barbara",
    phone: "(805) 845-2574",
    amenities: ["Mat & Towel Rentals", "Locker Room", "Showers", "Free Parking"],
    manager: "Mikayla F.",
    teachers: ["Steven P.", "Anita F.", "Kaitlyn V.", "Fiona H.", "Melanie C.", "Claire Z.", "Jacqueline M.", "Jadelynn F.", "Maggie N.", "Justin H.", "Talia R.", "Isabella M.", "Andra V.", "Adam P.", "Emerson N.", "Anthony N.", "Corinna K.", "Carina M.", "Itzy C.", "Grace S.", "Sabrina Z.", "Jen M.", "Kimberly Z.", "Kary O.", "Makayla A.", "Erika G.", "Mikayla F."],
    cpUrl: "https://www.corepoweryoga.com/yoga-studios/ca/santa-barbara/goleta"
  },
  {
    id: "la-cumbre",
    name: "CorePower Yoga La Cumbre",
    address: "3889 La Cumbre Plaza Lane",
    city: "Santa Barbara",
    state: "CA",
    zip: "93105",
    county: "Santa Barbara",
    phone: "(805) 770-5455",
    amenities: ["Mat & Towel Rentals", "Locker Room", "Showers"],
    manager: null,
    teachers: ["Allison P.", "Annie O.", "Anthony N.", "Alora L.", "Aurora W.", "Brandon C.", "Caroline M.", "Dave B.", "Debbie M.", "Emily K.", "Erin T.", "Grace O.", "Jaret G.", "Jen M.", "Jen P.", "Julia A.", "Kaylee N.", "Kristy H.", "Laney B.", "Mackenzie B.", "Maelle B.", "Mary T.", "Matt D.", "Ruby H.", "Sati N.", "Valerie E.", "Vera J.", "Victor S.", "Will C."],
    cpUrl: "https://www.corepoweryoga.com/yoga-studios/ca/santa-barbara/la-cumbre"
  },
  {
    id: "state-street",
    name: "CorePower Yoga State Street",
    address: "1129 State Street",
    city: "Santa Barbara",
    state: "CA",
    zip: "93101",
    county: "Santa Barbara",
    phone: "(805) 884-9642",
    amenities: ["Mat & Towel Rentals", "Locker Room", "Showers"],
    manager: "Gabby E.",
    teachers: ["Gabby E.", "Liya Z.", "Shawn W.", "Becca B.", "Riley M.", "Sati N.", "Paige H.", "Lauren F.", "Sarah P.", "Sophia G.", "Dani N.", "Anna G.", "Lauren P.", "Rynell C.", "Katelyn V.", "Carina M.", "Kimberly Z.", "Taylor S.", "Alyson M.", "Isabella D.", "Danica Y."],
    cpUrl: "https://www.corepoweryoga.com/yoga-studios/ca/santa-barbara/state-street-santa-barbara"
  },
  {
    id: "thousand-oaks",
    name: "CorePower Yoga Thousand Oaks",
    address: "1730 East Avenida de Los Arboles, Unit A",
    city: "Thousand Oaks",
    state: "CA",
    zip: "91362",
    county: "Ventura",
    phone: "(805) 241-4557",
    amenities: ["Mat & Towel Rentals", "Locker Room", "Showers"],
    manager: "Amanda M.",
    teachers: ["Alayna P.", "Amanda M.", "Ariana G.", "Ash G.", "Bella H.", "Brie W.", "Britt L.", "Brittany P.", "Brooklynn R.", "Camille S.", "Cassidy M.", "Charlotte W.", "Debbie H.", "Dena O.", "Emma C.", "Emma H.", "Esther P.", "Hans W.", "Holland S.", "Jaylynn B.", "Jayne F.", "Jeanette D.", "Jessica H.", "Joshi A.", "Justin R.", "Kaitlyn G.", "Katia K.", "Kayla S.", "Kaytie C.", "Kim B.", "Madison H.", "Mia W.", "Olivia P.", "Paige P.", "Rebecca M.", "Rylie W.", "Sara C.", "Shayna M.", "Shelby D.", "Skyler H.", "Spencer O.", "Valaree V."],
    cpUrl: "https://www.corepoweryoga.com/yoga-studios/ca/santa-barbara/thousand-oaks"
  },
  {
    id: "ventura",
    name: "CorePower Yoga Ventura",
    address: "472 S Mills Road",
    city: "Ventura",
    state: "CA",
    zip: "93003",
    county: "Ventura",
    phone: "(805) 535-5588",
    amenities: ["Mat & Towel Rentals", "Locker Room", "Showers"],
    manager: null,
    teachers: ["Madison B.", "Brie T.", "Faye T.", "Kesh M.", "Cody B.", "Aundrea P.", "Hans W.", "Katy T.", "Liz R.", "Donna M.", "Bella R.", "Nate B.", "Jessica G.", "Eden W.", "Solana M.", "Kailani M.", "Andrea W.", "Julie R.", "Manny B."],
    cpUrl: "https://www.corepoweryoga.com/yoga-studios/ca/santa-barbara/ventura"
  },
  {
    id: "westlake-village",
    name: "CorePower Yoga Westlake Village",
    address: "982 South Westlake Boulevard, Suite 9",
    city: "Thousand Oaks",
    state: "CA",
    zip: "91361",
    county: "Ventura",
    phone: "(805) 497-4700",
    amenities: ["Mat & Towel Rentals", "Locker Room", "Showers", "Parking"],
    manager: "Jessica R.",
    teachers: ["Jessica R.", "Alayna P.", "Amanda M.", "Arianna M.", "Ash G.", "Brittany P.", "Brie W.", "Caroline N.", "Charlotte W.", "Chelsea P.", "Emma C.", "Emma H.", "Esther P.", "Holland S.", "Jaylynn B.", "Jayne F.", "Jeanette D.", "Jennifer V.", "Jessica H.", "Joshi A.", "Justin R.", "Kaitlyn G.", "Kayla S.", "Kaytie C.", "Kim B.", "Madison H.", "Matt T.", "Matthew M.", "Mia W.", "Noelle J.", "Obi U.", "Olivia P.", "Paige P.", "Paige S.", "Paula M.", "Rebecca M.", "Ross M.", "Shayna M.", "Solana M.", "Spencer W.", "Rylie W."],
    cpUrl: "https://www.corepoweryoga.com/yoga-studios/ca/santa-barbara/westlake-village"
  }
];

const CLASS_TYPES = [
  { id: "c1", name: "CorePower 1 (C1)", shortName: "C1", description: "Explore the fundamental principles and postures of Vinyasa yoga with no added heat.", heated: false, intensity: "Low-Medium" },
  { id: "c2", name: "CorePower 2 (C2)", shortName: "C2", description: "Turn stress into sweat as you move through more challenging postures.", heated: true, intensity: "Medium-High" },
  { id: "ys", name: "Yoga Sculpt (YS)", shortName: "YS", description: "Yoga, cardio and strength moves boost metabolism and build lean muscle.", heated: true, intensity: "High" },
  { id: "hpf", name: "Hot Power Fusion (HPF)", shortName: "HPF", description: "Where the meditative qualities of hot yoga and the intensity of power yoga meet.", heated: true, intensity: "Medium" },
  { id: "csx", name: "CorePower Strength X (CSX)", shortName: "CSX", description: "Heart-pumping, strength training workout with energizing breathwork.", heated: false, intensity: "High" },
  { id: "cr", name: "CoreRestore (CR)", shortName: "CR", description: "Reboot and rebuild with postures focused on stretching and breathing with no added heat.", heated: false, intensity: "Low" }
];

// Heat level labels
const HEAT_LABELS = ['', 'Cool', 'Mild', 'Warm', 'Hot', 'Inferno'];

// Sample reviews — 3-4 per studio (now with heatRating)
const SAMPLE_REVIEWS = [
  // Goleta
  { studioId: "goleta", teacher: "Steven P.", classType: "c2", rating: 5, teacherRating: 5, cleanRating: 4, vibeRating: 5, diffRating: 5, heatRating: 4, text: "Love the C2 classes here! Steven always pushes us just the right amount. The heat is intense but so rewarding. Studio could use better ventilation on really hot days, but overall my favorite location.", name: "Sarah M.", date: "2026-02-20" },
  { studioId: "goleta", teacher: "Kaitlyn V.", classType: "ys", rating: 4, teacherRating: 5, cleanRating: 4, vibeRating: 4, diffRating: 4, heatRating: 4, text: "Yoga Sculpt with Kaitlyn is the best workout I've ever had. Worth every penny. She keeps the energy up and the playlist is always fire. Only downside is it gets really crowded on weekday evenings.", name: "Mike R.", date: "2026-02-15" },
  { studioId: "goleta", teacher: "General Studio Review", classType: "c1", rating: 4, teacherRating: 4, cleanRating: 5, vibeRating: 4, diffRating: 4, heatRating: 2, text: "Great for beginners. The C1 classes are welcoming and the staff is always friendly. Free parking is a huge plus — hard to find in Goleta during busy hours. Clean facilities and good mat rentals.", name: "Priya K.", date: "2026-01-28" },
  { studioId: "goleta", teacher: "Claire Z.", classType: "hpf", rating: 3, teacherRating: 3, cleanRating: 3, vibeRating: 4, diffRating: 3, heatRating: 5, text: "The HPF class was decent but felt a bit rushed. Room was really warm which I know is the point, but ventilation could be improved. Claire is nice but I've had better instruction at other locations. Lockers are small.", name: "Tom L.", date: "2026-01-10" },

  // La Cumbre
  { studioId: "la-cumbre", teacher: "Brandon C.", classType: "c2", rating: 5, teacherRating: 5, cleanRating: 5, vibeRating: 5, diffRating: 5, heatRating: 4, text: "Brandon's C2 class is absolutely incredible. He has a way of making challenging sequences feel accessible while still pushing you. The La Cumbre location is always immaculate and the energy is just *chef's kiss*.", name: "Jess W.", date: "2026-02-22" },
  { studioId: "la-cumbre", teacher: "Sati N.", classType: "cr", rating: 5, teacherRating: 5, cleanRating: 4, vibeRating: 5, diffRating: 5, heatRating: 1, text: "CoreRestore with Sati is exactly what I need after a long week. She creates such a peaceful atmosphere and the stretches are therapeutic. I always leave feeling like a new person. Highly recommend for anyone dealing with stress.", name: "Emma T.", date: "2026-02-18" },
  { studioId: "la-cumbre", teacher: "General Studio Review", classType: "ys", rating: 3, teacherRating: 3, cleanRating: 4, vibeRating: 3, diffRating: 2, heatRating: 4, text: "The Yoga Sculpt class was marketed as suitable for all levels, but it felt really advanced. I'm intermediate and struggled to keep up. Music was a bit too loud for my taste. Nice studio though — clean and well-maintained.", name: "Daniel H.", date: "2026-02-05" },
  { studioId: "la-cumbre", teacher: "Matt D.", classType: "csx", rating: 4, teacherRating: 4, cleanRating: 4, vibeRating: 4, diffRating: 4, heatRating: 2, text: "CSX with Matt is a solid workout. Good mix of strength and breathwork. Could use more weight options — the 8lb and 10lb dumbbells are always taken. Overall a great experience and I'll keep coming back.", name: "Rachel P.", date: "2026-01-30" },

  // State Street
  { studioId: "state-street", teacher: "Gabby E.", classType: "c2", rating: 5, teacherRating: 5, cleanRating: 5, vibeRating: 5, diffRating: 5, heatRating: 5, text: "State Street is hands down the best CorePower in the area. Gabby sets the tone for the whole studio — her C2 classes are challenging, well-paced, and inspiring. Downtown location means great energy from the crowd too.", name: "Aiden K.", date: "2026-02-25" },
  { studioId: "state-street", teacher: "Liya Z.", classType: "ys", rating: 4, teacherRating: 5, cleanRating: 4, vibeRating: 5, diffRating: 4, heatRating: 4, text: "Liya's Sculpt class is always a party. Her music choices are perfect and she brings serious energy. Only knock is that the studio is a bit small so it gets very warm and crowded on popular time slots.", name: "Nina S.", date: "2026-02-12" },
  { studioId: "state-street", teacher: "Sarah P.", classType: "c1", rating: 4, teacherRating: 4, cleanRating: 5, vibeRating: 4, diffRating: 5, heatRating: 2, text: "As a total beginner, I was nervous to try CorePower. Sarah made the C1 class so welcoming. She came up to me before class and checked in. The studio on State Street is beautiful and clean. Will definitely be back.", name: "Chris B.", date: "2026-01-22" },
  { studioId: "state-street", teacher: "General Studio Review", classType: "hpf", rating: 3, teacherRating: 3, cleanRating: 3, vibeRating: 4, diffRating: 3, heatRating: 5, text: "Decent studio but parking in downtown SB is a nightmare. I've been late to class twice because of it. The HPF class itself was fine — good heat, decent flow. Showers are small. Would come more often if parking wasn't such a hassle.", name: "Jordan M.", date: "2026-01-08" },

  // Thousand Oaks
  { studioId: "thousand-oaks", teacher: "Brie W.", classType: "ys", rating: 5, teacherRating: 5, cleanRating: 5, vibeRating: 5, diffRating: 5, heatRating: 3, text: "Brie's Yoga Sculpt is unmatched. She brings so much positive energy and somehow makes burpees feel fun? The Thousand Oaks studio is spacious with great amenities. My go-to class every Saturday morning.", name: "Kara F.", date: "2026-02-24" },
  { studioId: "thousand-oaks", teacher: "Charlotte W.", classType: "c2", rating: 4, teacherRating: 4, cleanRating: 4, vibeRating: 4, diffRating: 4, heatRating: 3, text: "Solid C2 experience. Charlotte knows her stuff and gives good adjustments. Studio is clean and well-organized. Only wish they had more evening class options — the schedule is a bit limited after 7pm.", name: "Brian D.", date: "2026-02-10" },
  { studioId: "thousand-oaks", teacher: "General Studio Review", classType: "c1", rating: 4, teacherRating: 4, cleanRating: 5, vibeRating: 4, diffRating: 4, heatRating: 2, text: "Love this location! Staff is always welcoming and the studio is very clean. The C1 classes are perfect for my fitness level. Plenty of parking which is great. Would love to see more CoreRestore classes on the schedule.", name: "Lisa N.", date: "2026-01-20" },
  { studioId: "thousand-oaks", teacher: "Hans W.", classType: "csx", rating: 3, teacherRating: 4, cleanRating: 3, vibeRating: 3, diffRating: 2, heatRating: 1, text: "CSX was way harder than I expected. The 'high intensity' label doesn't quite capture it — this is basically CrossFit. Hans is a good instructor but moved through exercises very fast. Also the A/C seemed broken during my visit.", name: "Alex T.", date: "2026-01-05" },

  // Ventura
  { studioId: "ventura", teacher: "Faye T.", classType: "c2", rating: 4, teacherRating: 5, cleanRating: 4, vibeRating: 5, diffRating: 4, heatRating: 3, text: "Faye is an exceptional teacher. Her C2 flows are creative and she has a soothing voice that keeps you centered even during challenging poses. The Ventura studio has great vibes — feels like a community.", name: "Megan C.", date: "2026-02-21" },
  { studioId: "ventura", teacher: "Kesh M.", classType: "hpf", rating: 4, teacherRating: 4, cleanRating: 4, vibeRating: 4, diffRating: 5, heatRating: 5, text: "Hot Power Fusion with Kesh is exactly what it sounds like — hot and powerful. Good balance of meditative moments and intense sequences. The Ventura location is cozy but never feels too cramped.", name: "James L.", date: "2026-02-08" },
  { studioId: "ventura", teacher: "General Studio Review", classType: "c1", rating: 5, teacherRating: 4, cleanRating: 5, vibeRating: 5, diffRating: 5, heatRating: 2, text: "This is the hidden gem of CorePower locations. Never too crowded, always clean, and the community is incredibly warm. Every teacher I've had here has been fantastic. Love the close-to-the-beach location.", name: "Olivia R.", date: "2026-01-25" },

  // Westlake Village
  { studioId: "westlake-village", teacher: "Jessica R.", classType: "c2", rating: 5, teacherRating: 5, cleanRating: 5, vibeRating: 5, diffRating: 5, heatRating: 4, text: "Jessica runs a tight ship at Westlake Village. Her C2 classes are challenging but inclusive. The studio itself is gorgeous — clean, modern, and well-maintained. Parking is convenient. My home studio!", name: "Taylor M.", date: "2026-02-23" },
  { studioId: "westlake-village", teacher: "Joshi A.", classType: "ys", rating: 4, teacherRating: 5, cleanRating: 4, vibeRating: 5, diffRating: 4, heatRating: 4, text: "Joshi's Sculpt class is legendary. The guy has infectious energy and the playlists are always perfect. I drove 30 minutes specifically for his class and it was absolutely worth it. Studio is great too.", name: "Sam K.", date: "2026-02-14" },
  { studioId: "westlake-village", teacher: "General Studio Review", classType: "cr", rating: 4, teacherRating: 4, cleanRating: 5, vibeRating: 5, diffRating: 4, heatRating: 1, text: "Beautiful studio with a really chill vibe. The CoreRestore class was exactly what I needed — gentle stretching in a dimly lit room with calming music. Felt like a spa experience. Would love more evening CR slots.", name: "Lauren W.", date: "2026-02-02" },
  { studioId: "westlake-village", teacher: "Ash G.", classType: "c1", rating: 3, teacherRating: 3, cleanRating: 4, vibeRating: 3, diffRating: 3, heatRating: 2, text: "Decent C1 class but nothing extraordinary. The instructor seemed a bit distracted and didn't offer many modifications. Studio is nice and clean though. Might try a different teacher next time — heard great things about Jessica R.", name: "Dave P.", date: "2026-01-15" }
];

// ==================== SUPABASE ====================

const SUPABASE_URL = 'https://qmyvvtdijdkwahcpersk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_zkLTUgyWSMZKeCTIyJgsPw_IN11nAPN';
let supabaseClient = null;
try {
  if (window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.warn('Supabase init failed:', e);
}

// Reviews store — starts with sample data, merges DB reviews on load
let reviews = [...SAMPLE_REVIEWS];
let dbReviews = [];

async function loadReviewsFromDB() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient
      .from('reviews')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });
    if (error) { console.error('Supabase load error:', error); return; }
    // Map DB rows to app format
    dbReviews = (data || []).map(r => ({
      studioId: r.studio_id,
      teacher: r.teacher,
      classType: r.class_type,
      rating: r.rating,
      teacherRating: r.teacher_rating || r.rating,
      cleanRating: r.clean_rating || r.rating,
      vibeRating: r.vibe_rating || r.rating,
      diffRating: r.diff_rating || r.rating,
      heatRating: r.heat_rating || 0,
      text: r.review_text || '',
      name: r.reviewer_name,
      date: r.review_date,
      fromDB: true
    }));
    // Merge: DB reviews first, then sample data
    reviews = [...dbReviews, ...SAMPLE_REVIEWS];
    // Re-render current view
    if (currentView === 'home') renderStudios();
    else if (currentView === 'studio' && currentStudio) renderStudioDetail(currentStudio);
  } catch (err) {
    console.error('Failed to load reviews:', err);
  }
}

async function saveReviewToDB(review) {
  if (!supabaseClient) return;
  try {
    const { error } = await supabaseClient.from('reviews').insert({
      studio_id: review.studioId,
      teacher: review.teacher,
      class_type: review.classType,
      rating: review.rating,
      teacher_rating: review.teacherRating,
      clean_rating: review.cleanRating,
      vibe_rating: review.vibeRating,
      diff_rating: review.diffRating,
      heat_rating: review.heatRating,
      review_text: review.text,
      reviewer_name: review.name,
      review_date: review.date
    });
    if (error) console.error('Supabase save error:', error);
  } catch (err) {
    console.error('Failed to save review:', err);
  }
}

// App state
let currentView = 'home';
let currentStudio = null;
let currentCounty = 'all';

// Avatar color palette
const AVATAR_COLORS = [
  '#c45d3e', '#6b8f71', '#8b6c5c', '#5a7a8a', '#9b7a4f',
  '#7a6b8f', '#5c8b6c', '#8f6b7a', '#6c8b5c', '#4f7a9b'
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

// ==================== STARS ====================

function starSVG(filled) {
  return filled
    ? '<svg viewBox="0 0 24 24" fill="currentColor" style="color:var(--color-star)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="currentColor" style="color:var(--color-star-empty)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
}

function renderStars(rating, size) {
  const sz = size || 16;
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span style="width:${sz}px;height:${sz}px;display:inline-block">${starSVG(i <= Math.round(rating))}</span>`;
  }
  return html;
}

function getStudioRating(studioId) {
  const studioReviews = reviews.filter(r => r.studioId === studioId);
  if (studioReviews.length === 0) return { avg: 0, count: 0 };
  const avg = studioReviews.reduce((sum, r) => sum + r.rating, 0) / studioReviews.length;
  return { avg: Math.round(avg * 10) / 10, count: studioReviews.length };
}

// ==================== NAVIGATION ====================

function navigateTo(view, data) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + view);
  if (target) {
    target.classList.add('active');
    // Re-trigger animation
    target.style.animation = 'none';
    target.offsetHeight; // force reflow
    target.style.animation = '';
  }

  currentView = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (view === 'home') {
    renderStudios();
    history.pushState(null, '', '#');
  } else if (view === 'studio' && data) {
    currentStudio = data;
    renderStudioDetail(data);
    history.pushState(null, '', '#studio/' + data);
  } else if (view === 'teacher' && data) {
    renderTeacherDetail(data);
    history.pushState(null, '', '#teacher/' + encodeURIComponent(data));
  }
}

// ==================== STUDIO CARDS ====================

function renderStudios() {
  const grid = document.getElementById('studios-grid');
  const search = document.getElementById('search-input').value.toLowerCase();

  let filtered = STUDIOS.filter(s => {
    const matchSearch = !search ||
      s.name.toLowerCase().includes(search) ||
      s.city.toLowerCase().includes(search);
    const matchCounty = currentCounty === 'all' || s.county === currentCounty;
    return matchSearch && matchCounty;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <p>No studios found matching your search.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(studio => {
    const { avg, count } = getStudioRating(studio.id);
    const ratingDisplay = count > 0 ? avg.toFixed(1) : '--';
    const ratingText = count > 0 ? `${ratingDisplay} · ${count} review${count !== 1 ? 's' : ''}` : 'No reviews yet';

    return `
      <article class="studio-card" onclick="navigateTo('studio', '${studio.id}')" tabindex="0" role="button" aria-label="View ${studio.name}">
        <div class="studio-card-header">
          <div>
            <h2 class="studio-card-name">${studio.name.replace('CorePower Yoga ', '')}</h2>
            <p class="studio-card-address">${studio.address}, ${studio.city}, CA ${studio.zip}</p>
          </div>
          <span class="studio-card-county">${studio.county}</span>
        </div>
        <div class="studio-card-rating">
          <div class="stars">${renderStars(avg, 16)}</div>
          <span class="rating-text">${ratingText}</span>
        </div>
        <div class="studio-card-footer">
          <span class="studio-card-meta">${studio.teachers.length} teachers · ${studio.amenities.length} amenities</span>
          <span class="studio-card-btn">View Studio <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </div>
      </article>`;
  }).join('');
}

function filterStudios() {
  renderStudios();
}

function setCountyFilter(county, btn) {
  currentCounty = county;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderStudios();
}

// ==================== STUDIO DETAIL ====================

// Track current class filter for studio detail view
let currentClassFilter = 'all';

function getAvgHeatByClass(studioId) {
  const studioReviews = reviews.filter(r => r.studioId === studioId && r.heatRating);
  const byClass = {};
  studioReviews.forEach(r => {
    if (!byClass[r.classType]) byClass[r.classType] = [];
    byClass[r.classType].push(r.heatRating);
  });
  const result = {};
  Object.keys(byClass).forEach(ct => {
    const arr = byClass[ct];
    const avg = arr.reduce((s, v) => s + v, 0) / arr.length;
    result[ct] = { avg: Math.round(avg * 10) / 10, count: arr.length };
  });
  return result;
}

function filterStudioReviews(classTypeId) {
  currentClassFilter = classTypeId;
  // Re-render just the reviews list and update active tab
  document.querySelectorAll('.class-filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.classType === classTypeId);
  });
  const studioReviews = reviews.filter(r => r.studioId === currentStudio);
  const filtered = classTypeId === 'all' ? studioReviews : studioReviews.filter(r => r.classType === classTypeId);
  const listEl = document.getElementById('studio-reviews-list');
  if (listEl) {
    listEl.innerHTML = filtered.length === 0
      ? `<div class="empty-state"><p>No reviews for this class type yet.</p></div>`
      : filtered.map(renderReviewCard).join('');
  }
}

function renderStudioDetail(studioId) {
  const studio = STUDIOS.find(s => s.id === studioId);
  if (!studio) return;
  currentClassFilter = 'all';

  const { avg, count } = getStudioRating(studioId);
  const studioReviews = reviews.filter(r => r.studioId === studioId);

  // Build class type filter tabs — only show classes that have reviews
  const reviewedClassTypes = [...new Set(studioReviews.map(r => r.classType))];
  const classFilterHTML = reviewedClassTypes.length > 1 ? `
    <div class="class-filter-tabs">
      <button class="class-filter-tab active" data-class-type="all" onclick="filterStudioReviews('all')">All Classes</button>
      ${reviewedClassTypes.map(ctId => {
        const ct = CLASS_TYPES.find(c => c.id === ctId);
        return ct ? `<button class="class-filter-tab" data-class-type="${ct.id}" onclick="filterStudioReviews('${ct.id}')">${ct.shortName}</button>` : '';
      }).join('')}
    </div>
  ` : '';



  const container = document.getElementById('studio-detail');
  container.innerHTML = `
    <button class="back-link" onclick="navigateTo('home')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to Studios
    </button>

    <div class="detail-header">
      <h1 class="detail-title">${studio.name}</h1>
      <p class="detail-address">${studio.address}, ${studio.city}, CA ${studio.zip}</p>
      <p class="detail-phone">${studio.phone}</p>
      ${studio.cpUrl ? `
        <a href="${studio.cpUrl}" target="_blank" rel="noopener noreferrer" class="cp-schedule-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          View Class Schedule on CorePower
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      ` : ''}
      ${count > 0 ? `
        <div class="detail-rating">
          <div class="stars">${renderStars(avg, 20)}</div>
          <span class="rating-num">${avg.toFixed(1)}</span>
          <span class="rating-count">(${count} review${count !== 1 ? 's' : ''})</span>
        </div>
      ` : `
        <div class="detail-rating">
          <span class="rating-count">No reviews yet — be the first!</span>
        </div>
      `}
      <div class="detail-amenities">
        ${studio.amenities.map(a => `
          <span class="amenity-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
            ${a}
          </span>
        `).join('')}
      </div>
    </div>

    <div class="section-header">
      <h2 class="section-title">Teachers</h2>
      <span class="section-count">${studio.teachers.length} teachers</span>
    </div>
    <div class="teacher-grid">
      ${[...studio.teachers].sort((a, b) => a.localeCompare(b)).map(t => `
        <button class="teacher-chip" onclick="navigateTo('teacher', '${t}')">
          <div class="teacher-avatar" style="background:${getAvatarColor(t)}">${getInitials(t)}</div>
          <span class="teacher-chip-name">${t}</span>
        </button>
      `).join('')}
    </div>

    <div class="section-header">
      <h2 class="section-title">Reviews</h2>
      <button class="btn btn-primary btn-sm" onclick="openReviewModal('${studioId}')">Write a Review</button>
    </div>
    ${classFilterHTML}
    <div class="reviews-list" id="studio-reviews-list">
      ${studioReviews.length === 0 ? `
        <div class="empty-state">
          <p>No reviews yet. Be the first to share your experience!</p>
        </div>
      ` : studioReviews.map(renderReviewCard).join('')}
    </div>
  `;
}

function getHeatColor(level) {
  const colors = ['', '#5a8a8a', '#6b8f71', '#d4953a', '#c45d3e', '#b8434b'];
  return colors[level] || '#5a8a8a';
}

function renderHeatIndicator(level) {
  if (!level) return '';
  const label = HEAT_LABELS[level] || '';
  const color = getHeatColor(level);
  const flames = '🔥'.repeat(Math.min(level, 5));
  return `<span class="heat-indicator" style="--heat-color:${color}">
    <span class="heat-flames">${flames}</span>
    <span class="heat-label">${label}</span>
  </span>`;
}

function renderReviewCard(review) {
  const classType = CLASS_TYPES.find(c => c.id === review.classType);
  const formattedDate = new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return `
    <div class="review-card">
      <div class="review-card-header">
        <div class="review-avatar" style="background:${getAvatarColor(review.name)}">${getInitials(review.name)}</div>
        <div class="review-meta">
          <div class="review-name">${review.name}</div>
          <div class="review-date">${formattedDate}</div>
        </div>
        <div class="review-stars">${renderStars(review.rating, 14)}</div>
      </div>
      <div class="review-badges">
        ${review.teacher !== 'General Studio Review' ? `<span class="review-badge">${review.teacher}</span>` : ''}
        ${classType ? `<span class="review-badge">${classType.shortName}${classType.heated ? ' · Heated' : ''}</span>` : ''}
        ${review.heatRating ? renderHeatIndicator(review.heatRating) : ''}
      </div>
      <p class="review-text">${review.text}</p>
      <div class="review-ratings-mini">
        <span class="mini-rating">Teacher: <strong>${review.teacherRating}/5</strong></span>
        <span class="mini-rating">Clean: <strong>${review.cleanRating}/5</strong></span>
        <span class="mini-rating">Vibe: <strong>${review.vibeRating}/5</strong></span>
        <span class="mini-rating">Difficulty: <strong>${review.diffRating}/5</strong></span>
        ${review.heatRating ? `<span class="mini-rating">Heat: <strong>${HEAT_LABELS[review.heatRating]}</strong></span>` : ''}
      </div>
    </div>
  `;
}

// ==================== TEACHER DETAIL ====================

function renderTeacherDetail(teacherName) {
  const container = document.getElementById('teacher-detail');
  const teacherStudios = STUDIOS.filter(s => s.teachers.includes(teacherName));
  const teacherReviews = reviews.filter(r => r.teacher === teacherName);
  const avgRating = teacherReviews.length > 0
    ? (teacherReviews.reduce((s, r) => s + r.rating, 0) / teacherReviews.length).toFixed(1)
    : '--';

  // Avg heat by class for this teacher
  const heatReviews = teacherReviews.filter(r => r.heatRating);
  const avgHeat = heatReviews.length > 0
    ? (heatReviews.reduce((s, r) => s + r.heatRating, 0) / heatReviews.length)
    : 0;
  const avgHeatRounded = Math.round(avgHeat * 10) / 10;
  const avgHeatLevel = Math.round(avgHeat);

  // Heat by class type for this teacher
  const heatByClass = {};
  heatReviews.forEach(r => {
    if (!heatByClass[r.classType]) heatByClass[r.classType] = [];
    heatByClass[r.classType].push(r.heatRating);
  });

  const heatBreakdownHTML = Object.keys(heatByClass).length > 0 ? `
    <div class="heat-summary" style="margin-top:var(--space-6)">
      <h3 class="heat-summary-title">Perceived Heat by Class</h3>
      <div class="heat-summary-grid">
        ${Object.keys(heatByClass).map(ctId => {
          const ct = CLASS_TYPES.find(c => c.id === ctId);
          const arr = heatByClass[ctId];
          const avg = arr.reduce((s, v) => s + v, 0) / arr.length;
          const level = Math.round(avg);
          return ct ? `
            <div class="heat-summary-item">
              <span class="heat-summary-class">${ct.shortName}</span>
              <span class="heat-summary-bar">
                <span class="heat-summary-fill" style="width:${(avg / 5) * 100}%;background:${getHeatColor(level)}"></span>
              </span>
              <span class="heat-summary-value">${avg.toFixed(1)} — ${HEAT_LABELS[level]}</span>
            </div>` : '';
        }).join('')}
      </div>
    </div>
  ` : '';

  container.innerHTML = `
    <button class="back-link" onclick="history.back()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back
    </button>

    <div class="detail-header">
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4)">
        <div class="review-avatar" style="background:${getAvatarColor(teacherName)};width:56px;height:56px;font-size:var(--text-lg)">${getInitials(teacherName)}</div>
        <div>
          <h1 class="detail-title">${teacherName}</h1>
          <p class="detail-address">CorePower Yoga Teacher</p>
        </div>
      </div>

      <div class="teacher-stats">
        <div class="teacher-stat">
          <div class="teacher-stat-value">${avgRating}</div>
          <div class="teacher-stat-label">Avg Rating</div>
        </div>
        <div class="teacher-stat">
          <div class="teacher-stat-value">${teacherReviews.length}</div>
          <div class="teacher-stat-label">Reviews</div>
        </div>
        <div class="teacher-stat">
          <div class="teacher-stat-value">${teacherStudios.length}</div>
          <div class="teacher-stat-label">Studio${teacherStudios.length !== 1 ? 's' : ''}</div>
        </div>
        ${avgHeat > 0 ? `
          <div class="teacher-stat">
            <div class="teacher-stat-value" style="color:${getHeatColor(avgHeatLevel)}">${avgHeatRounded.toFixed(1)}</div>
            <div class="teacher-stat-label">Avg Heat · ${HEAT_LABELS[avgHeatLevel]}</div>
          </div>
        ` : ''}
      </div>

      <div class="section-header" style="margin-top:var(--space-6)">
        <h2 class="section-title">Studios</h2>
      </div>
      <div class="teacher-studios">
        ${teacherStudios.map(s => `
          <button class="teacher-studio-link" onclick="navigateTo('studio', '${s.id}')">${s.name.replace('CorePower Yoga ', '')}</button>
        `).join('')}
      </div>
    </div>

    ${heatBreakdownHTML}

    ${teacherReviews.length > 0 ? `
      <div class="section-header">
        <h2 class="section-title">Reviews</h2>
      </div>
      <div class="reviews-list">
        ${teacherReviews.map(renderReviewCard).join('')}
      </div>
    ` : `
      <div class="section-header">
        <h2 class="section-title">Reviews</h2>
      </div>
      <div class="empty-state">
        <p>No reviews for this teacher yet.</p>
      </div>
    `}
  `;
}

// ==================== REVIEW MODAL ====================

function openReviewModal(preselectedStudio) {
  const modal = document.getElementById('review-modal');
  const studioSelect = document.getElementById('review-studio');
  const classSelect = document.getElementById('review-class');

  // Populate studio dropdown
  studioSelect.innerHTML = '<option value="">Select a studio</option>' +
    STUDIOS.map(s => `<option value="${s.id}" ${s.id === preselectedStudio ? 'selected' : ''}>${s.name.replace('CorePower Yoga ', '')}</option>`).join('');

  // Populate class type dropdown
  classSelect.innerHTML = CLASS_TYPES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  // Set today's date
  document.getElementById('review-date').value = new Date().toISOString().split('T')[0];

  // Reset form
  document.getElementById('review-form').reset();
  if (preselectedStudio) {
    studioSelect.value = preselectedStudio;
    updateTeacherDropdown();
  }

  // Build star inputs for sub-ratings
  ['rating-teacher', 'rating-cleanliness', 'rating-vibe', 'rating-difficulty', 'rating-heat'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.children.length === 0) {
      el.innerHTML = [1,2,3,4,5].map(v =>
        `<button type="button" class="star-btn" data-value="${v}" aria-label="${v} star${v > 1 ? 's' : ''}"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></button>`
      ).join('');
    }
    el.dataset.rating = '0';
    el.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
  });

  // Reset main rating
  const mainRating = document.getElementById('rating-overall');
  mainRating.dataset.rating = '0';
  mainRating.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));

  // Reset heat rating
  const heatRating = document.getElementById('rating-heat');
  if (heatRating) {
    heatRating.dataset.rating = '0';
    heatRating.querySelectorAll('.heat-btn').forEach(b => b.classList.remove('active'));
  }

  // Set date
  document.getElementById('review-date').value = new Date().toISOString().split('T')[0];

  // Show modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Close on overlay click
  modal.onclick = function(e) {
    if (e.target === modal) closeReviewModal();
  };
}

function closeReviewModal() {
  const modal = document.getElementById('review-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function updateTeacherDropdown() {
  const studioId = document.getElementById('review-studio').value;
  const teacherSelect = document.getElementById('review-teacher');
  const studio = STUDIOS.find(s => s.id === studioId);

  if (!studio) {
    teacherSelect.innerHTML = '<option value="">Select a studio first</option>';
    return;
  }

  const sortedTeachers = [...studio.teachers].sort((a, b) => a.localeCompare(b));
  teacherSelect.innerHTML = '<option value="General Studio Review">General Studio Review</option>' +
    sortedTeachers.map(t => `<option value="${t}">${t}</option>`).join('');
}

function submitReview(e) {
  e.preventDefault();

  const overallRating = parseInt(document.getElementById('rating-overall').dataset.rating);
  if (overallRating === 0) {
    showToast('Please select an overall rating', 'error');
    return;
  }

  const review = {
    studioId: document.getElementById('review-studio').value,
    teacher: document.getElementById('review-teacher').value,
    classType: document.getElementById('review-class').value,
    rating: overallRating,
    teacherRating: parseInt(document.getElementById('rating-teacher').dataset.rating) || overallRating,
    cleanRating: parseInt(document.getElementById('rating-cleanliness').dataset.rating) || overallRating,
    vibeRating: parseInt(document.getElementById('rating-vibe').dataset.rating) || overallRating,
    diffRating: parseInt(document.getElementById('rating-difficulty').dataset.rating) || overallRating,
    heatRating: parseInt(document.getElementById('rating-heat').dataset.rating) || 0,
    text: document.getElementById('review-text').value,
    name: document.getElementById('review-name').value,
    date: document.getElementById('review-date').value
  };

  reviews.unshift(review);
  saveReviewToDB(review);
  closeReviewModal();
  showToast('Review submitted! Thank you for your feedback.');

  // Refresh current view
  if (currentView === 'studio') {
    renderStudioDetail(review.studioId);
  } else if (currentView === 'home') {
    renderStudios();
  }
}

// ==================== STAR RATING INTERACTION ====================

document.addEventListener('click', function(e) {
  const starBtn = e.target.closest('.star-btn');
  if (starBtn) {
    const container = starBtn.closest('.star-rating-input');
    const value = parseInt(starBtn.dataset.value);
    container.dataset.rating = value;
    container.querySelectorAll('.star-btn').forEach(btn => {
      const btnVal = parseInt(btn.dataset.value);
      btn.classList.toggle('active', btnVal <= value);
    });
    return;
  }

  // Heat button click
  const heatBtn = e.target.closest('.heat-btn');
  if (heatBtn) {
    const container = heatBtn.closest('.heat-rating-input');
    const value = parseInt(heatBtn.dataset.value);
    container.dataset.rating = value;
    container.querySelectorAll('.heat-btn').forEach(btn => {
      const btnVal = parseInt(btn.dataset.value);
      btn.classList.toggle('active', btnVal <= value);
    });
    return;
  }
});

// Hover preview for star ratings
document.addEventListener('mouseover', function(e) {
  const starBtn = e.target.closest('.star-btn');
  if (!starBtn) return;
  const container = starBtn.closest('.star-rating-input');
  const value = parseInt(starBtn.dataset.value);
  container.querySelectorAll('.star-btn').forEach(btn => {
    const btnVal = parseInt(btn.dataset.value);
    if (btnVal <= value) btn.classList.add('active');
    else if (btnVal > parseInt(container.dataset.rating)) btn.classList.remove('active');
  });
});

document.addEventListener('mouseout', function(e) {
  const starBtn = e.target.closest('.star-btn');
  if (!starBtn) return;
  const container = starBtn.closest('.star-rating-input');
  const currentRating = parseInt(container.dataset.rating);
  container.querySelectorAll('.star-btn').forEach(btn => {
    const btnVal = parseInt(btn.dataset.value);
    btn.classList.toggle('active', btnVal <= currentRating);
  });
});

// ==================== TOAST ====================

function showToast(message, type) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.background = type === 'error' ? 'var(--color-error)' : 'var(--color-success)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==================== THEME TOGGLE ====================

(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      updateToggleIcon(theme);
    });
  }

  function updateToggleIcon(t) {
    if (!toggle) return;
    toggle.innerHTML = t === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ==================== HASH ROUTING ====================

function handleRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#studio/')) {
    const studioId = hash.replace('#studio/', '');
    navigateTo('studio', studioId);
  } else if (hash.startsWith('#teacher/')) {
    const teacher = decodeURIComponent(hash.replace('#teacher/', ''));
    navigateTo('teacher', teacher);
  } else {
    navigateTo('home');
  }
}

window.addEventListener('popstate', handleRoute);

// Keyboard support for studio cards
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('.studio-card');
    if (card) {
      e.preventDefault();
      card.click();
    }
  }
  // Close modal on Escape
  if (e.key === 'Escape') {
    closeReviewModal();
  }
});

// ==================== INIT ====================

function init() {
  handleRoute();
  loadReviewsFromDB();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

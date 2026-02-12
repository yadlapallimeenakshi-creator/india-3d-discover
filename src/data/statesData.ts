export interface StateData {
  id: string;
  name: string;
  capital: string;
  language: string;
  traditionalDress: string;
  description: string;
  food: { name: string; description: string; image: string };
  touristPlaces: { name: string; description: string; image: string }[];
  architecture: { name: string; description: string; image: string };
  color: string;
}

export const statesData: StateData[] = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    capital: "Jaipur",
    language: "Hindi, Rajasthani",
    traditionalDress: "Ghagra Choli & Dhoti Kurta",
    description: "The Land of Kings — Rajasthan is famous for its royal heritage, majestic forts, vibrant culture, and desert landscapes.",
    food: { name: "Dal Baati Churma", description: "A classic Rajasthani dish of baked wheat balls with lentil curry and sweet crumble.", image: "" },
    touristPlaces: [
      { name: "Hawa Mahal", description: "The Palace of Winds in Jaipur with 953 windows.", image: "" },
      { name: "Jaisalmer Fort", description: "Golden fort rising from the Thar Desert sands.", image: "" },
    ],
    architecture: { name: "Amber Fort", description: "A stunning blend of Hindu and Mughal architecture overlooking Maota Lake.", image: "" },
    color: "hsl(42, 90%, 50%)",
  },
  {
    id: "kerala",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    language: "Malayalam",
    traditionalDress: "Mundum Neriyathum & Mundu",
    description: "God's Own Country — Kerala is known for its backwaters, lush greenery, Ayurveda, and Kathakali dance.",
    food: { name: "Sadya", description: "A grand vegetarian feast served on banana leaves during festivals.", image: "" },
    touristPlaces: [
      { name: "Alleppey Backwaters", description: "Serene houseboat cruises through palm-lined canals.", image: "" },
      { name: "Munnar", description: "Rolling tea plantations in the Western Ghats.", image: "" },
    ],
    architecture: { name: "Padmanabhaswamy Temple", description: "An ancient Dravidian temple with intricate carvings and legendary treasures.", image: "" },
    color: "hsl(145, 72%, 28%)",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    capital: "Chennai",
    language: "Tamil",
    traditionalDress: "Saree & Veshti",
    description: "The land of temples — Tamil Nadu is renowned for its Dravidian architecture, Bharatanatyam dance, and rich literary heritage.",
    food: { name: "Dosa & Idli", description: "Crispy rice crepes and steamed rice cakes served with chutneys and sambar.", image: "" },
    touristPlaces: [
      { name: "Meenakshi Temple", description: "A historic Hindu temple with colorful gopurams in Madurai.", image: "" },
      { name: "Mahabalipuram", description: "Ancient shore temples and rock-cut monuments.", image: "" },
    ],
    architecture: { name: "Brihadeeswarar Temple", description: "A UNESCO World Heritage Site built by Raja Raja Chola I.", image: "" },
    color: "hsl(0, 80%, 50%)",
  },
  {
    id: "punjab",
    name: "Punjab",
    capital: "Chandigarh",
    language: "Punjabi",
    traditionalDress: "Salwar Kameez & Patiala Suit",
    description: "The Land of Five Rivers — Punjab is known for its vibrant Bhangra, hearty food, and the Golden Temple.",
    food: { name: "Makki di Roti & Sarson da Saag", description: "Cornbread with mustard greens, a quintessential Punjabi winter dish.", image: "" },
    touristPlaces: [
      { name: "Golden Temple", description: "The holiest Gurdwara and spiritual center of Sikhism in Amritsar.", image: "" },
      { name: "Wagah Border", description: "The iconic border ceremony between India and Pakistan.", image: "" },
    ],
    architecture: { name: "Golden Temple", description: "A magnificent marble and gold structure surrounded by the sacred Amrit Sarovar.", image: "" },
    color: "hsl(27, 95%, 55%)",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    capital: "Kolkata",
    language: "Bengali",
    traditionalDress: "Saree & Dhoti-Panjabi",
    description: "The cultural capital of India — West Bengal is famed for its literature, art, Durga Puja, and sweet delicacies.",
    food: { name: "Rasgulla & Mishti Doi", description: "Iconic Bengali sweets — spongy cheese balls in syrup and sweetened yogurt.", image: "" },
    touristPlaces: [
      { name: "Victoria Memorial", description: "A grand marble monument dedicated to Queen Victoria in Kolkata.", image: "" },
      { name: "Sundarbans", description: "The world's largest mangrove forest, home to Bengal tigers.", image: "" },
    ],
    architecture: { name: "Howrah Bridge", description: "A cantilever bridge over the Hooghly River, an iconic Kolkata landmark.", image: "" },
    color: "hsl(200, 70%, 45%)",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    capital: "Mumbai",
    language: "Marathi",
    traditionalDress: "Nauvari Saree & Dhoti-Kurta",
    description: "The Gateway of India — Maharashtra combines Bollywood glamour, ancient caves, and vibrant Marathi culture.",
    food: { name: "Vada Pav", description: "Mumbai's iconic street food — spiced potato fritter in a bread roll.", image: "" },
    touristPlaces: [
      { name: "Gateway of India", description: "An iconic arch monument overlooking the Arabian Sea in Mumbai.", image: "" },
      { name: "Ajanta & Ellora Caves", description: "Ancient rock-cut cave temples with stunning Buddhist, Hindu, and Jain art.", image: "" },
    ],
    architecture: { name: "Chhatrapati Shivaji Terminus", description: "A UNESCO World Heritage Victorian Gothic railway station in Mumbai.", image: "" },
    color: "hsl(15, 85%, 50%)",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    capital: "Bengaluru",
    language: "Kannada",
    traditionalDress: "Ilkal Saree & Panche-Kurta",
    description: "The IT hub meets ancient heritage — Karnataka boasts Hampi ruins, Coorg coffee, and rich Hoysala architecture.",
    food: { name: "Bisi Bele Bath", description: "A flavorful one-pot rice dish with lentils, vegetables, and spices.", image: "" },
    touristPlaces: [
      { name: "Hampi", description: "Ruins of the Vijayanagara Empire — a UNESCO World Heritage Site.", image: "" },
      { name: "Mysore Palace", description: "A magnificent Indo-Saracenic palace illuminated with thousands of lights.", image: "" },
    ],
    architecture: { name: "Mysore Palace", description: "A historical palace blending Hindu, Muslim, Rajput, and Gothic styles.", image: "" },
    color: "hsl(330, 65%, 45%)",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    capital: "Gandhinagar",
    language: "Gujarati",
    traditionalDress: "Chaniya Choli & Kediyu",
    description: "The Jewel of Western India — Gujarat is known for its vibrant Garba, Rann of Kutch, and Mahatma Gandhi's birthplace.",
    food: { name: "Dhokla & Thepla", description: "Steamed savory cakes and spiced flatbreads, perfect Gujarati snacks.", image: "" },
    touristPlaces: [
      { name: "Rann of Kutch", description: "A vast white salt desert that comes alive during the Rann Utsav festival.", image: "" },
      { name: "Statue of Unity", description: "The world's tallest statue, honoring Sardar Vallabhbhai Patel.", image: "" },
    ],
    architecture: { name: "Rani ki Vav", description: "An intricately carved stepwell, a UNESCO World Heritage Site in Patan.", image: "" },
    color: "hsl(50, 85%, 50%)",
  },
];

export const getStateById = (id: string): StateData | undefined => {
  return statesData.find(s => s.id === id);
};

// Listing data for Padded — real dorms/condotels along España Blvd & FEU area
// Source: student-compiled dorm list (studio vs shared-unit price ranges)
const LISTINGS = [
  {
  id: "878-espana",
  name: "878 España (Vista Residences)",
  street: "G. Tolentino St. corner España Blvd., Sampaloc, Manila",
  type: "Bedspace",
  gender: "Male",
  price: 18000,
  walk: 8,
  color: "#2F6E5E",

  images: [
    "assets/images/878 España Tower 2.jpg",
    "assets/images/878 España Tower 1.jpg"
  ],

  amenities: [
    "Swimming Pool",
    "Fitness Gym",
    "Study Hall",
    "Function Room",
    "Sundeck Garden",
    "24-Hour Security",
    "Standby Generator",
    "Fire Alarm & Sprinkler System",
    "Commercial Establishments"
  ],

  rates: {
    studio: "₱18,000–₱24,000/month",
    shared: "₱6,000–₱9,000/person/month"
  },

  new: true
},
  {
  id: "university-tower-espana",
  name: "University Tower España (Tower 5)",
  street: "España Blvd. corner Galicia St., Sampaloc, Manila",
  type: "Room for 2",
  gender: "Female",
  price: 5500,
  walk: 9,
  color: "#2F6E5E",

  images: [
    "assets/images/University Tower Espana 2.jpg",
    "assets/images/University Tower Espana 1.jpg"
  ],

  amenities: [
    "Swimming Pool",
    "Fitness Gym",
    "Study Area",
    "Sky Garden",
    "Function Room",
    "24/7 Security"
  ],

  rates: {
    studio: "₱18,000–₱25,000/month",
    shared: "₱5,500–₱7,500/person/month"
  },

  new: false
},
  {
  id: "the-one-torre",
  name: "The One Torre de Santo Tomas",
  street: "España Blvd., Sampaloc, Manila",
  type: "Studio",
  gender: "Co-ed",
  price: 12000,
  walk: 3,
  color: "#8C2F39",

  images: [
    "assets/images/the-one-st-1.jpg",
    "assets/images/the-one-st-2.jpg"
  ],

  amenities: [
    "WiFi",
    "Aircon",
    "Kitchen",
    "Private Bathroom",
    "24/7 Security",
    "Elevator"
  ],

  new: true
},
  {
  id: "torre-central",
  name: "Torre Central",
  street: "Galicia St., Sampaloc, Manila",
  type: "Shared Unit",
  gender: "Male",
  price: 5500,
  walk: 8,
  color: "#8C2F39",

  images: [
    "assets/images/Torre Central 1.jpg",
    "assets/images/Torre Central 2.jpg"
  ],

  amenities: [
    "Swimming Pool",
    "Fitness Gym",
    "Study Lounge",
    "Function Rooms",
    "Commercial Area",
    "24/7 Security"
  ],

  rates: {
    studio: "₱17,000–₱23,000/month",
    shared: "₱5,500–₱7,500/person/month"
  },

  new: true
},
  {
  id: "espana-grand-residences",
  name: "España Grand Residences",
  street: "G.M. Tolentino St. corner España Blvd., Sampaloc, Manila",
  type: "Bedspace",
  gender: "Female",
  price: 5500,
  walk: 9,
  color: "#E8A63B",

  images: [
    "assets/images/Espana Grand 1.jpg",
    "assets/images/Espana Grand 2.jpg"
  ],

  amenities: [
    "Adult & Kiddie Swimming Pools",
    "Fitness Gym",
    "Sauna",
    "Air-Conditioned Study Area",
    "Function Room",
    "Roof Deck",
    "Lobby / Concierge",
    "24/7 Security"
  ],

  rates: {
    studio: "₱16,000–₱22,000/month",
    shared: "₱5,500–₱7,000/person/month"
  },

  new: true
},
  {
  id: "crown-tower-university-belt",
  name: "Crown Tower University Belt",
  street: "Tolentino St. cor. España Ave., Sampaloc, Manila",
  type: "Room for 2",
  gender: "Co-ed",
  price: 5500,
  walk: 7,
  color: "#4A6FA5",

  images: [
    "assets/images/Crown Tower 1.jpg",
    "assets/images/Crown Tower 2.jpg"
  ],

  amenities: [
    "Swimming Pool",
    "Fitness Gym",
    "Sun Deck & Garden",
    "Wi-Fi Library",
    "Laundromat",
    "Function Room",
    "Internet Café",
    "Standby Generator",
    "Fire Detection System"
  ],

  rates: {
    studio: "₱18,000–₱22,000/month",
    shared: "₱5,500–₱6,000/month"
  },

  new: true
},
  {
  id: "dormus",
  name: "Dormus",
  street: "1318-1324 España Blvd., Sampaloc, Manila",
  type: "Whole Unit",
  gender: "Male",
  price: 5500,
  walk: 18,
  color: "#6A5ACD",

  images: [
    "assets/images/Dormus 1.jpg",
    "assets/images/Dormus 2.jpg"
  ],

  amenities: [
    "myPod Beds",
    "Climate Control",
    "Ensuite Bathrooms",
    "Pantry Area",
    "Connectivity & Utilities",
    "Roof Deck Lounge",
    "Fitness Center",
    "Intercom System",
    "Access Control",
    "Fire Protection"
  ],

  rates: {
    studio: "₱20,000–₱22,000/month",
    shared: "₱5,500–₱8,600/month"
  },

  new: true
},
  {
  id: "u-home-suites",
  name: "U-Home Suites",
  street: "777-779 San Sebastian Street, Barangay 390, Quiapo, Manila",
  type: "Studio",
  gender: "Female",
  price: 5000,
  walk: 8,
  color: "#3B82F6",

  images: [
    "assets/images/U-Home 1.jpg",
    "assets/images/U-Home 2.jpg"
  ],

  amenities: [
    "Furnishings",
    "Appliances",
    "Bathroom",
    "Health & Wellness",
    "Study & Leisure",
    "Security & Access",
    "Utilities"
  ],

  rates: {
    studio: "₱15,000–₱22,000/month",
    shared: "₱5,000–₱8,000/month"
  },

  new: true
},
  {
  id: "residencia-de-espana",
  name: "Residencia De España",
  street: "Barangay 419, Sampaloc, Manila, Metro Manila",
  type: "Whole Unit",
  gender: "Co-ed",
  price: 3000,
  walk: 7,
  color: "#F59E0B",

  images: [
    "assets/images/Residencia De Espana 1.jpg",
    "assets/images/Residencia De Espana 2.jpg"
  ],

  amenities: [
    "Room Inclusions",
    "Shared Amenities",
    "Study Area",
    "Comforts",
    "Convenience",
    "Security"
  ],

  rates: {
    studio: "₱16,000–₱19,000/month",
    shared: "₱3,000–₱4,500/month"
  },

  new: true
},
  {
  id: "d-students-place-dormitel",
  name: "D' Students Place Dormitel",
  street: "1080 Padre Campa St. / 1015 Alfonso Mendoza St., Sampaloc, Manila",
  type: "Shared Unit",
  gender: "Co-ed",
  price: 5000,
  walk: 7,
  color: "#10B981",

  images: [
    "assets/images/D Students Place 1.jpg",
    "assets/images/D Students Place 2.jpg"
  ],

  amenities: [
    "Free Wi-Fi",
    "24-Hour Front Desk",
    "Luggage Storage",
    "Balcony / Terrace",
    "Laundry",
    "Non-Smoking Rooms",
    "Daily Housekeeping",
    "Coffee Shop"
  ],

  rates: {
    studio: "₱18,000–₱20,000/month",
    shared: "₱5,000–₱9,000/month"
  },

  new: true
},
];

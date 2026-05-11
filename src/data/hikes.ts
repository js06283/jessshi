export interface Hike {
  name: string;
  location: string;
  elevationFt: number;
  mileage: number;
  date: string;
  image?: string;
  highlight?: boolean;
}

// 2-letter state abbreviations
export const visitedStates: string[] = [
  "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "IL", "IN", "KY", "LA", "ME", "MD", "MA", "MN", "MS",
  "MO", "MT", "NV", "NH", "NJ", "NM", "NY", "NC", "OH",
  "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT",
  "VT", "VA", "WA", "WV", "WI", "WY",
];

// Must match the ADMIN field in the GeoJSON exactly.
// Search src/pages/map/world_simplified.geojson for the correct spelling.
export const visitedCountries: string[] = [
  "Belgium",
  "Canada",
  "China",
  "Czech Republic",
  "Denmark",
  "Dominican Republic",
  "Egypt",
  "France",
  "Germany",
  "Hong Kong S.A.R.",
  "Hungary",
  "Iceland",
  "Italy",
  "Japan",
  "Luxembourg",
  "Switzerland",
  "Mexico",
  "Netherlands",
  "Singapore",
  "Slovakia",
  "South Korea",
  "Spain",
  "Taiwan",
  "Thailand",
  "The Bahamas",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Austria",
];

export const hikes: Hike[] = [
  // Add hikes here. Example:
  {
    name: "Tahoe Meadows to Twin Lakes",
    location: "Lake Tahoe, Nevada",
    elevationFt: 1978,
    mileage: 8.90,
    date: "2026-05-10",
    image: "",  // optional — place images in public/assets/hikes/
  },
  {
    name: "Bull Hill Short Loop",
    location: "Cold Spring, NY",
    elevationFt: 1358,
    mileage: 5.88,
    date: "2026-04-18",
    image: ""
  },
  
  {
    name: "Beacon Fire Tower",
    location: "Beacon, NY",
    elevationFt: 1791,
    mileage: 7.09,
    date: "2025-10-18",
    image: ""
  },
  {
    name: "Mount Whitney Summit",
    location: "Inyo National Forest, California",
    elevationFt: 7060,
    mileage: 24.99,
    date: "2025-07-06",
    image: "",
    highlight:true
  },
  {
    name: "Garden of Eden",
    location: "Santa Cruz, California",
    elevationFt: 187,
    mileage: 1.78,
    date: "2025-07-04",
    image: ""
  },
  {
    name: "Bull Hill Short Loop",
    location: "Cold Spring, NY",
    elevationFt: 1263,
    mileage: 4.84,
    date: "2025-03-29",
    image: ""
  },
  {
    name: "Overlook Mountain Trail",
    location: "Upstate NY",
    elevationFt: 1263,
    mileage: 4.84,
    date: "2024-11-02",
    image: ""
  },
  {
    name: "Grouse Grind",
    location: "Vancouver, Canada",
    elevationFt: 2559,
    mileage: 1.3,
    date: "2024-07-21",
    image: ""
  },
  {
    name: "Golden Skybridge",
    location: "Golden, Canada",
    elevationFt: 282,
    mileage: 1,
    date: "2024-07-19",
    image: ""
  },
  {
    name: "Consolation Lakes Trail",
    location: "Banff, Canada",
    elevationFt: 361,
    mileage: 1.8,
    date: "2024-07-17",
    image: ""
  },
  {
    name: "Moraine Lake Shoreline Trail",
    location: "Banff, Canada",
    elevationFt: 531,
    mileage: 1.9,
    date: "2024-07-17",
    image: ""
  },
  {
    name: "Grinnell Glacier Trail",
    location: "Glacier National Park",
    elevationFt: 2126,
    mileage: 11.4,
    date: "2024-07-14",
    image: ""
  },
  {
    name: "Hidden Lake Trail",
    location: "Glacier National Park",
    elevationFt: 554,
    mileage: 7.97,
    date: "2024-07-13",
    image: "",
    highlight: true
  },
  {
    name: "Mystic Falls, Fairy Creek, and Little Firehole Loop",
    location: "Yellowstone National Park",
    elevationFt: 643,
    mileage: 3.7,
    date: "2024-07-11",
    image: ""
  },
  {
    name: "Old Faithful Geyser Loop Trail",
    location: "Yellowstone National Park",
    elevationFt: 56,
    mileage: 1.2,
    date: "2024-07-11",
    image: ""
  },
  {
    name: "Jenny Lake Trail",
    location: "Yellowstone National Park",
    elevationFt: 167,
    mileage: 2.4,
    date: "2024-07-10",
    image: ""
  },
  {
    name: "Inspiration Point",
    location: "Yellowstone National Park",
    elevationFt: 180,
    mileage: 1,
    date: "2024-07-10",
    image: ""
  },
  {
    name: "Delta Lake via Lupine Meadows Access",
    location: "Grand Teton National Park",
    elevationFt: 2297,
    mileage: 7.6,
    date: "2024-07-09",
    image: ""
  },
  {
    name: "Notch Trail",
    location: "Badlands National Park",
    elevationFt: 148,
    mileage: 1.3,
    date: "2024-07-06",
    image: ""
  },
  {
    name: "Dragon's Back",
    location: "Hong Kong",
    elevationFt: 764,
    mileage: 4.8,
    date: "2024-05-28",
    image: ""
  },
  {
    name: "Fushimi Inari",
    location: "Kyoto, Japan",
    elevationFt: 627,
    mileage: 2.7,
    date: "2024-05-18",
    image: ""
  },

  {
    name: "Noboribetsu Jigokudani Loop",
    location: "Noboribetsu, Japan",
    elevationFt: 364,
    mileage: 2.3,
    date: "2023-08-17",
    image: ""
  },
  {
    name: "Red Rocks Trading Post Trail",
    location: "Denver, Colorado",
    elevationFt: 358,
    mileage: 2,
    date: "2023-08-13",
    image: ""
  },
  {
    name: "Upper Yosemite Falls Trail",
    location: "Yosemite National Park",
    elevationFt: 3248,
    mileage: 6.5,
    date: "2023-07-23",
    image: ""
  },
  {
    name: "Shirley Canyon Trail",
    location: "Lake Tahoe, CA",
    elevationFt: 2083,
    mileage: 4.3,
    date: "2023-07-23",
    image: ""
  },
  {
    name: "Big Stump Loop",
    location: "Kings Canyon National Park",
    elevationFt: 223,
    mileage: 1.7,
    date: "2023-07-09",
    image: ""
  },
   {
    name: "General Grant Trail",
    location: "Sequoia National Park",
    elevationFt: 115,
    mileage: 1.29,
    date: "2023-07-09",
    image: ""
  },
   {
    name: "Tokopah Falls",
    location: "Sequoia National Park",
    elevationFt: 600,
    mileage: 3.9,
    date: "2023-07-08",
    image: ""
  },
   {
    name: "Congress Trail",
    location: "Sequoia National Park",
    elevationFt: 308,
    mileage: 2.1,
    date: "2023-07-08",
    image: ""
  },
   {
    name: "Moro Rock",
    location: "Sequoia National Park",
    elevationFt: 7,
    mileage: 0.3,
    date: "2023-07-08",
    image: ""
  },
   {
    name: "Sykes Hot Springs via Pine Ridge Trail",
    location: "Big Sur, California",
    elevationFt: 3665,
    mileage: 14.2,
    date: "2023-07-01",
    image: ""
  },
   {
    name: "Half Dome via JMT",
    location: "Yosemite National Park",
    elevationFt: 5427,
    mileage: 18.9,
    date: "2023-06-25",
     image: "",
     highlight: true
  },
   {
    name: "Alamere Falls via Coast Trail From Palomarin Trailhead",
    location: "Point Reyes, California",
    elevationFt: 1565,
    mileage: 11.7,
    date: "2023-06-11",
    image: ""
  },
   {
    name: "Slacker Hill via SCA Trail",
    location: "San Francisco, CA",
    elevationFt: 3665,
    mileage: 14.2,
    date: "2023-07-01",
    image: ""
  },
  {
    name: "High Divide and Seven Basin Loop",
    location: "Olympic National Park",
    elevationFt: 4754,
    mileage: 20.4,
    date: "2022-08-13",
    image: "", 
    highlight: true
  },
  {
    name: "Poo-Poo Point",
    location: "Seattle, WA",
    elevationFt: 1637,
    mileage: 4.1,
    date: "Summer 2022",
    image: "", 
  },
  {
    name: "Rattlesnake Ledge Trail",
    location: "Seattle, WA",
    elevationFt: 1440,
    mileage: 5.6,
    date: "Summer 2022",
    image: "", 
  },
   {
    name: "Lake Serene",
    location: "Seattle, WA",
    elevationFt: 2742,
    mileage: 8.1,
    date: "Summer 2022",
    image: "", 
  },
{
    name: "Skyline Loop",
    location: "Rainier National Park",
    elevationFt: 1781,
    mileage: 5.7,
    date: "Summer 2022",
    image: "", 
  },

];

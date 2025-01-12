const data = [
  {
    title: "Luxury Penthouse in the City",
    description: "Experience luxury living with breathtaking city views in this stunning penthouse.",
    image: {
      url: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "penthouse1",
    },
    price: 3500,
    location: "New York",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128],
    },
    category: "trending",
  },
  {
    title: "Seaside Villa Retreat",
    description: "A beautiful villa by the sea with private beach access and panoramic ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1610514478970-948991bac6bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFsaWJ1fGVufDB8fDB8fHww",
      filename: "seavilla1",
    },
    price: 3000,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
    category: "boats",
  },
  {
    title: "Mountain Getaway Cabin",
    description: "Escape to this cozy cabin in the mountains surrounded by lush forests and serene landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1659713057878-1c2ca092a6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXNwZW58ZW58MHx8MHx8fDA%3D",
      filename: "mountain_cabin1",
    },
    price: 1800,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911],
    },
    category: "mountain",
  },
  {
    title: "Charming Countryside Cottage",
    description: "Relax in this peaceful cottage located in the heart of the countryside.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1664303366009-760a5d56026d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2VudHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "cottage1",
    },
    price: 1200,
    location: "Kent",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [0.5274, 51.3784],
    },
    category: "farms",
  },
  {
    title: "Modern Beachfront Condo",
    description: "Stay in this modern condo with stunning beachfront views and amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1733954901690-f6a4e94c86e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9ub2x1bHV8ZW58MHx8MHx8fDA%3D",
      filename: "beachfront_condo1",
    },
    price: 2200,
    location: "Honolulu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-157.8583, 21.3069],
    },
    category: "boats",
  },
  {
    title: "Riverside Lodge",
    description: "A perfect lodge by the river for a peaceful and serene stay away from the city noise.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697729974122-9c8ce287c0f3?q=80&w=1131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "riverside_lodge1",
    },
    price: 1500,
    location: "Vancouver",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-123.1216, 49.2827],
    },
    category: "camping",
  },
  {
    title: "Luxury Ski Chalet",
    description: "Stay in a top-rated ski chalet located at the base of a popular ski resort.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1664304541974-2b1e7b3cb2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2hpc3RsZXJ8ZW58MHx8MHx8fDA%3D",
      filename: "ski_chalet1",
    },
    price: 2500,
    location: "Whistler",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-122.9547, 50.1163],
    },
    category: "mountain",
  },
  {
    title: "Historical Castle Stay",
    description: "Live like royalty in this beautifully restored historical castle with stunning gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1535448033526-c0e85c9e6968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWRpbmJ1cmdofGVufDB8fDB8fHww",
      filename: "castles",
    },
    price: 5000,
    location: "Edinburgh",
    country: "Scotland",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: "castles",
  },
  {
    title: "Farmhouse in Tuscany",
    description: "Stay in a rustic farmhouse surrounded by vineyards and olive groves in the heart of Tuscany.",
    image: {
      url: "https://images.unsplash.com/photo-1550611343-dcef9dbb5ea7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VHVzY2FueXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "farmhouse1",
    },
    price: 1800,
    location: "Tuscany",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    category: "farms",
  },
  {
    title: "Glamping Pods in the Forest",
    description: "Experience the great outdoors with a glamorous twist in these luxury glamping pods.",
    image: {
      url: "https://images.unsplash.com/photo-1507039102241-5ec61d624406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WmVybWF0dHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "glamping1",
    },
    price: 1300,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7472, 46.0207],
    },
    category: "camping",
  },
  {
    title: "Airstream in the Desert",
    description: "Enjoy the solitude of the desert while staying in a retro Airstream trailer.",
    image: {
      url: "https://images.unsplash.com/photo-1596625820723-f0f481ff80be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Sm9zaHVhJTIwVHJlZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "airstream1",
    },
    price: 800,
    location: "Joshua Tree",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-116.308, 33.8735],
    },
    category: "camping",
  },
  {
    title: "Luxury Dome in Iceland",
    description: "Stay in a luxury dome while watching the Northern Lights in the heart of Iceland.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1697730250549-bcdc60eae1c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmV5a2phdmlrfGVufDB8fDB8fHww",
      filename: "dome1",
    },
    price: 2500,
    location: "Reykjavik",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-21.8174, 64.1355],
    },
    category: "domes",
  },
  {
    title: "Overwater Bungalow in the Maldives",
    description: "Stay in an exclusive overwater bungalow with clear views of the ocean from your private deck.",
    image: {
      url: "https://images.unsplash.com/photo-1491738726357-683388052ea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      filename: "overwater_bungalow1",
    },
    price: 4000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.5296, 3.2028],
    },
    category: "boats",
  },
  {
    title: "Private Beach House",
    description: "A secluded beach house with private access to the beach, perfect for a quiet getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1521071379542-3b741db9f90b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "beachhouse1",
    },
    price: 3500,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
    category: "boats",
  },
  {
    title: "Desert Oasis Retreat",
    description: "A luxurious desert oasis retreat offering the ultimate relaxation experience.",
    image: {
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHViYWl8ZW58MHx8MHx8fDA%3D",
      filename: "desert_oasis1",
    },
    price: 2200,
    location: "Dubai",
    country: "UAE",
    geometry: {
      type: "Point",
      coordinates: [55.2760, 25.276987],
    },
    category: "arctic",
  },
  {
    title: "Alpine Lodge in the Swiss Alps",
    description: "Stay in an alpine lodge surrounded by snow-capped mountains and charming Swiss villages.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1664298150089-c28f06834283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3dpc3MlMjBBbHBzfGVufDB8fDB8fHww",
      filename: "alpine_lodge1",
    },
    price: 2500,
    location: "Swiss Alps",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [9.5301, 46.8182],
    },
    category: "mountain",
  },
  {
    title: "Luxury Treehouse in the Amazon",
    description: "Experience the Amazon rainforest in style by staying in a luxurious treehouse.",
    image: {
      url: "https://media.istockphoto.com/id/495731994/photo/san-sebastian-square-in-manaus-downtown-brazil.jpg?s=612x612&w=is&k=20&c=EeVHplYD7hgw6LsTiRcY85FgusxQbXdn3AoQhK1lcPE=",
      filename: "treehouse_amazon1",
    },
    price: 3000,
    location: "Manaus",
    country: "Brazil",
    geometry: {
      type: "Point",
      coordinates: [-60.0143, -3.1190],
    },
    category: "trending",
  },
  // Add 10 more listings in the same format as needed...
];

module.exports = { data };
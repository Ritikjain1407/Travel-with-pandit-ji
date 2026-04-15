export const packagesData = {
  bali: {
    id: 'bali',
    title: 'The Ultimate Bali Escape',
    category: 'Featured Luxury Package',
    duration: '6 Nights / 7 Days',
    location: 'Bali, Indonesia',
    pax: '02 PAX',
    date: '25th Nov 2025',
    image: 'https://images.unsplash.com/photo-1554521408-de0ee0cc7ab3?auto=format&fit=crop&w=1200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2000&q=80',
    description: 'Experience the magic of Bali. From the cultural heart of Ubud to the breathtaking cliffs of Nusa Penida. Luxurious stays and private transfers included.',
    contactPhone: '+91 7700041742',
    contactEmail: 'contact@panditji.travel',
    timeline: [
      {
        day: "Day 1-2",
        title: "Kuta & South Bali",
        highlights: "Water Sports & Kecak Dance",
        description: "Arrive in Bali and head to lively Kuta. Experience thrilling water sports, followed by a mesmerizing sunset at Uluwatu Temple complete with the traditional Kecak Fire Dance.",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: "Day 3-4",
        title: "Nusa Penida Island",
        highlights: "Broken Beach & Kelingking",
        description: "Take a fast boat to Nusa Penida. Marvel at the T-Rex shaped Kelingking Cliff, swim in the crystal waters near Broken Beach, and snorkel with Manta Rays.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: "Day 5-6",
        title: "Ubud Cultural Hub",
        highlights: "Kintamani Volcano & Bali Swing",
        description: "Travel to Ubud, the cultural heart. View Mount Batur at Kintamani, experience the iconic Bali Swing over lush jungles, and visit the serene Tanah Lot Temple.",
        image: "https://images.unsplash.com/photo-1623126908029-58cb08a4b0fa?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: "Day 7",
        title: "Departure",
        highlights: "Leisure & Airport Transfer",
        description: "Enjoy a final Balinese breakfast at your resort. Spend a relaxed morning souvenir shopping before your private transfer to the airport.",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80"
      }
    ],
    hotels: [
      {
        id: 1,
        name: "Grand Livio / Puri Payogan",
        category: "3-Star Deluxe",
        stars: 3,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        description: "Comfortable and authentic stays in Kuta and Ubud, featuring cozy rooms and traditional Balinese hospitality.",
        roomTypes: [
          { name: "Superior Room", description: "City view, AC, free Wi-Fi, 28 sqm" },
          { name: "Deluxe Pool Access", description: "Direct pool access, terrace, 32 sqm" }
        ],
        amenities: ['wifi', 'tv', 'coffee']
      },
      {
        id: 2,
        name: "Risata Bali / Freddies Resort",
        category: "4-Star Premium",
        stars: 4,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
        description: "High-end resorts offering lush gardens, expansive pools, and luxurious amenities for a premium getaway.",
        roomTypes: [
          { name: "Premium Garden View", description: "Lush garden view, bathtub, 45 sqm" },
          { name: "Private Villa Suite", description: "Private plunge pool, butler service, 80 sqm" }
        ],
        amenities: ['wifi', 'tv', 'bed', 'coffee']
      }
    ],
    pricing: [
      {
        name: '3-Star Package',
        price: '₹62,999',
        subtitle: 'per person on twin sharing',
        description: 'Perfect for couples and friends looking for a comfortable stay with essential luxury.',
        popular: false,
        features: [
          'Accommodation in 3-Star Hotels (Grand Livio / Puri Payogan)',
          'Daily Breakfast',
          'Private Airport Transfers',
          'English Speaking Guide/Driver',
          'All Entrance Tickets as per Itinerary'
        ]
      },
      {
        name: '4-Star Premium',
        price: '₹80,999',
        subtitle: 'per person on twin sharing',
        description: 'The ultimate luxury experience with premium resort stays and exclusive services.',
        popular: true,
        features: [
          'Premium 4-Star Accommodations (Risata Bali / Freddies Resort)',
          'Daily Gourmet Breakfast',
          'Luxury Private Transfers',
          'Expert Guide & Concierge Service',
          'All Entrance Tickets + Fast Track Access',
          'Complimentary Spa Session (1 Hr)'
        ]
      }
    ],
    inclusions: [
      "Private airport transfers (Pick up & Drop off)",
      "Accommodation as per selected package",
      "Daily breakfast at the hotel",
      "Private fully air-conditioned vehicle during tours",
      "Professional English speaking driver/guide",
      "All entrance tickets as mentioned in the itinerary",
      "Local taxes and service charges",
      "24/7 Assistance from our local team"
    ],
    exclusions: [
      "International or Domestic Flights",
      "Visa On Arrival (VOA) and Travel Insurance",
      "Lunches and Dinners (unless specified)",
      "Personal expenses (Laundry, Telephone, etc)",
      "Optional activities (Watersports, Bali Swing photos)",
      "Tipping for guide/driver"
    ]
  },
  
  goa: {
    id: 'goa',
    title: 'Goa Coastal Getaway',
    category: 'Vibrant Beach Retreat',
    duration: '3 Nights / 4 Days',
    location: 'Goa, India',
    pax: '04 Adults',
    date: 'October',
    image: 'https://images.unsplash.com/photo-1596895111956-bf5705312061?auto=format&fit=crop&w=1200&q=80',
    bgImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=80',
    description: 'Discover the beautiful bond of the sea and the shoreline. A complete North & South Goa experience with premium stays and lively culture.',
    contactPhone: '+91 7582974302',
    contactEmail: 'Kabiatravels@gmail.com',
    timeline: [
      {
        day: "Day 1",
        title: "Arrival in Goa",
        highlights: "Resort Check-in & Relaxation",
        description: "On reaching Goa airport, meet our driver representative who assists your transfer to the resort. Take some rest, and in the evening, enjoy a stroll around the beach or indulge in your favorite beach activity.",
        image: "https://images.unsplash.com/photo-1590050752117-238cbfffbe31?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: "Day 2",
        title: "North Goa Sightseeing",
        highlights: "Forts, Beaches & Nightlife",
        description: "Explore the beautiful bond of the sea and shoreline. Visit Aguada Fort and Lighthouse, Sinquerim Beach, Baga Beach, Snow Park, Calangute Beach, Chapora Fort, Vagator, and Anjuna Beach. Optional dolphin trip available.",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: "Day 3",
        title: "South Goa Sightseeing",
        highlights: "Heritage & Culture",
        description: "Discover Goa's rich history (10 AM to 6 PM). Visit Shree Mangesh Temple, Basilica of Bom Jesus, Tropical Spice Plantation, Latin Quarter, Dona Paula, Miramar Beach, Panjim Market, and end with an optional Goa Boat Cruise.",
        image: "https://images.unsplash.com/photo-1593361413813-f4c0df6d7904?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: "Day 4",
        title: "Departure",
        highlights: "Memories & Airport Drop",
        description: "Check-out around 12:00 PM. Move to the airport with wonderful memories of your Goa tour in your camera.",
        image: "https://images.unsplash.com/photo-1601662933758-aabac40f35be?auto=format&fit=crop&w=600&q=80"
      }
    ],
    hotels: [
      {
        id: 1,
        name: "The Mayfield Boutique Hotel, Calangute",
        category: "3-Star Boutique",
        stars: 3,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
        description: "A comfortable boutique stay in the heart of Calangute, with complimentary use of the swimming pool and excellent amenities.",
        roomTypes: [
          { name: "Standard Room", description: "Cozy stay, AC, attached washroom, perfect for 2" }
        ],
        amenities: ['wifi', 'tv', 'bed']
      }
    ],
    pricing: [
      {
        name: '3-Star Package',
        price: '₹29,999',
        subtitle: 'Double sharing basis (for 4 Adults)',
        description: 'Vibrant beach stay with complete North & South Goa sightseeing via private AC sedan.',
        popular: true,
        features: [
          '02 Standard Rooms for 04 Adults',
          '3 Nights / 4 Days accommodation',
          'Welcome Drink & Daily Breakfast (Veg/Non-Veg)',
          'Complimentary use of Swimming Pool',
          'Pickup & Drop from Airport by Private AC Sedan',
          'North & South Goa sightseeing by AC Sedan'
        ]
      }
    ],
    inclusions: [
      "02 Standard Rooms / 04 Adults for 03 Nights",
      "Welcome Drink on Arrival",
      "Complimentary use of Swimming Pool",
      "Breakfast (veg / non-veg)",
      "Pickup & Drop from Airport by private AC Sedan (Toll Excluded)",
      "North Goa sightseeing by private AC Sedan",
      "South Goa sightseeing by private AC Sedan"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Water Sports & River Cruise",
      "Personal expenses: laundry, phone calls, tips, room service, etc.",
      "Travel Insurance / VOA",
      "Entry tickets & lunches/dinners unless specified"
    ]
  }
};

/* mock data used by pages (same as your React mockData) */

window.AGRI = (function(){
  const VEGETABLE_PRICES = [
    { name: "Tomato", today: 45, yesterday: 40, unit: "kg" },
    { name: "Onion", today: 30, yesterday: 35, unit: "kg" },
    { name: "Potato", today: 25, yesterday: 22, unit: "kg" },
    { name: "Spinach", today: 15, yesterday: 15, unit: "bunch" },
    { name: "Carrot", today: 50, yesterday: 48, unit: "kg" },
  ];

  const MARKETPLACE_LISTINGS = [
    // Produce (default)
    { id:1, crop:"Organic Wheat", price:2200, unit:"quintal", quantity:50, location:"Punjab, India", grade:"A+", farmer:"Rajesh Kumar", category:"produce", image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=1200" },
    { id:2, crop:"Fresh Tomatoes", price:40, unit:"kg", quantity:200, location:"Nashik, Maharashtra", grade:"A", farmer:"Suresh Patil", category:"produce", image:"https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1200" },
    { id:3, crop:"Basmati Rice", price:4500, unit:"quintal", quantity:100, location:"Haryana, India", grade:"Premium", farmer:"Amit Singh", category:"produce", image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1200" },
    { id:4, crop:"Red Onions", price:28, unit:"kg", quantity:500, location:"Madhya Pradesh", grade:"B+", farmer:"Vikram Yadav", category:"produce", image:"https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=1200" },
    // Seeds
    { id:5, crop:"Hybrid Wheat Seeds", price:120, unit:"kg", quantity:100, location:"Punjab, India", grade:"Premium", farmer:"Seed Co.", category:"seeds", image:"https://images.unsplash.com/photo-1615485925503-7ec8340b4302?auto=format&fit=crop&q=80&w=1200" },
    { id:6, crop:"Basmati Rice Seeds", price:180, unit:"kg", quantity:80, location:"Haryana, India", grade:"A+", farmer:"Agri Seeds Ltd", category:"seeds", image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1200" },
    { id:7, crop:"Tomato Hybrid Seeds", price:250, unit:"100g", quantity:50, location:"Maharashtra, India", grade:"Premium", farmer:"Green Seeds", category:"seeds", image:"https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1200" },
    { id:8, crop:"Cotton Seeds", price:95, unit:"kg", quantity:200, location:"Gujarat, India", grade:"A", farmer:"Cotton Seed Co.", category:"seeds", image:"https://images.unsplash.com/photo-1615485925503-7ec8340b4302?auto=format&fit=crop&q=80&w=1200" },
    // Pesticides
    { id:9, crop:"Organic Neem Pesticide", price:450, unit:"liter", quantity:30, location:"Karnataka, India", grade:"Organic", farmer:"BioAgri Solutions", category:"pesticides", image:"https://images.unsplash.com/photo-1615485925503-7ec8340b4302?auto=format&fit=crop&q=80&w=1200" },
    { id:10, crop:"Insecticide Spray", price:380, unit:"liter", quantity:25, location:"Punjab, India", grade:"A", farmer:"Crop Care", category:"pesticides", image:"https://images.unsplash.com/photo-1615485925503-7ec8340b4302?auto=format&fit=crop&q=80&w=1200" },
    { id:11, crop:"Fungicide Solution", price:520, unit:"liter", quantity:20, location:"Maharashtra, India", grade:"Premium", farmer:"AgriChem", category:"pesticides", image:"https://images.unsplash.com/photo-1615485925503-7ec8340b4302?auto=format&fit=crop&q=80&w=1200" },
    { id:12, crop:"Herbicide", price:420, unit:"liter", quantity:35, location:"Haryana, India", grade:"A+", farmer:"Weed Control Pro", category:"pesticides", image:"https://images.unsplash.com/photo-1615485925503-7ec8340b4302?auto=format&fit=crop&q=80&w=1200" },
    // Agritech
    { id:13, crop:"Soil Moisture Sensor", price:2500, unit:"piece", quantity:15, location:"Bangalore, India", grade:"Tech", farmer:"AgriTech Solutions", category:"agritech", image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" },
    { id:14, crop:"Drip Irrigation Kit", price:8500, unit:"acre", quantity:10, location:"Pune, India", grade:"Premium", farmer:"Irrigation Pro", category:"agritech", image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" },
    { id:15, crop:"Smart Farming App Subscription", price:1200, unit:"year", quantity:100, location:"Online", grade:"Digital", farmer:"FarmTech", category:"agritech", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
    { id:16, crop:"Weather Station", price:15000, unit:"unit", quantity:8, location:"Delhi, India", grade:"Tech", farmer:"WeatherTech", category:"agritech", image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" },
    // Services (with rent option)
    { id:17, crop:"Tractor Rental", price:1500, unit:"day", quantity:5, location:"Punjab, India", grade:"Service", farmer:"Farm Equipment Rentals", category:"services", isRent:true, image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" },
    { id:18, crop:"Harvester Rental", price:3500, unit:"day", quantity:3, location:"Haryana, India", grade:"Service", farmer:"Harvest Services", category:"services", isRent:true, image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" },
    { id:19, crop:"Plowing Service", price:800, unit:"acre", quantity:20, location:"Maharashtra, India", grade:"Service", farmer:"Plow Masters", category:"services", isRent:false, image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" },
    { id:20, crop:"Thresher Rental", price:2000, unit:"day", quantity:4, location:"Gujarat, India", grade:"Service", farmer:"Equipment Hub", category:"services", isRent:true, image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" },
    { id:21, crop:"Irrigation Setup Service", price:5000, unit:"acre", quantity:12, location:"Karnataka, India", grade:"Service", farmer:"Water Works", category:"services", isRent:false, image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" },
    { id:22, crop:"Combine Harvester Rental", price:5000, unit:"day", quantity:2, location:"Punjab, India", grade:"Service", farmer:"Big Machines", category:"services", isRent:true, image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200" }
  ];

  const COMMUNITY_POSTS = [
    { id:1, user:"Ramesh Farmer", avatar:"https://i.pravatar.cc/150?u=ramesh", image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200", caption:"Successfully harvested the new batch of organic wheat! 🌾", likes:124, time:"2 hours ago" },
    { id:2, user:"Green Earth Co-op", avatar:"https://i.pravatar.cc/150?u=green", image:"https://images.unsplash.com/photo-1595855793915-633ba13f320f?auto=format&fit=crop&q=80&w=1200", caption:"Community meeting today discussing irrigation methods.", likes:89, time:"5 hours ago" },
    { id:3, user:"Priya Singh", avatar:"https://i.pravatar.cc/150?u=priya", image:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200", caption:"Look at these beautiful sunflowers! 🌻", likes:256, time:"1 day ago" }
  ];

  const LEARNING_MODULES = [
    { id:1, title:"Organic Farming Basics", category:"Beginner", description:"Learn fundamentals of chemical-free farming and soil health."},
    { id:2, title:"Government Schemes 2025", category:"Policy", description:"Latest subsidies and support programs."},
    { id:3, title:"Modern Irrigation", category:"Technology", description:"Drip irrigation and sprinkler systems."},
    { id:4, title:"Crop Grading & Packaging", category:"Business", description:"How to grade produce for better prices."}
  ];

  const CHAT_RESPONSES = {
    default: "I can help you with pest diagnosis, crop advisory, farming tips, and seasonal planning. What do you need help with today?",
    pest: "For pest control, try Neem oil spray (5ml/liter) as an organic solution.",
    crop: "Wheat and Mustard are good options depending on soil moisture. Have you tested your soil recently?",
    price: "Check the Mandi Prices Today section for current rates."
  };

  return {
    VEGETABLE_PRICES,
    MARKETPLACE_LISTINGS,
    COMMUNITY_POSTS,
    LEARNING_MODULES,
    CHAT_RESPONSES
  };
})();

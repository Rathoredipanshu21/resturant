const data = [
  {
    "id": 1,
    "img": "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Chicken Biryani",
    "description": "A flavorful rice dish with tender chicken and aromatic spices.",
    "price": 250.00,
    "oldPrice": 300.00
  },
  {
    "id": 2,
    "img": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Butter Chicken",
    "description": "Creamy chicken curry made with butter, cream, and tomatoes.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 3,
    "img": "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww",
    "name": "Tandoori Chicken",
    "description": "Juicy chicken marinated in yogurt and spices, cooked in a tandoor oven.",
    "price": 200.00,
    "oldPrice": 250.00
  },
  {
    "id": 4,
    "img": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww",
    "name": "Chicken Tikka Masala",
    "description": "Tender chicken in a rich and creamy tomato-based sauce.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 5,
    "img": "https://images.unsplash.com/photo-1697862446672-4bd74cc476d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXV0dG9uJTIwUm9nYW4lMjBKb3NofGVufDB8fDB8fHww",
    "name": "Mutton Rogan Josh",
    "description": "Kashmiri dish made with tender mutton in a rich gravy.",
    "price": 350.00,
    "oldPrice": 400.00
  },
  {
    "id": 6,
    "img": "https://images.unsplash.com/photo-1626508035297-0cd27c397d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww",
    "name": "Fish Curry",
    "description": "Fresh fish in a flavorful curry sauce with spices and coconut milk.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 7,
    "img": "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJhd24lMjBCaXJ5YW5pfGVufDB8fDB8fHww",
    "name": "Prawn Biryani",
    "description": "Biryani made with succulent prawns and fragrant rice.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 8,
    "img": "https://images.unsplash.com/photo-1696474551305-6b6e1c2af226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWdnJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D",
    "name": "Egg Curry",
    "description": "Boiled eggs in a flavorful curry sauce with onions, tomatoes, and spices.",
    "price": 180.00,
    "oldPrice": 220.00
  },
  {
    "id": 9,
    "img": "https://plus.unsplash.com/premium_photo-1695658519605-1c4271d844ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVlZiUyMEtlYmFic3xlbnwwfHwwfHx8MA%3D%3D",
    "name": "Beef Kebabs",
    "description": "Juicy beef kebabs marinated in yogurt and spices, grilled to perfection.",
    "price": 320.00,
    "oldPrice": 370.00
  },
  {
    "id": 10,
    "img": "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGFtYiUyMEN1cnJ5fGVufDB8fDB8fHww",
    "name": "Lamb Curry",
    "description": "Tender lamb pieces in a rich and aromatic curry sauce.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 11,
    "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg",
    "name": "Chicken 65",
    "description": "Spicy deep-fried chicken dish originating from South India.",
    "price": 220.00,
    "oldPrice": 260.00
  },
  {
    "id": 12,
    "img": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2glMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Kerala Fish Curry",
    "description": "Traditional fish curry from Kerala made with coconut milk and spices.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 13,
    "img": "https://images.unsplash.com/photo-1690983329845-638ec321647d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9yayUyMFZpbmRhbG9vfGVufDB8fDB8fHww",
    "name": "Pork Vindaloo",
    "description": "Spicy and tangy pork curry with vinegar and Indian spices.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 14,
    "img": "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29hbiUyMFByYXduJTIwQ3Vycnl8ZW58MHx8MHx8fDA%3D",
    "name": "Goan Prawn Curry",
    "description": "Flavorful prawn curry from Goa made with coconut milk and spices.",
    "price": 320.00,
    "oldPrice": 370.00
  },
  {
    "id": 15,
    "img": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpY2tlbiUyMG1hc2FsYXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Chicken Korma",
    "description": "Rich and creamy chicken curry made with yogurt, cream, and nuts.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 16,
    "img": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2VlbWElMjBQYXZ8ZW58MHx8MHx8fDA%3D",
    "name": "Keema Pav",
    "description": "Spicy minced meat curry served with soft bread rolls.",
    "price": 200.00,
    "oldPrice": 250.00
  },
  {
    "id": 17,
    "img": "https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE11dHRvbiUyMEJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    "name": "Mutton Biryani",
    "description": "Classic biryani made with tender mutton and fragrant basmati rice.",
    "price": 350.00,
    "oldPrice": 400.00
  },
  {
    "id": 18,
    "img": "https://images.unsplash.com/photo-1626253836448-e2376678c191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmlzaCUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Fish Fry",
    "description": "Fresh fish marinated in spices and deep-fried until crispy.",
    "price": 220.00,
    "oldPrice": 260.00
  },
  {
    "id": 19,
    "img": "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFRhbmRvb3JpfGVufDB8fDB8fHww",
    "name": "Chicken Tandoori",
    "description": "Marinated chicken cooked in a tandoor oven until charred.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 20,
    "img": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2VlbWElMjBQYXZ8ZW58MHx8MHx8fDA%3D",
    "name": "Keema Pav",
    "description": "Spicy minced meat curry served with soft bread rolls.",
    "price": 200.00,
    "oldPrice": 250.00
  }
,
  {
    "id": 21,
    "img": "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Chicken Biryani",
    "description": "A flavorful rice dish with tender chicken and aromatic spices.",
    "price": 250.00,
    "oldPrice": 300.00
  },
  {
    "id": 22,
    "img": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Butter Chicken",
    "description": "Creamy chicken curry made with butter, cream, and tomatoes.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 23,
    "img": "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fHww",
    "name": "Tandoori Chicken",
    "description": "Juicy chicken marinated in yogurt and spices, cooked in a tandoor oven.",
    "price": 200.00,
    "oldPrice": 250.00
  },
  {
    "id": 24,
    "img": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww",
    "name": "Chicken Tikka Masala",
    "description": "Tender chicken in a rich and creamy tomato-based sauce.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 25,
    "img": "https://images.unsplash.com/photo-1697862446672-4bd74cc476d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXV0dG9uJTIwUm9nYW4lMjBKb3NofGVufDB8fDB8fHww",
    "name": "Mutton Rogan Josh",
    "description": "Kashmiri dish made with tender mutton in a rich gravy.",
    "price": 350.00,
    "oldPrice": 400.00
  },
  {
    "id": 26,
    "img": "https://images.unsplash.com/photo-1626508035297-0cd27c397d67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww",
    "name": "Fish Curry",
    "description": "Fresh fish in a flavorful curry sauce with spices and coconut milk.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 27,
    "img": "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJhd24lMjBCaXJ5YW5pfGVufDB8fDB8fHww",
    "name": "Prawn Biryani",
    "description": "Biryani made with succulent prawns and fragrant rice.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 28,
    "img": "https://images.unsplash.com/photo-1696474551305-6b6e1c2af226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWdnJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D",
    "name": "Egg Curry",
    "description": "Boiled eggs in a flavorful curry sauce with onions, tomatoes, and spices.",
    "price": 180.00,
    "oldPrice": 220.00
  },
  {
    "id": 29,
    "img": "https://plus.unsplash.com/premium_photo-1695658519605-1c4271d844ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVlZiUyMEtlYmFic3xlbnwwfHwwfHx8MA%3D%3D",
    "name": "Beef Kebabs",
    "description": "Juicy beef kebabs marinated in yogurt and spices, grilled to perfection.",
    "price": 320.00,
    "oldPrice": 370.00
  },
  {
    "id": 30,
    "img": "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGFtYiUyMEN1cnJ5fGVufDB8fDB8fHww",
    "name": "Lamb Curry",
    "description": "Tender lamb pieces in a rich and aromatic curry sauce.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 31,
    "img": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg",
    "name": "Chicken 65",
    "description": "Spicy deep-fried chicken dish originating from South India.",
    "price": 220.00,
    "oldPrice": 260.00
  },
  {
    "id": 32,
    "img": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpc2glMjBjdXJyeXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Kerala Fish Curry",
    "description": "Traditional fish curry from Kerala made with coconut milk and spices.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 33,
    "img": "https://images.unsplash.com/photo-1690983329845-638ec321647d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UG9yayUyMFZpbmRhbG9vfGVufDB8fDB8fHww",
    "name": "Pork Vindaloo",
    "description": "Spicy and tangy pork curry with vinegar and Indian spices.",
    "price": 300.00,
    "oldPrice": 350.00
  },
  {
    "id": 34,
    "img": "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R29hbiUyMFByYXduJTIwQ3Vycnl8ZW58MHx8MHx8fDA%3D",
    "name": "Goan Prawn Curry",
    "description": "Flavorful prawn curry from Goa made with coconut milk and spices.",
    "price": 320.00,
    "oldPrice": 370.00
  },
  {
    "id": 35,
    "img": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpY2tlbiUyMG1hc2FsYXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Chicken Korma",
    "description": "Rich and creamy chicken curry made with yogurt, cream, and nuts.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 36,
    "img": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2VlbWElMjBQYXZ8ZW58MHx8MHx8fDA%3D",
    "name": "Keema Pav",
    "description": "Spicy minced meat curry served with soft bread rolls.",
    "price": 200.00,
    "oldPrice": 250.00
  },
  {
    "id": 37,
    "img": "https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE11dHRvbiUyMEJpcnlhbml8ZW58MHx8MHx8fDA%3D",
    "name": "Mutton Biryani",
    "description": "Classic biryani made with tender mutton and fragrant basmati rice.",
    "price": 350.00,
    "oldPrice": 400.00
  },
  {
    "id": 38,
    "img": "https://images.unsplash.com/photo-1626253836448-e2376678c191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RmlzaCUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
    "name": "Fish Fry",
    "description": "Fresh fish marinated in spices and deep-fried until crispy.",
    "price": 220.00,
    "oldPrice": 260.00
  },
  {
    "id": 39,
    "img": "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFRhbmRvb3JpfGVufDB8fDB8fHww",
    "name": "Chicken Tandoori",
    "description": "Marinated chicken cooked in a tandoor oven until charred.",
    "price": 280.00,
    "oldPrice": 320.00
  },
  {
    "id": 40,
    "img": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8S2VlbWElMjBQYXZ8ZW58MHx8MHx8fDA%3D",
    "name": "Keema Pav",
    "description": "Spicy minced meat curry served with soft bread rolls.",
    "price": 200.00,
    "oldPrice": 250.00
  }
];

export default data;

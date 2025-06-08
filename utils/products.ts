// const categories = [
//   'Electronics',
//   'Home & Kitchen',
//   'Clothing',
//   'Books',
//   'Toys',
//   'Health',
//   'Beauty',
//   'Automotive',
//   'Office Supplies',
//   'Sports',
//   'Garden',
//   'Pets',
//   'Grocery',
// ];

// const adjectives = [
//   'Smart',
//   'Eco',
//   'Ultra',
//   'Modern',
//   'Classic',
//   'Premium',
//   'Deluxe',
//   'Portable',
//   'Compact',
//   'Wireless',
//   'Elegant',
//   'Stylish',
//   'Rugged',
//   'Advanced',
//   'Quiet',
// ];

// const productNouns = [
//   'Speaker',
//   'Lamp',
//   'Chair',
//   'Watch',
//   'Pen',
//   'Keyboard',
//   'Phone',
//   'Backpack',
//   'Blender',
//   'Mug',
//   'Monitor',
//   'Tablet',
//   'Towel',
//   'Shoes',
//   'Mic',
// ];

// const randomName = () => {
//   const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
//   const noun = productNouns[Math.floor(Math.random() * productNouns.length)];
//   return `${adj} ${noun}`;
// };

// const randomCategory = () =>
//   categories[Math.floor(Math.random() * categories.length)];

// export const products = Array.from({length: 300}, (_, i) => {
//   const id = `prod-${i + 1}`;
//   const category = randomCategory();
//   const name = randomName();
//   const price = (Math.random() * 990 + 10).toFixed(2);
//   const image = `https://picsum.photos/400?random=${Math.random()}`;
//   // const image = `https://picsum.photos/seed/${id}`;
//   const description = `
//     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo necessitatibus aliquam perspiciatis earum eaque harum minima at. Voluptate odio doloremque earum repellat assumenda doloribus, inventore aut accusantium sint nam soluta.
// Delectus laborum id libero doloremque doloribus explicabo! Reiciendis, vero inventore animi, praesentium omnis architecto officiis at autem explicabo amet magni expedita necessitatibus tempora consequatur cupiditate? A laudantium eius blanditiis eum?
// Fugit, error recusandae vitae odit esse modi non earum a nulla voluptatum quidem dicta laborum veniam? Totam nobis, ducimus a ratione asperiores similique iusto obcaecati, molestiae accusamus saepe dolorem corrupti.
// Harum minus exercitationem, soluta ullam, iure corporis non incidunt, dolorum ipsa voluptatum adipisci animi repellendus expedita libero eum. Praesentium at dicta quia fugiat totam, corrupti quos perspiciatis quasi nostrum minima.
//   `;
//   return {id, category, name, price, image, description};
// });

import {type Product} from '../screens/products/types';

// export const loadProducts = async (): Promise<Product[]> => {
//   const res = await fetch('https://dummyjson.com/products?limit=300');
//   const {products} = await res.json();

//   const transformed = products.map((product: any) => ({
//     id: product.id,
//     name: product.title, // ← map `title` to `name`
//     price: product.price,
//     description: product.description,
//     category: product.category,
//     image: product.thumbnail || product.image || '', // fallback
//   }));

//   return transformed;
// };

export const products: Product[] = [
  {
    id: 1,
    name: 'Essence Mascara Lash Princess',
    price: 9.99,
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    category: 'beauty',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  },
  {
    id: 2,
    name: 'Eyeshadow Palette with Mirror',
    price: 19.99,
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: 'beauty',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
  },
  {
    id: 3,
    name: 'Powder Canister',
    price: 14.99,
    description:
      'The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.',
    category: 'beauty',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp',
  },
  {
    id: 4,
    name: 'Red Lipstick',
    price: 12.99,
    description:
      'The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.',
    category: 'beauty',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
  },
  {
    id: 5,
    name: 'Red Nail Polish',
    price: 8.99,
    description:
      'The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.',
    category: 'beauty',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp',
  },
  {
    id: 6,
    name: 'Calvin Klein CK One',
    price: 49.99,
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: 'fragrances',
    image:
      'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp',
  },
  {
    id: 7,
    name: 'Chanel Coco Noir Eau De',
    price: 129.99,
    description:
      'Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.',
    category: 'fragrances',
    image:
      'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp',
  },
  {
    id: 8,
    name: "Dior J'adore",
    price: 89.99,
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: 'fragrances',
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
  },
  {
    id: 9,
    name: 'Dolce Shine Eau de',
    price: 69.99,
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: 'fragrances',
    image:
      'https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp',
  },
  {
    id: 10,
    name: 'Gucci Bloom Eau de',
    price: 79.99,
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: 'fragrances',
    image:
      'https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp',
  },
  {
    id: 11,
    name: 'Annibale Colombo Bed',
    price: 1899.99,
    description:
      'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',
    category: 'furniture',
    image:
      'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp',
  },
  {
    id: 12,
    name: 'Annibale Colombo Sofa',
    price: 2499.99,
    description:
      'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
    category: 'furniture',
    image:
      'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp',
  },
  {
    id: 13,
    name: 'Bedside Table African Cherry',
    price: 299.99,
    description:
      'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',
    category: 'furniture',
    image:
      'https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp',
  },
  {
    id: 14,
    name: 'Knoll Saarinen Executive Conference Chair',
    price: 499.99,
    description:
      'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',
    category: 'furniture',
    image:
      'https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp',
  },
  {
    id: 15,
    name: 'Wooden Bathroom Sink With Mirror',
    price: 799.99,
    description:
      'The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.',
    category: 'furniture',
    image:
      'https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp',
  },
  {
    id: 16,
    name: 'Apple',
    price: 1.99,
    description:
      'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp',
  },
  {
    id: 17,
    name: 'Beef Steak',
    price: 12.99,
    description:
      'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp',
  },
  {
    id: 18,
    name: 'Cat Food',
    price: 8.99,
    description:
      'Nutritious cat food formulated to meet the dietary needs of your feline friend.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp',
  },
  {
    id: 19,
    name: 'Chicken Meat',
    price: 9.99,
    description:
      'Fresh and tender chicken meat, suitable for various culinary preparations.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp',
  },
  {
    id: 20,
    name: 'Cooking Oil',
    price: 4.99,
    description:
      'Versatile cooking oil suitable for frying, sautéing, and various culinary applications.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp',
  },
  {
    id: 21,
    name: 'Cucumber',
    price: 1.49,
    description:
      'Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp',
  },
  {
    id: 22,
    name: 'Dog Food',
    price: 10.99,
    description:
      'Specially formulated dog food designed to provide essential nutrients for your canine companion.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp',
  },
  {
    id: 23,
    name: 'Eggs',
    price: 2.99,
    description:
      'Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp',
  },
  {
    id: 24,
    name: 'Fish Steak',
    price: 14.99,
    description:
      'Quality fish steak, suitable for grilling, baking, or pan-searing.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp',
  },
  {
    id: 25,
    name: 'Green Bell Pepper',
    price: 1.29,
    description:
      'Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp',
  },
  {
    id: 26,
    name: 'Green Chili Pepper',
    price: 0.99,
    description:
      'Spicy green chili pepper, ideal for adding heat to your favorite recipes.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp',
  },
  {
    id: 27,
    name: 'Honey Jar',
    price: 6.99,
    description:
      'Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp',
  },
  {
    id: 28,
    name: 'Ice Cream',
    price: 5.49,
    description:
      'Creamy and delicious ice cream, available in various flavors for a delightful treat.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp',
  },
  {
    id: 29,
    name: 'Juice',
    price: 3.99,
    description:
      'Refreshing fruit juice, packed with vitamins and great for staying hydrated.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp',
  },
  {
    id: 30,
    name: 'Kiwi',
    price: 2.49,
    description:
      'Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp',
  },
  {
    id: 31,
    name: 'Lemon',
    price: 0.79,
    description:
      'Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp',
  },
  {
    id: 32,
    name: 'Milk',
    price: 3.49,
    description:
      'Fresh and nutritious milk, a staple for various recipes and daily consumption.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp',
  },
  {
    id: 33,
    name: 'Mulberry',
    price: 4.99,
    description:
      'Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp',
  },
  {
    id: 34,
    name: 'Nescafe Coffee',
    price: 7.99,
    description:
      'Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp',
  },
  {
    id: 35,
    name: 'Potatoes',
    price: 2.29,
    description:
      'Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp',
  },
  {
    id: 36,
    name: 'Protein Powder',
    price: 19.99,
    description:
      'Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp',
  },
  {
    id: 37,
    name: 'Red Onions',
    price: 1.99,
    description:
      'Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp',
  },
  {
    id: 38,
    name: 'Rice',
    price: 5.99,
    description:
      'High-quality rice, a staple for various cuisines and a versatile base for many dishes.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp',
  },
  {
    id: 39,
    name: 'Soft Drinks',
    price: 1.99,
    description:
      'Assorted soft drinks in various flavors, perfect for refreshing beverages.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp',
  },
  {
    id: 40,
    name: 'Strawberry',
    price: 3.99,
    description:
      'Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp',
  },
  {
    id: 41,
    name: 'Tissue Paper Box',
    price: 2.49,
    description:
      'Convenient tissue paper box for everyday use, providing soft and absorbent tissues.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp',
  },
  {
    id: 42,
    name: 'Water',
    price: 0.99,
    description:
      'Pure and refreshing bottled water, essential for staying hydrated throughout the day.',
    category: 'groceries',
    image:
      'https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp',
  },
  {
    id: 43,
    name: 'Decoration Swing',
    price: 59.99,
    description:
      'The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.',
    category: 'home-decoration',
    image:
      'https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp',
  },
  {
    id: 44,
    name: 'Family Tree Photo Frame',
    price: 29.99,
    description:
      'The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.',
    category: 'home-decoration',
    image:
      'https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp',
  },
  {
    id: 45,
    name: 'House Showpiece Plant',
    price: 39.99,
    description:
      'The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.',
    category: 'home-decoration',
    image:
      'https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp',
  },
  {
    id: 46,
    name: 'Plant Pot',
    price: 14.99,
    description:
      'The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.',
    category: 'home-decoration',
    image:
      'https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp',
  },
  {
    id: 47,
    name: 'Table Lamp',
    price: 49.99,
    description:
      'The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.',
    category: 'home-decoration',
    image:
      'https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp',
  },
  {
    id: 48,
    name: 'Bamboo Spatula',
    price: 7.99,
    description:
      'The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp',
  },
  {
    id: 49,
    name: 'Black Aluminium Cup',
    price: 5.99,
    description:
      'The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp',
  },
  {
    id: 50,
    name: 'Black Whisk',
    price: 9.99,
    description:
      'The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp',
  },
  {
    id: 51,
    name: 'Boxed Blender',
    price: 39.99,
    description:
      'The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp',
  },
  {
    id: 52,
    name: 'Carbon Steel Wok',
    price: 29.99,
    description:
      'The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp',
  },
  {
    id: 53,
    name: 'Chopping Board',
    price: 12.99,
    description:
      'The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp',
  },
  {
    id: 54,
    name: 'Citrus Squeezer Yellow',
    price: 8.99,
    description:
      'The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp',
  },
  {
    id: 55,
    name: 'Egg Slicer',
    price: 6.99,
    description:
      "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp',
  },
  {
    id: 56,
    name: 'Electric Stove',
    price: 49.99,
    description:
      'The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp',
  },
  {
    id: 57,
    name: 'Fine Mesh Strainer',
    price: 9.99,
    description:
      'The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp',
  },
  {
    id: 58,
    name: 'Fork',
    price: 3.99,
    description:
      'The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp',
  },
  {
    id: 59,
    name: 'Glass',
    price: 4.99,
    description:
      'The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp',
  },
  {
    id: 60,
    name: 'Grater Black',
    price: 10.99,
    description:
      'The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp',
  },
  {
    id: 61,
    name: 'Hand Blender',
    price: 34.99,
    description:
      'The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp',
  },
  {
    id: 62,
    name: 'Ice Cube Tray',
    price: 5.99,
    description:
      'The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp',
  },
  {
    id: 63,
    name: 'Kitchen Sieve',
    price: 7.99,
    description:
      'The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp',
  },
  {
    id: 64,
    name: 'Knife',
    price: 14.99,
    description:
      'The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp',
  },
  {
    id: 65,
    name: 'Lunch Box',
    price: 12.99,
    description:
      "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp',
  },
  {
    id: 66,
    name: 'Microwave Oven',
    price: 89.99,
    description:
      'The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp',
  },
  {
    id: 67,
    name: 'Mug Tree Stand',
    price: 15.99,
    description:
      'The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp',
  },
  {
    id: 68,
    name: 'Pan',
    price: 24.99,
    description:
      'The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp',
  },
  {
    id: 69,
    name: 'Plate',
    price: 3.99,
    description:
      'The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp',
  },
  {
    id: 70,
    name: 'Red Tongs',
    price: 6.99,
    description:
      'The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp',
  },
  {
    id: 71,
    name: 'Silver Pot With Glass Cap',
    price: 39.99,
    description:
      'The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp',
  },
  {
    id: 72,
    name: 'Slotted Turner',
    price: 8.99,
    description:
      'The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp',
  },
  {
    id: 73,
    name: 'Spice Rack',
    price: 19.99,
    description:
      'The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp',
  },
  {
    id: 74,
    name: 'Spoon',
    price: 4.99,
    description:
      'The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp',
  },
  {
    id: 75,
    name: 'Tray',
    price: 16.99,
    description:
      'The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp',
  },
  {
    id: 76,
    name: 'Wooden Rolling Pin',
    price: 11.99,
    description:
      'The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp',
  },
  {
    id: 77,
    name: 'Yellow Peeler',
    price: 5.99,
    description:
      'The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.',
    category: 'kitchen-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp',
  },
  {
    id: 78,
    name: 'Apple MacBook Pro 14 Inch Space Grey',
    price: 1999.99,
    description:
      "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    category: 'laptops',
    image:
      'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp',
  },
  {
    id: 79,
    name: 'Asus Zenbook Pro Dual Screen Laptop',
    price: 1799.99,
    description:
      'The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.',
    category: 'laptops',
    image:
      'https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp',
  },
  {
    id: 80,
    name: 'Huawei Matebook X Pro',
    price: 1399.99,
    description:
      'The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.',
    category: 'laptops',
    image:
      'https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp',
  },
  {
    id: 81,
    name: 'Lenovo Yoga 920',
    price: 1099.99,
    description:
      'The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.',
    category: 'laptops',
    image:
      'https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp',
  },
  {
    id: 82,
    name: 'New DELL XPS 13 9300 Laptop',
    price: 1499.99,
    description:
      'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
    category: 'laptops',
    image:
      'https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp',
  },
  {
    id: 83,
    name: 'Blue & Black Check Shirt',
    price: 29.99,
    description:
      "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    category: 'mens-shirts',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp',
  },
  {
    id: 84,
    name: 'Gigabyte Aorus Men Tshirt',
    price: 24.99,
    description:
      "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    category: 'mens-shirts',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp',
  },
  {
    id: 85,
    name: 'Man Plaid Shirt',
    price: 34.99,
    description:
      "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    category: 'mens-shirts',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp',
  },
  {
    id: 86,
    name: 'Man Short Sleeve Shirt',
    price: 19.99,
    description:
      "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    category: 'mens-shirts',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp',
  },
  {
    id: 87,
    name: 'Men Check Shirt',
    price: 27.99,
    description:
      'The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.',
    category: 'mens-shirts',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp',
  },
  {
    id: 88,
    name: 'Nike Air Jordan 1 Red And Black',
    price: 149.99,
    description:
      'The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.',
    category: 'mens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp',
  },
  {
    id: 89,
    name: 'Nike Baseball Cleats',
    price: 79.99,
    description:
      'Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.',
    category: 'mens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp',
  },
  {
    id: 90,
    name: 'Puma Future Rider Trainers',
    price: 89.99,
    description:
      'The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.',
    category: 'mens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp',
  },
  {
    id: 91,
    name: 'Sports Sneakers Off White & Red',
    price: 119.99,
    description:
      'The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.',
    category: 'mens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp',
  },
  {
    id: 92,
    name: 'Sports Sneakers Off White Red',
    price: 109.99,
    description:
      'Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.',
    category: 'mens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp',
  },
  {
    id: 93,
    name: 'Brown Leather Belt Watch',
    price: 89.99,
    description:
      'The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.',
    category: 'mens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp',
  },
  {
    id: 94,
    name: 'Longines Master Collection',
    price: 1499.99,
    description:
      "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    category: 'mens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp',
  },
  {
    id: 95,
    name: 'Rolex Cellini Date Black Dial',
    price: 8999.99,
    description:
      "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    category: 'mens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp',
  },
  {
    id: 96,
    name: 'Rolex Cellini Moonphase',
    price: 12999.99,
    description:
      "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    category: 'mens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp',
  },
  {
    id: 97,
    name: 'Rolex Datejust',
    price: 10999.99,
    description:
      "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    category: 'mens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp',
  },
  {
    id: 98,
    name: 'Rolex Submariner Watch',
    price: 13999.99,
    description:
      "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    category: 'mens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp',
  },
  {
    id: 99,
    name: 'Amazon Echo Plus',
    price: 99.99,
    description:
      'The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp',
  },
  {
    id: 100,
    name: 'Apple Airpods',
    price: 129.99,
    description:
      'The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp',
  },
  {
    id: 101,
    name: 'Apple AirPods Max Silver',
    price: 549.99,
    description:
      'The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp',
  },
  {
    id: 102,
    name: 'Apple Airpower Wireless Charger',
    price: 79.99,
    description:
      'The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp',
  },
  {
    id: 103,
    name: 'Apple HomePod Mini Cosmic Grey',
    price: 99.99,
    description:
      'The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp',
  },
  {
    id: 104,
    name: 'Apple iPhone Charger',
    price: 19.99,
    description:
      'The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp',
  },
  {
    id: 105,
    name: 'Apple MagSafe Battery Pack',
    price: 99.99,
    description:
      'The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp',
  },
  {
    id: 106,
    name: 'Apple Watch Series 4 Gold',
    price: 349.99,
    description:
      'The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp',
  },
  {
    id: 107,
    name: 'Beats Flex Wireless Earphones',
    price: 49.99,
    description:
      'The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp',
  },
  {
    id: 108,
    name: 'iPhone 12 Silicone Case with MagSafe Plum',
    price: 29.99,
    description:
      'The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp',
  },
  {
    id: 109,
    name: 'Monopod',
    price: 19.99,
    description:
      'The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp',
  },
  {
    id: 110,
    name: 'Selfie Lamp with iPhone',
    price: 14.99,
    description:
      'The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp',
  },
  {
    id: 111,
    name: 'Selfie Stick Monopod',
    price: 12.99,
    description:
      'The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp',
  },
  {
    id: 112,
    name: 'TV Studio Camera Pedestal',
    price: 499.99,
    description:
      'The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.',
    category: 'mobile-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp',
  },
  {
    id: 113,
    name: 'Generic Motorcycle',
    price: 3999.99,
    description:
      'The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.',
    category: 'motorcycle',
    image:
      'https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp',
  },
  {
    id: 114,
    name: 'Kawasaki Z800',
    price: 8999.99,
    description:
      "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    category: 'motorcycle',
    image:
      'https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp',
  },
  {
    id: 115,
    name: 'MotoGP CI.H1',
    price: 14999.99,
    description:
      'The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.',
    category: 'motorcycle',
    image:
      'https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp',
  },
  {
    id: 116,
    name: 'Scooter Motorcycle',
    price: 2999.99,
    description:
      'The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.',
    category: 'motorcycle',
    image:
      'https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp',
  },
  {
    id: 117,
    name: 'Sportbike Motorcycle',
    price: 7499.99,
    description:
      "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    category: 'motorcycle',
    image:
      'https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp',
  },
  {
    id: 118,
    name: 'Attitude Super Leaves Hand Soap',
    price: 8.99,
    description:
      'Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.',
    category: 'skin-care',
    image:
      'https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp',
  },
  {
    id: 119,
    name: 'Olay Ultra Moisture Shea Butter Body Wash',
    price: 12.99,
    description:
      'Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.',
    category: 'skin-care',
    image:
      'https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp',
  },
  {
    id: 120,
    name: 'Vaseline Men Body and Face Lotion',
    price: 9.99,
    description:
      "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    category: 'skin-care',
    image:
      'https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp',
  },
  {
    id: 121,
    name: 'iPhone 5s',
    price: 199.99,
    description:
      "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp',
  },
  {
    id: 122,
    name: 'iPhone 6',
    price: 299.99,
    description:
      'The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp',
  },
  {
    id: 123,
    name: 'iPhone 13 Pro',
    price: 1099.99,
    description:
      'The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp',
  },
  {
    id: 124,
    name: 'iPhone X',
    price: 899.99,
    description:
      'The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp',
  },
  {
    id: 125,
    name: 'Oppo A57',
    price: 249.99,
    description:
      'The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp',
  },
  {
    id: 126,
    name: 'Oppo F19 Pro Plus',
    price: 399.99,
    description:
      'The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp',
  },
  {
    id: 127,
    name: 'Oppo K1',
    price: 299.99,
    description:
      'The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp',
  },
  {
    id: 128,
    name: 'Realme C35',
    price: 149.99,
    description:
      'The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp',
  },
  {
    id: 129,
    name: 'Realme X',
    price: 299.99,
    description:
      'The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp',
  },
  {
    id: 130,
    name: 'Realme XT',
    price: 349.99,
    description:
      'The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp',
  },
  {
    id: 131,
    name: 'Samsung Galaxy S7',
    price: 299.99,
    description:
      'The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp',
  },
  {
    id: 132,
    name: 'Samsung Galaxy S8',
    price: 499.99,
    description:
      'The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp',
  },
  {
    id: 133,
    name: 'Samsung Galaxy S10',
    price: 699.99,
    description:
      'The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp',
  },
  {
    id: 134,
    name: 'Vivo S1',
    price: 249.99,
    description:
      'The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp',
  },
  {
    id: 135,
    name: 'Vivo V9',
    price: 299.99,
    description:
      'The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp',
  },
  {
    id: 136,
    name: 'Vivo X21',
    price: 499.99,
    description:
      'The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.',
    category: 'smartphones',
    image:
      'https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp',
  },
  {
    id: 137,
    name: 'American Football',
    price: 19.99,
    description:
      'The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp',
  },
  {
    id: 138,
    name: 'Baseball Ball',
    price: 8.99,
    description:
      'The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp',
  },
  {
    id: 139,
    name: 'Baseball Glove',
    price: 24.99,
    description:
      'The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp',
  },
  {
    id: 140,
    name: 'Basketball',
    price: 14.99,
    description:
      'The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp',
  },
  {
    id: 141,
    name: 'Basketball Rim',
    price: 39.99,
    description:
      'The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp',
  },
  {
    id: 142,
    name: 'Cricket Ball',
    price: 12.99,
    description:
      'The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp',
  },
  {
    id: 143,
    name: 'Cricket Bat',
    price: 29.99,
    description:
      'The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp',
  },
  {
    id: 144,
    name: 'Cricket Helmet',
    price: 44.99,
    description:
      'The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp',
  },
  {
    id: 145,
    name: 'Cricket Wicket',
    price: 29.99,
    description:
      'The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp',
  },
  {
    id: 146,
    name: 'Feather Shuttlecock',
    price: 5.99,
    description:
      'The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp',
  },
  {
    id: 147,
    name: 'Football',
    price: 17.99,
    description:
      'The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp',
  },
  {
    id: 148,
    name: 'Golf Ball',
    price: 9.99,
    description:
      'The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp',
  },
  {
    id: 149,
    name: 'Iron Golf',
    price: 49.99,
    description:
      'The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp',
  },
  {
    id: 150,
    name: 'Metal Baseball Bat',
    price: 29.99,
    description:
      'The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp',
  },
  {
    id: 151,
    name: 'Tennis Ball',
    price: 6.99,
    description:
      'The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp',
  },
  {
    id: 152,
    name: 'Tennis Racket',
    price: 49.99,
    description:
      'The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp',
  },
  {
    id: 153,
    name: 'Volleyball',
    price: 11.99,
    description:
      'The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.',
    category: 'sports-accessories',
    image:
      'https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp',
  },
  {
    id: 154,
    name: 'Black Sun Glasses',
    price: 29.99,
    description:
      'The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.',
    category: 'sunglasses',
    image:
      'https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp',
  },
  {
    id: 155,
    name: 'Classic Sun Glasses',
    price: 24.99,
    description:
      'The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.',
    category: 'sunglasses',
    image:
      'https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp',
  },
  {
    id: 156,
    name: 'Green and Black Glasses',
    price: 34.99,
    description:
      'The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.',
    category: 'sunglasses',
    image:
      'https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp',
  },
  {
    id: 157,
    name: 'Party Glasses',
    price: 19.99,
    description:
      "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    category: 'sunglasses',
    image:
      'https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp',
  },
  {
    id: 158,
    name: 'Sunglasses',
    price: 22.99,
    description:
      'The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.',
    category: 'sunglasses',
    image:
      'https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp',
  },
  {
    id: 159,
    name: 'iPad Mini 2021 Starlight',
    price: 499.99,
    description:
      'The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.',
    category: 'tablets',
    image:
      'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp',
  },
  {
    id: 160,
    name: 'Samsung Galaxy Tab S8 Plus Grey',
    price: 599.99,
    description:
      "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    category: 'tablets',
    image:
      'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp',
  },
  {
    id: 161,
    name: 'Samsung Galaxy Tab White',
    price: 349.99,
    description:
      'The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.',
    category: 'tablets',
    image:
      'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp',
  },
  {
    id: 162,
    name: 'Blue Frock',
    price: 29.99,
    description:
      'The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.',
    category: 'tops',
    image:
      'https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp',
  },
  {
    id: 163,
    name: 'Girl Summer Dress',
    price: 19.99,
    description:
      "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    category: 'tops',
    image:
      'https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp',
  },
  {
    id: 164,
    name: 'Gray Dress',
    price: 34.99,
    description:
      'The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.',
    category: 'tops',
    image:
      'https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp',
  },
  {
    id: 165,
    name: 'Short Frock',
    price: 24.99,
    description:
      'The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.',
    category: 'tops',
    image:
      'https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp',
  },
  {
    id: 166,
    name: 'Tartan Dress',
    price: 39.99,
    description:
      'The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.',
    category: 'tops',
    image:
      'https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp',
  },
  {
    id: 167,
    name: '300 Touring',
    price: 28999.99,
    description:
      'The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.',
    category: 'vehicle',
    image:
      'https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp',
  },
  {
    id: 168,
    name: 'Charger SXT RWD',
    price: 32999.99,
    description:
      'The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.',
    category: 'vehicle',
    image:
      'https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp',
  },
  {
    id: 169,
    name: 'Dodge Hornet GT Plus',
    price: 24999.99,
    description:
      'The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.',
    category: 'vehicle',
    image:
      'https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp',
  },
  {
    id: 170,
    name: 'Durango SXT RWD',
    price: 36999.99,
    description:
      'The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.',
    category: 'vehicle',
    image:
      'https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp',
  },
  {
    id: 171,
    name: 'Pacifica Touring',
    price: 31999.99,
    description:
      'The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.',
    category: 'vehicle',
    image:
      'https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp',
  },
  {
    id: 172,
    name: "Blue Women's Handbag",
    price: 49.99,
    description:
      "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    category: 'womens-bags',
    image:
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
  },
  {
    id: 173,
    name: "Heshe Women's Leather Bag",
    price: 129.99,
    description:
      "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    category: 'womens-bags',
    image:
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
  },
  {
    id: 174,
    name: 'Prada Women Bag',
    price: 599.99,
    description:
      "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    category: 'womens-bags',
    image:
      'https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp',
  },
  {
    id: 175,
    name: 'White Faux Leather Backpack',
    price: 39.99,
    description:
      "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    category: 'womens-bags',
    image:
      'https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp',
  },
  {
    id: 176,
    name: 'Women Handbag Black',
    price: 59.99,
    description:
      "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    category: 'womens-bags',
    image:
      'https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp',
  },
  {
    id: 177,
    name: "Black Women's Gown",
    price: 129.99,
    description:
      "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    category: 'womens-dresses',
    image:
      "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
  },
  {
    id: 178,
    name: 'Corset Leather With Skirt',
    price: 89.99,
    description:
      'The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.',
    category: 'womens-dresses',
    image:
      'https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp',
  },
  {
    id: 179,
    name: 'Corset With Black Skirt',
    price: 79.99,
    description:
      'The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.',
    category: 'womens-dresses',
    image:
      'https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp',
  },
  {
    id: 180,
    name: 'Dress Pea',
    price: 49.99,
    description:
      'The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.',
    category: 'womens-dresses',
    image:
      'https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp',
  },
  {
    id: 181,
    name: 'Marni Red & Black Suit',
    price: 179.99,
    description:
      'The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.',
    category: 'womens-dresses',
    image:
      'https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp',
  },
  {
    id: 182,
    name: 'Green Crystal Earring',
    price: 29.99,
    description:
      'The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.',
    category: 'womens-jewellery',
    image:
      'https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp',
  },
  {
    id: 183,
    name: 'Green Oval Earring',
    price: 24.99,
    description:
      'The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.',
    category: 'womens-jewellery',
    image:
      'https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp',
  },
  {
    id: 184,
    name: 'Tropical Earring',
    price: 19.99,
    description:
      "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    category: 'womens-jewellery',
    image:
      'https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp',
  },
  {
    id: 185,
    name: 'Black & Brown Slipper',
    price: 19.99,
    description:
      'The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.',
    category: 'womens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp',
  },
  {
    id: 186,
    name: 'Calvin Klein Heel Shoes',
    price: 79.99,
    description:
      'Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.',
    category: 'womens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp',
  },
  {
    id: 187,
    name: 'Golden Shoes Woman',
    price: 49.99,
    description:
      'The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.',
    category: 'womens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp',
  },
  {
    id: 188,
    name: 'Pampi Shoes',
    price: 29.99,
    description:
      'Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.',
    category: 'womens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp',
  },
  {
    id: 189,
    name: 'Red Shoes',
    price: 34.99,
    description:
      'The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.',
    category: 'womens-shoes',
    image:
      'https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp',
  },
  {
    id: 190,
    name: 'IWC Ingenieur Automatic Steel',
    price: 4999.99,
    description:
      'The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.',
    category: 'womens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp',
  },
  {
    id: 191,
    name: 'Rolex Cellini Moonphase',
    price: 15999.99,
    description:
      'The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.',
    category: 'womens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/thumbnail.webp',
  },
  {
    id: 192,
    name: 'Rolex Datejust Women',
    price: 10999.99,
    description:
      "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    category: 'womens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/thumbnail.webp',
  },
  {
    id: 193,
    name: 'Watch Gold for Women',
    price: 799.99,
    description:
      "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    category: 'womens-watches',
    image:
      'https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp',
  },
  {
    id: 194,
    name: "Women's Wrist Watch",
    price: 129.99,
    description:
      "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    category: 'womens-watches',
    image:
      "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp",
  },
];

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@vibefusion.ro' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@vibefusion.ro',
      password: hashedPassword,
      name: 'Admin',
      role: 'ADMIN',
    },
  })

  console.log('👤 Created admin user:', admin.email)

  // Create categories
  const categories = [
    {
      name: 'Appetizers',
      description: 'Start your culinary journey with our fusion appetizers',
      order: 1,
    },
    {
      name: 'Main Courses',
      description: 'Innovative fusion dishes that blend traditions',
      order: 2,
    },
    {
      name: 'Desserts',
      description: 'Sweet endings with international influences',
      order: 3,
    },
    {
      name: 'Beverages',
      description: 'Refreshing drinks and signature cocktails',
      order: 4,
    },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    })
  }

  console.log('📂 Created categories')

  // Get category IDs
  const appetizersCategory = await prisma.category.findUnique({ where: { name: 'Appetizers' } })
  const mainCoursesCategory = await prisma.category.findUnique({ where: { name: 'Main Courses' } })
  const dessertsCategory = await prisma.category.findUnique({ where: { name: 'Desserts' } })
  const beveragesCategory = await prisma.category.findUnique({ where: { name: 'Beverages' } })

  // Create sample menu items
  const menuItems = [
    // Appetizers
    {
      name: 'Asian Fusion Spring Rolls',
      description: 'Crispy spring rolls filled with fresh vegetables and served with our signature fusion dipping sauce',
      price: 28,
      ingredients: JSON.stringify(['cabbage', 'carrots', 'bell peppers', 'herbs', 'rice paper']),
      allergens: JSON.stringify(['gluten']),
      isVegetarian: true,
      categoryId: appetizersCategory?.id!,
      order: 1,
    },
    {
      name: 'Fusion Bruschetta',
      description: 'Traditional Italian bruschetta with Asian-inspired toppings',
      price: 32,
      ingredients: JSON.stringify(['sourdough bread', 'tomatoes', 'miso', 'herbs']),
      allergens: JSON.stringify(['gluten']),
      isVegetarian: true,
      categoryId: appetizersCategory?.id!,
      order: 2,
    },
    
    // Main Courses
    {
      name: 'Miso Glazed Salmon',
      description: 'Fresh salmon glazed with our house-made miso sauce, served with jasmine rice and seasonal vegetables',
      price: 85,
      ingredients: JSON.stringify(['salmon', 'miso', 'jasmine rice', 'seasonal vegetables']),
      allergens: JSON.stringify(['fish', 'soy']),
      prepTime: 25,
      categoryId: mainCoursesCategory?.id!,
      order: 1,
    },
    {
      name: 'Fusion Ramen Bowl',
      description: 'Our signature ramen with Romanian influences, rich broth and fresh toppings',
      price: 65,
      ingredients: JSON.stringify(['ramen noodles', 'pork broth', 'egg', 'vegetables']),
      allergens: JSON.stringify(['gluten', 'eggs']),
      spiceLevel: 2,
      categoryId: mainCoursesCategory?.id!,
      order: 2,
    },
    {
      name: 'Mediterranean Curry',
      description: 'A unique blend of Mediterranean flavors with Indian spices',
      price: 72,
      ingredients: JSON.stringify(['chicken', 'coconut milk', 'spices', 'rice']),
      allergens: JSON.stringify([]),
      spiceLevel: 3,
      categoryId: mainCoursesCategory?.id!,
      order: 3,
    },

    // Desserts
    {
      name: 'Fusion Tiramisu',
      description: 'Classic Italian tiramisu with a Japanese matcha twist',
      price: 35,
      ingredients: JSON.stringify(['mascarpone', 'matcha', 'ladyfingers', 'coffee']),
      allergens: JSON.stringify(['dairy', 'eggs', 'gluten']),
      isVegetarian: true,
      categoryId: dessertsCategory?.id!,
      order: 1,
    },

    // Beverages
    {
      name: 'Signature Fusion Lemonade',
      description: 'Refreshing lemonade with Asian herbs and spices',
      price: 18,
      ingredients: JSON.stringify(['lemon', 'herbs', 'spices', 'sparkling water']),
      allergens: JSON.stringify([]),
      isVegetarian: true,
      isVegan: true,
      categoryId: beveragesCategory?.id!,
      order: 1,
    },
  ]

  for (const item of menuItems) {
    await prisma.menuItem.upsert({
      where: { 
        id: item.name + '_' + item.categoryId
      },
      update: {},
      create: item,
    })
  }

  console.log('🍽️ Created menu items')

  // Create restaurant settings
  await prisma.settings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      restaurantName: process.env.RESTAURANT_NAME || 'Vibe Restaurant | Bar',
      description: 'Experience exceptional dining at Vibe, where culinary artistry meets warm hospitality in Cluj-Napoca.',
      address: process.env.RESTAURANT_ADDRESS || 'Cluj-Napoca, Romania',
      phone: process.env.RESTAURANT_PHONE || '+40 123 456 789',
      email: process.env.RESTAURANT_EMAIL || 'info@vibefusion.ro',
      instagram: 'https://www.instagram.com/vibefusion.cluj/',
      openingHours: JSON.stringify({
        monday: { open: '11:00', close: '22:00', closed: false },
        tuesday: { open: '11:00', close: '22:00', closed: false },
        wednesday: { open: '11:00', close: '22:00', closed: false },
        thursday: { open: '11:00', close: '22:00', closed: false },
        friday: { open: '11:00', close: '23:00', closed: false },
        saturday: { open: '11:00', close: '23:00', closed: false },
        sunday: { open: '12:00', close: '22:00', closed: false },
      }),
    },
  })

  console.log('⚙️ Created restaurant settings')
  console.log('✅ Database seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
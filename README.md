# Vibe Restaurant | Bar Website

A modern, full-stack restaurant and bar website built with Next.js 14, featuring a comprehensive admin panel for menu management, responsive design, SEO optimization, and **multi-language support**.

## 🌟 Features

### Frontend Features
- **Responsive Design**: Works seamlessly on all devices (mobile, tablet, desktop)
- **Modern UI**: Beautiful design using Tailwind CSS with custom brand colors
- **SEO Optimized**: Built-in Next.js SEO features with proper meta tags
- **Fast Performance**: Optimized images, lazy loading, and efficient routing
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **🌐 Multi-Language Support**: Romanian, English, and Hungarian translations

### Restaurant Features
- **Hero Section**: Compelling landing page with call-to-action buttons
- **Menu Preview**: Featured dishes with categorization
- **About Section**: Restaurant story and statistics
- **Contact Information**: Location, hours, and social media links
- **Reservation System**: (Ready for integration)

### Admin Panel Features
- **Secure Authentication**: NextAuth.js with credentials provider
- **Menu Management**: Add, edit, delete menu items and categories
- **Dashboard**: Overview statistics and quick actions
- **User Management**: Admin role-based access control
- **Database Integration**: Prisma ORM with SQLite database

### Technical Features
- **Type Safety**: Full TypeScript implementation
- **Database**: SQLite with Prisma ORM for development
- **Authentication**: NextAuth.js for secure admin access
- **Design System**: Reusable components with consistent styling
- **Security**: Password hashing, protected routes, and secure sessions
- **🌍 Internationalization**: Next.js i18n with language switching

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository** (or use the existing files)
   ```bash
   cd "Vibe Fusion"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```bash
   DATABASE_URL="file:./db.sqlite"
   NEXTAUTH_SECRET="your-secret-key-here-change-in-production"
   NEXTAUTH_URL="http://localhost:3000"
   ADMIN_EMAIL="admin@vibefusion.ro"
   ADMIN_PASSWORD="admin123"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Create and migrate database
   npx prisma db push
   
   # Seed with initial data
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Multi-Language Support

The website supports **3 languages**:
- **🇷🇴 Romanian (Română)** - Default language
- **🇬🇧 English** - International support
- **🇭🇺 Hungarian (Magyar)** - Regional support

### Features:
- **Language Switcher**: Available in the navigation bar
- **URL Routing**: Automatic language detection and URL prefixes
- **Persistent Selection**: Remembers user's language preference
- **Complete Translation**: All content translated including admin panel
- **SEO Friendly**: Proper hreflang attributes for search engines

### Language Files:
- `locales/ro.json` - Romanian translations
- `locales/en.json` - English translations  
- `locales/hu.json` - Hungarian translations

### Usage:
Access the website in different languages:
- Romanian: `http://localhost:3000/ro` (default)
- English: `http://localhost:3000/en`
- Hungarian: `http://localhost:3000/hu`

## 📱 Usage

### Public Website
- **Homepage**: View restaurant information, featured dishes, and contact details
- **Navigation**: Responsive navigation with mobile menu and language switcher
- **Menu Preview**: Browse featured dishes with prices and descriptions
- **Contact**: Restaurant hours, location, and social media links
- **🌐 Language Switching**: Click the language selector to change languages

### Admin Panel
1. **Access Admin**: Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. **Login Credentials**:
   - Email: `admin@vibefusion.ro`
   - Password: `admin123`
3. **Dashboard**: View statistics and access management features
4. **Menu Management**: Add, edit, and delete menu items
5. **Categories**: Organize menu items by categories

## 🗂️ Project Structure

```
Vibe Fusion/
├── app/                          # Next.js 14 App Router
│   ├── admin/                    # Admin panel pages
│   │   ├── login/               # Admin login
│   │   ├── menu/                # Menu management
│   │   └── page.tsx             # Admin dashboard
│   ├── api/                     # API routes
│   │   └── auth/                # NextAuth.js configuration
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/                # Page sections
│   │   ├── hero.tsx
│   │   ├── welcome.tsx
│   │   ├── try-our-menu.tsx
│   │   └── discover-venue.tsx
│   └── ui/                      # UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── language-switcher.tsx
├── lib/                         # Utility libraries
│   ├── auth.ts                  # NextAuth configuration
│   ├── utils.ts                 # Helper functions
│   └── i18n.tsx                 # Internationalization setup
├── locales/                     # Translation files
│   ├── ro.json                  # Romanian translations
│   ├── en.json                  # English translations
│   └── hu.json                  # Hungarian translations
├── prisma/                      # Database schema and migrations
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Database seeding
├── package.json                 # Dependencies and scripts
├── next.config.js               # Next.js config with i18n
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#b6aea1` (Neutral beige - from logo background)
- **Secondary**: `#8B7D6B` (Darker neutral)
- **Accent**: `#E8E0D6` (Light cream)
- **Dark**: `#4A453F` (Dark neutral)
- **White**: `#FFFFFF` (Pure white for logo text)

### Typography
- **Primary Font**: Inter (sans-serif)
- **Accent Font**: Playfair Display (serif)
- **Logo Font**: Dancing Script (script/cursive)

### Components
- Reusable UI components with consistent styling
- Responsive design with mobile-first approach
- Accessible form controls and navigation

## 🌍 Internationalization (i18n)

### Technical Implementation
- **Next.js i18n**: Built-in internationalization support
- **Language Detection**: Automatic browser language detection
- **URL Structure**: `/[locale]/page` routing pattern
- **Translation System**: JSON-based translation files
- **Context API**: React Context for language state management

### Adding New Languages
1. Create new translation file in `locales/[locale].json`
2. Add locale to `next.config.js` i18n configuration
3. Add language info to `lib/i18n.tsx` languages object
4. Translation file will be automatically loaded

### Translation Keys Structure
```json
{
  "nav": { "home": "...", "menu": "..." },
  "hero": { "title": "...", "description": "..." },
  "footer": { "contact": "...", "hours": "..." }
}
```

## 🔐 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **Session Management**: JWT-based sessions with NextAuth.js
- **Route Protection**: Admin routes protected by authentication middleware
- **Role-Based Access**: Admin-only access to management features
- **Input Validation**: Form validation and sanitization

## 📊 Database Schema

### Models
- **Users**: Admin authentication and role management
- **Categories**: Menu categorization
- **MenuItems**: Restaurant menu items with details
- **Reservations**: Customer booking system (ready for implementation)
- **ContactMessages**: Customer inquiries (ready for implementation)
- **Settings**: Restaurant configuration

## 🚀 Deployment

### Production Setup
1. **Environment Variables**: Update with production values
2. **Database**: Migrate to PostgreSQL or MySQL for production
3. **Security**: Update NEXTAUTH_SECRET with a secure random string
4. **SSL**: Configure HTTPS for secure authentication
5. **Image Optimization**: Set up proper image hosting
6. **🌐 i18n SEO**: Configure hreflang tags for international SEO

### Recommended Platforms
- **Vercel**: Optimal for Next.js applications (automatic i18n support)
- **Netlify**: Great for static deployments
- **Railway**: Full-stack hosting with database
- **Heroku**: Traditional cloud platform

## 🛠️ Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:studio       # Open Prisma Studio
npm run db:seed         # Seed database with initial data
```

## 📝 TODO / Future Enhancements

- [x] **Multi-language support** (Romanian, English, Hungarian)
- [ ] Implement reservation booking system
- [ ] Add contact form functionality
- [ ] Create full menu page with filtering
- [ ] Add image upload for menu items
- [ ] Implement email notifications
- [ ] Add analytics and reporting
- [ ] Create mobile app version
- [ ] Integrate payment processing
- [ ] Add more languages (German, French)
- [ ] Implement customer reviews
- [ ] Add RTL language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Update translations if adding new text
6. Submit a pull request

## 📄 License

This project is built for Vibe Restaurant | Bar. All rights reserved.

## 📞 Support

For support and questions about the Vibe website:
- **Email**: info@vibe.com
- **Instagram**: [@vibefusion.cluj](https://www.instagram.com/vibefusion.cluj/)
- **Phone**: +40 123 456 789

---

**Built with ❤️ for Vibe Restaurant | Bar - Exceptional Dining Experience in Cluj-Napoca**
**🌐 Now available in Romanian, English, and Hungarian!** 
# Emma & James Wedding Invitation

![Wedding Preview](https://imgix.cosmicjs.com/942c10a0-c2cf-11f0-9661-2f56439a1942-photo-1519741497674-611481863552-1763285724609.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful, elegant wedding invitation website built with Next.js 16 and powered by Cosmic CMS. This application showcases the couple's love story, wedding events, and provides guests with all the information they need for the special day.

## ✨ Features

- **Elegant Hero Section** - Beautiful hero image with couple names and wedding date countdown
- **Interactive Story Timeline** - Visual journey through the couple's relationship with images and descriptions
- **Event Schedule** - Detailed information about ceremony, reception, and other wedding events
- **Responsive Design** - Perfect experience on desktop, tablet, and mobile devices
- **Image Optimization** - Automatic image optimization with imgix for fast loading
- **Dynamic Content** - All content managed through Cosmic CMS for easy updates
- **Smooth Animations** - Elegant scroll animations and transitions
- **Modern UI** - Clean, romantic design with custom color theming

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=691999bee7349beda291f919&clone_repository=69199bcae7349beda291f964)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a Wedding Invitation website like http://sugarme.mx/00estilos/GladysyGustavo/"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a Wedding Invitation website like http://sugarme.mx/00estilos/GladysyGustavo/", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official Cosmic JavaScript SDK
- **React** - UI component library
- **Bun** - Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with your wedding content configured

### Installation

1. Clone this repository or download the files

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Wedding Details (Singleton)
```typescript
const { object: weddingDetails } = await cosmic.objects
  .findOne({
    type: 'wedding-details',
    slug: 'emma-james-wedding'
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

### Fetching Wedding Events
```typescript
const { objects: events } = await cosmic.objects
  .find({
    type: 'wedding-events'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Story Timeline
```typescript
const { objects: stories } = await cosmic.objects
  .find({
    type: 'our-story'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses three Cosmic object types:

### Wedding Details (Singleton)
- Bride and groom names
- Wedding date and venue information
- Welcome message
- Hero image
- Primary color theme

### Wedding Events
- Event name, date, and time
- Location and address
- Event description
- Dress code
- Event image

### Our Story
- Story title and date
- Rich HTML description
- Story image
- Timeline order

All content can be updated in real-time through your Cosmic dashboard without requiring code changes.

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Build command: `bun run build`
4. Publish directory: `.next`
5. Add your environment variables in Netlify's dashboard

### Environment Variables

Make sure to set these environment variables in your deployment platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (if needed for future features)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

The application uses the primary color from your Cosmic wedding details object to theme the site. Update the `primary_color` field in your Cosmic dashboard to change the accent color throughout the site.

## 📄 License

This project is open source and available for personal use.

<!-- README_END -->
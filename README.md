# Mitchell Cohen's Portfolio & Creative Platform

A professional portfolio and resource platform for music production, development, and creative tools.

<img width="850" alt="Screenshot 2024-11-06 at 12 54 37 PM" src="https://github.com/user-attachments/assets/f5eac0bc-0968-4611-bb4e-89ca72a14248">

<img width="826" alt="Screenshot 2024-11-06 at 12 55 01 PM" src="https://github.com/user-attachments/assets/d9776c5c-586a-4e04-9ef2-8351acfe0fe6">

<img width="1049" alt="Screenshot 2024-11-06 at 12 55 26 PM" src="https://github.com/user-attachments/assets/506bdcde-c337-4cb2-9c6b-7bcb2e8bc7a8">

<img width="785" alt="Screenshot 2024-11-06 at 12 55 56 PM" src="https://github.com/user-attachments/assets/6589e144-a945-4c99-b27f-8c85ef7e3b7e">

## Features

- Music portfolio with streaming integration
- Resource library with downloadable content
- Interactive web applications
- Blog with technical articles
- Lesson booking system
- Contact and collaboration tools

## Tech Stack

- Next.js 13 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vercel Postgres
- Google Drive integration

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
.
├── app/             # Next.js app directory
├── components/      # React components
├── lib/            # Utility functions and types
├── public/         # Static assets
└── content/        # Blog posts and documentation
```

## Deployment

### Production Deployment

The site is automatically deployed to Vercel on push to the main branch.

1. Push changes to main:
```bash
git push origin main
```

2. Vercel will automatically:
- Run the build process
- Run tests
- Deploy to production if all checks pass

### Environment Variables

Required environment variables for deployment:

```env
# Database
DATABASE_URL=
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=

# Authentication
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Storage
BLOB_READ_WRITE_TOKEN=

# Google Drive
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REDIRECT_URI=
```

### Manual Deployment

To deploy manually:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Performance Optimizations

- Image optimization with Next.js Image
- Font preloading
- Component-level code splitting
- Static page generation where possible
- Efficient asset loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - See LICENSE file for details

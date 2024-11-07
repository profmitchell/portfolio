# Mitchell Cohen's Portfolio & Creative Platform

A professional portfolio and resource platform for music production, development, and creative tools.

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
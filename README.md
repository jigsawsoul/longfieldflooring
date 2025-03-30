# Longfield Flooring Website

A modern, responsive website for Longfield Flooring built with Nuxt 3 and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with Tailwind CSS
- Photo gallery of completed projects
- Customer testimonials
- Contact form
- Mobile-friendly navigation
- Fast and optimized performance

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd longfieldflooring
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add any necessary environment variables:
```env
NUXT_PUBLIC_API_BASE_URL=your_api_url
```

4. Add your images to the `public/images` directory:
- Add a hero image as `public/images/hero-bg.jpg`
- Add gallery images to `public/images/gallery/`

## Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
longfieldflooring/
├── components/         # Vue components
├── layouts/           # Layout templates
├── pages/            # Page components
├── public/           # Static assets
│   └── images/       # Image assets
├── assets/           # Other assets
└── nuxt.config.ts    # Nuxt configuration
```

## Customization

1. Update the company information in the layout files
2. Add your own images to the gallery
3. Modify the color scheme in the Tailwind configuration
4. Update the testimonials with real customer feedback

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

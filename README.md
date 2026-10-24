# Portfolio (Next.js + Tailwind CSS + Framer Motion)

One-page portfolio. The nav links scroll to sections on the same page (Home, Projects, Skills, About, Contact).

## Run

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Edit your content

All text and links live in one file: `lib/data.ts`.
Your resume PDF is in `public/Mehedi_Hasan_Shuvo_Resume.pdf` (the Download CV button). Replace it with a new PDF using the same name.

## Notes

- The contact form is static: it opens the visitor's email app with the message filled in. No backend needed.
- To add a live demo link, add `{ label: "Live", href: "..." }` to a project's `links` in `lib/data.ts`.

## Deploy

Push to GitHub and import the repo in Vercel. No settings needed.

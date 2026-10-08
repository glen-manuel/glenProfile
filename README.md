# Glen Manuel Portfolio

A responsive React.js portfolio using Vite and Lucide React.

## Requirements

- Node.js 18+ recommended
- Visual Studio Code

## Run the project

1. Open this folder in VS Code.
2. Open the terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local address shown by Vite, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

Deploy this project folder (the folder containing `package.json`) to Vercel. Vercel
uses the included `vercel.json` to build the Vite app and publish the `dist` folder.
No environment variables are required.

For a Git-based deployment, set **Root Directory** to
the path to this folder relative to your repository root if it is inside a
larger repository.

## Main files

- `src/App.jsx` - portfolio content and React components
- `src/index.css` - complete visual design
- `public/profile.jpg` - profile picture
- `index.html` - page metadata/title

## Change your information

Most personal information is near the top of `src/App.jsx` inside the `profile` object, plus the `skills`, `education`, and `services` arrays.

## Contact form behavior

The email buttons use `mailto:` so they open the visitor's default email application. No backend is required.

## Project link

The featured project button currently opens the Google Drive folder supplied for the CITE Website project.

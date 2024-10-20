This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
# Quiz Application

This project is a web-based quiz application designed to help users assess their hair loss and other health-related conditions. The application provides a series of questions with multiple-choice answers, and based on the user's responses, it offers personalized feedback.

## Features

- Interactive quiz with multiple-choice questions
- Dynamic feedback based on user responses
- Mobile-friendly design with horizontal scrolling for options
- Smooth animations and transitions
- Modal display for quiz results

## Technologies Used

- React: For building the user interface
- Zustand: For state management
- TypeScript: For type safety
- CSS Modules: For styling components

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/app`: Contains the main application components and pages
- `src/components`: Contains reusable components like `Quiz`, `Button`, and `LandingHero`
- `src/state`: Contains the Zustand store for managing quiz state
- `public`: Contains static assets like images and the `questions.json` file

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

# Quiz Application

A web-based quiz application designed to assess hair loss and other health-related conditions, providing personalized feedback based on user responses.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Features

- Interactive quiz with multiple-choice questions
- Dynamic feedback based on user responses
- Mobile-friendly design with horizontal scrolling for options
- Smooth animations and transitions
- Modal display for quiz results

## Technologies Used

- [Next.js](https://nextjs.org): React framework for building the application
- React: For building the user interface
- Zustand: For state management
- TypeScript: For type safety
- CSS Modules: For styling components

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later) or yarn

### Installation

1. Clone the repository:

git clone <repository-url>


2. Install the dependencies:
   
   npm install
   

3. Start the development server:
   
   npm run dev
   

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/app`: Contains the main application components and pages
- `src/components`: Contains reusable components like `Quiz`, `Button`, and `LandingHero`
- `src/state`: Contains the Zustand store for managing quiz state
- `public`: Contains static assets like images and the `questions.json` file

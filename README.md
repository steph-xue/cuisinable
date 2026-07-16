<h1 align="center">Cuisinable</h1>
<h2 align="center">(Hackcamp 2024)</h2>

<h2 align="center">
  Making every meal possible, enjoyable, and accessible<br>
  because everyone deserves a plate that's made just for them.
</h2>

<p align="center"><img src="public/images/bear-chef.png" alt="Cuisinable mascot, Chef Bearable" width="300"></p>

<p align="center">
  <a href="https://devpost.com/software/cuisinably">Devpost</a> &nbsp;|&nbsp; <a href="https://cuisinable.onrender.com">Live Demo</a>
</p>

<br>

## Table of Contents
- [Contributors](#contributors)
- [Problem Statement](#problem-statement)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Technical Challenges and Achievements](#technical-challenges-and-achievements)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)

<br>

## Contributors
- Aaqib Patel
- Ryan Ariles
- Stephanie Xue
- Victor Yu

<br>

## Problem Statement

Dietary restrictions are an issue that many people struggle with on a daily basis. It's a frustrating and excluding experience, and Cuisinable aims to solve this issue.

Cuisinable is your personal culinary assistant, empowering individuals with food intolerances to enjoy diverse and delicious cuisines from around the world, safely. With approximately 7% of Canadians self-reporting food allergies, and many more indicating food intolerances, finding recipes that meet specific dietary needs without sacrificing flavor can be a challenge. Cuisinable solves this problem by offering a welcoming, accessible platform where users can discover tailored recipes based on their dietary restrictions. Simply input your food intolerances and cuisine preferences, and Cuisinable generates a variety of recipes tailored to your specific needs.

With a commitment to accessibility and thoughtful design, Cuisinable ensures a seamless experience for users of all abilities. Our friendly mascot, Chef Bearable, greets users on the landing page, setting a warm and approachable tone and guiding them through the recipe generation process.

Cuisinable is there every step of the way to ensure your recipe can be enjoyed by everyone.

<br>

## Overview

This project is a full-stack web application that allows users to generate recipes tailored to their food intolerances and cuisine preferences, guiding them from an initial selection screen to a full library of matching, safe-to-eat dishes. It is built with React, JavaScript, HTML, CSS, and Bootstrap on the frontend, with Vite used as the build tool. The backend is built with Node.js and Express.js and communicates with the Spoonacular API to retrieve recipe data based on the user’s selected cuisine and intolerances, including complete ingredient lists and step-by-step instructions for each result.

<br>

## Features

### Landing Page
The landing page welcomes users with Chef Bearable, the app's mascot, and a "Get Started" button that begins the recipe generation process.

<p align="center"><img src="./bear/landing.png?raw=true" alt="Landing Page" width="700"></p>

<br>

### Selecting Intolerances and Cuisine
Users begin by selecting any number of food intolerances that apply to them, choosing from a comprehensive set of common allergens and sensitivities. They then choose a single cuisine from a wide range of options spanning multiple continents and culinary traditions. Every recipe generated afterward is filtered against these selections, so users only ever see dishes that are genuinely safe and relevant to them.

<table align="center">
<tr>
<td valign="top">

**Food intolerances:**

| | | |
|---|---|---|
| Dairy | Peanut | Soy |
| Egg | Seafood | Sulfite |
| Gluten | Sesame | Tree Nut |
| Grain | Shellfish | Wheat |

</td>
<td valign="top">

**Cuisines:**

| | | |
|---|---|---|
| American | German | Latin American |
| British | Greek | Mediterranean |
| Caribbean | Indian | Mexican |
| Chinese | Italian | Middle Eastern |
| Eastern European | Japanese | Spanish |
| French | Korean | Thai |

</td>
</tr>
</table>

<br>

<p align="center"><img src="./bear/selector.png?raw=true" alt="Intolerance and Cuisine Selector" width="700"></p>

<br>

### Recipe Results
Based on the selected intolerances and cuisine, Cuisinable displays a set of recipe cards, each showing a dish's image and title. A "Change Cuisine" button lets users restart the process at any time to search with a new set of preferences.

<p align="center"><img src="./bear/meals.png?raw=true" alt="Recipe Results" width="700"></p>

<br>

### Full Recipe View
Clicking a recipe card opens a detailed view of that dish, including its image, a summary description, a full list of ingredients, and step by step preparation instructions. A close icon returns users to the recipe results.

<p align="center"><img src="./bear/recipes.png?raw=true" alt="Full Recipe View" width="700"></p>

<br>

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, HTML, CSS, Bootstrap |
| Backend | Express.js, Node.js |
| APIs | Spoonacular API (supplies recipe data filtered by cuisine and intolerances) |
| Build Tool | Vite |

<br>

## How It Works

The frontend is built from three main components, a landing page, a selector for choosing intolerances and cuisine, and a meals view for displaying and exploring the generated recipes, all rendered from a single root component that tracks which view is currently active. Selecting intolerances and a cuisine updates state in the root component, and clicking through to see recipes sends a request to the backend with those selections included as query parameters. On the backend, an Express.js server receives that request, builds a query string from the selected cuisine and intolerances, and calls the Spoonacular API to retrieve twelve matching recipes, each with full ingredient and instruction data included. The response is sent back to the frontend and rendered as a grid of recipe cards. Clicking a card opens a full recipe view, stripping any HTML tags from the recipe summary and de-duplicating ingredients pulled from the recipe's instructions before displaying them alongside the full set of preparation steps.

<br>

## Technical Challenges and Achievements

- Connecting the frontend to the backend and establishing seamless communication between the two for smooth functionality
- Learning to filter and retrieve specific data from the Spoonacular API to ensure only allergy and intolerance safe recipes are displayed
- Determining appropriate server ports and navigating Git branches for effective team collaboration
- Prototyping and designing a user friendly interface for an intuitive user experience

<br>

## Future Improvements
Several enhancements are planned to extend the functionality of the application:
- User profiles that allow people to save their dietary preferences and favorite recipes
- An expanded recipe database to support a larger variety of cuisines and dishes
- A search function that enables keyword searches for specific dishes or ingredients
- Animations for a more dynamic and engaging interface
- Options for users to invite friends and collaborate on recipe lists for events like potlucks

<br>

## Getting Started

Follow the steps below to set up and run the application on your own machine.

**Prerequisites**

Make sure Node.js and npm are installed before you begin. You can check both by running the commands below, which should each print a version number.
```bash
node --version
npm --version
```

**1. Clone the repository**

This downloads a copy of the project to your computer and moves you into the project folder.
```bash
git clone https://github.com/steph-xue/cuisinable.git
cd cuisinable
```

**2. Install the dependencies**

This installs React, Express, and everything else the project needs to run.
```bash
npm install
```

**3. Start the development server**

This runs both the frontend and backend together on a single local server.
```bash
npm run dev
```

Once the server is running, open `http://localhost:8000` in your browser to start using the application.

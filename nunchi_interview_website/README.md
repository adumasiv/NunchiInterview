Membership Expiration Card

Overview

The Membership Expiration Card is a React application that displays a list of memberships that are about to expire. Each membership is presented with relevant details such as the member's name, profile picture, expiration date, and tags associated with the member. The app uses Material-UI for styling and component management.

Features

Display a list of memberships with details.
Highlight memberships that are expiring soon.
Use of Material-UI components for consistent styling.
Customizable icons and images.

Project Structure

src/
├── components/
│   └── NoteCard.js
├── pictures/
│   ├── AdobeStock_219633151.jpeg
│   ├── AdobeStock_213793387.jpeg
│   ├── AdobeStock_279788359.jpeg
│   ├── Avatar Icon.png
│   └── OptionsButton.png
├── App.js
├── App.css
└── index.js

Installation

Prerequisites
Node.js (>=14.x)
npm (>=6.x) or yarn (>=1.x)

Usage

To start development server

npm start

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

File Descriptions
App.js: The main entry point of the React app, where the NoteCard component is imported and rendered.
components/NoteCard.js: Contains the NoteCard component which displays the membership details using Material-UI components.
App.css: Contains the global CSS styles for the app.
index.js: The entry point for the React DOM rendering.

Dependencies

React
Material-UI
React Icons (for customizable icon options)
A list of all dependencies can be found in package.json


Wobb Web App Redesign - Influencer Portal Homepage
Overview
This project focuses on redesigning the homepage of the Wobb mobile app into a responsive web version using React.js. The Wobb platform connects influencers with brands for collaboration opportunities, and this redesign is aimed at improving the user experience and making the homepage more intuitive, visually appealing, and optimized for both mobile and desktop screens.

Task Objective
Create a responsive web version of the Wobb App homepage.
Ensure seamless adaptability across desktop, tablet, and mobile devices.
Redesign the homepage with improved layout, alignment, and information display.
Prioritize key details like brand names, payout types, and campaign progress.
Features Implemented
Responsive Design: Ensures the app is optimized for mobile, tablet, and desktop screens.
Campaign Cards: Redesign of campaign cards to display essential information such as:
Brand name
Payout details (barter, refunds, fixed pay)
Hiring progress (number of influencers hired vs. available slots)
Enhanced Layout: Optimized typography and design to make the content more scannable and visually engaging.
Intuitive User Interface: Clean, modern design with clear and well-organized information for a better user experience.
Project Structure
The project consists of the following key components:

src: Contains the main React components for the homepage.
components/: Reusable UI components such as CampaignCard, Navbar, etc.
styles/: CSS modules to ensure responsive and adaptive layouts.
App.js: The main component that handles the homepage layout and renders the campaign cards.
index.js: The entry point for the React app.
Requirements
To run this project locally, you need:

Node.js: Ensure you have Node.js installed. You can download it from here.
npm or yarn: Package manager to install dependencies.
Installation
Follow these steps to get the project up and running locally:

Clone the repository:

bash
Copy
Edit
git clone <repository_url>
Navigate into the project folder:

bash
Copy
Edit
cd wobb-web-app
Install the dependencies:

If you're using npm:

bash
Copy
Edit
npm install
Or if you're using yarn:

bash
Copy
Edit
yarn install
Start the development server:

If you're using npm:

bash
Copy
Edit
npm start
Or if you're using yarn:

bash
Copy
Edit
yarn start
Open the app in your browser:

Navigate to http://localhost:3000 to see the app in action.

Design Documentation
Color Scheme
Primary Color: #4CAF50 (Green) — represents energy and freshness, commonly used for success or activity.
Secondary Color: #F5F5F5 (Light Gray) — soft background color to maintain focus on content.
Accent Colors: #FF5722 (Orange) for call-to-action buttons and important notifications.
Typography
Font Family: Arial, sans-serif — a clean and modern font suitable for web and mobile screens.
Font Size:
Large headings: 32px
Subheadings: 24px
Body text: 16px
Font Weight: Regular and bold weights to differentiate between body text, headings, and buttons.
Spacing and Layout
Padding and Margins: Generous padding around text and UI components to create a clean and spacious layout.
Card Layout: Each campaign card has a consistent height with clear visual distinction for easy scanning.
Grid Layout: Campaign cards are arranged in a grid layout with responsiveness to adjust for various screen sizes.
Responsiveness
The homepage layout adapts seamlessly for:

Desktop: Full-width card display with ample spacing.
Tablet: Two-column card layout to optimize space and visibility.
Mobile: Single-column layout to ensure content fits well on smaller screens.
Future Improvements (Optional)
Integration with an API: Fetch live campaign data and integrate it with a backend.
User Authentication: Implement user sign-in and profile management to enable personalized views of campaigns.
Advanced Interactions: Add animations or transitions for smooth user interactions.
Evaluation Criteria
Responsiveness: The design adapts seamlessly across all screen sizes.
Creativity: Modern and visually appealing design solutions.
Usability: Intuitive navigation and easy-to-scan information.
Code Quality: Clean, modular, and scalable React.js code.

TastyTreasures is an innovative platform designed to elevate your recipe presence by offering a dynamic and immersive experience for both creators and enthusiasts. Through visually captivating cards, users can effortlessly explore and engage with a diverse array of recipes, ingredients, cooking techniques, and more. With its intuitive interface, customizable design options, and interactive elements, TastyTreasures redefines the way recipes are showcased and experienced online, fostering connections between chefs and their audience in an exciting and dynamic digital space.

- ## Features

### Users:

- **Get Users**: Retrieve a list of all users.
- **Register User**: Register a new user in the system.
- **Login**: Authenticate a user and provide a token.
- **Get User By ID**: Retrieve a user's details using their ID.
- **Edit User**: Update user information.
- **Delete User**: Remove a user from the system.
- **Patch User's Business Status**: Update the business status of a user.

### Cards:

- **Get Recipe Cards**: Retrieve a list of all cards.
- **Get User's Recipe Cards**: Retrieve a list of cards associated with a specific user.
- **Get Recipe Card By ID**: Retrieve details of a card using its ID.
- **Create Recipe Card**: Add a new card to the system.
- **Edit Recipe Card**: Update card information.
- **Like Recipe Card**: Like a specific card.
- **Delete Recipe Card**: Remove a card from the system.

- ## Authentication
- The API uses JWT for authentication. Tokens include properties for user roles (isBusiness, isAdmin) and user ID. Authorization middleware ensures appropriate permissions for protected endpoints.
  In addition there's a cors policy that will allow only approved IPs to send requests, and a rate limiter that won't allow more than 100 requests per second.

# TastyTreasures Backend Overview

Welcome to TastyTreasures Backend, a robust Node.js application tailored to meet the demands of managing your recipe-centric business operations efficiently. Whether you're a chef, a food blogger, or a restaurant owner, this backend system offers a solid foundation for powering your recipe-related offerings behind the scenes.

This project is a Node.js API built with Express, enabling users to create and manage business cards. It supports various user roles, including regular users, business users, and admin users.
You can read the documentation [here](https://documenter.getpostman.com/view/34926651/2sA3QqesJn).

Features
Secure Authentication
Utilize JSON Web Tokens (JWT) for secure authentication and authorization of users accessing the system. Safeguard your users' data and ensure seamless access control.

Flexible Recipe Management
Easily create, update, and delete recipe entries representing your culinary creations through RESTful API endpoints. Manage metadata, upload images, and organize your recipe library effortlessly.

Customizable Configuration
Leverage the flexibility of the config library to manage environment-specific configurations for different deployment environments. Customize settings such as database connections, server ports, and logging preferences with ease.

Robust Data Validation
Ensure data integrity and consistency with the help of the joi library for schema validation of incoming requests. Validate input data against predefined schemas to prevent malformed or invalid data from entering the system.

Scalable Database Integration
Seamlessly connect to MongoDB databases using the popular mongoose library, enabling scalable and efficient data storage for your recipe-related content. Store metadata, user preferences, and media files securely and reliably.

Express Middleware Support
Enhance the functionality of your backend with middleware like cors for enabling Cross-Origin Resource Sharing and morgan for HTTP request logging. Extend the capabilities of your backend system to meet specific requirements and handle diverse use cases effectively.

Libraries Used
This project relies on the following dependencies:

bcryptjs: Version 2.4.3
chalk: Version 4.1.1
config: Version 3.3.11
cors: Version 2.8.5
dotenv: Version 16.4.5
express: Version 4.18.3
joi: Version 17.12.2
jsonwebtoken: Version 9.0.2
lodash: Version 4.17.21
mongoose: Version 8.2.4
morgan: Version 1.10.0

# TastyTreasures Frontend Overview

Welcome to TastyTreasures, a dynamic React MUI JavaScript application designed to showcase your culinary creations through visually appealing and interactive recipe cards. Engage your audience, promote your recipes, and foster connections with food enthusiasts through an immersive user experience.

Features
Dynamic Recipe Showcase
Easily create and manage recipe cards with our intuitive interface. Customize the content, layout, and styling to effectively showcase your culinary creations and engage your audience.

MUI Components
Leverage the power of Material-UI components to deliver a modern, responsive, and accessible user experience. Utilize a rich library of UI components to craft stunning visual representations of your recipe catalog.

Customizable Design
Tailor the appearance of your recipe cards to match your brand identity and culinary preferences using CSS or Material-UI's theming capabilities. Create visually striking and cohesive recipe showcases that resonate with your audience.

Interactive Elements
Enhance user engagement by incorporating interactive elements like ingredient lists, step-by-step instructions, or chef bios within your recipe cards. Provide users with seamless access to your culinary content and encourage exploration and discovery.

JavaScript Functionality
Add dynamic behavior and interactivity to your recipe cards using JavaScript code. Implement features such as ingredient checklists, interactive cooking timers, or dynamic content updates to create an immersive and memorable recipe browsing experience.

Libraries Used
This project makes use of the following libraries:

@emotion/react: Version 11.11.3
@emotion/styled: Version 11.11.0
@fontsource/roboto: Version 5.0.8
@react-google-maps/api: Version 2.19.3
@testing-library/jest-dom: Version 5.17.0
@testing-library/react: Version 13.4.0
@testing-library/user-event: Version 13.5.0
@types/material-ui: Version 0.21.16
axios: Version 1.6.7
joi: Version 17.12.0
jwt-decode: Version 4.0.0
prop-types: Version 15.8.1
react: Version 18.2.0
react-dom: Version 18.2.0
react-router-dom: Version 6.21.3
react-scripts: Version 5.0.1
web-vitals: Version 2.1.4

## Installation

To run the project:

1. `git clone <repository-link>`
2. `npm i` (install frontend dependencies to client folder,
   install backend dependencies to server folder),
3. `npm start`

## Example Users

I added a few types of users to provide fast access.
You can create your own users aswell when signing up.

| User Type     | Email                         | Password   |
| ------------- | ----------------------------- | ---------- |
| Regular User  | RegularExampleUser@gmail.com  | Abc112233! |
| Business User | BusinessExampleUser@gmail.com | Abc112233! |
| Admin User    | AdminExampleUser@gmail.com    | Abc112233! |

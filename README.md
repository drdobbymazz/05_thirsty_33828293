# Splash Out - Shop Website

**University Project - Web Development**

A Node.js/Express web application for "Splash Out" shop with multiple branches across Leeds.

## Project Overview

This is a university web development project that demonstrates the implementation of a multi-page web application using Node.js, Express, and EJS templating. The application provides information about Splash Out, a beverage shop with four locations in Leeds.

## Description

The application allows customers to browse product categories, search for products, register as customers, and participate in surveys. It showcases server-side routing, form handling, and dynamic content rendering.

## Shop Information

- **Shop Name:** Splash Out
- **Product Categories:** Beer, Wine, Soft Drinks, Hot Drinks
- **Number of Branches:** 4 locations across Leeds

## Features

- **Home Page** - Main landing page with shop information
- **About Page** - Information about the shop and its branches
- **Product Search** - Search functionality with category filtering
- **Customer Registration** - Form for new customer registration
- **Survey System** - Customer feedback and survey collection

## Routes

### Main Routes
- `GET /` - Home page
- `GET /about` - About page with branch information

### Search Routes
- `GET /search` - Search form page
- `GET /search_result` - Displays search results (query parameters: `search_text`, `category`)

### Registration Routes
- `GET /register` - Registration form page
- `POST /registered` - Handles registration form submission

### Survey Routes
- `GET /survey` - Survey form page
- `POST /survey_result` - Displays survey results

## Shop Locations

1. **City Center Branch**
   - Manager: John Smith
   - Address: 123 High Street, Leeds, LS1 1AB

2. **University Branch**
   - Manager: Sarah Johnson
   - Address: 45 University Road, Leeds, LS2 9JT

3. **Shopping Mall Branch**
   - Manager: Mike Wilson
   - Address: Unit 15, Leeds Mall, Crown Point, LS10 1ET

4. **Railway Station Branch**
   - Manager: Emma Brown
   - Address: Platform 1, Leeds Station, New Station St, LS1 4DY

## Technical Details

- **Framework:** Express.js
- **Template Engine:** EJS (Embedded JavaScript)
- **Router:** Express Router
- **Language:** JavaScript (Node.js)

## Installation

1. Clone or download the project files
2. Install dependencies:
```bash
   npm install express ejs body-parser
```
3. Ensure you have the following file structure:
```
   project/
   ├── index.js
   ├── main.js
   ├── views/
   │   ├── index.ejs
   │   ├── about.ejs
   │   ├── search.ejs
   │   ├── register.ejs
   │   ├── survey.ejs
   │   └── survey_result.ejs
   └── package.json
```

## Usage

This router module should be imported in your main `index.js` file:
```javascript
const mainRoutes = require('./main.js');
app.use('/', mainRoutes);
```

## Running the Application
```bash
node index.js
```

Then navigate to `http://localhost:8000` (or your configured port) in your web browser.

## Dependencies
```json
{
  "express": "^4.x.x",
  "ejs": "^3.x.x",
  "body-parser": "^1.x.x"
}
```

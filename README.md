Node.js BFHL REST API

This project implements the BFHL Qualifier API as specified in the official PDF.
It exposes two REST APIs:

- POST /bfhl  (Main logic API)
- GET /health (Health check API)

The application is built using Node.js + Express and is production-ready.
It can be deployed on Render, Railway, or Vercel.

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------

node-bfhl-app
|
|-- src
|   |-- index.js
|   |-- routes
|   |   |-- bfhl.js
|   |-- controllers
|   |   |-- bfhlController.js
|   |-- services
|   |   |-- fibonacci.js
|   |   |-- primes.js
|   |   |-- lcm.js
|   |   |-- hcf.js
|   |   |-- ai.js
|   |-- utils
|       |-- validators.js
|
|-- package.json
|-- .env.example
|-- README.txt

------------------------------------------------------------
INSTALLATION & SETUP
------------------------------------------------------------

1. Clone the repository
2. Navigate to the project directory:
   cd node-bfhl-app

3. Install dependencies:
   npm install

4. Create a .env file (refer .env.example):
   PORT=5000
   GEMINI_API_KEY=YOUR_GEMINI_API_KEY

------------------------------------------------------------
START THE SERVER
------------------------------------------------------------

Run:
   npm start
or
   node src/index.js

Server runs on the port defined in .env (default: 5000)

------------------------------------------------------------
API ENDPOINTS
------------------------------------------------------------

========================
GET /health
========================

Description:
Health check endpoint to verify server availability.

Request:
GET /health

Response (200 OK):
{
  "is_success": true,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in"
}

- No input required
- Can be tested directly in a browser

------------------------------------------------------------

========================
POST /bfhl
========================

Description:
Processes exactly ONE operation per request based on the JSON key provided.

Rules:
- Request body must be JSON
- Exactly ONE key is allowed:
  fibonacci
  prime
  lcm
  hcf
  AI

------------------------------------------------------------
FIBONACCI
------------------------------------------------------------

Request:
{
  "fibonacci": 7
}

Response:
{
  "is_success": true,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in",
  "data": [0,1,1,2,3,5,8]
}

------------------------------------------------------------
PRIME NUMBERS
------------------------------------------------------------

Request:
{
  "prime": [2,4,7,9,11]
}

Response:
{
  "is_success": true,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in",
  "data": [2,7,11]
}

------------------------------------------------------------
LCM
------------------------------------------------------------

Request:
{
  "lcm": [12,18,24]
}

Response:
{
  "is_success": true,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in",
  "data": 72
}

------------------------------------------------------------
HCF
------------------------------------------------------------

Request:
{
  "hcf": [24,36,60]
}

Response:
{
  "is_success": true,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in",
  "data": 12
}

------------------------------------------------------------
AI (EXTERNAL AI INTEGRATION)
------------------------------------------------------------

Uses Google Gemini API to answer questions.

Request:
{
  "AI": "What is the capital city of Maharashtra?"
}

Response:
{
  "is_success": true,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in",
  "data": "Mumbai"
}

- Single-word response only
- Graceful fallback if AI fails
- No server crashes

------------------------------------------------------------
INVALID REQUEST EXAMPLES
------------------------------------------------------------

Multiple keys (NOT allowed):
{
  "fibonacci": 7,
  "prime": [2,3]
}

Empty body:
{}

Wrong data type:
{
  "fibonacci": "seven"
}

Response:
{
  "is_success": false,
  "official_email": "vipin1589.be23@chitkarauniversity.edu.in"
}

------------------------------------------------------------
DEPLOYMENT
------------------------------------------------------------

The application can be deployed using:
- Render
- Railway
- Vercel

After deployment, share:
- Public GitHub repository URL
- Deployed API base URL

------------------------------------------------------------
PDF COMPLIANCE CHECKLIST
------------------------------------------------------------

POST /bfhl                : YES
GET /health               : YES
Strict response structure : YES
Correct HTTP status codes : YES
Robust input validation   : YES
Graceful error handling   : YES
External AI integration  : YES
Public deployment ready  : YES

------------------------------------------------------------
FINAL NOTE
------------------------------------------------------------

This project strictly follows the BFHL Qualifier PDF guidelines.
It is secure, robust, production-ready, and submission-ready.

------------------------------------------------------------

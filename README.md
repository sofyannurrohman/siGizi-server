# Sigizi App Backend Server


C241-PS299


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/faniabdullah/bangkit-final-project">
    <img src="https://storage.googleapis.com/sigizi-caps/logosigizi.png" width='400dp' alt="Logo" >
  </a>

  <h3 align="center">siGIzi App </h3>

  <p align="center">
    Welcome to the backend server for the Sigizi App (Solusi Generasi Z Sehat dan Istimewa), an innovative application designed to combat childhood stunting by providing accurate predictions and personalized recommendations for nutrition and supplements. This is a project to fulfill the  <a href="https://grow.google/intl/id_id/bangkit/"><strong>Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka »</strong></a>
   Program.
    <br />
    <a href="https://github.com/sofyannurrohman/siGizi-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/sofyannurrohman/siGizi-server">View Demo</a>
    ·
    <a href="https://github.com/sofyannurrohman/siGizi-server">Report Bug</a>
    ·
    <a href="https://github.com/sofyannurrohman/siGizi-server">Request Feature</a>
  </p>
</p>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Usage](#usage)
- [License](#license)

## Introduction

The Sigizi App backend server handles the core functionalities of the application, including user management, data processing, stunting risk prediction, and providing nutritional recommendations. It is built using Node.js and Express.js for robust performance and scalability.

## Features

- User Authentication and Authorization
- Child Health Data Management
- Stunting Risk Prediction using Machine Learning
- Personalized Nutrition and Supplement Recommendations
- Real-time Monitoring and Updates
- RESTful API for frontend integration

## Requirements

- Node.js (v16 or later)
- npm (v6 or later)
- Mysql

## Installation ##Configuration ##

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sigizi-backend.git
cd sigizi-backend
npm install
PORT=3000
.env
JWT_SECRET=your_jwt_secret_key
npm start
```
## API Endpoints
Here are some of the key API endpoints provided by the backend server:

User Authentication

POST /api/v1/auth/register - Register a new user
POST /api/v1/auth/login - Login a user

Child Data Management
GET /api/v1/children - Get all children data
GET /api/v1/children/:id - Get data for a specific child
DELETE /api/v1/children/:id - Delete data for a specific child

Article Data Management
GET /api/v1/articles - Get all article data
POST /api/v1/articles/:articleID - Add new article data
GET /api/v1/articles/:articleID - Get data for a specific article
DELETE /api/v1/articles/:articleID - Delete data for a specific article

Prediction and Recommendations
POST /api/v1/predictions - Get stunting risk prediction

<!-- CONTRIBUTING -->
## Contributing

We welcome contributions to the Sigizi App backend server. To contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- Usage -->
## Usage
<p align="center"> 
    <img src="https://storage.googleapis.com/sigizi-caps/gifdemo.gif"
        alt="SplashScreen"    
        style="margin-right: 10px;"    
        width="100%" />
</p>
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

[Khoirun Niswa ](#) - niswa@gmail.com

[Hindun Alvia R. ](#) - hindun@gmail.com

[Frencilia Paulina A.](#) -  nonik@gmail.com 

[Natasha Alflashya K.](#) -natasha@gmail.com

[Rado Nelsondela S.S](#) - rado@gmail.com

[Satrio Wicaksono N.](#) - satriowicaksono@gmail.com

[Sofyan Nur Rohman](https://www.linkedin.com/in/sofyan-nur-rohman-83478818b) - sofyannurrohman1@gmail.com

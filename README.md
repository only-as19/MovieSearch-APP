# Movie Search App

## Overview
The **Movie Search App** is a React application that allows users to search for movies and view relevant details like the movie title, release date, IMDB rating, and a brief overview. This app uses The Movie Database (TMDb) API to fetch real-time movie data and displays it in a user-friendly, responsive interface.

## Features
- **Search Functionality:** Search for movies by name.
- **Movie Information:** Displays the movie's title, release date, IMDB rating, and overview.
- **Responsive UI:** Adaptable for both mobile and desktop devices.
- **Error Handling:** Shows a message when no movies are found or if the data is unavailable.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-username/movie-search-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd movie-search-app
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Run the application locally:
    ```bash
    npm start
    ```

5. Visit `http://localhost:3000` in your browser to see the app in action.

## How it Works

- **React Components:** The app consists of two main components:
  1. **MovieCard**: Displays individual movie details such as poster, title, release date, rating, and overview.
  2. **MovieSearch**: Handles the search functionality, allows users to input a query, fetches the movie data from TMDb, and displays the results.
  
- **Fetching Data:** Upon submitting a movie name, the app fetches data from the **TMDb API** using an asynchronous `fetch` request. The data is then displayed in the form of cards with movie details.

## TMDb API Integration
This app integrates with the **TMDb API** to fetch movie details. You can create a free account on [TMDb](https://www.themoviedb.org/) to get an API key and replace it in the source code.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **CSS/TailwindCSS**: For styling and creating a responsive layout.
- **TMDb API**: To fetch real-time movie data.

## Contributing
If you'd like to contribute to this project, feel free to open a pull request or submit an issue.

## License
This project is open-source and available under the MIT License.

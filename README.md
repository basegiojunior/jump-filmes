# Jump Filmes

Mobile app to search and list movies

<p align=center>
<img src="https://user-images.githubusercontent.com/39566485/185141068-fd988dfb-dfdb-4e34-846e-a220266d0d2f.png" height="400">
<img src="https://user-images.githubusercontent.com/39566485/185132428-ea48e4d8-4204-4ac8-bb9f-1319701850b1.png" height="400">
<img src="https://user-images.githubusercontent.com/39566485/185141162-cdda8564-0c0d-4aed-9d18-73d4626d3ea6.png" height="400">
<p>


## Features

- Search movies using Trakt api
- View the movie poster and image
- Link to trailer
- Save your favorite movies

## Build with

- React Native
- Typescript
- Trakt api
- TMDB api
- Redux and Redux Toolkit to state management
- Redux Promise Middleware to asynchronous requests
- Axios to requests
- Jest and React Native Testing Library to the component testing
- Icons with React Native Vector Icons
- Styled Components

## Getting Started

Clone down this repository. You will need node.js (created using version 16.15.0) and npm (created using version 8.5.5)

- Installation: `npm install`
- Create the `.env` file with:
  - Your Trakt API key: `TRAKT_CLIENT_ID`
  - Your TMDB version 3 API key: `TMDB_3_API_KEY`
- Run `npm run android` and `npm run start` to run the project on an emulator or device

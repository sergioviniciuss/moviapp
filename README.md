# moviapp
This is an SPA developed in React consuming "the movie db" API


### Running ###

# Development (http://localhost:8080 )
npm start

# Productoin
npm run build


### Story Phrase ###
* As a curious web surfer, I want to be able to locate both me and any website on a map.
* I sometimes use a desktop, sometimes a tablet and sometimes a cell phone, so I need a responsive web page.

### Technical Details ###
All the components should remain on the components folder;
There's a configuration file on the src folder, called config.js where you will find information such as API_KEY.

External Libraries:
* React-bootstrap - responsive layout;
* axios - fetch api data;


It uses the The Movie DB API to fetch basically two informations in this first moment:
* Most popular movies
* Search for query parameters typed by the user.




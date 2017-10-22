# moviapp
This is an SPA developed in React consuming "the movie db" API


### Running ###

#### Development (http://localhost:8080 )
$npm start

#### Production
$npm run build

### Technical Details ###
All the components should remain on the components folder;
There's a configuration file on the src folder, called config.js where you will find information such as API_KEY.

External Libraries:
* React-bootstrap - responsive layout;
* axios - fetch api data;


It uses the The Movie DB API to fetch basically two informations in this first moment:
* Most popular movies
* Search for query parameters typed by the user.




import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/jalvaradoWD')
  .then((res) => console.log(res.data));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/jalvaradoWD').then((res) => {
  const userCard = githubCard(res.data);
  const cardsElement = document.querySelector('.cards');
  cardsElement.appendChild(userCard);
});

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const githubCard = (userObject) => {
  const {
    avatar_url: img_url,
    login: userName,
    name,
    location,
    html_url: url,
    followers,
    following,
    bio,
  } = userObject;

  // Creating the Card Component container
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  // Image element
  const imgElement = document.createElement('img');
  imgElement.src = img_url;

  // Card Info container
  const cardInfoElement = document.createElement('div');
  cardInfoElement.classList.add('card-info');

  // Name Element
  const nameElement = document.createElement('h3');
  nameElement.classList.add('name');
  nameElement.innerHTML = name;

  // User name Element
  const userNameElement = document.createElement('p');
  userNameElement.classList.add('username');
  userNameElement.innerHTML = userName;

  // Location Element
  const locationElement = document.createElement('p');
  locationElement.innerHTML = `Location: ${location}`;

  // Profile Element
  const profileElement = document.createElement('p');
  const aTagForProfile = document.createElement('a');
  aTagForProfile.href = url;
  aTagForProfile.innerHTML = url;
  profileElement.appendChild(aTagForProfile);

  // Followers Element
  const followersElement = document.createElement('p');
  followersElement.innerHTML = `Followers: ${followers}`;

  // Following Element
  const followingElement = document.createElement('p');
  followingElement.innerHTML = `Following: ${following}`;

  // Bio Element
  const bioElement = document.createElement('p');
  bioElement.innerHTML = `Bio: ${bio}`;

  const elementsList = [
    imgElement,
    cardInfoElement,
    nameElement,
    userNameElement,
    locationElement,
    profileElement,
    followersElement,
    followingElement,
    bioElement,
  ];

  elementsList.forEach((element) => cardElement.appendChild(element));

  return cardElement;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

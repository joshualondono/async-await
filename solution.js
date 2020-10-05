
// Write an async function getUsersEmails
// Using fetch, it should call the given url
// const url1 = 'https://randomuser.me/api/?results=10';
// log out a list of User Emails
// OUTPUT
// Email List:

// craig.odonoghue@example.com
// ferdinanda.farias@example.com
// isabella.horton@example.com
// alessandro.rink@example.com
// giulia.daconceicao@example.com
// yolanda.nieto@example.com
// sander.thomsen@example.com
// damien.dupont@example.com
// isabella.carroll@example.com
// jake.owens@example.com


async function  getUsersEmails() {
  const fetch = require('node-fetch');

  console.log('calling');
  const result =  await fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(json => json.results)
    .then(json => json.map(account => account.email))
  console.log(result);
  // expected output: "resolved"
}

// getUsersEmails()

//  getUsersEmails()

// Write an async function getFilms
// using axios, it should call the given url
// let url = 'https://ghibliapi.herokuapp.com/films';
// Function should randomly choose one of the objects from your api call
// and log the title as well as the classification and name from the last url in the species array
// study the data to figure out your solution
// Output will be random but format it like the EXAMPLE OUTPUT below
// EXAMPLE OUTPUT:
// Title: Whisper of the Heart
// Classification: Mammal
// Name: Human

const axios = require('axios');


const getTitle = () => {
   axios.get('https://ghibliapi.herokuapp.com/films')
  .then(function (response) {

    const rand = Math.floor(Math.random() * response.data.length)
    const result = response.data[rand]
    const title = result.title
    const bucket = []
    bucket.push(title)

    const idx = result.species.length - 1
    const species = result.species[idx]
    const speciesUrl = result.species[idx]
    bucket.push(species)
    console.log(bucket)
  })
  .catch(function (error) {
    console.log(error);
  })
}

getTitle()
getUsersEmails()

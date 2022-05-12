# CryptMo-CAsh - Project 2 @ GA (General Assembly)

This was my first paired project on the Software Engineering Immersive course, built in collaboration with [Mohamed Mohamed](https://github.com/momoh66)

![app-screenshot]

## Deployment

This app has been deployed via Netlify and is available [here](https://cryptmo-cash.netlify.app/)

## The Brief

A 48 Hour Hackathon that required our app to: 
- Consume a public API
- Feature several components
- Use a router (if appropriate) 

## Languages / Frameworks used

- JavaScript
- React
- Node.js
- Bulma
- HTML5

## Concept 

The app provides accurate information about the Top 100 cryptocurrencies and provies users with a feature to convert fiat currency into crypto. 

## Phase One (Day 0) 

**Concept, Whiteboarding, Pseudocoding.** 

![whiteboarding-example]

Our initial conversations centered around what sort of API we should be looking for and the type of app we were looking to create. After some rigorous research and testing via postman, the [CoinMarketCap Api](https://coinmarketcap.com/api/) both excited us and provided us with the multiple endpoints for our app to consume. 

- GET the top 100 current cryptocurrencies
- GET all the applicable fiat currencies 

![api-response-example]

The first endpoint was most useful to us and as pictured, returned an object. This was made up of an array of 100 objects, each providing accurate information about the specific coin (including the ranking, symbol, circulating supply and price). 

With this data now accessable, we decided our Minimum Viable Product would be to integrate the above endpoints in seperate pages. The first would be a chart, listing information about each coin and the second would provide users with the ability to convert currencies. From here, we sketched up a quick wireframe, discussed our approach in pseudocode and decided on a search function for our stretch goal. 

## Phase Two (Day 0-1)

**Coding, Live Sharing and Committs** 

We began by sharing our screens on zoom and creating the Navbar, Homepage and Top 100 components, setting up the browser router from 'react-router-dom' and getting to grips with Bulma. This was the first time either of us had worked with a CSS framework so we took some time to read through the documentation. 

By the end of the first day, we decided the best way to code as a pair and combine our strengths was to use VSCode's 'Live Share' functionality. This was set up on Mohamed's Mac, using his repository as our main branch. 

## Phase Three (Day 2) 

**Axios, State & Map** 

With the structure of our app set up, we created our two Axios requests making sure to use a .env file to avoid publishing our API key (To overcome a CORS issue we also had to include a proxy server in our baseUrl. 

Once we could display the returned information in the console, we set about mapping the contents into a table. To achieve this we created a template (Card) and mapped each object from the returned array onto each card. To avoid displaying an empty table with no information (if there were any issues/delays with the async response), we used Reacts useEffect feature. This meant we could display "loading" text to translate this to the user. 

In order for us to display the logo and chart of each currency, I inspected the CoinMarketCap website and found that each logo was being displayed as a link with the id of each currency. As a result we set the state "id", using template literals to incorporate into the string (URL).

![id-scraping-example]

Finally we created the conversion feature, demanding a lot of state manipulation and made use of our second axios request. On this page, users scroll through the two pre-populated lists (from our async response) of fiat currencies and crypto currencies and can then type how much they would like to convert. The setState function then displays the correct converted fiat currency. 

![conversion-example]

## Wins 

Time management - We kept our expectations low and focussed on the code. This meant we could take time ensuring each page worked effiently and correctly. 

Teamwork - Using VSCode's liveshare was a really rewarding experience. This meant we could communicate effectivley on zoom and implement our discussions into one, shared codeblock.

Design - We kept to the default styling provided by Bulma. Whilst the end product looks quite generic, we were not aiming for a polished product, not something that looks great. This was a simple currency website and the priority was it's functionality.

Mapping - The creation of the table was incredibly satisfying to build as it was one of the bigger challenges we faced. 

## Challenges

The conversion functionality. This was our first time experimenting with State in React but by problem solving together (multiple trips to stackOverflow!) and with some detailed supervision from our tutor, we created a functioning conversion page. 

## Stretch Goals

Due to our time constraints we were not able to implement a reverse conversion but as we had achieved this in one direction, we both agreed this would be easy to integrate at a later stage.

We also would have added in functionality to search for a currency from the searchbox in the navbar, which would then produce a detailed page using all the information we recieved from the API. For now we have to settle with cmd + F! 

## Takeaways 

Overall this was a really enjoyable project and a fun way to experience paried coding for the first time. This was our first Hackathon and I felt we both learnt an incredible amount about React, from State manipulation, to awaiting Axios requests. 

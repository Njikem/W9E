
// Creating key-value pairs

let tweets = [


 {

    tweet_content: `oh good you're up, here are a million Tweets to look at`,
    user_name: `Jason`,
    created_at: `August-fourth-twenty twenty`,
    age: 34,
    
 },


 {

    tweet_content: `this Tweet is our Super Bowl commercial`,
    user_name: `Peter`,
    created_at: `March-sixteen-twenty eighteen`,
    age: 29,
},

{

    tweet_content: `who is brave enough to add us to their Twitter Circle?`,
    user_name: `Mary`,
    created_at: `August-thirty-twenty twenty`,
    age: 37,
},


 {
    tweet_content: `if you've ever stolen a Tweet say sorry`,
    user_name: `John`,
    created_at: `June-thirty-twenty twenty two`,
    age: 36,
},

 {
    tweet_cotent: `wishing everyone with less than 350 followers a very nice day`,
    user_name: `Mau`,
    created_at: `July- thrity-twenty twenty two`,
    age: 18,
},


{
    tweet_content: `now you can search for really important things in your DMs`,
    user_name: `Elvis`,
    created_at: `March-sixteen-twenty twenty`,
    age: 24,
},


{
    tweet_content: `oh good you're up, here are a million Tweets to look at`,
    user_name: `Njikem`,
    created_at: `February-elenth-twenty twenty`,
    age: 30,
},


{
    tweet_content: `cheers to all the Tweets that made it to IG this year`,
    user_name: `Bright`,
    created_at: `December-twelve-twenty twenty`,
    age: 28,
},

 {
    tweet_content: `It’s time to flex those Twitter fingers and take it to the next level `,
    user_name: `Ann`,
    created_at: `November-first-twenty twenty one`,
     age: 38,
},

  {
    tweet_content: `you're doing great, even if your Tweets aren't`,
    user_name: `Ben`,
    created_at: `November-third-twenty twenty one`,
    age: 18,
  },



];

//Creating the while loop with age of at least 18
let counter = 0;
while(counter < tweets.length){
    console.log(`tweets_content  ${tweets[counter][`tweet_content`]} user_name: ${tweets[counter][`user_name`]} age: ${tweets[counter][`age`]}`)

    if(tweets[counter][`age`] = 18)

    counter = counter +1;
}

//Creating the for loop with age under 18

for(let counter = 0; counter < tweets.length; counter = counter + 1){
if(tweets[counter][`age`] < 18 );
}
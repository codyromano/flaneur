# flâ·neur
![](http://i.imgur.com/eooTeFl.jpg)
## (Noun) A person who wanders through a city for the sake of exploring it

### Why use Flâneur?

Sometimes you want to leave the house and go on an adventure, but it's hard to make plans and commit to them. With Flâneur, you can get up and go!

Perfect for date nights or lazy Sundays, this web app encourages people with busy schedules to embark on spontaneous adventures. It was inspired by this [cool French word](https://www.theparisreview.org/blog/2013/10/17/in-praise-of-the-flaneur/).

### How it works

1. Select your neighborhood
2. Flâneur assigns you to random, nearby location
3. Check-in and receive two new, surprise activities

### See Flâneur in action

[A rough beta version of Flâneur is hosted on my website](http://codyromano.com:8081/flaneur-web/). Please note that it's in the **very early** stages. I welcome your feedback, contributions (see below) and general feedback about the experience. :)

### How to contribute

Check out and run the project locally: 
```
git clone https://github.com/codyromano/flaneur.git
cd flaneur
npm install
npm start
open index.html
```
To add new events, [edit the activities.json file](https://github.com/codyromano/flaneur/blob/master/src/data/activities.json) and send me a pull request.

### Project status

- The project is currently specific to Seattle neighborhoods
- I decided to curate events instead of using an API to aggregate points of interest. Although manual curation obviously takes longer, I prefer the creative control.

### Next steps / goals

- Improve the UI (it's currently rough and experimental)
- Implement an incentives system - e.g. showing how many activities you have left to discover
- Make it easier for contributors to submit activity ideas
- Set up a proper production environment (configuring Webpack differently)

## Motivation
The previous GroupMe Web dark theme that I was using broke due to an update. [akump's Chrome extension](https://github.com/akump/GroupMeDarkTheme) seemed like a good replacement but there were two problems:
1. I use Firefox
2. The update was so recent his extension hadn't caught up to it either

So I decided to add my own modifications, as I found that the way he set things up in his repo made it very easy to work with. I also decided to remove the parts that make it into a fully fledged webextension because I don't need the extra capability that he added in that regard.


If you find yourself using my version of this dark theme, I recommend you go check his repo out and show him your appreciation moreso than me- I'm just doing some fiddling to get things how I like it.

## "Building"
To compile the scss file into a css file usable in userstyle engines and the like perform the following steps:
1. Clone the repo
2. In the root of the repo install node-sass: ```npm i node-sass```
3. Perform ```npm run build``` in the root.
4. The compiled css file will be located under the dist/ directory in the project root

## Potential issues

1. Scroll bars on all machines
2. Screens no one ever goes to - last 10% of CSS
   1. Calendar
   2. Contacts
   3. Archives
   4. Campus Connect
3. Transparency on certain pop-ups (e.g. group creation, new DM)
4. Certain colors for highlighted items

## TODO

1. More css for seldom-used components

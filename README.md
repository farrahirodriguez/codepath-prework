# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Farrah Rodriguez

Time spent: 5 hours spent in total

Link to project: https://perfect-amazing-kitten.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![3 strikes] https://recordit.co/rQ30pYNCnK
![randomization] https://recordit.co/akamJ9urKs
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Generating a random integer in a range: https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
Frequencies: https://pages.mtu.edu/~suits/notefreqs.html
Creating round buttons: https://www.w3schools.com/howto/howto_css_round_buttons.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge I encountered when creating this submission was implementing the “3 strikes” feature. At first I was really confused about 
where I should put the new code in the guess() function. In order to understand this code better, I wrote it out on paper and briefly 
described what each if/else statement does as well as how the variables and other functions connect to them. This made me realize that the 
strikes/mistakes section would simply be another if/else statement underneath the main else statement. 

After that I needed to understand how to implement it. For some reason, I thought that I could use “continue” but I quickly realized 
I was treating it like a loop instead of an if/else statement. I scrapped this idea and went back to my paper. I saw that playClueSequence() 
is called after a correct answer in order to continue the progress of the game. I added the if/else statement with the if statement calling 
loseGame() if mistakes were equal to 2. I recognized the pattern of the code and made the else statement in the same format as one for correct 
guesses substituting out progress++ for mistakes++. 

After this, I did a good amount of testing to make sure it worked including adding a console log line to make it easier and an alert to 
inform the user of their error. 

In situations where I’m really confused I always try to thoroughly take in the problem and the solution. This gives me the best chance of 
solving it and having smooth sailing in the future. I also do my best to stay calm. Sometimes you can get frustrated when things aren't
working as smoothly as you wanted them too. If I ever get frustrated I take some deep breaths and work on something else or take a break. 
This gives me a clear mind ready to take on the challenge. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

The html and css I know comes from an introductory web design class I am taking this semester. I find it really 
interesting and fun which I didn’t think I would originally. I’ve never used javascript before so using it in this 
assignment has given me a better idea of how websites can achieve levels of interactivity. Some questions I have 
regarding web development would be: How do websites like SquareSpace work in order for people to build websites 
without coding?, After I develop a website, how do I make it available to the public on search engines?, How do I 
make my websites secure with encryption?, and How do websites like Youtube handle and store the massive amount of 
videos uploaded to their website everyday?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring 
certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project I would add images and new sounds to the buttons. 
Originally, I wanted to put cat pictures on the buttons and have them “meow” instead of playing a 
frequency. I tried implementing the images but I just couldn’t figure it out with the limited experience 
and time I have. I tried looking up some information on how I could do something like this and tried a bunch 
of different things but it just didn’t work which was disappointing. Overall, I am happy with how it turned 
out even though that didn’t work out. 

It would also be cool to implement different levels of difficulty. The easiest level could have 4 buttons 
and 7 guesses and the hardest level could have 8 buttons and 15 guesses. In addition to these predetermined 
levels, you could also allow the user to choose how many buttons and guesses they must make with a slider. 

I changed the frequencies of the buttons to certain musical notes (A, B, C, D, E). When more buttons are 
added the frequencies would continue the musical scale. I wanted to do this so that the sound was pleasing 
to the ear and so that users could play a little song by clicking the buttons. If I had more time I would 
try to add a button that played a song when clicked using the buttons. It would be a short and known song 
(like twinkle twinkle little star) just for fun. 

It would also be a good idea for me to go back in and check the readability of my code as well as add in 
some more comments to make sure that I, or anyone else, can look at it in future and understand everything. 



## Interview Recording URL Link

[My 5-minute Interview Recording] https://arizona.zoom.us/rec/share/jOqdDurJvVCknOkmpIlzk7jlUWyTZtDUkdcxExuJ11BIwMwMy4zPNxjmMedVH57S.6Vs8pa2XxEX0Lxb6



## License

    Copyright Farrah Rodriguez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

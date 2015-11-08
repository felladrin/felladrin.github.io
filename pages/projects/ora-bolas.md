This was my first Jam, and also my first game made with PlayCanvas. I could say I was one of the few people who liked the theme as soon as it was released (“Entire game on One Screen”). I’ve found PlayCanvas just few weeks earlier and was very excited to check its potential. The Jam theme came in good time to make me try the game engine (one screen is all we need to try new engines!). And at the end, I was extremely happy with the result. PlayCanvas is now my primary choice for the next games.

At the start of LD 31, I thought I had no chance to submit to Compo, for being a first-time participant, so my focus was to make a game for the Jam. Firstly my game was about a boy dreaming to be a ant-sized person, running around a tree (represented by that object currently on the center of the game) – an idea from a quick brainstorm with a friend (Ukka). The player’s objective would be to avoid obstacles running and jumping while collecting items in a forever run game. But I’d probably spend a lot of time modeling. And that was not what I wanted. I really wanted to try the performance of playcanvas with 3D physics. So the idea about collecting falling objects came about. I started with primitive meshes, so I’d just need to replace them later (the spheres were meant to be fruits!). But I’ve spent so much time exploring PlayCanvas API that it was to late to replace the primitives. That’s when I decided to make it a ball collecting game.

After that, I needed to make the user interface. HTML5 made it so easy! Few hours later I had the UI working as I wanted. Then it was time to put some objective into the game. To make it reasonable, I’ve setup a countdown timer, so people would enjoy the game just for the time it should be enjoyed. It’s, no doubt, repetitive, and I don’t want people to get stressed. 100 seconds was good enough for me. And then, to finish it, I’ve added the counter (number of balls collected).

The game was still lacking sounds and music. I’d use a song from Robert Del Naja, made specially for LD31, and some sounds from freesfx.co.uk. It was all set up, but then I decided to submit the game before the end of sunday. So I removed the sounds/music, and quickly made some sounds with sfxr to put in place. That granted all assets created by me inside the 48h. Hard to believe, but I was ready to join the Compo.

Time to submit! And a indescriptible relief after clicking the Save button!

[![Ora Bolas](images/projects/ora-bolas/ora-bolas.png)](images/projects/ora-bolas/ora-bolas.png)

So, that’s the [result](http://ludumdare.com/compo/ludum-dare-31/?action=preview&uid=46558): a color-balls collecting game powered by PlayCanvas WebGL engine. It’s really that simple!

It’s something beautiful to watch if you have a nice soundtrack on the background. You can spend a lot of time looking for the balls eternally falling.

#### Game Specifications, Experience and Feedback

**Mechanics**: The mouse is the key here. In this game you just need to point the cursor to the balls with the same color displayed on the top-left label to collect them. When you collect a ball, you increase your “score”, which is displayed on the bottom-right label. The game has a countdown timer to challenge the player to collect the maximum balls they can in a specific time. Also, the timer makes the player stop playing before they get bored.

**Aesthetics**: The game was meant to be clear and colorful. Colored balls are generated randomly and the background also changes color randomly over time. The balls use just RGB basic colors and its combinations (except black, because it looked more like a shadow instead of a ball): Red, Green, Blue, Yellow (Red+Green), Magenta (Red+Blue), Cyan (Green+Blue), White (Red+Green+Blue).

**Story**: Actually, there’s no story for it. It’s up to you to think why are random colored balls falling in a random colored scene with an unidentified rotating object on the middle of it.

**Technology**: I’ve used PlayCanvas Designer to setup the scene, PlayCanvas javascript engine to program the game, PhpStorm as the IDE to manage my project code, Blender to model, and sfxr to create the sounds.

**What I’ve learned**: Everything about Ludum Dare and PlayCanvas were new knowledge this weekend. And I think I just didn’t get so tired because I was extremely excited about learning. I’ve also learned I can really make games in a few time. I like this kind of challenges! It’s so fun! And people really recognize your effort, mainly if they are also game devs.

**The Good**: Now I can say how exciting is participating in a Game Jam, and I can also say how good is to use javascript to program everything (games, apps, sites, servers)! Now I see that a lot of other devs goes to the same problems and also start at the same point (“How am I going to do that?”). I’m a programmer enthusiast, so it was very exciting to learn the playcanvas API in a hurry.

**The Bad**: I was not prepared to create sounds or soundtracks. So, to don’t screw up my game, I’ve chosen to leave it without soundtrack. The game without soundtrack loses almost all of its fun. Really, if you’re gonna play, please, prepare some relaxing music and let it playing on the background while you play. You’ll see the difference.
# On the choice of Unity and Node Websockets for the next multiplayer game

For the final exam (term paper) on Digital Games bachelor’s degree, we need to develop a game. Our very own and best game. I want mine to be a massively multiplayer online (MMO) game with an authoritative server. I still can’t talk about the game plot and mechanics, but I can say what I need the game to have — like 3D models and an HTML5 build. The deadline is at the end of this year, so I’ll be sharing here my experiences and expectations with anyone interested in following this quest.

## The choice of the game engine

Unity was the most suitable for my plans among 70 other game engines (from this [list of game resources](http://github.com/felladrin/game-development-resources-list) I maintain).

Those were the search criteria I used to filter the candidates (i.e. what the engine should have):

- Scene Editor
- Interface Editor (UI)
- Animation Editor
- 3D support and ease of importing 3D models
- Websocket support
- JSON support
- Export to HTML5 (WebGL)
- Scripts made in C #, Javascript, Typescript or Lua
- Easy integration with third-party libraries
- Free organization of the assets in the project folder
- Entity-component-system
- Well documented API

**To the podium went up:**

1. **Unity** ([https://unity3d.com/](http://unity3d.com/))
1. **PlayCanvas** ([https://playcanvas.com/](https://playcanvas.com/))
1. **Superpowers** ([https://sparklinlabs.itch.io/superpowers](https://sparklinlabs.itch.io/superpowers))

And here is an explanation of why, among the three, that was the ranking:

_PlayCanvas_, in addition to working completely in the cloud (in case you want to use their scene editor), you can’t organize the assets as you want. The scripts, for example, are all in the same folder. I’m sure I’d be able to achieve my expected results with PlayCanvas, as you can see on [this project](http://playcanv.as/p/rjC13fWv/), however it would take much longer than in Unity. In addition, there is a limited space for the game files, which are saved on PlayCanvas server. The hardest part is to create the HUD because each element has to be created and positioned manually, also you have to make the hud layout variation for different device sizes all by yourself.

_Superpowers_ is not so good on importing 3D models: currently, it accepts only single-mesh glTF models with a single material. Apart from this, there is no way you drop an asset inside the project and expect it to be automatically loaded inside the editor. All resources must be uploaded through the game editor. It’s also difficult to understand how some modules work, due to lack of example and documentation. The hardest part is also creating a HUD. Despite all this, it’s still the game engine I like the most, and I still want to use it for 2D games.

## The choice of the framework for the game server

This was a little easier to decide but not less time-consuming. The idea is to create an authoritative game server, and there were some criteria:

- Websocket Technology
- Language: PHP or Javascript (Node.js)
- Good documentation and examples

**To the podium they went up:**

1. **Ws** [Node.js] ([https://github.com/websockets/ws](http://github.com/websockets/ws))
1. **Ratchet** [PHP] ([http://socketo.me](http://socketo.me/))
1. **Colyseus** [Node.js] ([https://colyseus.io/](https://colyseus.io/))

And the reason for this ranking, among the three, was:

_Ratchet_ required a lot more lines of code to run than Ws, for the same functionality. The performance of both is comparable, but nowadays I’m more inclined to use *Javascript *than _PHP_.

_Colyseus_ is a great implementation for game servers, but it was compatible with the way I want the server working. With _Ws_ I can implement the server as I want, based only on _Ws_’ connection functions, which are pretty well organized.

## So, what do you think about these choices?

I’d really appreciate feedback from other game devs. Suggestions are always welcome!

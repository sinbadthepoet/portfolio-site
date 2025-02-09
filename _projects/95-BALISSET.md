---
title: BALISSET - Unity
category: Framework
image: /assets/images/balisset.png
---

**BALISSET - Ballistics and Logic Immersive Sim Systems & Encapsulating Technology**

Had to try pretty hard for that name, but I wanted to name it after Dune.

BALISSET is the framework for my future projects in Unity. Currently, a lot of my ideas for games that I am interested in developing are first person shooters that focus on allowing players to interact with the environment. Taking inspiration from development notes from Immersive Sims like Dishonored and Deus Ex, and other systemic games like Breath of the Wild and Metal Gear Solid: V, the intention here is create a foundation for any first person immersive sim to spring off of.

BALISSET already features:
<ul style="padding-left: calc(50% + 2rem + 40px);">
    <li>A highly customizable, fully featured non-kinematic rigidbody first person player controller.</li>
    <li>Arbitrary possession of any entity which extends from a base class, which is extremely useful for testing and could be used as a gameplay feature.</li>
    <li>Dynamic physics objects that can be picked up, thrown, and broken, changing based on their physics parameters.</li>
    <li>Highly customizable guns that can simulate pistols, shotguns, rocket launchers, grendae launchers, and far more outlandish weapons.</li>
</ul>

One of the priorities of BALISSET is it's data oriented design. Designers should be able to easily create content within the editor without needing to dive into code. I hope to see this decision pay dividends later in my career should I focus on building independant games with a small team of friends.

### INSPIRATION

During my time in school, I began to grow frustrated with how we would build our games, and the limited foundation that Unity provided. In my view, Unity is a pretty bare bones game engine, which is both a blessing and a curse. It allows you to build up something from scratch very easily, but it lacks the bones to build a more complex project within.

When I took the opportunity to learn other game engines (Unreal Engine 5, Halo Editing Kit, etc.), I found that the engines were simple to understand! Composition is excellent, but I found it more intuitive for game objects to have defined types through inheritance rather than all being generic with components. Unreal's pawn system was easy to understand and extremely useful, and I found the built in elements like the player controller to be far more useful than Unity's. It was exciting to start using, but unfortunately I realized the limitations of these engines. They were designed for much bigger teams, requiring assets and animations earlier in the development process. Additionally with Unreal Engine, the C++ pipeline was cumbersome with it's heavy use of macros, while also being tempermental compared to the ease of Unity's C# scripting. At the same time, Blueprint was incredibly useful, but attempting to build an entire project in pure blueprint was incredibly slow compared to simply typing out your code, and I was having enough trouble trying to work with Unreal's C++. I felt that Unreal Engine was an excellent engine for bigger teams, and I could thrive with it if working with someone who could mentor me through my mistakes, but for an indepent project, Unity would be my best bet.

That's why I decided to create BALISSET, and create the framework and tools required to build games with the ease of Unreal Engine's starting foundation, while also having the flexibility of Unity. This project has been my opportunity to improve my programming skills, creating code that focuses on extensibility, modularity, and maintainability. BALISSET is well documented, and has gotten me to take a closer look at every part of the Unity Engine than ever before.

### LINKS AND DEMOS

I hope to make a playable walkthrough demo and a gameplay video for BALISSET soon, but one is not yet available! I'll also add a link to the source code once it's time to publish it.
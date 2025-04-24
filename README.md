# Self-Taught-Language---Basketball-Guesser

## Description:
For my full TypeScript program, I plan to develop an interactive guessing game called “Guess the NBA Player!”. This game will challenge users to identify NBA players based on clues such as career statistics, teams played for, and other relevant facts. The game will use a combination of real or mock data to simulate the experience.

To highlight the unique features of TypeScript and demonstrate sound programming practices, my project will include:

Features:
- Interfaces to define structured types for players, stats, and game state.
- Type Aliases for simplifying complex type definitions and improving code readability.
- Type Assertions where needed to safely work with dynamic or user-input data.
- Encapsulation through classes that manage different parts of the game logic, such as the player database, the game engine, and user input handling.
- Functions to handle tasks like comparing guesses, selecting random players, and formatting hints.
- Recursion for challenges like checking nested stats or searching through team histories.
- Loops and Conditionals to control game flow, iterate over datasets, and handle user interactions.
- Unique TypeScript Features such as literal types, discriminated unions, and strict null checks to ensure robust and type-safe code.

The goal is to build a fun, educational program that also showcases how TypeScript can be used to structure a complex, interactive application with clarity and safety. This project will help reinforce key TypeScript concepts while producing a creative and engaging final product.

## How to Run:
1. Install TypeScript and Dependencies
```
sudo apt install ts
sudo apt install ts-node
npm install prompt-sync
npm i --save-dev @types/node
```
2. Compile and Run
To compile:
tsc yourfile.ts

To Run:
node yourfile.js

## How the Game Works
1. The game randomly selects an NBA player from a pool.
2. The player is guessed based on stats (points, assists, rebounds).
3. After two incorrect guesses, more information is revealed, including the teams they played for and the number of championships won.
4. The user has a maximum of 3 attempts to guess correctly.
5. If the user guesses correctly, they win the game. If they run out of attempts, the correct answer is revealed.
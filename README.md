# Tic-Tac-Toe Game

## About the game

This is a tic-tac-toe game that allows the user to play against an AI or with a friend.
The AI is seperated in 3 stages (Easy, Normal and Hard)
The Easy mode relies on the random selection of an available index on the gameboard.
The Noraml mode is similar to the Easy mode, except id detects when the user or the AI itself has an oportunity to win. In that case the AI blocks the player from winnig (if possible) or takes the win.
The Hard mode uses the minimax algorithm, which will recursevly try to find the best possible field to place its sign
The app is mobile compatible (responsive).
The app was published at [github pages](https://zack1808.github.io/tic-tac-toe).

## How to run the game

You can find the game up and running at [https://zack1808.github.io/tic-tac-toe](https://zack1808.github.io/tic-tac-toe).

If you want to run the app localy, you can clone the repository. 
After cloning and entering the repository, run the command:

### `npm install`

After the exectuion of the command is completed, run the followig command:

### `npm start`

After execution, the localhost server will startup and a browser window will open, previewing the tic-tac-toe game.
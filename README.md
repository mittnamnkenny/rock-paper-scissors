# My Rock Paper Scissors game

For the second milestone assignment with Code Institute, I have created a classic Rock Paper Scissors game. This game is single player only, where the user will try to get as many points as possible before the computer score reaches 5 points.
The user will choose one of the three choices and try to beat the computer; the chance is random.

The rules remain the same as the original game: Rock beats scissors. Scissors beat paper, and paper beats rock. The rules are easy; the game is both simple and fun.

This site is targeted toward people who have an interest in both gaming and JavaScript.

[View the live project here.](https://mittnamnkenny.github.io/rock-paper-scissors/)

![Responsice Mockup](assets/media/design.png)

##  User Experience (UX)

- ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site.
        2. As a First Time Visitor,  I want to be able to easily navigate throughout the site.
        3. As a First Time Visitor,  I want the site to be visually appealing regardless of screen size.
        4. As a First Time Visitor, I want to easily find instructions on how to play the game.
        5. As a First Time Visitor, I want the game to function as expected.
        6. As a First Time Visitor, I want to be able to restart the game at any time.
        7. As a First Time Visitor, I want to be able to see both my score and the computer.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to continue playing the game because it’s fun.
        2. As a Returning Visitor, I want to revisit the site because it’s visually appealing.
        3. As a Returning Visitor, I want to visit mittnamnkenny’s GitHub.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to improve on my previous attempts and beat my high score.

## Features

### Existing Features

#### Header

  - The Header is featured at the top of the page.
  - Shows the logo ”mittnamnkenny” in the left corner.
  - The user will clearly see that this game was created by mittnamnkenny.
  - The right part contains the navigation.

  ![Header](assets/media/header.png)

#### Navigation

  - The navigation is positioned on the right-hand side of the header area.
  - When on smaller devices the navigation goes underneath the header logo.
  - Two buttons included: Instructions and restart game, with matching Font Awesome icons.
  - The user will be able to read the instructions of the game at any time.
  - The user will be able to restart the game at any time.
  - The navigation buttons all change text colour when hovered over.

![Navigation](assets/media/nav.png)

#### Welcome Page

  - This page is first presented as the user visits the site.
  - Includes a Welcome message and clearly informs the user that this is a Rock Paper Scissors game.
  - The user will be able to read the game instructions before pressing the play button and entering the game area.
  - This section will inform the user on how to play the game.
  - The play button will bring the user to the game area. The button will change background colour when hovered over.

![Welcome Page](assets/media/welcome.png)

#### Game Page

  - Player and computer score are featured at the top of this page.
  - Clearly informs the user that the game will end when the computer score reaches 5 points.
  - The user is presented with a choice of options to choose from to play: Rock, Paper, or Scissors. These options are interactive icons that change background colour when hovered over.
  - When the user clicks on one of these icons, the computer will choose a random option and display it to the user together with a popup message with text: Tie, Win or Loss.
  - The icons will change colour depending on the outcome. (Win = Green, Red = Loss)

![Game Page](assets/media/game.png)

#### Result Page

  - When the computer score reaches 5 points, the result page will be presented to the user.
  - The user will see the outcome of the game. Player score are presented.
  - Depending on how many points are received, a short message to motivate the user to continue playing the game is displayed.
  - A play again button will take the user back to the game page and reset the player and computer score. The button will change background colour when hovered over.

![Result Page](assets/media/result.png)

#### Footer

  - The Footer is featured below the main page area.
  - A centered link with text ”Visit my GitHub page” with matching Font Awesome icon will take the user to mittnamnkenny’s GitHub repo, opens in a new tab.
  - The link will change text colour when hovered over.

![Footer](assets/media/footer.png)

#### Meta Data

  - My Rock Paper Scissors Game

### Features Left to Implement

- Make the website available in two languages;  English and Swedish.

## Design

- I have used a mixture of dark purple #210024 and blue sapphire #0b5e8a as the main colour theme for this site.
- All page sections have a background colour of snow #FBF8F8 to make the text stand out and easy to read.

![Colours](assets/media/colours.png)

- Scalable Vector Graphic are used for the background image with a fallback background colour if the image should fail to load.
- One SVG-wave was positioned at the bottom to improve the overall design.
- Google Fonts were used to import the font family Poppins that was chosen and used throughout the whole site with Sans Serif as the fallback font. Poppins both looks good and is easy to read.

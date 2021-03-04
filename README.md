# Code-Quiz

# Project Introduction
For this project, I was required to create a basic quiz web program, that functioned just like a normal timed quiz. It was meant to have a set timer function that counted down through a set amount of questions. It was also meant to have an end page which would record your scores and also have the ability to erase the scores as well using local storage. 

## My Thought Process for this Project
To begin, I knew that I wanted the interface to be a bit flashy. I also knew that I wanted my program to adjust the text to a set interface, so the program is fluid and easy to navigate. Thus, I established a few main goals for myself.
1. The program needed a starting html file, a main quiz html file, and a ending high score html file, each with their own respective css styling file.
2. The javascript had to be able to start up at the click of the start button
3. The javascript aslo needed to fit the given quiz questions (which I provided in the form of an array) and their answers, to the boxes that are created
     - note: this can be doen either using an API or dynamically generated within the Javascript

## How I attempted the project
To begin, I gave it my best effort to develop the baseline look for the overall quiz interface. I did this by creating a starting index.html page, which had the introduction message for the quiz and the start button. Then I created a following quiz.html page, which is where I laid down the basic elements for what text was to be shown, and how I would organize it within different sections and divisions.

Following the setup of the html pages, I linked them to transition from the index.html page to move into the quiz.html page at the click of the button. After linking the two, I started to develop the front-end portion of the pages within their own respective style.css (for index.html) and game.css(for the quiz html). I used more advanced techniques of element targeting within my CSS, to have slight color changes when a button is hovered over anda slight size shift as well. Considering the interface is more or less plain, these slight effects in the buttons and answer options alone make the quiz all the more engaging.

In regards to Javascript, I was unsuccessful in my atttempts of creating a functional Quiz. After spending countless hours attempting to utilize different forms of functions and variables, I continuously received error after error regarding the query selectors that I assigned to various sections of my quiz.html. To my knowledge, I could not seem to find any error in how I referenced the element selectors, despite having utilized various tutors and online references that I had found. 

## Sample Viewing of the Project
(insert working project gif here)

Github link: https://github.com/seddboi/Code-Quiz 

Live Website: https://seddboi.github.io/Code-Quiz/
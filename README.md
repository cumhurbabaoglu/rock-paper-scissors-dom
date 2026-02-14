# Description

This is a mini-project based on an earlier assignment from The Odin Project. The assignment was console-based, and I wanted to rebuild it as a browser-based game using DOM manipulation and event-driven logic.
[Console Version](https://github.com/cumhurbabaoglu/javascript-rock-paper-scissors)

# Features
- DOM Manipulation
- Event handling (key, click)
- Input validation
- Keyboard support (Enter key alternative to submit button) and focus() method
- 5-round game logic 
- Switching between two different themes 
- Resetting without page reload

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

# What I Practiced & Learned
- Using focus()
- Using trim() in input validation
- Disabling elements (disabled = true)
- Using value instead of textContent for input elements
- Early returns 
- Toggle logic (CSS-JS interaction)

# Future Improvements
- Responsive design with media queries
- Replacement of input text area with three buttons for the three options
- Adding logos to buttons
- Adding a navigation bar
- Dark mode option
- Adding a game info and history section

# Development Journey

This is a refactored version of my initial, local implementation.

During the refactoring process, I improved several decisions related to code organization that made the code cleaner and easier to maintain:

- Multiple mouseover & mouseout event listeners were replaced with CSS :hover
- Window.location.reload() in reset click event was changed to state reset logic
- Flag-based theme change control was replaced with toggle()
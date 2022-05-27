## Hooks 

Hooks are inbuilt react functions we can use to add boilerplate commands to our functional code 
Hooks 'tend' to start with use.. 

useState - Hook for adding state to our react code 

React is doing a lot of stuff behind the curtain, useState is using inbuilt logic to add 'state' to our code 

Hooks are relatively new, they came in React version 16 (maybe..) about a year and a half old, before hooks everything was class based 

React is 'slightly' pushing for people to move to functional, but a lot of codebases still use class based 

The two biggest hooks (atleast for QA and teaching..) : 
- useState: Add state, or modifiable data between our components 
- useEffect: Run other functions between the page rerendering, and specifying when a page should render, lets us specify what to do when the page rerenders, and when it should rerender

When does react render? 
- When the page first runs, it renders 
- When State changes (with user input?) it rerenders 
- When a prop changes

Render infinite loop occurs when changing state automatically causes state to change again
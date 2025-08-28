JavaScript DOM & Events – Q&A
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById → Selects a single element by its unique id. Returns only one element (or null if not found).

getElementsByClassName → Selects all elements with the given class name. Returns an HTMLCollection (live collection, updates if DOM changes).

querySelector → Selects the first element that matches a CSS selector (id, class, attribute, etc.).

querySelectorAll → Selects all elements matching a CSS selector. Returns a static NodeList (doesn’t auto-update).

👉 In short:

Use getElementById for single unique ids.

Use getElementsByClassName if you want multiple elements with the same class.

Use querySelector / querySelectorAll when you need the flexibility of CSS-style selectors.

2. How do you create and insert a new element into the DOM?

Create an element:

const newDiv = document.createElement('div');
newDiv.textContent = "Hello World!";


Insert it into the DOM:

document.body.appendChild(newDiv);  // adds at the end of body


Or insert at a specific place:

const container = document.getElementById('container');
container.insertBefore(newDiv, container.firstChild);

3. What is Event Bubbling and how does it work?

Event Bubbling means that when an event (like a click) happens on an element, it first runs the handler on that element, then "bubbles up" and triggers the same event on its parent, then on the parent’s parent, and so on until it reaches document.

Example: Clicking a button inside a div → first button’s handler runs, then div’s, then body’s, etc.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to many child elements.

How it works:

Since events bubble up, the parent can "catch" the event from its children.

Inside the parent’s event handler, you check which child triggered the event (using event.target).

Why useful?

Saves memory (fewer event listeners).

Handles dynamically added elements without needing to re-attach listeners.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → Stops the browser’s default action for an event.
Example: Stop a form from submitting or stop a link from navigating.

stopPropagation() → Stops the event from bubbling up (or capturing down).
Example: If you click a button inside a div, calling stopPropagation() prevents the div’s event listener from firing.

👉 In short:

preventDefault() = block browser’s default behavior.

stopPropagation() = block event from traveling further in the DOM.

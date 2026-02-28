<!-- 1️ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

All of these methods are used to select elements from the DOM, but they work differently.

getElementById is used to select a single element by its unique ID. Since an ID should only be used once in a webpage, this method always returns one element.

getElementsByClassName is used to select elements by their class name. Because many elements can share the same class, this method can return multiple elements. It gives back something called an HTMLCollection, which looks like an array but is not exactly a real array.

querySelector is more flexible because it allows you to use any CSS selector. However, it only returns the first element that matches the selector.

querySelectorAll is similar to querySelector, but instead of returning just the first match, it returns all matching elements. It gives a NodeList, which is easier to loop through compared to HTMLCollection.

In simple words, getElementById is for one specific element, getElementsByClassName is for multiple elements by class, and querySelector methods are more powerful and flexible.
<!-- 
2️ How do you create and insert a new element into the DOM? -->

To create and insert a new element into the DOM, first you create the element using JavaScript. At this stage, the element exists in memory but is not visible on the webpage.

After creating it, you can modify it by adding text, attributes, or class names.

Finally, you insert the element into the DOM by attaching it to an existing element, such as the body or a div. Once it is attached, it becomes visible on the page.

So basically, the process is: create the element, customize it, and then add it to the webpage.

<!-- 3️ What is Event Bubbling and how does it work? -->

Event Bubbling is a behavior where an event starts from the element that was triggered and then moves upward through its parent elements.

When you click on an element, the event does not stay only on that element. It first runs on the clicked element, then automatically goes to its parent, then to the grandparent, and continues upward until it reaches the top of the document.

This happens because the event system in JavaScript is designed to propagate events through the DOM tree. Unless we stop it, the event keeps moving upward.

<!-- 4️ What is Event Delegation in JavaScript? Why is it useful? -->

Event Delegation is a technique where you add a single event listener to a parent element instead of adding separate event listeners to many child elements.

Because of event bubbling, the parent element can detect events that happen on its children.

It is useful because it improves performance by reducing the number of event listeners. It also keeps the code cleaner and easier to manage. Another important benefit is that it works for elements that are added dynamically after the page has loaded.

That is why event delegation is commonly used in real-world applications.

<!-- 5️ What is the difference between preventDefault() and stopPropagation() methods? -->

preventDefault() is used to stop the browser’s default action. For example, if a form normally reloads the page when submitted, this method can stop that behavior.

stopPropagation() is used to stop the event from moving up to parent elements. It prevents the event from bubbling.

So the main difference is that preventDefault() stops the browser’s built-in behavior, while stopPropagation() stops the event from spreading to other elements in the DOM.

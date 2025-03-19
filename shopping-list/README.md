# Shopping List

This exercise is part of 'The Odin Project' practice from MDN’s Active Learning sections on DOM manipulation.

    In this challenge we want to make a simple shopping list example that allows you 
    to dynamically add items to the list using a form input and button. 
    When you add an item to the input and press the button:

    The item should appear in the list.
    Each item should be given a button that can be pressed to delete that item off the list.
    The input should be emptied and focused ready for you to enter another item.
    
    The finished demo will look something like this:

    Demo layout of a shopping list. 
    A 'my shopping list' header followed by 'Enter a new item' with an input field and 'add item' button. 
    The list of already added items is below, each with a corresponding delete button. 



To complete the exercise, follow the steps below, and make sure that the list behaves as described above.


    . Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
    . Create a function that will run in response to the button being clicked.
    . Inside the function body, start off by storing the current value of the input element in a variable.
    . Next, empty the input element by setting its value to an empty string — ''.
    . Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    . Append the span and the button as children of the list item.
    . Set the text content of the span to the input element value you saved earlier, and the text content of the   button to 'Delete'.
    . Append the list item as a child of the list.
    . Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    . Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

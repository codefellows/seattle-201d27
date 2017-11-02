# Assignment Overview: Lab for Class 14

## Let's Make an Order Form & a Shopping Cart!

We're going to adapt some prior stretch goals and build a small stand-alone project with it: assuming that all items in BusMall went into production, let's build a web-based order form and shopping cart app.

This is a paired assignment, but we will use a different workflow than we've used before in pair programming, one that will be a first step toward your workflow in project week (we will discuss that workflow in detail tomorrow). One member of the pair will create a repository and then set the partner as a collaborator to that repo. That means that both of you will have privileges to push and merge to that repo.

One partner should create a repository called 'order-form' and create the following files: index.html, cart.html, app.js, and style.css. ACP, then the other partner can clone the repo. Note that you will also need to import the images from BusMall into this project, and maybe some of the JS (like the constructor, the local storage stuff, and other things related to organizing the objects).

Your index.html is an order form for customers: it will have an order form for BusMall that will have the following inputs:

  - A dropdown menu of all BusMall products (`<select>` and `<option>` will be needed)
  - An input of "type=number" to indicate quantity to purchase
  - Text inputs for each of: name, street, city, state, ZIP code, and phone number
  - An input of "type=number" to enter a credit card number
  - A "Add To Cart" button to submit the order. When the order is submitted, all of the input fields should be cleared
  - Of course, there should be appropriate instructions and styling on the page

  Your cart.html page will display the BusMall orders on a typical shopping cart page.
  - It should list all items currently on order with a picture of the item.
  - Each item should have a button "Delete this item" that will remove that item from the DOM (AND array of ordered items, AND local storage) when it is clicked.

## Process

There's nothing really new here, just extensions and adaptations of previous things we have done. Here's some things to think about as you go plan out the lab for today:

- You'll need to use local storage to share data between the two HTML pages.
- The constructor from BusMall might be handy as a way to organize your products.
- It would also be useful to use a constructor to capture your form data into an object that could be placed into local storage and then used to provide the form data to the shopping cart page.
- You and your partner should plan out how you want to collaboratively attack the problem: do you each want to build a HTML page and then pair program the JS? Or does one person do both HTML pages while another gets the JS going? It's up to you.
- Strive for basic functionality first: be way of rabbit holes such as styling or getting input validation set up before your form and cart actually work together.

### *Remember to submit a link to your last pull request on Canvas!*

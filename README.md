# DavidQ-BookMark-App
###week 2 bookmark app project###


#As a user:

#1)I can add bookmarks to my bookmark list. Bookmarks contain:
                title
                url link
                description
                rating (1-5)
                I can see a list of my bookmarks when I first open the app

All bookmarks in the list default to a "condensed" view showing only title and rating
I can click on a bookmark to display the "detailed" view

Detailed view expands to additionally display description and a "Visit Site" link
I can remove bookmarks from my bookmark list

I receive appropriate feedback when I cannot submit a bookmark

Check all validations in the API documentation (e.g. title and url field required)
I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

(Extension) I can edit the rating and description of a bookmark in my list

###Technical Requirements##
Use fetch for AJAX calls and jQuery for DOM manipulation

Use namespacing to adhere to good architecture practices

Minimal global variables
Create modules in separate files to organize your code
Logically group your functions (e.g. API methods, store methods...)
Keep your Data out of the DOM

No direct DOM manipulation in your event handlers!
Follow the React-ful design pattern - change your state, re-render your component
Use semantic HTML

Use responsive design

Visually and functionally solid in viewports for mobile and desktop
Follow a11y best practices

Refer back to the lessons on accessibility, forms



###Process####
#1) Before coding anything, think about your user flow. What does the initial loaded page look like? What is each action a user can take and how does it affect the visual layout?

#2) Draw up gray box wireframes using MockFlow, a free wireframing tool of your choice, or on a napkin!

#3) For every wireframed application state, include a populated store object as an example next to it

#4) Set up your project. Create your Git repo, build your boilerplate file structure, connect jQuery and confirm your linked JavaScript/CSS files are being read by your HTML.

#5) Build an HTML version of all the different states of your application. Use multiple HTML files if you wish - these will be deleted later, but useful for establishing the HTML strings your template generator functions will need to build.

#6) Review the API Documentation. Perform some test requests with Postman.

#7) Construct your modules and test every new function as you build it.

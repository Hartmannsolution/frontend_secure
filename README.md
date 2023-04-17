# repo auto created
This repo is made for workshop on 3rd semester of Datamatiker education at Cphbusiness

## Exercise 1
1. Together in class go through the content of apiFacade.js and see how it works
2. Together in class go through the content of the App.js and see how it works
3. Together in class go through the content of the components folder and see how it works

## Exercise 2
1. Setup routing with react-router-dom.
  - Create 2 new components called Home and About with some dummy content
  - Create a header component with a navigation bar with links to Home and About
  - Create a navigation bar with links to Home and About (Use NavLink from react-router-dom)
2. Add styling to get a horizontal navigation bar with links to Home and About
  - in index.css add the following code
```css
  /* For the router */
ul.header {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
 }
 
 ul.header li { float: left;}
 
 ul.header li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
 }
 ul.header li a:hover:not(.active) { background-color: #111;}
 .active { background-color: #62e4f8;}
```
  - in App.js add `<ul className="header">` around the navigation links and add `activeclassname="active"` to the navlinks.


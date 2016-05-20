# Project Overview ( [link](http://znalbert.github.io/frontend-nanodegree-feedreader/))

In this project I was given a web-based application that reads RSS feeds, and have been tasked with using [Jasmine](http://jasmine.github.io/) to write test suite for this feed reader.

## Checking out this project

If you clone this repo and open the index.html file you'll see my Jasmine suite of tests and their passing specs at the bottom of the page.

## Why this project?

This project has a focus on learning the ins, outs, and importance of test-driven development.

## What will I learned

First, I learned that testing really isn't that difficult a process for both synchronous and asynchronous functions. More importantly, though, I learned that thinking about tests first really helps to understand one's project before even getting started and helps to ensure that new features and functionality work with the pre-existing ones.


## Steps used to complete this project

1. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Reviewed the functionality of the application in the browser.
3. Explored the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explored the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edited the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Returned the allFeeds variable to a passing state.
7. Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Wrote a new test suite named "The menu".
10. Wrote a test that ensures the menu element is hidden by default. Analyzed the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
12. Wrote a test that ensures when the asynchronous loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
13. Wrote a test that ensures when a new feed is loaded by the loadFeed function that the asynchronous content actually changes.
14. All of your tests are now passing.

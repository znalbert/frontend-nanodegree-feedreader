# Project Overview

In this project I was given a web-based application that reads RSS feeds, and have been tasked with using [Jasmine](http://jasmine.github.io/) to write test suite for this feed reader.

## Checking out this project

If you clone this repo and open the index.html file you'll see my Jasmine suite of tests and their passing specs at the bottom of the page.

## Why this project?

This project has a focus on learning the ins, outs, and importance of test-driven development.

## What will I learned

First, I learned that testing really isn't that difficult a process for both synchronous and asynchronous functions. More importantly, though, I learned that thinking about tests first really helps to understand one's project before even getting started and helps to ensure that new features and functionality work with the pre-existing ones.


## Steps used to complete this project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of your tests should pass.

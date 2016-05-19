/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('feeds have URLs', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         });

         it('feeds have names', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           })
         });
    });


    /* This portion tests the menu's functionality */
    describe('The menu', function() {
       var body;

       beforeEach(function(){
         body = $('body');
       })

       it('menu should be hidden by default', function(){
         expect(body.attr('class')).toEqual('menu-hidden');
       });

       it('should display/hide appropriately on click', function(){
         var menu = $('.menu-icon-link');

         menu.click();
         expect(body.attr('class')).not.toEqual('menu-hidden');
         menu.click();
         expect(body.attr('class')).toEqual('menu-hidden');
       });

    });


    /* Test to ensure feeds get loaded when the site loads */
    describe('Initial Entries', function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it('feed container should have at least 1 entry', function(done) {
        var entries = $('.feed').find('.entry');
        expect(entries.length).toBeGreaterThan(0);
        done();
      });
    })


    /* Tests to ensure that changing the feed works */
    describe('New Feed Selection', function() {
      var firstFeedContents;
      var secondFeedContents;

      beforeEach(function(done) {
        loadFeed(1, function() {
          firstFeedContents = $('.entry')[0].innerHTML;
          done();
        });
      });

      it('loadFeed updates feed content displayed', function(done) {
        loadFeed(0, function(){
          secondFeedContents = $('.entry')[0].innerHTML;
          expect(firstFeedContents).not.toEqual(secondFeedContents);
          done();
        })
      });
    })

}());

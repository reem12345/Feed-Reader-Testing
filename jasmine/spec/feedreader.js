
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //Checks if every feed has URL.

        it('url defined', function () {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        //Checks if every feed has a name.
        it('name defined', function () {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });



    describe('The menu', function () {

        const body = document.body;
        const menu = document.querySelector('.menu-icon-link');

        //Checks if the body has the class enabled.
        it('menu hiding', function () {
            expect(body).toHaveClass('menu-hidden');
        });


        //Clicking the menu twice and check it classes.
        it('menu click', function () {
            menu.click();
            expect(body).not.toHaveClass('menu-hidden');

            menu.click();
            expect(body).toHaveClass('menu-hidden');
        });

    });


    describe('Initial Entries', function () {

        //Checking the entry elements in the contrainer in case there are more than 0 entries.
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('single entry', function (done) {
            const element = document.querySelector('.feed .entry');
            console.log(element)
            expect(element.length).not.toBe(0);
            done();
        });

    });

    describe('New Feed Selection', function () {
        //Calling loadFeed twice and check it the content actually changes or not by comparing them.
        let oldfeed = document.querySelector('.feed').innerHTML;
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldfeed = document.querySelector('.feed').innerHTML;

                loadFeed(1, done);
            });
        });

        it('new feed', function (done) {
            let newfeed = document.querySelector('.feed').innerHTML;
            expect(newfeed).not.toEqual(oldfeed.innerHTML);
            done();
        });

    });
}());

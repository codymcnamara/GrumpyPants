# GrumpyPants
A Tumblr clone exclusively for complaining. Built on Rails and Backbone.

[Live link](http://www.grumpypants.io)

### Programming highlights

* Uses custom SQL query and overwrites Backbone’s “parse”method to order blog posts by most recently created and allow page pagination.
* Stores blogs and posts in Backbone collections to avoid unnecessary database querying.
* Uses filepicker library to support user photo upload on Backbone views.
* Implements custom Backbone “CompositeView” class that recursively removes blog or post subviews.
* After login, a “session token” is created and stored in both the database and the browser's cookie. This allows users to remain logged in after closing the browser. Additionally, the app ensures secure user login by redirecting to login page if session token in the database and browser do not match.

<br>

#### Bonus Features (TODO)
* Reblogging
* Click handler on blog titles that outputs an soundbite (ex: a baby waah, a sigh, etc ).
* Like a post
* Tags
* Automated responses from website when you choose from set of predefined tags. These responses would send words of encouragement

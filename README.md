
<<<<<<< HEAD
Guitar Helper

Back-end Repo:
https://github.com/hjsharkey23/guitar-helper

Deployed Sites:
Front-end:
https://hjsharkey23.github.io/guitar-helper-client/
Back-end:
https://guitar-helper-hayden.herokuapp.com/

Wireframe:
https://imgur.com/ufa7q1G

User stories:
As a user I want to be able to sign in
As a user I want to be able to sign out
As a user I want to be able to add songs
As a user I want to display song information
As a user I want to be able to store all of my information in one place
As a user I want easily readable information.
As a user I want to be able to delete unwanted songs
As a user I want to be able to updae song information

Description:
Guitar helper is an app I created for guitar players of all skill levels. As a
guitar player, especially one who is self taught using all of the great resources
available online, I wanted to have a place to keep all of the information that
helps me learn.

There are a lot of things you need to remember, especially for beginners. Things
like the tuning of the guitar and what chords you need to know can be particularly
annoying to have to remember. Even for guitar players who have been playing for
years, such as myself, I am constantly forgetting the songs I've learned. So I
also just wanted a simple way to recall what I've learned when someone says the
inevitable: "Play me something!"

Planning:
Going into this project, I had two main goals in mind from a development
standpoint. The first was to organize my file structure neatly. This is an
application that I wanted to be able to come back to and to. The other goal was
to make my code modular so it would be easy for me to add more features later.
Other than that, I knew I needed to have a back end database that would eventually
be deployed on Heroku where informationcould be stored, as well as a user
friendly front end.

Technologies used:
HTML, CSS, Javascript, Ruby on Rails, PSQL, Heroku

Development:
The first step was to create a back end API using Ruby on Rails, where all the
information about the user and their recources would be stored.
I knew that I needed to create a user resource so that each user could have their
own list of songs. I started with that and made sure that they couuld sign in,
sign out, and change their password. Once that was working I moved on to creating
the resource "Song" which would be the basis of the app. Songs would have the
following columns in the table: Title, Artist, Tuning, Capo, and Chords. I repeated
a similar process as I did for users and generated the song resource, and then made
sure the user was able to create their own songs with all of the information
they wanted. It was also important that they were able to update each song, delete
ones they no longer cared for, and most importantly, show all of the songs that
they had created.

I tested all of these features using CURL scripts to make sure that the database
could be modified locally. Once I was confident that was working I moved on to
the front-end.

The front-end was as simple as creating all of the forms that were necessary
for the user to enter song information. Again, I tested everything with CURL
scripts at first to make sure the front-end was properly interacting with the
API. I also wanted to make sure to properly set the authorization so that the
user had to be signed in to display their information. This was done by using
jQuery to hide and show the appropriate froms depending on if the user was
signed in or not. I also wanted to make sure the user could only see their
owned songs, and not everybody's as the information is custom for each user, and
could be different for everyone depending on their skill level.

First big problem:
The biggest issue I ran in to during the development process was when I went to
deploy my website to GitHub pages. Previous to this stage, I had only tested
everthing locally. However, I hadn't properly migrated my database. I had
originally forgotten to create an attribute "Title" for each song (duh!) So I
created a new migration to add it. It didn't work at first, so I made another
migration to remove that column in hopes to fix the issue and then add it back.
Somehwere along the line, the "Remove column Title" had jumped to the front
of the migration line. When I tried to migrate on heroku, the migrations ran
in that erroneous order, causing major problems. I had not forseen this big
of an issue and it cost me a lot of time.

The solution:
After a few hours of trying to solve the problem. I was finally able to show the
error message that it was trying to remove a column that didn't exist at the
time. At this point I realized that I needed to go back to my local files, and
correct the migration order. I did this by dropping the database completely, and
then removing the erroneous migration files. Once this was fixed, and working
locally again. I did the same to the production database. I was then able to
successfully create a new database migration on heroku with the proper
columns.

Future plans:
Due to time constraint and the unforseen bug. I wasnt able to style my page and
make it easy for the user to read. My first plan is to implement handlebars to
help display the song information in a user friendly format. As it stands, it's
all there, but its not pretty. Once that is working how I want it to, I want
to introduce some styling using bootsrap and utilizing modals to creat a cleaner
overall experience. This is something I will be using myself and I want it to
be something my fellow guitar players will consider using as well. I would
also eventually like to add to the table in the database to allow for links
that users can store. Things like youtube links to their favorite lessons
on the song, or covers they enjoy.
=======
>>>>>>> feature

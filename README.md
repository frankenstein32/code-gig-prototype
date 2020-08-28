# #code-gig-prototype
This project is basically to implement Sequelize ORM

## Database - Structure
command: describe table gigs;
<pre>
            +---------------+--------------+------+-----+-------------------+-------------------+
            | Field         | Type         | Null | Key | Default           | Extra             |
            +---------------+--------------+------+-----+-------------------+-------------------+
            | id            | int          | NO   | PRI | NULL              | auto_increment    |
            | title         | varchar(200) | YES  |     | NULL              |                   |
            | technologies  | varchar(200) | YES  |     | NULL              |                   |
            | budget        | varchar(20)  | YES  |     | NULL              |                   |
            | description   | text         | YES  |     | NULL              |                   |
            | contact_email | varchar(20)  | YES  |     | NULL              |                   |
            | createdAt     | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
            | updatedAt     | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
            +---------------+--------------+------+-----+-------------------+-------------------+
</pre>


## Visuals
1. Main Page [Main Landing Page]

<img src="https://user-images.githubusercontent.com/34310411/91500687-9434df00-e8e1-11ea-9976-bf6e75256d34.png"></img>

2.1 gigs route [For now every entry is hard coded]

<img src="https://user-images.githubusercontent.com/34310411/91473924-31c6e900-e8b7-11ea-9e10-4e42b1ee917e.png"></img>

2.2 gigs route [Fetching content from database now]

<img src="https://user-images.githubusercontent.com/34310411/91589136-dfe59800-e976-11ea-885e-5dba0cdbba1e.png"></img>

3. add route [The add entry form]

<img src="https://user-images.githubusercontent.com/34310411/91500988-4076c580-e8e2-11ea-8a1a-75842a7a2076.png"></img>

4. Errors handled [Error Pop-ups]

<img src="https://user-images.githubusercontent.com/34310411/91588218-76b15500-e975-11ea-8f95-530e552a7bdc.png"></img>

5. Searching Query + Result [Searched keyword = "Javascript"]

<img src="https://user-images.githubusercontent.com/34310411/91589170-f0960e00-e976-11ea-8730-89a09dd6edc0.png"></img>

__Note:__
1. Originally I designed the code using __mysql__ database but due to paid plan of hosting on heroku, this project is now shifted to __postgresql__.
2. This website may took some time to open at first due to heroku policy of making any non-usable app to standby.
3. This project is only to study and practice the backend implementation as well as deployment of website on heroku.


## Web-App Link: <a href="https://code-gig-prototype.herokuapp.com/">click here!</a>

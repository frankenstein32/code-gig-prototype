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

<img src="https://user-images.githubusercontent.com/34310411/91500844-ee35a480-e8e1-11ea-9aa2-926e443cc6cc.png"></img>

3 add route [The add entry form]

<img src="https://user-images.githubusercontent.com/34310411/91500988-4076c580-e8e2-11ea-8a1a-75842a7a2076.png"></img>

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

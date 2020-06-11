# Adrien GATINEAU

Hello, I'm Adrien GATINEAU. I create for my studies a communautary website on the area of the snowboard. Enjoy your discovery of Snowtricks 
[SnowTricks](http://51.15.234.228/projet5/public/index.php?action=home)

## Method
This project was maintened and versionned by GitHub
[GitHub : GATINEAU85 / Snowtricks](https://github.com/GATINEAU85/SnowTricks)

Differentes issues are made. They was been gradually resolved during the developpement and the creation of pull request. 

## Project

This project took place in continuity with my work-study training in web development at openclassrooms.

### Use case

To show us the differents use case that can be use by the actor of the project. 

#### Tricks use case

![Use case diagram on the tricks use package](http://51.15.234.228/projet6/public/files/uml/UseCaseTricks.png)

#### User use case

![Use case diagram on the user use package](http://51.15.234.228/projet6/public/files/uml/UseCaseUser.png)

#### Discuss use case

![Use case diagram on the discussion use package](http://51.15.234.228/projet6/public/files/uml/UseCaseDiscuss.png)

### Diagram Class

![Class diagram](http://51.15.234.228/projet5/public/files/uml/DiagramClass.png)

### Diagram Sequence

#### Tricks sequence

![Sequence diagram on the visit use package](http://51.15.234.228/projet5/public/files/uml/TricksSequence.png)

#### User sequence

![Sequence diagram on the administration use package](http://51.15.234.228/projet6/public/files/uml/UserSequence.png)

#### Discuss sequence

![Sequence diagram on the discussion use package](http://51.15.234.228/projet6/public/files/uml/DiscussSequence.png)

### Data Model

![Data Model](http://51.15.234.228/projet5/public/files/uml/DataModel.jpg)

## Install 

1. Run command : `git https://github.com/GATINEAU85/SnowTricks.git`
2. Run command : `cd projet6`
3. Run command in bash `composer install`

## More 

1. Config dev environment "App/.env". Thanks to this file, you can configure your database connection.
```php
    DATABASE_URL=pgsql://user:password@host:port/database
```
2. Import database.sql in your database (App/sql/database.sql) : `psql -d snowtricks -f sql/backup.sql`

It's important to import this model of database to have a well function site.

## Code Analyse

The last codacy analyse is [here](https://app.codacy.com/manual/GATINEAU85/SnowTricks/files?bid=18370775) . I receved a B appreciation.
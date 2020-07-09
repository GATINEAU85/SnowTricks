# Adrien GATINEAU

Hello, I'm Adrien GATINEAU. I create for my studies a communautary website on the area of the snowboard. Enjoy your discovery of Snowtricks 
[SnowTricks](http://51.15.234.228:8000/projet6/public/home)

## Method
This project was maintened and versionned by GitHub
[GitHub : GATINEAU85 / Snowtricks](https://github.com/GATINEAU85/SnowTricks)

Differentes issues are made. They was been gradually resolved during the developpement and the creation of pull request. 

## Project

This project took place in continuity with my work-study training in web development at openclassrooms.
UML diagram are present on the path : App\public\files\uml. It could be help you to understand this projet. 

## Install 

1. Run command : `git clone https://github.com/GATINEAU85/SnowTricks.git`
2. Run command : `cd snowtricks`
3. Run command in bash `composer install`
4. Set environnement variables of the project thanks to the file that I joined you.

## More 

1. Config dev environment "App/.env". Thanks to this file, you can configure your database connection.
```php
    DATABASE_URL=pgsql://user:password@host:port/database
```
2. Data choices
    1. Choose to import database.sql in your database (App/sql/database.sql) : `psql -d snowtricks -f sql/backup.sql`

It's important to import this model of database to have a well function site.

    2. Choose to import dataset thanks to the DataFixtures of the project. 

```php
    php bin/console doctrine:fixtures:load
```

## Code Analyse

The last codacy analyse is [here](https://app.codacy.com/manual/GATINEAU85/SnowTricks/files?bid=18370775) . I receved a B appreciation.
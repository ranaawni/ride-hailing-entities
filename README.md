# ride-hailing-entities

It contains a stored procedure to retrieve all rides for a particular user and creates tables, migrations, and entities for both users and rides. It is used as a npm package inside the [ride-hailing-app](https://github.com/ranaawni/ride-hailing-app).

## How to run

- Install npm packages

``` 
npm install

```

- You can use the environment file rather than creating a new database because I made it public and did not include it in the gitignore.
- If you want to create new migration
```
npm run migration:create src/database/migrations/{{migration-name}}

```

- If you want run this migration on the DB

```
npm run create-table

```

## Note 
It's a package. It's not an app, so you can't run it. 

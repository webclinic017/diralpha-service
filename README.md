# diralpha-service
an algorithmic trading app

# Running the app

npm run start


# Setting up the database

the diralpha backend uses sequelize to interact with a RDBMS like PostgreSQL, MySQL, or Oracle.


# Generating JWT Keys

node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
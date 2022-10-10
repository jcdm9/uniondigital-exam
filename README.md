# To Do Application

Back-end Developer Examination.

# system requirement
* NodeJS
* Docker
* Git
* Homebrew
* MongoDB

# installation
* Homebrew - run this command in your terminal:
    > /bin/ -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
* NodeJS - run this command in your terminal:
    > brew install node
* Git - run this command in your terminal:
    > brew install git
* MongoDB - run this command in your terminal:
    > brew install mongo
# setup

- go to root directory
- run command ``` git clone https://github.com/jcdm9/uniondigital-exam.git ```
- run command ``` docker-compose up -d ```

# directory structure
  - src
    - config - configurations in system
    - controllers - methods for routes
    - models - database schema
    - routes - api routes
  - test
    - api - api tests for each routes

# API Documentation

Once the application is running, you can navigate to http://localhost:3009/api-docs to view the Swagger UI documentation.

#testing

To test the API, use the command ``` npm run test```
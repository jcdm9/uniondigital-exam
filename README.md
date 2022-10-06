# docker-setup

Back-end environment of Forge Graphics Web Application.

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
- run command ``` git clone https://github.com/harisonForge/docker-setup.git ```
- cd docker-setup
- inside docker-setup folder, run command ``` git clone https://github.com/ForgePDX/back-internal.git ```
- inside docker-setup folder, run command ``` git clone https://github.com/harisonForge/emailer.git ```
- inside docker-setup folder, run command ``` git clone https://github.com/harisonForge/harvest-updater.git ```
- run command ``` docker-compose up -d ```

# directory structure
  - back-internal
    - files
    - src
      - config
      - controllers
      - models
      - routes
      - utils
  - emailer
    - files
    - src
      - config
      - controllers
      - models
      - routes
      - utils
  - harvest-updater
    - files
    - src
      - config
      - controllers
      - models
      - routes
      - utils

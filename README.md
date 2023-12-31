# FakeDrop (express CLI version)

> A "drop-in" cross-platofrm AirDrop alternative.

![Screenshot Page](./.github/screenshots/index.png)

## What does it do?

FakeDrop allows devices connected to the same network to send files to the host machine.

It works as an Apple AirDrop alternative for cross-platform usage.

Just scan the QR code with your mobile device and send the files from your browser!

## Usage

![Screenshot Terminal](./.github/screenshots/terminal.png)

### Run from Source

- clone the repository
- install the depencies
  > `$ yarn` or `$ npm install`
- build the project
  > `$ yarn build` or `$ npm run build`
- run
  > `$ yarn start:prod` or `$ npm run start:prod`
- optional:
  - install it globally
  - `$ npm install -g`
  - `$ fakedrop`

### Via npm/npx

- install it globally
  > `$ npm install fakedrop -g`
- use it from CLI
  > `$ fakedrop`

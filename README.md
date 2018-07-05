# Testing Workshop

Prerequisties 

1. Node installed on your machine.
2. Project clone on your machine.


There are two folder which independent of each other.

1. e2e
2. unit_integration

Goto each of the folder and do an npm install, optionally it might throw an error for mocha / cypress

Then install these two packages globally.

`npm install -g cypress`

`npm install -g mocha`


For running the e2e tests, run the below command

`npm run e2e:open` / `yarn e2e:open`

For reunning the unit_integration tests, run the below command.

`npm run test` / `yarn test`

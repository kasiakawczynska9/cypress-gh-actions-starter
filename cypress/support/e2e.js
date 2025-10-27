import "cypress-mochawesome-reporter/register";
const { register: registerCypressGrep } = require('@cypress/grep')
registerCypressGrep()
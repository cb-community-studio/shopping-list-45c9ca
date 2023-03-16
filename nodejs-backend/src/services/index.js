const users = require("./users/users.service.js");
const shoppinglist = require("./shoppinglist/shoppinglist.service.js");
const personalinfo = require("./personalinfo/personalinfo.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(shoppinglist);
  app.configure(personalinfo);
  // ~cb-add-configure-service-name~
};

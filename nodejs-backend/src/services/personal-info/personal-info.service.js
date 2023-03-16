const { Personal-info } = require('./personal-info.class');
const createModel = require('../../models/personal-info.model');
const hooks = require('./personal-info.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/personal-info', new Personal-info(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('personal-info');

  service.hooks(hooks);
};
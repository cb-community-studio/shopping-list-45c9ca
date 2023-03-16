const assert = require('assert');
const app = require('../../src/app');

describe('\'personal-info\' service', () => {
  it('registered the service', () => {
    const service = app.service('personal-info');

    assert.ok(service, 'Registered the service (personal-info)');
  });
});

import * as actions from '../../../src/actions/requests.js';

const request = {
  request: {},
  response: {},
  id: ''
};

describe('request actions', () => {
  it('should create actions to set the request filter', () => {
    const filter = 'foo';
    const expectedAction = {
      type: actions.SET_REQUEST_FILTER,
      filter
    };

    expect(actions.setRequestFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to clear the active request', () => {
    const expectedAction = {
      type: actions.SET_ACTIVE_REQUEST,
      request: null
    };
    expect(actions.setActiveRequest()).toEqual(expectedAction);
  });

  it('should create an action to set the active request', () => {
    const expectedAction = {
      type: actions.SET_ACTIVE_REQUEST,
      request
    };
    expect(actions.setActiveRequest(request)).toEqual(expectedAction);
  });

  it('should create an action to clear the active context', () => {
    const expectedAction = {
      type: actions.SET_CONTEXT_REQUEST,
      request: null
    };
    expect(actions.setContextRequest()).toEqual(expectedAction);
  });

  it('should create an action to set the active context', () => {
    const expectedAction = {
      type: actions.SET_CONTEXT_REQUEST,
      request
    };
    expect(actions.setContextRequest(request)).toEqual(expectedAction);
  });

  it('should create an action to sync url mappings', () => {
    const requestData = {};
    const expectedAction = {
      type: actions.SYNC_REQUESTS,
      requestData
    };
    expect(actions.syncRequests({requestData})).toEqual(expectedAction);
  });
});

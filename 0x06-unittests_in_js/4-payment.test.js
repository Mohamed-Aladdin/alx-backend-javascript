const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi by using calculateNumber method', () => {
    const spy = sinon.spy(console);
    const stub = sinon.stub(Utils);

    stub.calculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calculateNumber.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    stub.calculateNumber.restore();
    spy.log.restore();
  });
});

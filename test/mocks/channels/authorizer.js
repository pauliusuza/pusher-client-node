var sinon = require('sinon');

var Authorizer = function(){};
Authorizer.prototype.authorize = function(socketId, callback){
    this._authorizeCallback = sinon.spy(callback);
};

module.exports = Authorizer;
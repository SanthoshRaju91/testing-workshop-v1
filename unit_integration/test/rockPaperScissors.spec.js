var rockPaperScissors = require('../index').rockPaperScissors;
var expect = require('chai').expect;

describe.only('rockPaperScissors', function(){
  describe('smoke test', function(){
    it('should exist', function(){
      expect(rockPaperScissors).to.exist;
    })
    it('should be a function', function(){
      expect(rockPaperScissors).to.be.a('function');
    })
  })
})
var assert = chai.assert;

describe('Engine', function(){

  describe('Engine', function(){
    it('should have a hoopty.Engine function', function(){
      assert.equal(typeof hoopty.Engine, 'function');
    });
  });
});

describe('Entities', function(){

  describe('entities', function(){
    it('should have a hoopty.entities object', function(){
      assert.equal(typeof hoopty.entities, 'object');
    });
  });

  describe('Entity', function(){
    it('should have a hoopty.entities.Entity function', function(){
      assert.equal(typeof hoopty.entities.Entity, 'function');
    });
  });

  describe('Sprite', function(){
    it('should have a hoopty.entities.Sprite function', function(){
      assert.equal(typeof hoopty.entities.Sprite, 'function');
    });
  });
})

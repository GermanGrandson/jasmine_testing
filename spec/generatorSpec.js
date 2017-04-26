var generator = require('../app/generator');

describe('Hello World Generator', function(){

  it('returns an array', function(){
    var result = generator.generateHelloWorlds(0);
    expect(result.length).toBe(0);
    // expect(generator.generateHelloWorlds(0)).toBe([ ]);
  });

  it('returns the correct number of Hello Worlds', function(){
    var result = generator.generateHelloWorlds(3);
    expect(result.length).toBe(3);
  });

  it('returns only Hello Worlds', function(){
    var result = generator.generateHelloWorlds(3);

    result.forEach(function(element){
      expect(element).toBe('Hello World');
    });
  });

});

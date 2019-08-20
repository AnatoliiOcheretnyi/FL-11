function Pokemon(){
    this.isWings = false;
  }
  Pokemon.prototype.getType = function(){
    return this.type;
  }
  Pokemon.prototype.getSpecie = function(){
    return this.specie;
  }
  Pokemon.prototype.canFly = function(){
    return this.isWings;
  }
  Pokemon.prototype.getPokemonType = function(){
    return this.constructor.name;
  }
  
  function Charmander(){
    Pokemon.call(this);
    this.type = 'Fire';
    this.specie = 'Lizard Pokémon';
    this.evolve = () => new Charmeleon();
  }
  Charmander.prototype = Object.create(Pokemon.prototype);
  Charmander.prototype.constructor = Charmander;
  
  
  function Charmeleon (){
    Charmander.call(this);
    this.specie = 'Flame Pokémon';
    this.evolve = () => new Charizard();
  }
  Charmeleon.prototype = Object.create(Charmander.prototype);
  Charmeleon.prototype.constructor = Charmeleon;
  
  
  function Charizard (){
    Charmeleon.call(this);
    this.isWings = true;
    this.evolve = () => this;
  }
  Charizard.prototype = Object.create(Charmeleon.prototype);
  Charizard.prototype.constructor = Charizard;
    

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

  console.log(charmander.getType());
  console.log(charmander.getType() === charmeleon.getType());
  console.log(charmeleon.getType() === charizard.getType());

  console.log(charmander.evolve().constructor === Charmeleon);
  console.log(charmeleon.evolve().constructor === Charizard);

  console.log(charmander.getSpecie());
  console.log(charmeleon.getSpecie());
  console.log(charizard.getSpecie() === charmeleon.getSpecie());

  console.log(charmander.canFly());
  console.log(charmander.canFly() === charmeleon.canFly());
  console.log(charizard.canFly());

  function Pichu(){
    Pokemon.call(this);
    this.type = 'Electric';
    this.specie = 'Mouse Pokémon';
    this.evolve = () => new Pikachu();
  }
  Pichu.prototype = Object.create(Pokemon.prototype);
  Pichu.prototype.constructor = Pichu;
  
  function Pikachu (){
    Pichu.call(this);
    this.evolve = () => new Raichu();
  }
  Pikachu.prototype = Object.create(Pichu.prototype);
  Pikachu.prototype.constructor = Pikachu;
  
  function Raichu() {
    Pikachu.call(this);
    this.evolve = () => this;
  }
  Raichu.prototype = Object.create(Pikachu.prototype);
  Raichu.prototype.constructor = Raichu;

  const pichu = new Pichu();
  console.log(pichu.getPokemonType());

  const pikachu = pichu.evolve();
  console.log(pikachu.getPokemonType());
  console.log(pikachu.constructor === Pikachu); 

  const raichu = pikachu.evolve();
  console.log(raichu.getPokemonType());
  console.log(raichu.constructor === Raichu); 

  const raichu2 = raichu.evolve();
  console.log(raichu2 === raichu);

  function Junior(){
    Pokemon.call(this);
    this.type = 'Front-end';
    this.specie = 'JavaScript';
    this.evolve = () => new Middle();
  }
  Junior.prototype = Object.create(Pokemon.prototype);
  Junior.prototype.constructor = Junior;
  
  function Middle (){
    Junior.call(this);
    this.specie = 'React.js/Node.js';
    this.evolve = () => new Senior();
  }
  Middle.prototype = Object.create(Junior.prototype);
  Middle.prototype.constructor = Middle;
  
  function Senior() {
    Middle.call(this);
    this.type = 'Fullstack';
    this.specie = 'Google master';
    this.isWings = true;
    this.evolve = () => this;
  }
  Senior.prototype = Object.create(Middle.prototype);
  Senior.prototype.constructor = Senior;

  const junior = new Junior();
  console.log(junior.getPokemonType());

  const middle = junior.evolve();
  console.log(middle.getPokemonType());
  console.log(middle.constructor === Middle);

  const senior = middle.evolve();
  console.log(senior.getPokemonType());
  console.log(senior.constructor === Senior);

  const senior2 = senior.evolve();
  console.log(senior2 === senior)

  console.log(middle.getType());
  console.log(senior.getType());

  console.log(junior.getSpecie());
  console.log(middle.getSpecie());
  console.log(senior.getSpecie());
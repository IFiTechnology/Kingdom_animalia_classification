class Animal { //Base class

  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    if (this.constructor == Animal) { // Applying Abstraction here 
      throw new Error("Animal class cannot be instantiated!!");
    }

    this.With_back_bone = withBackBone;
    this.Without_baack_bone = withoutBackBone;
    this.Warm_blooded = warmBlooded;
    this.Cold_blooded = coldBlooded;
  }

  #getAnimalKingdom() { // Encapsulation
    console.log("This Animal can be classified from the conditions below")
  }

  getKingdom() {
    this.#getAnimalKingdom()
  }
}





  
class Mammal extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded);
  }
}

const mammal = new Mammal(true, false, true, false);
mammal.getKingdom()
console.log(mammal);

class Aves extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded);
  }
}
const aves = new Aves(true, false, true, false);
aves.getKingdom()
console.log(aves);

class Amphibia extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded);
  }
}

const amphibia = new Amphibia(true, false, true, false);
amphibia.getKingdom()
console.log(amphibia);

class Fish extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded);
  }
}

const fish = new Fish(true, false, true, false);
fish.getKingdom()
console.log(fish);

class Reptile extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded);
  }
}

const reptile = new Reptile(true, false, false, true);
reptile.getKingdom()
console.log(reptile);

class Arthropoda extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded);
  }
}

const arthropoda = new Arthropoda(true, false, true, false);
arthropoda.getKingdom()
console.log(arthropoda);

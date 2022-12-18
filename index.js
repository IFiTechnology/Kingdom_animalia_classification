class Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {

    this.withBackbone = withBackBone;
    this.withoutBackBone = withoutBackBone;
    this.warmBlooded = warmBlooded
    this.coldBlooded = coldBlooded

  }
}




class Mammal extends Animal {
  constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded)
  }
}

const mammal = new Mammal(true, false, true, false)

console.log(mammal) 

class Aves extends Animal {
    constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded)
  }
}
const aves = new Aves(true, false, true, false)
console.log(aves)

class Amphibia extends Animal {
    constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded)
  }
}

const amphibia = new Amphibia(true, false, true, false)
console.log(amphibia)


class Fish extends Animal {
    constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded)
  }
}

const fish = new Fish(true, false, true, false)
console.log(fish)


class Reptile extends Animal {
    constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded)
  }
}

const reptile = new Reptile(true, false, false, true)
console.log(reptile)


class Arthropoda extends Animal {
    constructor(withBackBone, withoutBackBone, warmBlooded, coldBlooded) {
    super(withBackBone, withoutBackBone, warmBlooded, coldBlooded)
  }
}

const arthropoda = new Arthropoda(true, false, true, false)
console.log(arthropoda)



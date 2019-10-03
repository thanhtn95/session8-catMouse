let Rat, Cat;
let rat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.alive = true;

    this.getName = function () {
        return this.name;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.getSpeed = function () {
        return this.speed;
    }

    this.getAlive = function () {
        return this.alive;
    }
    this.makeNoise = function () {
        console.log("rattle ratlle");
    }
}

let cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.getName = function () {
        return this.name;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.getSpeed = function () {
        return this.speed;
    }

    this.makeNoise = function () {
        console.log("Meow Meow");
    }

    this.catchRat = function (rat) {
        this.rat = rat;
        if (this.rat.speed < this.speed) {
            this.rat.alive = randBoolean();
            console.log("Catched the rat");
        } else {
            alert("Miss ! The Rat is too fast!");
        }
    }

    this.eatRat = function (rat) {
        this.rat = rat;
        if (this.rat.getAlive()) {
            this.weight += this.rat.getWeight();
            this.rat.alive = false;
            console.log("Eated the rat");
        } else {
            alert("Can't eat the rat is dead! ")
        }
    }
}

function randBoolean() {
    if (Math.random() < 0.5) {
        return false;
    } else return true;
}

function rand() {
    return (Math.random() * 100);
}

function createCat() {
    Cat = new cat("Tom", rand(), rand());
    console.log(Cat);
}

function createRat() {
    Rat = new rat("Jerry", rand(), rand());
    console.log(Rat);
}

function catchRat() {
    Cat.catchRat(Rat);
    console.log(Rat);
}

function eatRat() {
    Cat.eatRat(Rat);
    console.log(Cat);
    console.log(Rat);
}


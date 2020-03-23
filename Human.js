let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.saySomething = function (text) {
        console.log(text);
    };
    this.eatApple = function (apple) {
        if (apple.weight > 0){
            apple.weight--;
            this.weight++;
            console.log(this.name + " vừa đớp 1 miếng !")
        }
    };
    this.calculateApple = function (apple) {
        return apple.weight;
    };
    this.getName = function () {
        return this.name;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.getWeight = function () {
        return this.weight;
    };
};
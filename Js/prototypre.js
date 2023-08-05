const PersonProto = {
  calcAge() {
    console.log(2053 - this.birthYear);
  }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.birthYear = 2022;
steven.calcAge();

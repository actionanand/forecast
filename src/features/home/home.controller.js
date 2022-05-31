export default class HomeController {
  constructor(randomNames) {
    this.randomNameServ = randomNames;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.randomNameServ.getName();
  }
}

HomeController.$inject = ['randomNames'];
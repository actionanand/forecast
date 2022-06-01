export default class HomeController {
  constructor(randomNames, $resource) {
    this.randomNameServ = randomNames;
    this.name = 'World';
    console.log($resource);
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.randomNameServ.getName();
  }
}

HomeController.$inject = ['randomNames', '$resource'];
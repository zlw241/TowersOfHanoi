class View {
  constructor(game, $el) {
    this.game = game;
    this.setupTowers();
    this.startTowerIdx = -1;
    this.render();
  }

  setupTowers() {

  }

  render() {
    $('ul').on('click', (e) => {
      if (this.startTowerIdx === -1) {
        console.log(e.currentTarget);
      }
    });

  }
}

module.exports = View;

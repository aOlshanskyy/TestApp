class MainWindow extends PIXI.Container {
    constructor(stage) {
        super(stage);
        this.stage = stage;
        this.lenght = 3;
        this.dudus = [];
        this.duduPositions = [
            410, 325,
            685, 445,
            900, 170
        ];
    }
    createDudus() {
        for (let i = 0; i < this.lenght; i++) {
            let dudu = new Dudu(this.stage, PIXI.Texture.from('images/flowerTop.png'), this.duduPositions[i * 2], this.duduPositions[i * 2 + 1]);
            dudu.hero
                .on('rightup', () => dudu.onRightUp(i))
                .on('click', () => dudu.onClick(i));
            dudu.createDudu();
            this.dudus.push(dudu);

        }
    }
}
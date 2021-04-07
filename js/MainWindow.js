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
        this.duduDeath = [];

        this.bubu = this.addChild(new Bubu());
        this.bubu.position.set(500, 500);

        this.createDudus();
        this.messageScreen = new FinalyText('You won!\n enter your name\n');
    }

    handleDeath = () => {
        console.log("Plus deid one");
        if (this.duduDeath.length === 3) {
            this.stage.addChild(this.messageScreen.text);
            console.log('You won !!!');
            document.addEventListener('keydown', this.handleWinName, false);
        }
    }

    handleWinName = (event) => {
        if (event.keyCode >= 64 && event.keyCode <= 90 || event.keyCode >= 219 && event.keyCode <= 221 || event.keyCode === 188 || event.keyCode === 190 || event.keyCode === 32) {
            this.stage.removeChild(this.messageScreen.text);
            this.messageScreen.update(event.key);
            this.stage.addChild(this.messageScreen.text);
        }
    }

    createDudus() {
        for (let i = 0; i < this.lenght; i++) {
            var dudu = new Dudu(this.eventEmitter);
            dudu.indexOfArray = i;
            this.dudus.push(dudu);
            dudu.position.set(this.duduPositions[i * 2], this.duduPositions[i * 2 + 1]);
            dudu.on("death", this.handleDeath, this)
            this.addChild(dudu);
        }
    }
}

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

        this.eventEmitter = new PIXI.utils.EventEmitter();
        this.eventEmitter.on('death', this.finish);
    }

    finish = () =>{
        if(this.duduDeath.length === 3) console.log("You Win !!!");
    }

    createDudus() {
        for (let i = 0; i < this.lenght; i++) {
            var dudu = new Dudu(this.eventEmitter);
            dudu.indexOfArray = i;
            this.dudus.push(dudu);
            dudu.position.set(this.duduPositions[i * 2], this.duduPositions[i * 2 + 1]);
            this.addChild(dudu);
        }
    }
}
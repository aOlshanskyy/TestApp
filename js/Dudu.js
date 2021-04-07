class Dudu extends PIXI.Sprite {
    constructor(eventEmitter) {
        super();
        this.body = this.addChild(new PIXI.Sprite.from('images/flowerTop.png'));
        this.eventEmitter = eventEmitter;
        this.alive = true;
        this.indexOfArray = null;
        this.body.interactive = true;
        this.body.buttonMode = true;
        this.healthBlock = this.addChild(new Health(PIXI.Texture.from('images/heart.png'), this.body.x - 130, this.body.y - 130));
        this.body.anchor.set(0.5);
        this.body.on("click", this.onClick);
        this.body.on("rightup", this.onRightUp);
    }

    death = () => {
        // обозначает дуду не живой
        this.alive = false;
        let eggHead = PIXI.Texture.from('images/eggHead.png');
        this.body.texture = eggHead;

        // Для того чтобы програма работала, я создал массив duduDeath в котором сохраняются 
        // дуды которые уже не живые, и если длина этого массива 
        // равна длине массива всех дуд ) вывожу You Win !!!
        this.parent.duduDeath.push(this.parent.dudus[this.indexOfArray]);
        this.parent.emit('death', this.parent.finish());
    }

    onClick = () => {
        if (this.alive) {
            if (this.healthBlock.getVal === 12) this.death();
            this.healthBlock.minusHealth();
            animate(this.indexOfArray, PIXI.tween.Easing.linear());
        }
    }
    onRightUp = () => {
        if (this.alive) {
            this.healthBlock.plusHealth();
            animate(this.indexOfArray, PIXI.tween.Easing.linear());
        }
    }
}
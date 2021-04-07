class Bubu extends PIXI.Sprite {
    constructor() {
        super();
        this.body = this.addChild(new PIXI.Sprite.from('images/flowerTop.png'));
        this.interactive = true;

        this.on("pointerdown", this.onPointerDown, this);
    }

    onPointerDown(e) {
        const g = this.addChild(new PIXI.Graphics()).beginFill(0xff0000).drawCircle(0, 0, 10).endFill();
        g.position.copyFrom(e.data.getLocalPosition(this));
        console.log("this graphic is the child of bubu");
    }
}
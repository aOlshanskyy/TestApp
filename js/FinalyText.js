class FinalyText{
    constructor(newText){
        this.style = new PIXI.TextStyle({
            fill: [
                "#e00b0b",
                "#af0d0d"
            ],
            fontFamily: "Georgia, serif",
            fontSize: 47,
            align: 'center',
            fontWeight: "bold"
        });
        this.leter = newText;
        this.text = '';
        this.draw();
    }
    update(char = ''){
        this.leter += char;
        this.draw();
    }
    draw(){
        this.text = new PIXI.Text(this.leter, this.style);
        this.text.anchor.set(0.5);
        this.text.position.set(app.screen.width / 2, app.screen.height / 2 - 50);
    }
}
class Rectangle{
    constructor(width, height, left, top, xSpeed, ySpeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;
        this.render();
    }
    
    render() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.top = this.top + 'px';
        this.dom.style.left = this.left + 'px';
    }

    move(duration) {
        const xDis = this.xSpeed * duration;
        const yDis = this.ySpeed * duration;
        const newLeft = this.left + xDis;
        const newTop = this.top + yDis;
        
        this.left = newLeft;
        this.top = newTop;

        if(this.onMove) {
            this.onMove();
        }
        this.render();
    }
}
const birdDom = document.querySelector('.bird');
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const gameDom = document.querySelector('.game')
const gameDomHeight = gameDom.clientHeight;


class Bird extends Rectangle {
    constructor() {
        super(birdWidth, birdHeight, birdTop, birdLeft, 0, 0, birdDom);
        this.g = 1500;
        this.maxTop = gameDomHeight - landHeight - this.height;
        this.swingStatus = 1;
        this.timer = null;
        this.render();
    }

    render() {
        super.render();
        this.dom.className = `bird swing${this.swingStatus}`;
    }

    startSwing() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.swingStatus++;
            if (this.swingStatus === 4) {
                this.swingStatus = 1;
            }
            this.render;
        }, 300)
    }

    stopSwing() {
        clearInterval(this.timer);
        this.timer = null;
    }

    move(duration) {
        super.move(duration);
        this.ySpeed += this.g * duration;
    }

    onMove() {
        if (this.top < 0) {
            this.top = 0
        } else if (this.top > this.maxTop) {
            this.top = this.maxTop;
        }
    }

    jump() {
        this.ySpeed = -450;
    }
}


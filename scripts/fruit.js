var Fruit = /** @class */ (function () {
    function Fruit() {
        var _this = this;
        this.draw = function () {
            ctx.fillStyle = '#DB6363';
            ctx.fillRect(_this.x, _this.y, scale, scale);
        };
        this.move = function () {
            _this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            _this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
        };
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
    }
    return Fruit;
}());
//# sourceMappingURL=fruit.js.map
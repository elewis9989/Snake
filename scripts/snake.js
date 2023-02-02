var Snake = /** @class */ (function () {
    function Snake(initialSize) {
        var _this = this;
        this.draw = function () {
            // Snake Color
            ctx.fillStyle = '#FFFFFF';
            for (var i = 0; i < _this.trail.length; i++) {
                ctx.fillRect(_this.trail[i].x, _this.trail[i].y, scale - 1, scale - 1);
                if (_this.trail[i].x == _this.xHead && _this.trail[i].y === _this.yHead) {
                    _this.reset();
                }
            }
        };
        this.update = function () {
            _this.trail.push({ x: _this.xHead, y: _this.yHead });
            while (_this.trail.length > _this.bodyCount) {
                _this.trail.shift();
            }
            _this.xHead += _this.xSpeed;
            _this.yHead += _this.ySpeed;
            // If snake goes past edges, loop around
            if (_this.xHead > gc.width)
                _this.xHead = 0;
            if (_this.xHead < 0)
                _this.xHead = gc.width;
            if (_this.yHead > gc.height)
                _this.yHead = 0;
            if (_this.yHead < 0)
                _this.yHead = gc.height;
        };
        this.changeDireciton = function (dir) {
            switch (dir) {
                case 'Up':
                    // Not going down
                    if (_this.xSpeed !== 0 && _this.ySpeed !== scale) {
                        _this.xSpeed = 0;
                        _this.ySpeed = -scale;
                    }
                    break;
                case 'Down':
                    // Not going up
                    if (_this.xSpeed !== 0 && _this.ySpeed !== -scale) {
                        _this.xSpeed = 0;
                        _this.ySpeed = scale;
                    }
                    break;
                case 'Right':
                    // Not going left
                    if (_this.xSpeed !== -scale && _this.ySpeed !== 0) {
                        _this.xSpeed = scale;
                        _this.ySpeed = 0;
                    }
                    break;
                case 'Left':
                    // Not going right
                    if (_this.xSpeed !== scale && _this.ySpeed !== 0) {
                        _this.xSpeed = -scale;
                        _this.ySpeed = 0;
                    }
                    break;
                default:
                    break;
            }
        };
        this.grow = function () {
            _this.bodyCount++;
        };
        this.reset = function () {
            _this.bodyCount = 2;
        };
        this.xHead = 0;
        this.yHead = 0;
        this.xSpeed = scale;
        this.ySpeed = 0;
        this.bodyCount = initialSize;
        this.trail = [{ x: this.xHead, y: this.yHead }];
    }
    return Snake;
}());
//# sourceMappingURL=snake.js.map
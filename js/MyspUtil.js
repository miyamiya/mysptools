var MyspUtil = function () {
    return new MyspUtil.prototype.init();
}

MyspUtil.prototype = {
    // Constructor
    init: function () {
        this.now = new Date();
    }
    ,
    file: function () {
        return _myspUtil_file.prototype;
    }
}
MyspUtil.prototype.init.prototype = MyspUtil.prototype;


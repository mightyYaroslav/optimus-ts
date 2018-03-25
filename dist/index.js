var Long = require('long');
var Optimus = (function () {
    function Optimus(prime, inverse, random) {
        this.MAX_INT32 = 2147483647;
        this.MULTIPLIER = 4294967296;
        this.encode = function (num) {
            var n = Long.fromInt(num);
            return n.multiply(this.prime).and(Long.fromInt(this.MAX_INT32)).xor(this.random).toInt();
        };
        this.decode = function (num) {
            var n = Long.fromInt(num);
            return n.xor(this.random).multiply(this.inverse).and(Long.fromInt(this.MAX_INT32)).toInt();
        };
        this.prime = Long.fromInt(prime);
        this.inverse = Long.fromInt(inverse);
        this.random = Long.fromInt(random);
    }
    return Optimus;
})();
exports.default = Optimus;
//# sourceMappingURL=index.js.map
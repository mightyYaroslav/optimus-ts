export default class Optimus {
    private MAX_INT32;
    private MULTIPLIER;
    private prime;
    private inverse;
    private random;
    constructor(prime: number, inverse: number, random: number);
    encode: (num: number) => number;
    decode: (num: number) => number;
}

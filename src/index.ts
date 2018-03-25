import * as Long from 'long'

export default class Optimus {

  private MAX_INT32 = 2147483647
  private MULTIPLIER = 4294967296 // 2^32;

  private prime: Long
  private inverse: Long
  private random: Long

  constructor(prime: number, inverse: number, random: number) {
    this.prime = Long.fromInt(prime)
    this.inverse = Long.fromInt(inverse)
    this.random = Long.fromInt(random)
  }

  public encode = function (num: number): number {
    let n: Long = Long.fromInt(num)
    return n.multiply(this.prime).and(Long.fromInt(this.MAX_INT32)).xor(this.random).toInt()
  }

  public decode = function (num: number): number {
    let n: Long = Long.fromInt(num)
    return n.xor(this.random).multiply(this.inverse).and(Long.fromInt(this.MAX_INT32)).toInt()
  }

}
export class Left<L, R> {
  constructor(private readonly value: L) { }
  isLeft(): this is Left<L, R> {
    return true
  }
  isRight(): this is Right<L, R> {
    return false
  }
}
export class Right<L, R> {
  constructor(private readonly value: R) { }
  isLeft(): this is Left<L, R> {
    return false
  }
  isRight(): this is Right<L, R> {
    return true
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>

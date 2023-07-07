function log<T>(value: T): T {
  console.log(value);
  return value;
}

log<String[]>(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);
log(["a", "b", "c", "d", "e", "f"]);

type LogType = <T>(value: T) => T;

let mylog: LogType = log;

interface LogInterface<T> {
  (value: T): T;
}

let myLog1: LogInterface<Number> = log;

interface Length {
  length: number;
}

function log1<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

log1([1, 2, 2]);
log1("123");
log1({ length: 1 });

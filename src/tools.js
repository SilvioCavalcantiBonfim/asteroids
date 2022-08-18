export function CompleteString(number, size) {
    return [...Array(size - number.toString().length).keys()].map((e) => {return "0"}).join("")+number.toString();
}
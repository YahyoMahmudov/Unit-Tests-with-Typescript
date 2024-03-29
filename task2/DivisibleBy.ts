export function divisibleBy(n):boolean {
    if (typeof n !== 'number') {
        throw new Error("Not a number!");
    }

    if (n % 3 == 0 && n % 5 == 0) {
        return true;
    }

    return false;
}
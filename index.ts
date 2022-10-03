const avg = (numbers: number[]) => {
    if (numbers.length) {
        const sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    }

    return 0;
}

console.log(avg([1, 2, 3, 4]));
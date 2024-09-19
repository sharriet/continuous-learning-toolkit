function range(start, stop, step) {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
        );
}

module.exports = { range };
    
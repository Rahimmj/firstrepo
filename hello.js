function add(a, b) {
    return a + b;
}

console.log("Hello from GitHub Actions!");

if (add(2, 3) !== 5) {
    console.error("Test failed");
    process.exit(1);
}

console.log("Test passed!");
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love type script"; }
    console.log("making a ".concat(size, " t-shirt with the message\"").concat(message, "\" prtint on it ."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "dive into coding");

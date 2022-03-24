

if (-1 || 0) alert("first"); // works OR gate only needs one true

if (-1 && 0) alert("second"); // doesn't work because of false value in AND gate

if (null || (-1 && 1)) alert("third"); // works OR gate needs only one true
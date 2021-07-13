function rotLeft(a, d) {
    // Write your code here
    // a is the array and d is the number of left rotations

    let toRotate = a.slice(0, d);
    let remain = a.slice(d,);
    let rotated = remain.concat(toRotate);

    return rotated;

}

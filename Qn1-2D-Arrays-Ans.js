function hourglassSum(arr) {
    // Write your code here
    
    let glassSum = 0;
    //Numbers in array can be -ve so should not initiate largestGlass to 0
    let firstGlass = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2]
    let largestGlass = firstGlass;

    //traverse the 2D-array
    for (let r = 0; r< 4; r++){
        for (let c = 0; c < 4; c++){
            let x = r
            let y = c
            //calculate hourglass value
            glassSum += arr[x][y] + arr[x][y+1] + arr[x][y+2] + arr[x+1][y+1] + arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2]
            console.log(glassSum)
            if (glassSum > largestGlass){
                largestGlass = glassSum;
            }
            glassSum = 0;
        }
    }
    return largestGlass;

}

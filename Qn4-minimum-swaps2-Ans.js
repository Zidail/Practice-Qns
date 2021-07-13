function minimumSwaps(arr) {
    let position = 1;
    let swapNo = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]!= position){
            //search for index of correct number
            let k = 0;
            while (arr[k] != position){
                k += 1;
            }
            //swap the positions
            [arr[i],arr[k]] = [arr[k], arr[i]];
            swapNo += 1;
            position += 1;
        }
        if (arr[i] == position){
            position += 1;
        }
    }
    return swapNo;

}

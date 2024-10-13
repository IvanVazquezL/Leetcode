function binarySearch(array) {
    let left = Math.min(...array);   
    let right = Math.max(...array);  

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (condition(mid)) {
            right = mid; 
        } else {
            left = mid + 1;  
        }
    }
    return left;  

    function condition(value) {
        return;
    }
}
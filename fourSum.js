const fourSum = (arr, target) => {
    let result = [];
    if (arr == undefined || arr.length < 4) {
        return result;
    }
    arr.sort((a, b) => a - b);
    let n = arr.length;
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < n - 2; j++) {
            if (i != i + 1 && arr[j] == arr[j - 1]) {
                continue;
            }
            let k = j + 1;
            let l = n - 1;
            while (k < l) {
                let current = arr[i] + arr[j] + arr[k] + arr[l];
                if (current < target) {
                    k++;
                }
                else if (current > target) {
                    l--;
                }
                else {
                    result.push(arr[i], arr[j], arr[k], arr[l]);
                    k++;
                    l--;
                    while (k < l && arr[k] == arr[k - 1]) {
                        k++;
                    }
                    while (k < l && arr[l] == arr[l - 1]) {
                        l--;
                    }
                }
            }
        }
    }
    return result;
}

console.log(fourSum([3, 1, 5, 7, 4, 2, 9], 12))
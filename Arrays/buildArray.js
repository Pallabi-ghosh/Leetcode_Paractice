// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

var arr = [0, 2, 1, 5, 3, 4];

//console.log([arr[0], arr[2], arr[1], arr[5], arr[3], arr[4]]);


function buildArray(nums) {
    ans = [0];
    for (i = 0; i < nums.length ; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
}
console.log(buildArray(arr));
//output- [0,1,2,4,5,3]

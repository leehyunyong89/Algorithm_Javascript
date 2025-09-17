

/**
 * problem : 
 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

 * 
 */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */




var findMedianSortedArrays = function(nums1, nums2) {
    
    // if both array's Length are zero, then return zero.
    if (nums1.length === 0 && nums1.length === 1) return 0;
    
    let medianVal;
    

    // 01 : merged array and sort
    const merged_array = nums1.concat(nums2).sort((a,b) => a - b);

    // 02 : get the length of the array
    const merged_array_length = merged_array.length;

    // 03 : get the quotient of the array
    const quotient = Math.floor(merged_array_length / 2);

    // 04-01 : if the length equals to odd number, then return value is merged array [The quotient of merged array length and two]
    if (merged_array_length % 2 !== 0) { 
        
        medianVal = merged_array [quotient];

    } else { // 04-02 : else then return value is [(merged array [The quotient of merged array and two  - 1] + merged array [The quotient of merged array and two]) / 2]
        medianVal = (merged_array [quotient - 1] + merged_array [quotient]) / 2;
    }

    return medianVal;


};


let nums1 = [1,3];
let nums2 = [3,4];
console.log(findMedianSortedArrays(nums1, nums2));




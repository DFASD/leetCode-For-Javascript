// 二叉树的二分法解题思路

// 循环体内不断计算mid，将目标值与nums[mid]的值对比
// 如果目标值小于nums[mid]的值，则检索区间为[left, mid-1]
// 如果目标值大于nums[mid]的值，则检索区间为[mid+1, right]
// 否则目标值等于nums[mid]的值，则直接输出结果mid

// 循环结束都没有找到，则说明找不到，返回 -1 表示未找到
var binarySearch = function(nums, target) {
    var left = 0,
        right = nums.length - 1;
    while (left <= right) {
        var mid = Math.round((left + right) / 2);
        if (target < nums[mid]) {
            right = mid - 1
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            return mid;
        }
    }
    return -1;
}
// 通过Map对象构建索引 [3, 2, 4] 6
/*
{
    3: 0,
    2: 1,
    4: 2
}
*/
// 1、计算当前数字与target之间的差
// 2、遍历数组检查哈希表中是否存在该差
// 3、若存在则直接返回其索引，若不存在，则将当前值和当前索引存入哈希表中

const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let cur = target - nums[i];
        if (map.has(cur)) {
            return [map.get(cur), i];
        } else {
            map.set(nums[i], i);
        }
    }
}
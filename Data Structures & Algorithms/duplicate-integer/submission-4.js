//parameter is array: nums no funny buz
//return true if value repeated or false if not seen again
//example [1,1,2,3] //true [1,2,3]//false
//loop through array and add a nested loop to check if value was repeated




class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(nums[i]===nums[j]){
                    return true; 
                }
            }
           
        }
       return false; 
    }
}


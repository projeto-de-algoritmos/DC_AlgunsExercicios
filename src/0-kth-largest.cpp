// https://leetcode.com/problems/kth-largest-element-in-an-array/

#include <iostream>
#include <vector>

using std::vector;

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        return 0;
    }

    int select(vector<int>& list, int left, int right, int n) {
        while (true) {
            if (left == right)
                return left;

            int pivot_index = pivot(list, left, right);
            pivot_index     = partition(list, left, right, pivot_index, n);

            if (pivot_index == n)
                return n;
            else if (n < pivot_index)
                right = pivot_index - 1;
            else
                right = pivot_index + 1;
        }
        return 0;
    }

    int pivot(vector<int>& list, int left, int right) {
        if (right - left < 5)
            return partition5(list, left, right);

        for (int i = left; i < right; i += 5) {
            int sub_right = i + 4;
            if (sub_right > right)
                sub_right = right;
            int median5 = partition5(list, i, sub_right);
            swap(list, median5, left + (i - left) / 5);
        }

        int mid = (right - left) / 10 + left + 1;

        return select(list, left, left + (right - left) / 5, mid);
    }

    int partition(vector<int>& list, int left, int right, int pivot_index, int n) {
        return 0;
    }

    int partition5(vector<int>& list, int left, int right) {
        return 0;
    }

    void swap(vector<int>& list, int i, int j) {
        int tmp = list[i];
        list[i] = list[j];
        list[i] = tmp;
    }
};
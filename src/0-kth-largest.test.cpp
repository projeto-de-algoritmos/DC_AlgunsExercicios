#include "../lib/doctest.h"
#include "../src/0-kth-largest.cpp"

TEST_SUITE("0-kth-larget") {
    TEST_CASE("caso 1") {
        Solution s;

        vector<int> list = {1, 2, 3, 4};
        CHECK(s.findKthLargest(list, 3) == 0);
    }
}

[剑指 Offer 10- I. 斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

这题要注意两个点：

1. 直接用递归会因为调用栈过高导致超时，我第一次提交的就是直接用递归，当测试用例输入n=44的时候就超时了。应该改用动态规划，这样不会叠加函数栈帧。
2. 题目里说了，计算结果需要取`1e9+7`的模，加上就好了。

[剑指 Offer 10- II. 青蛙跳台阶问题](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

青蛙跳台阶其实和斐波那契数列是一样的，只不过初始值不一样

- 斐波那契：`f(0) = 0, f(1) = 1, f(2) = 1`
- 青蛙跳台阶：`f(0) = 1, f(1) = 1, f(2) = 2`
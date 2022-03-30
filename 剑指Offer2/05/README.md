[剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)

这题比较简单

思路1：split + join

思路2：正则

思路3：在while循环里用indexOf找到空格所处的索引，然后把原字符串里的空格替换掉，所有空格替换完了while就结束了

看了题解里有双指针法可以不借助额外空间，不过那是因为C/C++里字符串是可以直接通过修改索引处的字符来修改字符串的。而js里字符串是不可变的，所以就不能用这个方法了。
/*
* &&与运算：
*   两边同时为true，运算式运算结果才为真，有一个false，运算式结果就是false
*   左边表达式如果为false的话，就不用看表达式2
* ||或运算：
*   两边只要有一个true，运算式结果就为真，两边都为false，运算式结果才为false
*   左边表达式如果为ture的话，就不用看表达式2
*
*   逻辑与和逻辑或都有一个只要左边为一种情况的话，就不用去看表达式2的性质，这种性质就叫做短路性
*   可以用这个性质做一些特殊情况的处理。
* */
cookie和session最大的区别就是，cookie是存放在浏览器端内存中，而session是存放在服务器端内存中。
我们可以通过发起ajax请求，然后让服务器返回session，然后在req对象上改变属性返回给客户端，从而判断用户的登陆状态。
```angular2
req.session.loginStatus = true;
```



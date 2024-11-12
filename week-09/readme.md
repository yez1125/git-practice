# 第一個問題

**問題:**  
![圖一](./assets/1.png "問題一")
發現是 /etc/nginx/nginx.conf 裡多一個";"，所以切進去看。
**解決辦法:**
![圖二](./assets/2.png "解決辦法一")
刪掉就將問題一解決

# 第二個問題

**問題:**  
![圖三](./assets/3.png "問題二")
發現 80 port 已被別人占用
**解決辦法:**
![圖四](./assets/4.png "解決辦法二")

```
sudo lsof -i:80 #查詢是哪個東西占住80 port
sudo kill -9 PID #利用上述查詢到的 PID 去 kill 該程序
```

# 問題三

**問題:**  
![圖五](./assets/5.png "問題三")
nginx 已順利重啟但頁面出現 403
**解決辦法:**
![圖六](./assets/6.png "解決辦法三")
403 代表著使用者沒有權限去存取，所以要回到 /etc/nginx/nginx.conf ，去更改 user 的權限。

# 最終結果

![圖七](./assets/7.png "完成")

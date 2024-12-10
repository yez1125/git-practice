# public IP

54.199.159.191

# instance type

所使用的伺服器規格，裡面的代號代表著所使用的 CPU 、記憶體、儲存空間等。  
以所使用的 t2.micro 為例: t2 代表著是系列和世代， micro 則代表著規格大小。  
參考資料:

- https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html
- https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html

# Nginx

Nginx 是一個提供 web 相關服務的伺服器，它可以用來當作反向代理、內容快取、負載平衡器、TCP/UDP 代理伺服器和郵件代理伺服器。

- 反向代理: 用戶不需要知道應用伺服器的位置，應用伺服器也不需要知道用戶的位置。
- 負載平衡器:可以將用戶的請求自動分配到不同位置。
- 內容快取:會去查詢客戶請求的資料有沒有在快取裡有的話會直接回傳，反之則向伺服器拿取。

參考資料:

- https://www.explainthis.io/zh-hant/swe/why-nginx

# pm2

PM2 是管理 node.js 程式的套件，可以自動管理伺服器上的服務，並監測其狀況。

參考資料:

- https://medium.com/jason-tech-lab/node-js%E7%B3%BB%E5%88%97-%E4%BD%BF%E7%94%A8-pm2-%E4%BE%86%E7%AE%A1%E7%90%86node-js-%E6%9C%8D%E5%8B%99-3f514cf8eed9

# proxy

像是一個中繼站，使用者在要資料時，這個中繼站會先看看自己有沒有資料，如果有就回傳，沒有則再去向伺服器要。

參考資料:

- https://www.ithome.com.tw/news/5006

# Security Group

類似防火牆，控制著誰可以利用哪個管道和埠來連線。在設定上盡量減少這些限制的數量，避免發生錯誤。
參考資料:

- https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html

# sudo

sudo 是 Super User DO 的縮寫，簡單來說就是以電腦管理員的身分執行下面的動作。要不要加上 sudo 取決於下面的指令是不是只能由電腦管理員執行。  
參考資料:

- https://yhtechnote.com/linux-sudo/

# Linux 檔案目錄結構

- $PATH: 告訴系統要去哪個路徑找執行檔
- which: 查詢這個指令是在哪個路徑
- etc(editable text config): 裡面放著你可以更改的 config 檔
- boot: 裡面放著執行作業系統所需的程式
- var: 裡面放著在執行系統時會被更改的檔案

# Nginx 設定檔

在 sites-available 裡修改檔案

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

         index index.html index.htm index.nginx-debian.html;

        server_name 54.199.159.191;

        location / {

                proxy_pass http://127.0.0.1:3000;
                proxy_http_version 1.1;
                proxy_set_header Host $host;
        }
}

```

# Nginx 的 Log 檔案

因為是 log 檔，所以我一開始猜測在 var 的資料夾，所以我就 cd 進 var ，並利用 ls 來看這個資料夾有什麽，最終順利找到 Nginx 這個資料夾，裡面包含 access.log 和 error.log。並利用 cat 查看裡面內容。

# Cách khởi chạy server

### Clone dự án vào Visual Studio Code, sau đó mở "Terminal".

### Chạy `npm install` để tải các thư viện của dự án trong "package.json".

### Tạo file mới ".env" với nội dung như sau

```
NODE_ENV = development
ACCESS_TOKEN_SECRET = 
REFRESH_TOKEN_SECRET = 
DATABASE_URI = 
PORT = 3500`
```

#### Cách tạo token mới

- Mở "Terminal" trong VSCode.

- Lần lượt nhập `node` và `require('crypto').randomBytes(64).toString('hex')`

- Cần 2 kết quả, sau đó dán 2 kết quả đó vào `ACCESS_TOKEN_SECRET` và `REFRESH_TOKEN_SECRET` trong ".env".

#### Liên kết với MongoDB 
- mongodb+srv://`username`:`password`@cluster0.hsw6mzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

- Thay thế `username` và `password` bằng tài khoản đăng nhập MongoDB. Sau đó dán vào `DATABASE_URI`.

### Chạy `npm run dev` để bắt đầu.

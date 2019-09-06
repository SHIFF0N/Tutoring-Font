# setrainingvue

## Clone Project
```
git clone https://github.com/seup/setrainingvue
cd setrainingvue
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Application Configuration
edit .env files
```
VUE_APP_SERVER_CLIENT_ID=
VUE_APP_SERVER_CLIENT_SECRET=
```

ค่าข้างบนนี้ให้ดูจากฐานข้อมูล จากตาราง oauth_clients

หา row ที่มีค่า password_client เป็น 1

ตั้งค่า VUE_APP_SERVER_CLIENT_ID ให้มีค่าเป็น ID ของ row นั้น

และตั้งค่า VUE_APP_SERVER_CLIENT_SECRET จาก secret ของ  row เดียวกัน


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

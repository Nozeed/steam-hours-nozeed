# Steam Hours Booster (Node.js + Linux)

สคริปต์ farm ชั่วโมงเกมบน Steam ด้วย steam-user  
เหมาะสำหรับ Linux server (CentOS/Rocky/Alma/Ubuntu/Debian)

⚠️ **คำเตือนความปลอดภัย (สำคัญมาก – อ่านก่อน!)**  
- **แนะนำที่สุด**: ใช้ **Steam Guard Mobile Authenticator** + shared_secret  
- ถ้าต้องใช้ password จริง → ใช้บัญชีสำรองที่ไม่มีอะไรสำคัญเท่านั้น  
- การเปิดเผย password/shared_secret อาจทำให้บัญชีถูกแฮกได้ทันที

## การติดตั้ง (CentOS / Rocky / Alma 8–9)
```bash
sudo yum update -y
sudo yum install -y curl git
curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
node -v   # ควรเห็น v20.x.x

sudo npm install -g pm2
```

## การติดตั้ง (Ubuntu / Debian)
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v

sudo npm install -g pm2
```

## ขั้นตอนใช้งาน
1.Clone และเข้าโฟลเดอร์
```bash
git clone https://github.com/Nozeed/steam-hours-nozeed.git myboost
cd myboost
```
2.ติดตั้ง package
```bash
npm install
```
3.แก้ไขไฟล์ index.js (แนะนำใช้ nano index.js หรือ vim / FileZilla) วิธีแนะนำ (ใช้ shared_secret – ปลอดภัยที่สุด)
```bash
const SteamTotp = require('steam-totp');

const logOnOptions = {
    accountName: 'your_steam_username',
    password: '',  // ปล่อยว่างได้
    twoFactorCode: SteamTotp.generateAuthCode('YOUR_SHARED_SECRET_HERE')
};
```
วิธีสำรอง (ใช้ password – ไม่แนะนำ)
```bash
const logOnOptions = {
    accountName: 'your_steam_username',
    password: 'your_password_here'
};
```
4.รันด้วย PM2 (เพื่อให้ทำงานตลอด + รีสตาร์ทอัตโนมัติ)
```bash
pm2 start index.js --name steam-boost
pm2 save
pm2 startup               # รันตามคำสั่งที่ pm2 แสดง เพื่อเริ่มตอนบูตเครื่อง
```
## คำสั่ง PM2 พื้นฐาน
```bash
pm2 list
pm2 logs steam-boost
pm2 stop steam-boost
pm2 restart steam-boost
pm2 delete steam-boost
```
## อันนี้เป็นเวอร์ชั่นรันหลายไอดีได้ [คลิ๊ก](https://github.com/Nozeed/Steam-Hours-Boost-Multi-Account-By-Nozeed)

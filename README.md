# Steam Hours Booster (สำหรับ Ubuntu/Debian)

สคริปต์ Node.js ช่วย farm / boost ชั่วโมงการเล่นเกมบน Steam โดยอัตโนมัติ  
ใช้ไลบรารี `steam-user` + `steam-totp` รันได้ดีบน Linux server (แนะนำ Ubuntu 20.04 / 22.04 / 24.04 หรือ Debian 11/12)

## ⚠️ คำเตือนด้านความปลอดภัย (อ่านก่อนใช้งาน!)

- **แนะนำที่สุด**: ใช้ **Steam Guard Mobile Authenticator** + shared_secret  
  → ไม่ต้องใส่รหัสผ่านจริงเลย ปลอดภัยสูงสุด
- ห้ามใช้บัญชีหลักที่มีไอเทม/เงิน/เกมแพง ๆ เด็ดขาด
- ถ้าจะใช้ password จริง → ต้องเป็นบัญชีสำรองที่ไม่มีอะไรสำคัญเท่านั้น
- ห้ามแชร์ shared_secret หรือ password กับใคร

## การติดตั้ง (Ubuntu / Debian)

```bash
# อัพเดตระบบก่อน
sudo apt update && sudo apt upgrade -y

# ติดตั้งเครื่องมือพื้นฐาน
sudo apt install -y curl git build-essential

# ติดตั้ง Node.js 20.x (LTS) จาก nodesource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# ตรวจสอบเวอร์ชัน (ควรได้ v20.x.x)
node -v
npm -v

# ติดตั้ง pm2 แบบ global (ช่วยรันสคริปต์ตลอดเวลา + รีสตาร์ทอัตโนมัติ)
sudo npm install -g pm2
```
## ขั้นตอนตั้งค่าและรัน

Clone repository และเข้าโฟลเดอร์
```bash
git clone https://github.com/Nozeed/steam-hours-nozeed.git steam-boost
cd steam-boost

ติดตั้ง dependencies
```bash
npm install
```
แก้ไขไฟล์ index.js

เปิดไฟล์ด้วย nano / vim หรือ editor ที่ถนัด
Bashnano index.js
วิธีแนะนำ (ใช้ shared_secret – ปลอดภัยที่สุด)
```bash
JavaScriptconst SteamTotp = require('steam-totp');

const logOnOptions = {
    accountName: 'your_steam_username',     // ชื่อบัญชี Steam
    password: '',                            // ปล่อยว่างได้
    twoFactorCode: SteamTotp.generateAuthCode('YOUR_SHARED_SECRET_HERE')
};
```

หา shared_secret ได้ยังไง?
→ ใช้แอป Steam Desktop Authenticator หรือ MaFiles extractor หรือดูในไฟล์ maFiles/*.maFile
วิธีสำรอง (ใช้ password – ไม่แนะนำ)
```bash
JavaScriptconst logOnOptions = {
    accountName: 'your_steam_username',
    password: 'your_real_password'
};
```
### รันด้วย PM2
```bash
# รันครั้งแรก
pm2 start index.js --name steam-hours

# บันทึกสถานะ (เพื่อให้รู้จักโปรเซสนี้)
pm2 save

# ตั้งให้รันอัตโนมัติตอนเครื่องบูต (สำคัญมากสำหรับ server)
pm2 startup

# pm2 จะให้คำสั่งมา ให้ copy ไปรันเลย เช่น
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u yourusername --hp /home/yourusername

คำสั่ง PM2 ที่ใช้บ่อย
pm2 list                # ดูสถานะทั้งหมด
pm2 logs steam-hours    # ดู log แบบ real-time
pm2 logs steam-hours -n 100   # ดู log ย้อนหลัง 100 บรรทัด

pm2 stop steam-hours
pm2 restart steam-hours
pm2 delete steam-hours
```

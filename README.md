# Steam Hours Booster (Node.js + Linux)

สคริปต์ farm ชั่วโมงเกมบน Steam ด้วย steam-user  
เหมาะสำหรับ Linux server (CentOS/Rocky/Alma/Ubuntu/Debian)

⚠️ **คำเตือนความปลอดภัย (สำคัญมาก – อ่านก่อน!)**  
- **ห้าม** ใส่ password จริงแบบ plain text ใน index.js  
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


## การติดตั้ง (Ubuntu / Debian)
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v

sudo npm install -g pm2

## ขั้นตอนใช้งาน
git clone https://github.com/Nozeed/steam-hours-nozeed.git myboost
cd myboost

##ติดตั้ง package
npm install

##แก้ไขไฟล์ index.js (แนะนำใช้ nano / vim หรือ FileZilla)
ตัวอย่างการตั้งค่าแบบปลอดภัย (แนะนำ)

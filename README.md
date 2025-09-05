# steam-hours-nozeed
For linux use nodejs
Command ::
**คำสั่ง ที่ใช้ สำหรับ CentOS 7/8/9/10 และ Debain 10/11/12**
sudo yum upgrade -y
sudo yum update -y
sudo yum -y install curl
curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
node -v
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install -y yarn
sudo npm install -g pm2
yum install -y git
git --version
**ติดตั้งตัว boost ชม.**
git clone https://github.com/Nozeed/steam-hours-nozeed.git myid
cd myid
npm i steam-user
npm i steam-totp
npm install
pm2 start index.js --name myid
pm2 stop myid
pm2 start myid
pm2 restart myid
cd ~  / กลับไปหน้า root
**ส่วนของ Ubuntu 20.04/22.04/24.04 ให้เปลี่ยนสำสั่ง จาก yum เป็น apt**

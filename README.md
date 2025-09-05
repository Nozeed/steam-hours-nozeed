<h3 align="left">👩‍💻  About Me</h3>
แนะนำต้องปิดการใช้งาน Steam Guard ก่อน<br />
_**Command ::**_<br />
**คำสั่ง ที่ใช้ สำหรับ CentOS 7/8/9/10 และ Debain 10/11/12**<br />
<pre>sudo yum upgrade -y<br />
sudo yum update -y<br />
sudo yum -y install curl<br />
curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -<br />
sudo yum install -y nodejs<br />
node -v<br />
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo<br />
sudo yum install -y yarn<br />
sudo npm install -g pm2<br />
yum install -y git<br />
git --version<br /></pre>
**ติดตั้งตัว boost ชม.**<br />
<pre>git clone https://github.com/Nozeed/steam-hours-nozeed.git myid<br />
cd myid<br />
npm i steam-user<br />
npm i steam-totp<br />
npm install</pre><br />
หลังตรงนี้ใช้ Filezilla แล้วแก้ไขไฟล์ index.js เปลี่ยน steamid กับ steampass ของคุณแล้ว Save กลับที่เดิม
<pre>pm2 start index.js --name myid<br />
pm2 stop myid<br />
pm2 start myid<br />
pm2 restart myid<br />
cd ~  / กลับไปหน้า root</pre><br />
**ส่วนของ Ubuntu 20.04/22.04/24.04 ให้เปลี่ยนสำสั่ง จาก yum เป็น apt**

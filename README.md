<h5 align="left">👩‍💻 แนะนำต้องปิดการใช้งาน Steam Guard ก่อน</h5>
<br />
<b>คำสั่ง ที่ใช้ สำหรับ CentOS 7/8/9/10 และ Debain 10/11/12</b><br />

<pre>sudo yum upgrade -y
sudo yum update -y
sudo yum -y install curl
curl -sL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
node -v
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
sudo yum install -y yarn
sudo npm install -g pm2
yum install -y git
git --version</pre>
<br />
<b>ติดตั้งตัว boost ชม.</b>
<pre>git clone https://github.com/Nozeed/steam-hours-nozeed.git myid
cd myid
npm i steam-user
npm i steam-totp
npm install</pre>
<br />
<b>หลังตรงนี้ใช้ Filezilla แล้วแก้ไขไฟล์ index.js เปลี่ยน steamid กับ steampass ของคุณแล้ว Save กลับที่เดิม</b>
<pre>pm2 start index.js --name myid
pm2 stop myid
pm2 start myid
pm2 restart myid
cd ~  / กลับไปหน้า root</pre>
<br />
<b>ส่วนของ Ubuntu 20.04/22.04/24.04 ให้เปลี่ยนสำสั่ง จาก yum เป็น apt</b>

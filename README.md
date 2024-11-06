Truy cập vào file /etc/yum.repos.d/CentOS-Base.repo
Uncomment các dòng bắt đầu bằng #baseurl -> baseurl
Thay đổi đường dẫn từ http://mirrorlist.centos.org -> ````https://vault.centos.org````
Thay đổi đường dẫn từ http://mirror.centos.org -> https://vault.centos.org
Update lại gói yum bằng yum update -y và tiến hành reboot

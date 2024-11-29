```sudo lsof -i :80```
--------------------------------------------------------------------------------------------
```gedit /etc/yum.repos.d/CentOS-Base.repo```
Uncomment các dòng bắt đầu bằng #baseurl -> baseurl
Thay đổi đường dẫn từ ```http://mirrorlist.centos.org``` -> ````https://vault.centos.org````
Thay đổi đường dẫn từ ```http://mirror.centos.org``` -> ```https://vault.centos.org```
Update lại gói yum bằng ```yum update -y``` và tiến hành reboot

---------------------------------------------------------------------------------------------
```
systemctl stop firewalld
systemctl disable firewalld
```
---------------------------------------------------------------------------------------------

```gedit /etc/selinux/config```
```SELINUX=enforcing``` ->  ```SELINUX=disabled```
```sudo reboot```

---------------------------------------------------------------------------------------------

```
# CentOS-Base.repo
#
# The mirror system uses the connecting IP address of the client and the
# update status of each mirror to pick mirrors that are updated to and
# geographically close to the client.  You should use this for CentOS updates
# unless you are manually picking other mirrors.
#
# If the mirrorlist= does not work for you, as a fall back you can try the 
# remarked out baseurl= line instead.
#
#

[base]
name=CentOS-$releasever - Base
mirrorlist=http://vault.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/os/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#released updates 
[updates]
name=CentOS-$releasever - Updates
mirrorlist=http://vault.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras
mirrorlist=http://vault.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/extras/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-$releasever - Plus
mirrorlist=http://vault.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra
baseurl=http://vault.centos.org/centos/$releasever/centosplus/$basearch/
gpgcheck=1
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

```
cách mount share folder giữa máy thật và ảo
```vmware-hgfsclient```

```sudo vmhgfs-fuse .host:/shareCetOS /home/node2/Desktop/sharefolderWin -o allow_other -o uid=1000```

```cd /home/node2/Desktop/sharefolderWin```
```ls -la```

```gedit /etc/fstab```
thêm dòng sau vào sau
```.host:/shareCetOS   /home/node1/Desktop/sharefolderWin    fuse.vmhgfs-fuse    defaults,allow_other,uid=1000     0    0```
siuuhuhuhhuu o ơ kìa sao ko config uuuuuuuu


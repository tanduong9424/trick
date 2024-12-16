

// mốt chỉnh đăng nhập thành .dangnhap khi bấm vào icon user sẽ ra 1 hình chữ nhật hiện gồm tài khoản(nếu đã đăng nhập) và đăng xuất
var menu = document.querySelector('.js-nav');
var blockmenu = document.querySelector('.nav-menu');
var outside =document.querySelector('.outside');
var icon=document.getElementById('iconupdown');
var open = false;







// BAR
var dots=document.querySelectorAll('.dot-icon');
var image=document.querySelector(".img");
var Welcome=document.querySelector(".display");
var ColorTD=document.querySelectorAll(".TieuDe");
let timeoutId;

BanPHim();
dots.forEach((dot) => {
  // Set up event listener for each dot
  dot.addEventListener('click', function() {
    chuyen();
    menu();
  });

  function menu() {
    // Remove the active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove('active');
      image.classList.remove('img0');
      image.classList.remove('img1');
      image.classList.remove('img2');
    });

    // Add the active class to the clicked dot
    dot.classList.add('active');

    if (dots[0].classList.contains('active')) {
      image.classList.add('img0');
    }
    if (dots[1].classList.contains('active')) {
      image.classList.add('img1');
    }
    if (dots[2].classList.contains('active')) {
      image.classList.add('img2');
    }

    // màu chữ
    ColorTD.forEach((TD) => {
      if (image.classList.contains('img1')) {
        TD.classList.add('black');
        image.classList.add('justify');
        Welcome.classList.add('invisible');
      } else {
        TD.classList.remove('black');
        image.classList.remove('justify');
        Welcome.classList.remove('invisible');
      }
    });
    // kết thúc
  }
});
    
    var current=0;
function chuyen(){
        dots[current].classList.remove('active');
    // img
    // if(image.classList.contains('img0')){ // image.classList.remove('img0'); // image.classList.add('img1'); // ColorTD.classList.add('black'); // } // else if(image.classList.contains('img1')){ // image.classList.remove('img1'); // image.classList.add('img0'); // ColorTD.classList.remove('black'); // }
    
    // ket thuc img
    
    
        current=(current+1)%dots.length;
        dots[current].classList.add('active');
        
    
        if(dots[0].classList.contains('active')){
            image.classList.remove('img0');
            image.classList.remove('img1');
            image.classList.remove('img2');
            image.classList.add('img0');
        }
        if(dots[1].classList.contains('active')){
            image.classList.remove('img0');
            image.classList.remove('img1');
            image.classList.remove('img2');
            image.classList.add('img1');
        }
        if(dots[2].classList.contains('active')){
            image.classList.remove('img0');
            image.classList.remove('img1');
            image.classList.remove('img2');
            image.classList.add('img2');
        }
        // màu chữ 
        ColorTD.forEach((TD)=>{
            if(image.classList.contains('img1')){
                TD.classList.add('black');
                image.classList.add('justify');
                Welcome.classList.add('invisible');
            }
            else{
                TD.classList.remove('black');
                image.classList.remove('justify');
                Welcome.classList.remove('invisible');
            }
            })
        // kết thúc
    
        for(let i=0;i<dots.length;i++){
            if(i!=current && dots[i].classList.contains('active')){
                dots[i].classList.remove('active');
            }
        }
        
    }

// tương tác bàn phím 
function BanPHim(){
    document.addEventListener('keydown', function(event) {
        for (let index = 0; index < dots.length; index++) {
          if (dots[index].classList.contains('active')) {
            // bấm phải
            if (event.code === 'ArrowRight') {
              dots[index].classList.remove('active');
              if (index + 1 === dots.length) {
                index = 0;
              } else {
                index = index + 1;
              }
              dots[index].classList.add('active');
    
              if(dots[0].classList.contains('active')){
                  image.classList.remove('img0');
                  image.classList.remove('img1');
                  image.classList.remove('img2');
                  image.classList.add('img0');
              }
              if(dots[1].classList.contains('active')){
                  image.classList.remove('img0');
                  image.classList.remove('img1');
                  image.classList.remove('img2');
                  image.classList.add('img1');
              }
              if(dots[2].classList.contains('active')){
                  image.classList.remove('img0');
                  image.classList.remove('img1');
                  image.classList.remove('img2');
                  image.classList.add('img2');
              }
              // màu chữ 
              ColorTD.forEach((TD)=>{
                  if(image.classList.contains('img1')){
                      TD.classList.add('black');
                      image.classList.add('justify');
                      Welcome.classList.add('invisible');
                  }
                  else{
                      TD.classList.remove('black');
                      image.classList.remove('justify');
                      Welcome.classList.remove('invisible');
                  }
                  })
                //   kết thúc
              for (let i = 0; i < dots.length; i++) {
                if (i !== index && dots[i].classList.contains('active')) {
                  dots[i].classList.remove('active');
                }
              }
            } 
            // bấm trái
            else if (event.code === 'ArrowLeft') {
              dots[index].classList.remove('active');
              if (index - 1 < 0) {
                index = dots.length - 1;
              } else {
                index = index - 1;
              }
              dots[index].classList.add('active');


              if(dots[0].classList.contains('active')){
                image.classList.remove('img0');
                image.classList.remove('img1');
                image.classList.remove('img2');
                image.classList.add('img0');
            }
            if(dots[1].classList.contains('active')){
                image.classList.remove('img0');
                image.classList.remove('img1');
                image.classList.remove('img2');
                image.classList.add('img1');
            }
            if(dots[2].classList.contains('active')){
                image.classList.remove('img0');
                image.classList.remove('img1');
                image.classList.remove('img2');
                image.classList.add('img2');
            }
            // màu chữ 
            ColorTD.forEach((TD)=>{
                if(image.classList.contains('img1')){
                    TD.classList.add('black');
                    image.classList.add('justify');
                    Welcome.classList.add('invisible');
                }
                else{
                    TD.classList.remove('black');
                    image.classList.remove('justify');
                    Welcome.classList.remove('invisible');
                }
                })
              //   kết thúc
              for (let i = 0; i < dots.length; i++) {
                if (i !== index && dots[i].classList.contains('active')) {
                  dots[i].classList.remove('active');
                }
              }
            }
          }
        }
        // thêm dòng này
        // chuyen(index);
      });
    }


// kết thúc


setInterval(chuyen,5000);
timeoutId=setTimeout(chuyen,2000);

// KẾT THÚC BAR







// ADMIN
var openadd=document.querySelector('.pro-admin');
var add=document.querySelector('.modal-admin');
var InPropertie_admin = document.querySelector('.modal-admin .modal-container');
var close_admin = document.querySelector('.modal-admin .close');
var modalImage_admin = document.querySelector('.modal-admin .modal-body img');
var modalImage_adjust=document.querySelector('.modal-ADJUST .modal-body_ADJUST img');
var inputs=document.querySelectorAll('.SoLuong');
var accept=document.querySelector('.Accept');


const input = document.getElementById('MaSanPham');

// Xác định định dạng của giá trị nhập vào
input.pattern = '[0-9]{4}';

 
// KẾT THÚC



const productImage = document.createElement('img');
productImage.alt = 'Product image';

openadd.addEventListener('click',function(){
  add.classList.remove('invisible');
})
function finish() {
  add.classList.add('invisible');
  const MASP=document.getElementById("MaSanPham");
  const TDSP=document.getElementById("TIEUDE");
  const TenSanPham = document.getElementById("TenSanPham");
  const GiaBan = document.getElementById("GiaBan");
  MASP.value=0;
  TDSP.value='';
  TenSanPham.value='';
  GiaBan.value=0;

  modalImage_admin.src="img/add.png";
}
close_admin.addEventListener('click',finish);



//class

// tạo thêm sản phẩm
class Pro {
    constructor(container, img, ma, tieude, name,soluong, price,duong,da,size,topping,note,hidden) {
      this.container = container;
      this.img = img;
      this.ma = ma;
      this.tieude = tieude;
      this.name = name;
      this.soluong=soluong;
      this.price = price;
      this.duong=duong;
      this.da=da;
      this.size=size;
      this.topping=topping;
      this.note=note;
      this.hidden=false;
  
      this.element = document.createElement('div');
      this.element.classList.add('pro');
      this.element.setAttribute('data-img', img);
  
      const productImage = document.createElement('img');
      productImage.src = img;
      productImage.alt = 'Product image';
  
  
  
  
      const description = document.createElement('div');
      description.classList.add('des');
  
      const Ten = document.createElement('span');
      Ten.textContent = tieude;
  
      const maSP=document.createElement('h5');
      maSP.classList.add('MaSP');
      maSP.textContent=ma;
  
      const productName = document.createElement('h5');
      productName.classList.add('TenSP');
      productName.textContent = name;
  
      const productPrice = document.createElement('h4');
      productPrice.textContent = price;

      const luongduong=document.createElement('h5');
      luongduong.classList.add('ChartDuong');
      luongduong.classList.add('invisible');
      luongduong.textContent=duong;

      const luongda=document.createElement('h5');
      luongda.classList.add('ChartDa');
      luongda.classList.add('invisible');
      luongda.textContent=da;

      const sizely=document.createElement('h5');
      sizely.classList.add('ChartSize');
      sizely.classList.add('invisible');
      sizely.textContent=size; 

      const luongtopping=document.createElement('h5');
      luongtopping.classList.add('ChartTopping');
      luongtopping.classList.add('invisible');
      luongtopping.textContent=topping;

      const ghichu=document.createElement('input');
      ghichu.type='text';
      ghichu.classList.add('invisible');
      ghichu.textContent=note;

      const addToCartButton = document.createElement('button');
      addToCartButton.innerHTML = '<i class="fa fa-shopping-cart cart"></i>';
      Ten.appendChild(maSP);
      description.appendChild(Ten);
      description.appendChild(productName);
      description.appendChild(productPrice);
      description.appendChild(luongduong);
      description.appendChild(luongda);
      description.appendChild(sizely);
      description.appendChild(luongtopping);
      description.appendChild(ghichu);
  
      this.element.appendChild(productImage);
      this.element.appendChild(description);
      this.element.appendChild(addToCartButton);
  
      this.container.appendChild(this.element);
    }
  }
  
  // class modal 
  //SẼ CÓ THÊM CHI TIẾT CHO MODAL LÀM XONG SAU KHI LÀM XONG CART
  class Modal {
    constructor(MODAL,img, name,ma,price,duong,da,size,topping,tieude,note) {
      this.MODAL=MODAL;
      this.img = img;
      this.name = name;
      this.ma=ma;
      this.price=price;
      this.duong=duong;
      this.da=da;
      this.size=size;
      this.topping=topping;
      this.tieude=tieude;
      this.note=note;
  
      this.element=document.createElement('div');
      this.element.classList.add('modal');
      // this.element.classList.add('invisible');
  
      const modalContainer = document.createElement('div');
      modalContainer.classList.add('modal-container');
      modalContainer.classList.add('animationTransmision');
  
      const closeButton = document.createElement('i');
      closeButton.classList.add('fa');
      closeButton.classList.add('fa-times');
      closeButton.classList.add('icon');
      closeButton.classList.add('close');
  
      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
  
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('img');
      const modalImage = document.createElement('img');
      modalImage.src = img;
      imgDiv.appendChild(modalImage);
  
      const propertiesDiv = document.createElement('div');
      propertiesDiv.classList.add('properties');
      const nameH2 = document.createElement('h2');
      nameH2.classList.add('TenSP');
      nameH2.style.marginBottom = '15px';
      nameH2.style.marginRight='25px';
      nameH2.style.color = 'red';
      nameH2.style.textAlign='center';
      nameH2.textContent = name;
      const priceH4 = document.createElement('h4');
      priceH4.style.margin = '5px';
      priceH4.textContent = price;
      const quantityH4 = document.createElement('h4');
      quantityH4.style.margin = '8px 5px';
      quantityH4.textContent = 'Số lượng:';
      const quantityInput = document.createElement('input');
      quantityInput.id='SoLuongMua';
      quantityInput.type = 'number';
      quantityInput.pattern = '[1-9]+';
      quantityInput.style.display='inline';
      // input checkbox
      // box Đường
      const boxDuong = document.createElement('div');
      boxDuong.classList.add('Duong');
      boxDuong.classList.add('boxDuong');
  
  
      const ChuDuong=document.createElement('h4');
      ChuDuong.classList.add('ChuDuong');
      ChuDuong.textContent='Đường: ';
  
      const checkboxIt = document.createElement('input');
      checkboxIt.type = 'checkbox';
      checkboxIt.name = 'checkbox';
      checkboxIt.value = 'ít';
      checkboxIt.parent = boxDuong;
      checkboxIt.classList.add('Duong');
  
      const ChuVua=document.createElement('h4');
      ChuVua.classList.add('Chu');
      ChuVua.textContent='Vừa';
  
      
      const checkboxVua = document.createElement('input');
      checkboxVua.type = 'checkbox';
      checkboxVua.name = 'checkbox';
      checkboxVua.value = 'vừa';
      checkboxVua.parent = boxDuong;
      checkboxVua.classList.add('Duong');
  
      const ChuIt=document.createElement('h4');
      ChuIt.classList.add('Chu');
      ChuIt.textContent='Ít';
      
      // Sự kiện change
      checkboxIt.addEventListener('change', () => {
        // Kiểm tra xem checkbox nào đang được chọn
        if (checkboxIt.checked) {
          // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
          this.Duong=checkboxIt.value;
          checkboxVua.checked = false;
        
        }
      });
      
      checkboxVua.addEventListener('change', () => {
        // Kiểm tra xem checkbox nào đang được chọn
        if (checkboxVua.checked) {
          // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
          this.Duong=checkboxVua.value;
          checkboxIt.checked = false;
        }
      });
  
      // box Đá
      const boxDa = document.createElement('div');
      boxDa.classList.add('Duong');
      boxDa.classList.add('boxDa');
  
      const ChuDa=document.createElement('h4');
      ChuDa.classList.add('ChuDuong');
      ChuDa.textContent='Đá: ';
  
      const checkboxKhongDa = document.createElement('input');
      checkboxKhongDa.type = 'checkbox';
      checkboxKhongDa.name = 'checkbox';
      checkboxKhongDa.value = 'Không';
      checkboxKhongDa.parent = boxDa;
      checkboxKhongDa.classList.add('Da');
  
      const ChuKhongDa=document.createElement('h4');
      ChuKhongDa.classList.add('Chu');
      ChuKhongDa.textContent='Không';
  
      
      const checkboxItDa = document.createElement('input');
      checkboxItDa.type = 'checkbox';
      checkboxItDa.name = 'checkbox';
      checkboxItDa.value = 'Ít';
      checkboxItDa.parent = boxDa;
      checkboxItDa.classList.add('Da');
  
      const ChuItDa=document.createElement('h4');
      ChuItDa.classList.add('Chu');
      ChuItDa.textContent='Ít';
  
      const checkboxNhieuDa = document.createElement('input');
      checkboxNhieuDa.type = 'checkbox';
      checkboxNhieuDa.name = 'checkbox';
      checkboxNhieuDa.value = 'Nhiều';
      checkboxNhieuDa.parent = boxDa;
      checkboxNhieuDa.classList.add('Da');
  
      const ChuNhieuDa=document.createElement('h4');
      ChuNhieuDa.classList.add('Chu');
      ChuNhieuDa.textContent='Nhiều';
      
      // Sự kiện change
      checkboxKhongDa.addEventListener('change', () => {
        // Kiểm tra xem checkbox nào đang được chọn
        if (checkboxKhongDa.checked) {
          // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
          this.Da=checkboxKhongDa.value;
          checkboxItDa.checked = false;
          checkboxNhieuDa.checked=false;
  
        }
      });
      
      checkboxItDa.addEventListener('change', () => {
        // Kiểm tra xem checkbox nào đang được chọn
        if (checkboxItDa.checked) {
          // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
          this.Da=checkboxItDa.value;
          checkboxKhongDa.checked = false;
          checkboxNhieuDa.checked=false;
  
  
        }
      });
      checkboxNhieuDa.addEventListener('change', () => {
        // Kiểm tra xem checkbox nào đang được chọn
        if (checkboxNhieuDa.checked) {
          // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
          this.Da=checkboxNhieuDa.value;
          checkboxKhongDa.checked = false;
          checkboxItDa.checked=false;
  
        }
      });
  
  // SIZE
  
  const boxSize = document.createElement('div');
  boxSize.classList.add('Duong');
  boxSize.classList.add('boxSize');
  
  const ChuSize=document.createElement('h4');
  ChuSize.classList.add('ChuDuong');
  ChuSize.textContent='Size: ';
  
  const checkboxSizeM = document.createElement('input');
  checkboxSizeM.type = 'checkbox';
  checkboxSizeM.name = 'checkbox';
  checkboxSizeM.value = 'Size M';
  checkboxSizeM.parent = boxSize;
  checkboxSizeM.classList.add('Size');
  
  const ChuM=document.createElement('h4');
  ChuM.classList.add('Chu');
  ChuM.textContent='M';
  
  
  const checkboxSizeX= document.createElement('input');
  checkboxSizeX.type = 'checkbox';
  checkboxSizeX.name = 'checkbox';
  checkboxSizeX.value = 'Size X';
  checkboxSizeX.parent = boxSize;
  checkboxSizeX.classList.add('Size');
  
  const ChuX=document.createElement('h4');
  ChuX.classList.add('Chu');
  ChuX.textContent='X';
  
  const checkboxSizeXL = document.createElement('input');
  checkboxSizeXL.type = 'checkbox';
  checkboxSizeXL.name = 'checkbox';
  checkboxSizeXL.value = 'Size XL';
  checkboxSizeXL.parent = boxSize;
  checkboxSizeXL.classList.add('Size');
  
  const ChuXL=document.createElement('h4');
  ChuXL.classList.add('Chu');
  ChuXL.textContent='XL';
  
  // Sự kiện change
  checkboxSizeM.addEventListener('change', () => {
    // Kiểm tra xem checkbox nào đang được chọn
    if (checkboxSizeM.checked) {
      // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
      this.Size=checkboxSizeM.value;
      checkboxSizeX.checked = false;
      checkboxSizeXL.checked=false;
  
    }
  });
  
  checkboxSizeX.addEventListener('change', () => {
    // Kiểm tra xem checkbox nào đang được chọn
    if (checkboxSizeX.checked) {
      // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
      this.Size=checkboxSizeX.value;
      checkboxSizeM.checked = false;
      checkboxSizeXL.checked=false;
  
    }
  });
  checkboxSizeXL.addEventListener('change', () => {
    // Kiểm tra xem checkbox nào đang được chọn
    if (checkboxSizeXL.checked) {
      // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
      this.Size=checkboxSizeXL.value;
      checkboxSizeM.checked = false;
      checkboxSizeX.checked=false;
  
    }
  });
  
  // TOPPING
  const boxTopping = document.createElement('div');
  boxTopping.classList.add('Duong');
  boxTopping.classList.add('boxTopping');
  
  const ChuTopping=document.createElement('h4');
  ChuTopping.classList.add('ChuDuong');
  ChuTopping.textContent='Topping: ';
  
  const checkboxChanTrau = document.createElement('input');
  checkboxChanTrau.type = 'checkbox';
  checkboxChanTrau.name = 'checkbox';
  checkboxChanTrau.value = 'Trân Châu';
  checkboxChanTrau.parent = boxTopping;
  checkboxChanTrau.classList.add('Topping');
  
  const ChuChanTrau=document.createElement('h5');
  ChuChanTrau.classList.add('Chu');
  ChuChanTrau.textContent='Chân Trâu';
  
  
  const checkboxRauCau= document.createElement('input');
  checkboxRauCau.type = 'checkbox';
  checkboxRauCau.name = 'checkbox';
  checkboxRauCau.value = 'Râu Câu';
  checkboxRauCau.parent = boxTopping;
  checkboxRauCau.classList.add('Topping');
  
  const ChuRauCau=document.createElement('h5');
  ChuRauCau.classList.add('Chu');
  ChuRauCau.textContent='Râu Câu';
  
  const checkboxPhoMai = document.createElement('input');
  checkboxPhoMai.type = 'checkbox';
  checkboxPhoMai.name = 'checkbox';
  checkboxPhoMai.value = 'Phô Mai';
  checkboxPhoMai.parent = boxTopping;
  checkboxPhoMai.classList.add('Topping');
  
  const ChuPhoMai=document.createElement('h5');
  ChuPhoMai.classList.add('Chu');
  ChuPhoMai.textContent='Phô Mai';
  
  // Sự kiện change
  checkboxRauCau.addEventListener('change', () => {
    // Kiểm tra xem checkbox nào đang được chọn
    if (checkboxRauCau.checked) {
      // Nếu checkbox ít được chọn, thì bỏ chọn checkbox vừa
      this.Topping=checkboxRauCau.value;
      checkboxChanTrau.checked = false;
      checkboxPhoMai.checked=false;
  
    }
  });
  
  checkboxChanTrau.addEventListener('change', () => {
    // Kiểm tra xem checkbox nào đang được chọn
    if (checkboxChanTrau.checked) {
      // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
      this.Topping=checkboxChanTrau.value;
      checkboxRauCau.checked = false;
      checkboxPhoMai.checked=false;
  
    }
  });
  checkboxPhoMai.addEventListener('change', () => {
    // Kiểm tra xem checkbox nào đang được chọn
    if (checkboxPhoMai.checked) {
      // Nếu checkbox vừa được chọn, thì bỏ chọn checkbox ít
      this.Topping=checkboxPhoMai.value;
      checkboxChanTrau.checked = false;
      checkboxRauCau.checked=false;
  
    }
  });

  const ghichu=document.createElement('input');
  ghichu.classList.add('note');
  ghichu.textContent=note;
  ghichu.style.width='80%' ;
  ghichu.style.minHeight='35px';
  ghichu.placeholder='Ghi chú';
  
  
  
      
  // hết input checkbox;
      const buyButton = document.createElement('button');
      buyButton.classList.add('Mua');
      buyButton.innerHTML = '<i class="fa fa-shopping-cart cart"></i>THÊM VÀO GIỎ HÀNG';
  
      
      propertiesDiv.appendChild(nameH2);
      propertiesDiv.appendChild(priceH4);
      propertiesDiv.appendChild(quantityH4);
      propertiesDiv.appendChild(quantityInput);
      propertiesDiv.appendChild(boxDuong);
      propertiesDiv.appendChild(boxDa);
      propertiesDiv.appendChild(boxSize);
      propertiesDiv.appendChild(boxTopping);
      propertiesDiv.appendChild(ghichu);
      propertiesDiv.appendChild(buyButton);
      quantityH4.appendChild(quantityInput);
  
      boxDuong.appendChild(ChuDuong);
      ChuDuong.appendChild(ChuIt);
      ChuIt.appendChild(checkboxIt);
      ChuDuong.appendChild(ChuVua);
      ChuVua.appendChild(checkboxVua);
  
      boxDa.appendChild(ChuDa);
      ChuDa.appendChild(ChuKhongDa);
      ChuDa.appendChild(ChuItDa);
      ChuDa.appendChild(ChuNhieuDa);
      ChuKhongDa.appendChild(checkboxKhongDa);
      ChuItDa.appendChild(checkboxItDa);
      ChuNhieuDa.appendChild(checkboxNhieuDa);
  
      boxSize.appendChild(ChuSize);
      ChuSize.appendChild(ChuM);
      ChuSize.appendChild(ChuX);
      ChuSize.appendChild(ChuXL);
      ChuM.appendChild(checkboxSizeM);
      ChuX.appendChild(checkboxSizeX);
      ChuXL.appendChild(checkboxSizeXL);
  
      boxTopping.appendChild(ChuTopping);
      ChuTopping.appendChild(ChuChanTrau);
      ChuTopping.appendChild(ChuRauCau);
      ChuTopping.appendChild(ChuPhoMai);
      ChuChanTrau.appendChild(checkboxChanTrau);
      ChuPhoMai.appendChild(checkboxPhoMai);
      ChuRauCau.appendChild(checkboxRauCau);
  
      modalBody.appendChild(imgDiv);
      modalBody.appendChild(propertiesDiv);
  
      modalContainer.appendChild(closeButton);
      modalContainer.appendChild(modalBody);
      this.element.appendChild(modalContainer);
  
      // this.modalContainer.addEventListener('click', (event) => {
      //   if (event.target === this.modalContainer || event.target === this.closeButton) {
      //     this.hide();
      //   }
      // });
      this.MODAL.appendChild(this.element);
    }
  
  }

class Cart{
    constructor(BOX,products=[],tien){
        this.BOX = BOX;
        this.products = products; // An array to store Pro objects
        this.tien = tien;

        this.element=document.createElement('div');
        this.element.classList.add('cart');

        const properties_products=document.createElement('div');
        properties_products.classList.add('products');
        
        const product_box = document.createElement('div');
        product_box.classList.add('product_box');
    
        // Chèn các phần tử từ mảng products[] vào product_box
        properties_products.appendChild(product_box);


        const tongtien = document.createElement('h3');
        tongtien.classList.add('tongtien');
        tongtien.classList.add('invisible');
        products.forEach(element => {
          tien+=parseInt(element.price);
        });
        tongtien.textContent = tien;
    
        const Huy=document.createElement('h5');
        Huy.classList.add('HUY');
        Huy.classList.add('invisible');
        Huy.textContent='Hủy';

        const XACNHANMUA=document.createElement('div');
        XACNHANMUA.classList.add('invisible');
        XACNHANMUA.classList.add('XACNHANMUA');


        this.BOX.appendChild(this.element);
        this.element.appendChild(properties_products);
        this.element.appendChild(tongtien);
        this.element.appendChild(Huy);
        this.element.appendChild(XACNHANMUA);
        
    }
    addPro(product){
        this.products.push(product)
    }
    delProduct(ma){
        const index=this.products.findIndex(product=>product.ma===ma && product.hidden===false);
        if(index!==-1){
            this.products.splice(index,1);
        }
    }
    showProduct(CHART_BOX){
      while (CHART_BOX.firstChild) {
        CHART_BOX.removeChild(CHART_BOX.firstChild);
      }
      const products=this.products;
      products.forEach(product => {
        if(!product.hidden){
          const newPro = new Pro(CHART_BOX, product.img, " #" + product.ma, product.tieude, product.name,'',product.price + "đ");
        }
        const productCarts=Array.from(CHART_BOX.querySelectorAll('.pro'));
        productCarts.forEach(product => {
          product.style.display='flex';
          product.style.margin='2px 0'
          const image=product.querySelector('img');
          const button=product.querySelector('button');
          const span=product.querySelector('span');
          button.classList.add('invisible');
          span.classList.add('invisible');
          image.style.width='45px';
          const des=product.querySelector('.des');
          des.style.display='flex';
          des.style.justifyContent='space-evenly';
          des.style.flex='2';
          des.style.flexWrap='wrap';
          des.style.alignItems='center';
          product.addEventListener('click',function(){{
            // khi nhấp vào giữa product để mở modal
              const ma=product.closest('.pro').querySelector('.MaSP').textContent.replace(' #','');
              // console.log(ma);
              changeModal(ma);
              loadModal();
            // js modal sang DOM  
                // tắt modal
              const modalElements=Array.from(document.querySelectorAll('.modal'));
              modalElements.forEach((modalElement, index) => {
              var close = modalElement.querySelector('.close');
              var container = modalElement.querySelector('.modal-container');
            
              function closeModal() {
                modalElement.classList.add('invisible');
              }
            
              close.addEventListener('click', closeModal);
              modalElement.addEventListener('click', closeModal);
              container.addEventListener('click', function (event) {
                event.stopPropagation();
              });
              });      
          }})
        });
      });

    }
    showProductDetails(CHART_BOX){
      while (CHART_BOX.firstChild) {
        CHART_BOX.removeChild(CHART_BOX.firstChild);
      }
      const products=this.products;
      products.forEach(product => {
        if(!product.hidden){
          const newPro = new Pro(CHART_BOX, product.img, " #" + product.ma, '', product.name,'',product.price + "đ",'Đường:'+product.duong,'Đá:'+product.da,'Size:'+product.size,'Topping:'+product.topping,product.note);
          const bt=document.createElement('button');
          bt.classList.add('ChartDel');
          bt.textContent='Xóa';
          bt.style.height='30px';
          bt.style.margin='0 5px';
          newPro.element.appendChild(bt);

        }
        const productCarts=Array.from(CHART_BOX.querySelectorAll('.pro'));
        productCarts.forEach(product => {
          product.style.display='flex';
          product.style.margin='5px 2px';
          const image=product.querySelector('img');
          const button=product.querySelector('button');
          button.style.width='30px';
          button.style.height='30px';
          image.style.width='45px';
          image.style.borderRadius='10px';
          image.style.marginRight='5px';
          const des=product.querySelector('.des');
          des.style.display='flex';
          des.style.justifyContent='space-evenly';
          des.style.flex='2';
          des.style.flexWrap='wrap';
          des.style.alignItems='center';
        });
      });

    }
}

class Order{
    constructor(BOX,username,products=[],tien,time,diachi,check){
        this.BOX = BOX;
        this.username=username;
        this.products = products; // An array to store Pro objects
        this.tien = tien;
        this.time = time;
        this.diachi = diachi;
        // check :trạng thái đơn hàng
        this.check=check;


        this.element=document.createElement('div');
        this.element.classList.add('cart');

        const taikhoan=document.createElement('h5');
        taikhoan.classList.add('TaiKhoan');
        taikhoan.textContent=username;

        const properties_products=document.createElement('div');
        properties_products.classList.add('products');
        
        const product_box = document.createElement('div');
        product_box.className = 'product_box';
    
        // Chèn các phần tử từ mảng products[] vào product_box
        properties_products.appendChild(product_box);

        const productCarts=Array.from(document.querySelectorAll('.modal'));
        for(var i=0;i<productCarts.length;i++){
          product_box.appendChild(productCarts[i]);
        }


        const tongtien = document.createElement('h5');
        tongtien.classList.add('tongtien');
        products.forEach(element => {
          tien+=parseInt(element.price);
        });
        tongtien.textContent = tien;

        const ChartTime = document.createElement('h5');
        ChartTime.classList.add('ChartTime');
        ChartTime.textContent = time;

        const XACNHANMUA=document.createElement('div');
        XACNHANMUA.classList.add('invisible');
        XACNHANMUA.classList.add('XACNHANMUA');
        XACNHANMUA.textContent='Đặt hàng';

        const NHAPDIACHI=document.createElement('input');
        NHAPDIACHI.type='text';
        NHAPDIACHI.classList.add('NHAPDIACHI');

        const XACNHANDIACHI=document.createElement('button');
        XACNHANDIACHI.classList.add('XACNHANDIACHI');
        XACNHANDIACHI.textContent='XÁC NHẬN';

        const THAYDOIDIACHI=document.createElement('button');
        THAYDOIDIACHI.classList.add('THAYDOIDIACHI');
        THAYDOIDIACHI.textContent='SỬA';

        const ChartDIACHI=document.createElement('h5');
        ChartDIACHI.classList.add('ChartDIACHI');
        ChartDIACHI.textContent=diachi;
        ChartDIACHI.classList.add('invisible');

        this.BOX.appendChild(this.element);
        this.element.appendChild(XACNHANMUA);
        XACNHANMUA.appendChild(NHAPDIACHI);
        XACNHANMUA.appendChild(XACNHANDIACHI);
        XACNHANMUA.appendChild(THAYDOIDIACHI);
        this.element.appendChild(ChartDIACHI);    
        this.element.appendChild(properties_products);
        this.element.appendChild(tongtien);
        this.element.appendChild(ChartTime);
        
    }
    addPro(product){
        this.products.push(product)
    }
}
class AdvancedSearch{
  constructor(isSortAsc,isSortDesc,tensp,tieude,minPrice,maxPrice){
    this.isSortAsc=isSortAsc;
    this.isSortDesc=isSortDesc;
    this.tensp=tensp;
    this.tieude=tieude;
    this.minPrice=minPrice;
    this.maxPrice=maxPrice;
  }
}


// image from pc, lấy ảnh từ máy tính
modalImage_admin.addEventListener('click',LayAnh );
modalImage_adjust.addEventListener('click',LayAnh);

function LayAnh() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.addEventListener('change', function() {
    const file = input.files[0];

    // Hàm thu nhỏ ảnh
    function resizeImage(file, maxWidth, maxHeight, callback) {
      const img = new Image();

      img.onload = function() {
        let width = img.width;
        let height = img.height;

        // Tính toán tỷ lệ thu nhỏ dựa trên maxWidth và maxHeight
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width *= ratio;
        height *= ratio;

        // Tạo canvas mới
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        // Vẽ ảnh trên canvas với kích thước đã thu nhỏ
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Chuyển đổi canvas thành base64
        const resizedDataUrl = canvas.toDataURL('image/jpeg');

        // Gọi callback với dữ liệu ảnh thu nhỏ
        callback(resizedDataUrl);
      };

      img.src = URL.createObjectURL(file);
    }

    // Kích thước tối đa sau khi thu nhỏ
    const maxWidth = 800; // Kích thước tối đa chiều rộng
    const maxHeight = 600; // Kích thước tối đa chiều cao

    // Hàm xử lý sau khi ảnh đã được thu nhỏ
    function handleResizedImage(resizedDataUrl) {
      // Sử dụng dữ liệu ảnh thu nhỏ tại đây
      // Ví dụ:
      modalImage_admin.src = resizedDataUrl;
      modalImage_adjust.src = resizedDataUrl;
      productImage.src = resizedDataUrl;
    }

    // Gọi hàm thu nhỏ ảnh
    resizeImage(file, maxWidth, maxHeight, handleResizedImage);
  });

  input.click();
}

const proContainer = document.querySelector('.pro-container');
const MODAL=document.getElementById("MODAL")
const CHART_BOX=document.getElementById("CHART_SHOW");
const History=document.getElementById('History');
const DETAILUSERCART=document.querySelector('.CHITIETHOADON');
const contentXACNHAN=document.querySelector('.AGREE');

function saveProduct(pro) {
    const ma = document.getElementById('MaSanPham').value;
    const maregrex=/^[0-9]{4}$/;
    if(maregrex.test(ma)===false){
      return;
    }
    else{
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(pro);
    localStorage.setItem('products', JSON.stringify(products));
    }
}

function saveModal(modal){
  const modals=JSON.parse(localStorage.getItem('modals') || '[]');
  modals.push(modal);
  localStorage.setItem('modals',JSON.stringify(modals));
}

// giỏ hàng và đơn hàng của từng tài khoản
function saveProductByAccount(username, product) {
    // Check if there is already a cart for the given username in the local storage
    let cartData = localStorage.getItem('cart');
    let cart;

    if (cartData) {
        // If cart data exists, parse it from JSON
        cart = JSON.parse(cartData);

        // Check if there is a cart for the specific username
        if (!cart[username]) {
            // If not, create a new cart for the username
            cart[username] = new Cart(CHART_BOX, [], 0);
        } else {
            // If the cart exists, recreate the Cart object with its methods
            const cartProducts = cart[username].products;
            const cartTien = cart[username].tien;
            cart[username] = new Cart(CHART_BOX, cartProducts, cartTien);
        }
    } else {
        // If no cart data exists, create a new empty cart object
        cart = {};
        cart[username] = new Cart(CHART_BOX, [], 0);
    }

    cart[username].addPro(product);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}


function getCartsByAccount(username) {
  let carts = localStorage.getItem('cart');
  if (!carts) {
      return {};
  }

  carts = JSON.parse(carts);

  const userCart = carts[username];
  if (!userCart) {
      return new Cart(CHART_BOX, [], 0); // Return an empty Cart if user's cart doesn't exist
  }

  return userCart;
}


function loadgiohang(username) {
while (CHART_BOX.firstChild) {
    CHART_BOX.removeChild(CHART_BOX.firstChild);
}

const userCart = getCartsByAccount(username);
const newcart = new Cart(CHART_BOX, userCart.products, userCart.tien);
newcart.showProduct(CHART_BOX);
// const productsofcart=Array.from(document.querySelectorAll('.pro'));
}

function loadgiohangchitietgiohang(username) {
  while (ChitietHoadon.firstChild) {
      ChitietHoadon.removeChild(ChitietHoadon.firstChild);
  }
  
  const userCart = getCartsByAccount(username);
  const newcart = new Cart(ChitietHoadon, userCart.products, userCart.tien);
  newcart.showProductDetails(ChitietHoadon);
  const productCarts=Array.from(ChitietHoadon.querySelectorAll('.pro'));
  productCarts.forEach(product => {
    const ChartDuong=product.querySelector('.ChartDuong');
    const ChartDa=product.querySelector('.ChartDa');
    const ChartSize=product.querySelector('.ChartSize');
    const ChartTopping=product.querySelector('.ChartTopping');
    ChartDuong.classList.remove('invisible');
    ChartDa.classList.remove('invisible');
    ChartSize.classList.remove('invisible');
    ChartTopping.classList.remove('invisible');
  })
  
  }

function saveOrderByAccount(username,order){
    let orders=localStorage.getItem('orders');

    if(!orders){
        orders={};

    }
    else{
        orders=JSON.parse(orders);
    }

    orders[username]=orders[username] ||[];

    orders[username].push(order);

    localStorage.setItem('orders',JSON.stringify(orders));
}
function luutranghientai(currentpage){
    localStorage.setItem('pages',JSON.stringify(currentpage));
}
function trangthaifilter(check){
  localStorage.setItem('filter',JSON.stringify(check));
}
function saveAdvancedSearch(AdvancedSearch){
  localStorage.setItem('advanced', JSON.stringify(AdvancedSearch));
}

function getAdvancedSearch(){
  const advanced=JSON.parse(localStorage.getItem('advanced')||'[]');
  return advanced;
}

// Lưu thông tin vào local storage
function getProducts(){
    const products=JSON.parse(localStorage.getItem('products')||'[]');
    return products;
}

function getModals(){
    const modals=JSON.parse(localStorage.getItem('modals') || '[]');
    return modals;
}




function getOrdersByAccount(username){
    let orders=localStorage.getItem('orders');
    if(!orders){
        return [];
    }

    orders=JSON.parse(orders);
    const ordersAccount=orders[username]||[];
    return ordersAccount;
}

function getCurrentPage(){
  const currentPage = JSON.parse(localStorage.getItem('pages'));
  return currentPage;
}
function getFilter(){
  const check=JSON.parse(localStorage.getItem('filter'));
  return check;
}

// lưu ý khi xóa sản phẩm nghĩa là cho thêm display none nếu không xóa sẽ dẫn
// dẫn đến xóa luôn lịch sử mua


// hàm load sản phẩm không load lại trang
function loadsanpham(currentpage){
  while(proContainer.firstChild){
    proContainer.removeChild(proContainer.firstChild);    
  }
  if(currentpage!=null){
    const startIndex = (currentpage) * 6;
    const endIndex = startIndex + 5;
    const products=getProducts();
    for (let i = startIndex; i <= endIndex && i < products.length; i++) {
      const product=products[i];
      if(!product.hidden){
        const newPro = new Pro(proContainer, product.img, " #" + product.ma, product.tieude, product.name,'',product.price + "đ");
      }
      else{endIndex=endIndex+1;}
    }
  }
  else{
    const products=getProducts();
    products.forEach(product => {
      if(!product.hidden){
        const newPro = new Pro(proContainer, product.img, " #" + product.ma, product.tieude, product.name,'',product.price + "đ");
      }
    });
  }
}
function loadsanphamcofilter(currentpage){
  while(proContainer.firstChild){
    proContainer.removeChild(proContainer.firstChild);    
  }
  if(currentpage!=null){
    const startIndex = (currentpage) * 6;
    const endIndex = startIndex + 5;
    const products=getSearchProducts();
    for (let i = startIndex; i <= endIndex && i < products.length; i++) {
      const product=products[i];
      if(!product.hidden){
        const newPro = new Pro(proContainer, product.img, " #" + product.ma, product.tieude, product.name,'',product.price + "đ");
      }
      else{endIndex=endIndex+1;}
    }
  }
  else{
    const products=getSearchProducts();
    products.forEach(product => {
      if(!product.hidden){
        const newPro = new Pro(proContainer, product.img, " #" + product.ma, product.tieude, product.name,'',product.price + "đ");
      }
    });
  }

}




function loadModal(){
  const modals=getModals();
  while(MODAL.firstChild){
    MODAL.removeChild(MODAL.firstChild);    
  }
  //  constructor(MODAL,img, name,price,duong,da,size,topping,tieude)
    const newmodal=new Modal(MODAL,modals[0].img,modals[0].name,'','GIÁ: '+modals[0].price);
}


// lưu ý khi sửa thì chỉ ẩn đi rồi tạo 1 sản phẩm mới chứ không đổi vì có các sản phẩm lịch sử
function changeModal(ma){
  
  const products=getProducts();
  const position=products.findIndex(product=>product.ma===ma && product.hidden===false);
  if(position===-1){
    alert('không tìm thấy sản phẩm');
    return;
  }
  const object=products[position];

  const tieude = object.tieude;

  const image = object.img;
  const tensp = object.name;
  const gia = object.price;
  localStorage.removeItem('modals');
  const modals=new Modal(MODAL,image,tensp,ma,gia,'','','','',tieude);
  saveModal(modals);

}



// Lưu sản phẩm mới
accept.addEventListener('click',chapnhan);
function chapnhan(){
  const products=getProducts();
  const ma = document.getElementById('MaSanPham').value;
  const tieude = document.getElementById('TIEUDE').value;
  const tenSanPham = document.getElementById('TenSanPham').value;
  const giaBan = document.getElementById('GiaBan').value;

  const maregrex=/^[0-9]{4}$/;
  if(maregrex.test(ma)===false){
    alert('vui lòng nhập mã sản phẩm hợp lệ');
    document.getElementById('MaSanPham').value='';
    return false;
  }

  let isDuplicate=false;
  products.forEach(product => {
    if (product.ma == ma) {
      alert('Vui lòng nhập mã không trùng với mã đã có');

      document.getElementById('MaSanPham').value = '';

      isDuplicate = true;
    }
  });

  if (isDuplicate) {
    return false;
  }

  if(productImage.src===''){
    productImage.src='img/white.png';
  }
  if(tieude==='' || tenSanPham===''){
    alert('vui lòng không để trống');
    if(tieude===''){
      document.getElementById('TIEUDE').value='';
      return false;
    }
    if(tenSanPham===''){
      document.getElementById('TenSanPham').value='';
      return false;

    }
  }
  if(giaBan.length<3){
    alert('vui lòng nhập giá hợp lệ');
    document.getElementById('GiaBan').value='';
    return false;

  }

  // constructor(container, img, ma, tieude, name,soluong, price,duong,da,size,topping,type) {
  const newPro = new Pro(proContainer, productImage.src,ma, tieude, tenSanPham,0,giaBan,'','','','','',''); 

  saveProduct(newPro);
  const currentpage=getCurrentPage();
  loadsanpham(currentpage);

    document.getElementById('MaSanPham').value = 0;
    document.getElementById('TIEUDE').value = '';
    document.getElementById('TenSanPham').value = '';
    document.getElementById('GiaBan').value = 0;
  
    modalImage_admin.src = 'img/add.png';
}

function deleteProduct(ma){
  const products=getProducts();
  const position = products.findIndex((product) => {
    return product.ma===ma ;
  });
  if(position===-1){
    return;
  }
  products[position].hidden=true;
  saveProduct(products);
}

// sửa thông tin sản phẩm
var modal_adjust=document.querySelector('.modal-ADJUST');

// sửa sản phẩm là tạo 1 sản phẩm mới và cho sản phẩm cũ hidden
function changeProduct(ma) {
  const products = getProducts();
  const position = products.findIndex(product => product.ma === ma && product.hidden === false);
  
  if (position === -1) {
    alert('Không tìm thấy sản phẩm');
    return;
  }

  const oldProduct = products[position];

  // Display old product information
  document.getElementById('MaSanPham-SUA').value = oldProduct.ma;
  document.getElementById('TIEUDE-SUA').value = oldProduct.tieude;
  document.getElementById('TenSanPham-SUA').value = oldProduct.name;
  document.getElementById('GiaBan-SUA').value = oldProduct.price;

  const adjust = document.querySelector('.ADJUST');
  adjust.addEventListener('click', function () {
    const newMa = document.getElementById('MaSanPham-SUA').value;

    const maRegex = /^[0-9]{4}$/;
    if (!maRegex.test(newMa)) {
      alert('Vui lòng nhập mã sản phẩm hợp lệ');
      document.getElementById('MaSanPham-SUA').value = '';
      return false;
    }

    // Check for duplicate newMa in products array (excluding the current product)
    const isDuplicate = products.some(product => product.ma === newMa && product !== oldProduct);

    if (isDuplicate) {
      alert('Vui lòng nhập mã không trùng với mã đã có');
      return false;
    }

    const newTieude = document.getElementById('TIEUDE-SUA').value;
    const newName = document.getElementById('TenSanPham-SUA').value;
    const newPrice = document.getElementById('GiaBan-SUA').value;
    
    // Create a new product with the updated information
    const newProduct = {
      img: oldProduct.img,
      ma: newMa,
      tieude: newTieude,
      name: newName,
      price: newPrice,
      hidden: false // The new product is not hidden
    };

    // Set hidden to true for the old product
    oldProduct.hidden = true;

    // Insert the new product next to the old product in the products array
    products.splice(position + 1, 0, newProduct);

    modal_adjust.classList.add('invisible');
    saveProduct(products);
    loadsanpham();
  });
}


function AddProductInCart(username,product){

  const object=product;
    // const newPro = new Pro(proContainer, productImage.src,ma, tieude, tenSanPham,0,giaBan,'','','','',''); 
  const image=object.img;
  const ma=object.ma;
  const tieude=object.tieude;
  const tensp=object.name;
  const soluong='1';
  const giaban=object.price;
  let duong='Ít';
  let da='Ít';
  let size='M';
  let topping='không';
  if(tieude==='TOPPING'){
    duong='Không';
    da='Không';
    size='';
    topping='';
  }


  const newPro=new Pro(CHART_BOX,image,ma,tieude,tensp,soluong,giaban,duong,da,size,topping,'');
  saveProductByAccount(username,newPro);
  loadgiohang(username);
}
function AddProductInCartByModal(username,product){
  // const object=product;
  // const image=object.img;
  // const ma=object.ma;
  // const tieude=object.tieude;
  // const tensp=object.name;
  // const soluong=object.soluong;
  // const giaban=object.price;
  // const duong=object.duong;
  // const da=object.da;
  // const size=object.size;
  // const topping=object.topping;

  // const newPro=new Pro(CHART_BOX,image,ma,tieude,tensp,soluong,giaban,duong,da,size,topping);
  saveProductByAccount(username,product);
  loadgiohang(username);
}



const productshow=document.getElementById('product1');
function quatrang(){
        productshow.scrollIntoView({
        behavior: 'smooth',
        block: 'start'     
      });
}

function phantrang(){
  const sotrang = document.getElementById("sotrang");
  while(sotrang.firstChild){
    sotrang.removeChild(sotrang.firstChild);
  }
  const products=getProducts();
  if(products.length>6){
    const numberpages=Math.ceil(products.length/6);
    // tạo số trang nếu nhiều hơn 6 sản phẩm
    const sotrang = document.getElementById("sotrang");
    while(sotrang.firstChild){
      sotrang.removeChild(sotrang.firstChild);
    }
    for(let i=1;i<=numberpages;i++){
      const li=document.createElement('li');
    li.classList.add('SoTrang');
    li.textContent=i;
    li.classList.remove('change');
    sotrang.appendChild(li);
    }
  }
}

function phantrangcofilter(){
  const sotrang = document.getElementById("sotrang");
  while(sotrang.firstChild){
    sotrang.removeChild(sotrang.firstChild);
  }
  const products=getSearchProducts();
  if(products.length>6){
    const numberpages=Math.ceil(products.length/6);
    // tạo số trang nếu nhiều hơn 6 sản phẩm
    const sotrang = document.getElementById("sotrang");
    while(sotrang.firstChild){
      sotrang.removeChild(sotrang.firstChild);
    }
    for(let i=1;i<=numberpages;i++){
      const li=document.createElement('li');
    li.classList.add('SoTrang');
    li.textContent=i;
    li.classList.remove('change');
    sotrang.appendChild(li);
    }
  }

}
function loadphantrang(){
  phantrang();
  const dsTrang=document.querySelectorAll('.SoTrang');
      const currentpage=getCurrentPage();
      if(currentpage){
        const page=parseInt(currentpage);
          dsTrang[page].classList.add('change');
      }
      else{
        dsTrang[0].classList.add('change');
        luutranghientai(0);
      }
  dsTrang.forEach((trang,index) => {
    trang.addEventListener('click',function () {
      // localStorage.removeItem('pages');
      luutranghientai(index);
    })
  });
}

function loadphantrangcofilter(){
  phantrangcofilter();
  const dsTrang=document.querySelectorAll('.SoTrang');
  const currentpage=getCurrentPage();
  if(currentpage){
    const page=parseInt(currentpage);
      dsTrang[page].classList.add('change');
  }
  else if(dsTrang.length>0){
    dsTrang[0].classList.add('change');
    luutranghientai(0);
  }
  dsTrang.forEach((trang,index) => {
  trang.addEventListener('click',function () {
    // localStorage.removeItem('pages');
    luutranghientai(index);
  })
  });
}



// đăng xuất thì reload
// function outtaikhoan(){
//   localStorage.removeItem('pages');
//   trangthaifilter(0);
//   location.reload();
// }
function reload(){
  location.reload();
  trangthaifilter(0);
}
function tukhoatimkiem(searchValue){
  localStorage.setItem('search',JSON.stringify(searchValue));
}
function sanphamdakiem(searchedProducts){
  localStorage.setItem('searchproducts', JSON.stringify(searchedProducts));
}
function reloadcofilter(){
  location.reload();
}
function getSearch(){
  const search=JSON.parse(localStorage.getItem('search'));
  return search;
}
function getSearchProducts(){
  const products=JSON.parse(localStorage.getItem('searchproducts')||'[]');
  return products;
}

// lấy danh sách tài khoản user
function getUsers(){
  const usersDataJSON = localStorage.getItem('usersDataArray');

if (usersDataJSON) {
  try {
    const usersDataArray = JSON.parse(usersDataJSON);
    return Array.isArray(usersDataArray) ? usersDataArray : [];
  } catch (error) {
    console.error('Error parsing usersDataArray from Local Storage:', error);
  }
}

return [];
}

// xóa pro khỏi Cart và Order
function deleteProFromCart(username,ma){
    // Check if there is already a cart for the given username in the local storage
    let cartData = localStorage.getItem('cart');
    let cart;

    if (cartData) {
        // If cart data exists, parse it from JSON
        cart = JSON.parse(cartData);

        // Check if there is a cart for the specific username
        if (!cart[username]) {
            // If not, create a new cart for the username
            return;
        } else {
            // If the cart exists, recreate the Cart object with its methods
            const cartProducts = cart[username].products;
            const cartTien = cart[username].tien;
            cart[username] = new Cart(CHART_BOX, cartProducts, cartTien);
        }
    } else {
        return;
    }

    cart[username].delProduct(ma);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    loadgiohangchitietgiohang(username);
    const XoaSanPhamKhoiGioHang=document.querySelectorAll('.ChartDel');
    XoaSanPhamKhoiGioHang.forEach(element => {
      element.addEventListener('click',function(){
            const ma=element.closest('.pro').querySelector('.MaSP').textContent.replace(' #','');
            deleteProFromCart(username,ma);
      })   
    });
}
function deleteProFromOrder(){
  // lưu ý khi order đã hoàn thành thì không được chỉnh sửa order đó nữa
}
// còn hàm xóa bằng cách ẩn là dành cho quản lý sản phẩm

      // CHI TIẾT GIỎ HÀNG
      const MoChitiethoadon=document.querySelector('.CHART');
      const HeaderHoaDon=document.querySelector('.HEADERHOADON');
      const ChitietHoadon=document.querySelector('.CHITIETHOADON');
      const TOTAL=this.document.querySelector('.TOTAL');
      const PAY=document.querySelector('.PAY');

      const logo=document.querySelector('.logo-container');
      logo.addEventListener('click',function(){
        reload();
      })


window.addEventListener('load',function(){{
  const products=getProducts();

// TÌM KIẾM

  // KHI CLICK NÚT TÌM KIẾM
  const searchForm = document.getElementById('SEARCH');
  const searchBox = document.getElementById('search-box');
  let searchedProducts = [];
// BẤM ENTER
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchValue = searchBox.value;
    searchedProducts = products.filter(product => {
      const productName = product.name.toLowerCase();
      return productName.includes(searchValue);
    });
    tukhoatimkiem(searchValue);
    sanphamdakiem(searchedProducts);
    if(searchValue.length!==0){
      trangthaifilter(1);
    }
    else if(searchValue.length===0){
      trangthaifilter(0);
    }
    luutranghientai(0);
    const currentPage=getCurrentPage();
    loadsanphamcofilter(currentPage);

        loadphantrangcofilter(searchedProducts);
        const dsTrang=document.querySelectorAll('.SoTrang');
        dsTrang.forEach((trang,index) => {
          trang.addEventListener('click',function () {
            luutranghientai(index);
            quatrang();
            reloadcofilter();
              })
            });
  });

// Tìm kiếm nâng cao
// cần advancedsearch để phù hợp với tìm kiếm nâng cao

const filterForm = document.querySelector('.form-filter');
const typeSelect = document.getElementById('type');
const nameInput = document.getElementById('name');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const showResultBtn = document.querySelector('.btn-show-result');
const cancelBtn = document.querySelector('.btn-cancel');
const sortAscCheckbox = document.getElementById('sort-asc');
const sortDescCheckbox = document.getElementById('sort-desc');

// Sự kiện lắng nghe cho checkbox Ascending
sortAscCheckbox.addEventListener('change', function () {
  if (this.checked) {
    // Nếu Ascending được chọn, hủy chọn Descending
    sortDescCheckbox.checked = false;
  }
});

// Sự kiện lắng nghe cho checkbox Descending
sortDescCheckbox.addEventListener('change', function () {
  if (this.checked) {
    // Nếu Descending được chọn, hủy chọn Ascending
    sortAscCheckbox.checked = false;
  }
});

showResultBtn.addEventListener('click', function () {
  const selectedType = typeSelect.value;
  const searchName = nameInput.value.toLowerCase().trim();
  const minPrice = parseInt(minInput.value, 10) || 0;
  const maxPrice = parseInt(maxInput.value, 10) || Infinity;
  const isSortAsc = sortAscCheckbox.checked;
  const isSortDesc = sortDescCheckbox.checked;

  // Thực hiện sắp xếp tăng dần hoặc giảm dần dựa trên checkbox được chọn
  const sortedProducts = products.slice().sort((a, b) => {
    if (isSortAsc) {
      return a.price - b.price; // Sắp xếp tăng dần
    } else if (isSortDesc) {
      return b.price - a.price; // Sắp xếp giảm dần
    } else {
      return 0; // Không sắp xếp
    }
  });
  let productName;
  const filteredProducts = sortedProducts.filter(product => {
    const productType = selectedType === '' || product.tieude === selectedType;
     productName = searchName === '' || product.name.toLowerCase().includes(searchName);
    const priceInRange = product.price >= minPrice && product.price <= maxPrice;

    return productType && productName && priceInRange;
  });
    const advanced=new AdvancedSearch(isSortAsc,isSortDesc,searchName,selectedType,minPrice,maxPrice);
    searchBox.value='';
    saveAdvancedSearch(advanced);
    sanphamdakiem(filteredProducts);
    trangthaifilter(2);
    luutranghientai(0);
    const currentPage=getCurrentPage();
    loadsanphamcofilter(currentPage);

        loadphantrangcofilter(filteredProducts);
        const dsTrang=document.querySelectorAll('.SoTrang');
        dsTrang.forEach((trang,index) => {
          trang.addEventListener('click',function () {
            luutranghientai(index);
            quatrang();
            reloadcofilter();
              })
            });
});



cancelBtn.addEventListener('click', function () {
  // Reset form values and show all products
  typeSelect.value = '';
  nameInput.value = '';
  minInput.value = '';
  maxInput.value = '';
  sortAscCheckbox.checked = false;
  sortDescCheckbox.checked = false;
  luutranghientai(0);
  trangthaifilter(0);
  const currentpage=getCurrentPage();
  loadsanpham(currentpage);
  filterForm.classList.toggle('invisible');
  loadphantrang();
      const dsTrang=document.querySelectorAll('.SoTrang');
      dsTrang.forEach((trang,index) => {
        trang.addEventListener('click',function () {
          luutranghientai(index);
          quatrang();
          reload();
            })
          });
});

// Toggle visibility of the filter form
document.querySelector('.filter-toggle').addEventListener('click', function (event) {
  filterForm.classList.remove('invisible');
  event.stopPropagation();
  // reload();
});
productshow.addEventListener('click',function(event){
  filterForm.classList.add('invisible');
})
filterForm.addEventListener('click',function(event){
  event.stopPropagation();
})


// load khi mới mở trang hoặc reload lại trang
  const currentpage=getCurrentPage();
  const filter=getFilter();
  if(filter){
    if(filter===0){
      loadsanpham(currentpage);

      const sotrang = document.getElementById("sotrang");
      if(!sotrang.firstChild){
        loadphantrang();
      }
      const dsTrang=document.querySelectorAll('.SoTrang');
      dsTrang.forEach((trang,index) => {
        trang.addEventListener('click',function () {
          luutranghientai(index);
          quatrang();
          reload();
            })
          });
    }
    // class Advanced
    // constructor(isSortAsc,isSortDesc,tensp,tieude,minPrice,maxPrice){
    else if(filter===2){
      const currentPage=getCurrentPage();
      const advanced=getAdvancedSearch();
      typeSelect.value = advanced.tieude;
      nameInput.value = advanced.tensp;
      minInput.value = advanced.minPrice;
      maxInput.value = advanced.maxPrice;
      sortAscCheckbox.checked = advanced.isSortAsc;
      sortDescCheckbox.checked = advanced.isSortDesc;
      loadsanphamcofilter(currentPage);
      const sotrang = document.getElementById("sotrang");
      if(!sotrang.firstChild){
        loadphantrangcofilter();
      }
      const dsTrang=document.querySelectorAll('.SoTrang');
      dsTrang.forEach((trang,index) => {
        trang.addEventListener('click',function () {
          luutranghientai(index);
          quatrang();
          reloadcofilter();
            })
          });
    }
    else{
      const search=getSearch();
      let searchValue;
      if(search){
        searchValue=search;
        searchBox.value=search;
      }
      searchedProducts = products.filter(product => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchValue);
      });
      if(searchValue.length!==0){
        trangthaifilter(1);
      }
      else if(searchValue.length===0){
        trangthaifilter(0);
      }
      loadsanphamcofilter(currentpage,searchedProducts);

      const sotrang = document.getElementById("sotrang");
      if(!sotrang.firstChild){
        loadphantrangcofilter();
      }
      const dsTrang=document.querySelectorAll('.SoTrang');
      dsTrang.forEach((trang,index) => {
        trang.addEventListener('click',function () {
          luutranghientai(index);
          quatrang();
          reloadcofilter();
            })
          });
    }
  }
  else{
    loadsanpham(currentpage);

    const sotrang = document.getElementById("sotrang");
    if(!sotrang.firstChild){
      loadphantrang();
    }
    const dsTrang=document.querySelectorAll('.SoTrang');
    dsTrang.forEach((trang,index) => {
      trang.addEventListener('click',function () {
        luutranghientai(index);
        quatrang();
        reload();
          })
        });
  }


  quatrang();


  // tài khoản đăng nhập hiện tại
  var loggedInUser = localStorage.getItem('loggedInUser');
  if(loggedInUser){
    loadgiohang(loggedInUser);
  }
  
  // js product  sang DOM
  productElements = Array.from(document.querySelectorAll('.pro'));
        // khi nhấp vào nút mua hàng
        var carts=document.querySelectorAll('.cart');
        carts.forEach((cart,index) => {
          cart.addEventListener('click',function(){
            if (loggedInUser) {
              if(loggedInUser!=='Admin'){
                const products=getProducts();
                const ma=cart.closest('.pro').querySelector('.MaSP').textContent.replace(' #','');
                const position=products.findIndex(product=>product.ma===ma &&product.hidden===false)
                if (position === -1) {
                  alert('Không tìm thấy sản phẩm');
                  return;
                }
                const chosenproduct=products[position];
                AddProductInCart(loggedInUser,chosenproduct);
              }
              else{
                reloadcofilter();
              }
            }
            else{
              alert('Đăng nhập để mua');
            }
          })
  
            cart.addEventListener('click',function(event){
              event.stopPropagation();
            })
  
        });
  productElements.forEach(element => {
    element.addEventListener('click',function(){
    // khi nhấp vào giữa product để mở modal
      const ma=element.closest('.pro').querySelector('.MaSP').textContent.replace(' #','');
      // console.log(ma);
      changeModal(ma);
      loadModal();
  // js modal sang DOM  
        // tắt modal
      const modalElements=Array.from(document.querySelectorAll('.modal'));
      modalElements.forEach((modalElement, index) => {
      var close = modalElement.querySelector('.close');
      var container = modalElement.querySelector('.modal-container');
    
      function closeModal() {
        modalElement.classList.add('invisible');
      }
    
      close.addEventListener('click', closeModal);
      modalElement.addEventListener('click', closeModal);
      container.addEventListener('click', function (event) {
        event.stopPropagation();
      });
      });      


      // thêm product vào cart từ modal
            // CHI TIẾT MODAL 

var selectedDuongValue;
var selectedDaValue;
var selectedSizeValue;
var selectedToppingValue;
function getDuong() {
  var checkboxesDuong = document.querySelectorAll('.Duong');
  checkboxesDuong.forEach(checkboxDuong => {
    if (checkboxDuong.checked) {
      selectedDuongValue = checkboxDuong.value;
    }
  });

  if (!selectedDuongValue) {
    selectedDuongValue = 'Ít';
  }
}

function getDa() {
  var checkboxesDa = document.querySelectorAll('.Da');
  checkboxesDa.forEach(checkboxDa => {
    if (checkboxDa.checked) {
      selectedDaValue = checkboxDa.value;
    }
  });

  if (!selectedDaValue) {
    selectedDaValue = 'Ít';
  }
}

function getSize() {
  var checkboxesSize = document.querySelectorAll('.Size');
  checkboxesSize.forEach(checkboxSize => {
    if (checkboxSize.checked) {
      selectedSizeValue = checkboxSize.value;
    }
  });

  if (!selectedSizeValue) {
    selectedSizeValue = 'M';
  }
}

function getTopping() {
  var checkboxesTopping = document.querySelectorAll('.Topping');
  checkboxesTopping.forEach(checkboxTopping => {
    if (checkboxTopping.checked) {
      selectedToppingValue = checkboxTopping.value;
    }
  });

  if (!selectedToppingValue) {
    selectedToppingValue = 'Không';
  }
}


 var BUY=document.querySelector('.Mua');
 if(BUY){
   BUY.addEventListener('click',function(){
      getDuong();
      getDa();
      getSize();
      getTopping();
      let soluongmua=document.getElementById('SoLuongMua').value;
      if(soluongmua===""){
        soluongmua="1";
      }
      const modals=getModals();
      const modal=modals[0];
      const tieude=modal.tieude;
      const image=modal.img;
      const ma=modal.ma;
      const tensp=modal.name;
      const gia=modal.price;
      let thanhtien=gia*soluongmua;
      let duong=selectedDuongValue;
      let da=selectedDaValue;
      let size=selectedSizeValue;
      if(size==='Size X'){
        thanhtien=thanhtien+(gia*0.1*soluongmua);
      }
      else if(size==='Size XL'){
        thanhtien=thanhtien+(gia*0.2*soluongmua);
      }
      let topping=selectedToppingValue;
      if(topping!=='' && topping !=='Không'){
        thanhtien=thanhtien+(gia*0.1*soluongmua);
      }
      thanhtien = thanhtien.toFixed(0);
      if(tieude==='TOPPING'){
        duong='Không';
        da='Không';
        size='';
        topping='';
      }
      const note=document.querySelector('.note').value;

      if (loggedInUser) {
        if(loggedInUser!=='Admin'){      
          const chosenproduct=new Pro(CHART_BOX,image,ma,tieude,tensp,soluongmua,thanhtien,duong,da,size,topping,note);
          AddProductInCartByModal(loggedInUser,chosenproduct);
        }
        else{
          reloadcofilter();
        }
      }
      else{
        alert('Đăng nhập để mua');
      }
      
   })
 }


    })
  });

// hàm load chi tiết giỏ hàng
    MoChitiethoadon.addEventListener('click',function(){
      HeaderHoaDon.classList.remove('invisible');
      ChitietHoadon.classList.remove('invisible');
      TOTAL.classList.remove('invisible');
      PAY.classList.remove('invisible');
      loadgiohangchitietgiohang(loggedInUser);
      // xóa sản phẩm khỏi giỏ hàng    
        const XoaSanPhamKhoiGioHang=document.querySelectorAll('.ChartDel');
        XoaSanPhamKhoiGioHang.forEach(element => {
          element.addEventListener('click',function(){
                const ma=element.closest('.pro').querySelector('.MaSP').textContent.replace(' #','');
                deleteProFromCart(loggedInUser,ma);
          })   
        });
    })
    CHART_BOX.addEventListener('click',function(event){
      event.stopPropagation();
    })

}})

// window.addEventListener('beforeunload', function (event) {
//   // Thực hiện hành động của bạn ở đây
//   // Ví dụ: gọi hàm reload()
//   reload();
// });


// localStorage.clear(); 
//chưa có phần tử DOM class .ADJUST

// ĐĂNG XUÂT
function logout() {
  currentUser = null;
  localStorage.removeItem('loggedInUser');
  location.href = "page/signup.html";
  }
  var DangXuat=document.querySelector('.Dangxuat');
  DangXuat.addEventListener('click',logout);
var sidebarItems = document.querySelectorAll('.sidebar li');

sidebarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var currentItem = this;
        var currentOrder = parseInt(currentItem.style.order);

        // Xóa lớp 'active' khỏi tất cả các li
        sidebarItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Thêm lớp 'active' vào li được click
        currentItem.classList.add('active');

        // Thêm hiệu ứng trượt vào div content
        var contentDiv = document.querySelector('.content');

        // Kiểm tra xem liệu mục được bấm có thứ tự thấp hơn mục hiện tại đang có background màu đen hay không
        var currentActiveItem = document.querySelector('.sidebar li.active');
        if (currentActiveItem && parseInt(currentActiveItem.style.order) > currentOrder) {
            contentDiv.classList.remove('sliding-effect');
            contentDiv.classList.add('sliding-effect', 'slide-up');
        } else {
            contentDiv.classList.remove('sliding-effect', 'slide-up');
            void contentDiv.offsetWidth; // Kích hoạt reflow
            contentDiv.classList.add('sliding-effect');
        }
    });
});

var Quanlydonhang=document.getElementById('QUANLYDONHANG');
var Quanlynguoidung=document.getElementById('QUANLYNGUOIDUNG');
var Thongkedonhang=document.getElementById('THONGKEDONHANG');
Quanlydonhang.classList.remove('invisible');
// Quanlydonhang.classList.remove('invisible');
sidebarItems[0].addEventListener('click',function(){
    Quanlydonhang.classList.remove('invisible');
    Thongkedonhang.classList.add('invisible');
    Quanlynguoidung.classList.add('invisible');
})
sidebarItems[1].addEventListener('click',function(){
    Quanlydonhang.classList.add('invisible');
    Quanlynguoidung.classList.remove('invisible');
    Thongkedonhang.classList.add('invisible');
})
sidebarItems[2].addEventListener('click',function(){
    Quanlydonhang.classList.add('invisible');
    Quanlynguoidung.classList.add('invisible');
    Thongkedonhang.classList.remove('invisible');
})

sidebarItems[3].addEventListener('click',function(){
    window.location.href = 'index.html';
  })


// QUANLYDONHANG
class Pro_Chart {
  constructor(CHART_BOX, img, tensp, soluong, duong, da, size, topping, thanhtien,time,DIACHI,check,Type) {
    this.CHART_BOX = CHART_BOX;
    this.img = img;
    this.tensp = tensp;
    this.soluong = soluong;
    this.duong = duong;
    this.da = da;
    this.size = size;
    this.topping = topping;
    this.thanhtien = thanhtien;
    this.time=time;
    this.check=Number(check);
    this.Type=Type;
    this.DIACHI=DIACHI;

    this.element = document.createElement('div');
    this.element.classList.add('chart');
    this.element.setAttribute('data-img', img);

    const chartImage = document.createElement('img');
    chartImage.classList.add('ChartImage');
    chartImage.src = img;
    chartImage.alt = tensp;

    const ChartTsp = document.createElement('h5');
    ChartTsp.classList.add('ChartTsp');
    ChartTsp.textContent = tensp;

    const ChartSoLuong = document.createElement('h5');
    ChartSoLuong.classList.add('ChartSL');
    ChartSoLuong.textContent = soluong;

    const ChartDuong = document.createElement('h5');
    ChartDuong.classList.add('ChartDuong');
    // ChartDuong.classList.add('invisible');
    ChartDuong.textContent = duong;

    const ChartDa = document.createElement('h5');
    ChartDa.classList.add('ChartDa');
    // ChartDa.classList.add('invisible');
    ChartDa.textContent = da;

    const ChartSize = document.createElement('h5');
    ChartSize.classList.add('ChartSize');
    // ChartSize.classList.add('invisible');
    ChartSize.textContent = size;

    const ChartTopping = document.createElement('h5');
    ChartTopping.classList.add('ChartTopping');
    // ChartTopping.classList.add('invisible');
    ChartTopping.textContent = topping;

    const ChartTime = document.createElement('h5');
    ChartTime.classList.add('ChartTime');
    // ChartTime.classList.add('invisible');
    ChartTime.textContent = time;
    
    const ChartTien = document.createElement('h5');
    ChartTien.classList.add('ChartTien');
    ChartTien.textContent = thanhtien;
    
    const ChartDIACHI=document.createElement('h5');
    ChartDIACHI.classList.add('ChartDIACHI');
    ChartDIACHI.textContent=DIACHI;

    const HoanThanh=document.createElement('h5');
    HoanThanh.classList.add('HoanThanh');
    HoanThanh.textContent='XONG';

    const Huy=document.createElement('h5');
    Huy.classList.add('HUY');
    Huy.textContent='Hủy';
  
    this.CHART_BOX.appendChild(this.element);
    this.element.appendChild(chartImage);
    this.element.appendChild(ChartTsp);
    this.element.appendChild(ChartSoLuong);
    this.element.appendChild(ChartDuong);
    this.element.appendChild(ChartDa);
    this.element.appendChild(ChartSize);
    this.element.appendChild(ChartTopping);
    this.element.appendChild(ChartTime);
    this.element.appendChild(ChartDIACHI);
    this.element.appendChild(ChartTien);
    this.element.appendChild(HoanThanh);
    this.element.appendChild(Huy);
    }
  }

// Hàm trả về danh sách tất cả sản phẩm từ mọi tài khoản
function getAllProducts() {
  // Lấy dữ liệu từ Local Storage
  const allData = localStorage.getItem('charts');
  const allProducts = [];

  if (allData) {
    const charts = JSON.parse(allData);
    // Lặp qua mỗi tài khoản
    for (const username in charts) {
      const currentUserProducts = charts[username];
      // Lặp qua mỗi sản phẩm trong tài khoản hiện tại
      for (const product of currentUserProducts) {
        allProducts.push({ username: username, product: product });
      }
    }
  }

  return allProducts;
}

function getUsers() {
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

function calculateTotalThanhtien() {
  const allProducts = getAllProducts();
  let total = 0;

  for (const productData of allProducts) {
    const product = productData.product;
    const check = product.check;

    if (check === 2) {
      const thanhtien = parseFloat(product.thanhtien);
      total += thanhtien;
    }
  }

  return total;
}
// hàm xóa từng sản phẩm
function removeSingleProductFromAllAccounts(username, productName,productSL,productDuong,productDa,productSize,productTopping,productBill,date) {
  // Lấy dữ liệu từ Local Storage
  const allData = localStorage.getItem('charts');

  if (allData) {
    const charts = JSON.parse(allData);

    // Kiểm tra xem tài khoản có tồn tại trong dữ liệu hay không
    if (charts.hasOwnProperty(username)) {
      const currentUserProducts = charts[username];

      // Tìm chỉ số đầu tiên của sản phẩm trong danh sách sản phẩm của tài khoản
      const index = currentUserProducts.findIndex((product) => {
        return product.tensp === productName && product.thanhtien===productBill && product.soluong===productSL 
        && product.duong===productDuong && product.da===productDa && product.size===productSize && product.topping===productTopping &&product.time===date ;
      });
      // console.log('Kết quả tìm kiếm: ' + product.tensp+' '+pro.thanhtien);

      console.log(index);
      // Xóa sản phẩm khỏi danh sách sản phẩm của tài khoản
      if (index > -1) {
        currentUserProducts.splice(index, 1);
      }

      // Lưu dữ liệu đã cập nhật vào Local Storage
      localStorage.setItem('charts', JSON.stringify(charts));
      reload();
    }
  }
}

function reload() {
  // Tải lại trang
  location.reload();
}

function removeProductFromAllAccounts(username) {
  // Lấy dữ liệu từ Local Storage
  let charts = localStorage.getItem('charts');

  // Kiểm tra nếu không có dữ liệu, không làm gì cả
  if (!charts) {
    return;
  }

  // Giải mã dữ liệu từ chuỗi JSON
  charts = JSON.parse(charts);

  // Kiểm tra xem tài khoản có tồn tại trong danh sách hay không
  if (charts.hasOwnProperty(username)) {
    // Xóa toàn bộ sản phẩm của người dùng khỏi danh sách
    delete charts[username];
  }

  // Lưu dữ liệu đã được cập nhật vào Local Storage
  localStorage.setItem('charts', JSON.stringify(charts));
}

// Xóa tài khoản 

function deleteAccount(email) {
  const usersDataArray = getUsers();

  // Tìm vị trí của tài khoản trong mảng usersDataArray
  const index = usersDataArray.findIndex(user => user.email === email);

  if (index !== -1) {
    // Xóa tài khoản khỏi mảng
    usersDataArray.splice(index, 1);

    // Cập nhật Local Storage với danh sách đã được xóa
    localStorage.setItem('usersDataArray', JSON.stringify(usersDataArray));

    // Xóa tất cả các tài khoản đã hiển thị trên giao diện
    const userElements = document.getElementsByClassName('user');
    for (let i = userElements.length - 1; i >= 0; i--) {
      const emailElement = userElements[i].querySelector('p:first-child');
      if (emailElement.textContent === `Email: ${email}`) {
        userElements[i].remove();
      }
    }

    const remainingUsers = getUsers();
    if (remainingUsers.length === 0) {
      // Nếu không còn tài khoản người dùng nào khác
      // Xóa khóa usersDataArray khỏi Local Storage
      localStorage.removeItem('usersDataArray');
    }

    // Xóa toàn bộ sản phẩm trong chart của người dùng
    removeProductFromAllAccounts(email);
  }
}


const CHART_BOX = document.getElementById("CHART_SHOW");
const HISTORY=document.getElementById('CHART_SHOWOLD');
const DETAIL=document.getElementById('DETAIL');
const users=document.getElementById('USER_SHOW');

// load lên window
window.addEventListener('load', function() {
  const allProducts = getAllProducts();
  for (const { username, product } of allProducts) {
    if(product.check===1){
      const newChart = new Pro_Chart(
        CHART_BOX,
        product.img,
        product.tensp,
        "SL:" + product.soluong,
        "Đường:" + product.duong,
        "Đá:" + product.da,
        "Size:" + product.size,
        "Topping:" + product.topping,
        "Tổng:" + product.thanhtien,
        product.time,
        "Địa chỉ:"+product.DIACHI,
      );
      const chartUsername = document.createElement('h5');
      chartUsername.classList.add('ChartUsername');
      chartUsername.style.fontSize='11px';
      chartUsername.textContent = `Tài khoản: ${username}`;
      newChart.element.prepend(chartUsername);
    }
  }
  for (const { username, product } of allProducts) {
    if(product.check===2){
      const newChart = new Pro_Chart(
        HISTORY,
        product.img,
        product.tensp,
        "SL:" + product.soluong,
        "Đường:" + product.duong,
        "Đá:" + product.da,
        "Size:" + product.size,
        "Topping:" + product.topping,
        "Tổng:" + product.thanhtien,
        product.time,
        "Địa chỉ:"+product.DIACHI,
      );
      const chartUsername = document.createElement('h5');
      chartUsername.classList.add('ChartUsername');
      chartUsername.style.fontSize='11px';
      chartUsername.textContent = `Tài khoản: ${username}`;
      newChart.element.prepend(chartUsername);
      newChart.element.querySelector('.ChartDIACHI').classList.remove('invisible');
    }
  }

const chartElements = Array.from(document.querySelectorAll('.chart'));
const chartolds=Array.from(this.document.querySelectorAll('#CHART_SHOWOLD .chart'));
const chartwaits=Array.from(this.document.querySelectorAll('#CHART_SHOW .chart'));
chartolds.forEach(chart => {
  const hoanThanhElement = chart.querySelector('.HoanThanh');
  const HuyElement = chart.querySelector('.HUY');
  hoanThanhElement.classList.add('invisible');
  HuyElement.classList.add('invisible');
});

// đưa sản phẩm hoàn thành vào lịch sử 
  // Lặp qua từng phần tử trong mảng chartElements
  chartElements.forEach(function(chartElement) {
    // Lấy thẻ có class HoanThanh
    const hoanThanhElement = chartElement.querySelector('.HoanThanh');
    
    // Thêm sự kiện click
    hoanThanhElement.addEventListener('click', function() {
      // Lấy giá trị của 'tên tài khoản' từ thẻ cha của hoanThanhElement
      const chartUsernameElement = chartElement.querySelector('.ChartUsername');
      const username = chartUsernameElement.textContent.replace('Tài khoản: ', '');
      
      // Lấy thông tin sản phẩm từ các thẻ con của chartElement
      const img = chartElement.getAttribute('data-img');
      const tensp = chartElement.querySelector('.ChartTsp').textContent;
      const soluong = chartElement.querySelector('.ChartSL').textContent.replace('SL:', '');
      const duong = chartElement.querySelector('.ChartDuong').textContent.replace('Đường:', '');
      const da = chartElement.querySelector('.ChartDa').textContent.replace('Đá:', '');
      const size = chartElement.querySelector('.ChartSize').textContent.replace('Size:', '');
      const topping = chartElement.querySelector('.ChartTopping').textContent.replace('Topping:', '');
      const thanhtien = chartElement.querySelector('.ChartTien').textContent.replace('Tổng:', '');
      
      // Lấy dữ liệu từ Local Storage
      const allData = localStorage.getItem('charts');
      let charts = {};
      
      if (allData) {
        charts = JSON.parse(allData);
      }
      
      // Kiểm tra xem tài khoản có tồn tại trong charts không
      if (username in charts) {
        // Lặp qua danh sách sản phẩm của tài khoản đó
        for (const product of charts[username]) {
          // So sánh thông tin sản phẩm để tìm sản phẩm cần thay đổi
          if (product.img === img && product.tensp === tensp && product.soluong === soluong && product.duong === duong && product.da === da && product.size === size && product.topping === topping && product.thanhtien === thanhtien) {
            // Thay đổi giá trị của check thành 1
            product.check = 2;
            break; // Thoát khỏi vòng lặp nếu tìm thấy sản phẩm
          }
        }
        
        // Cập nhật dữ liệu vào Local Storage
        localStorage.setItem('charts', JSON.stringify(charts));
        reload();
      }
    });
  });

  const inputElement = document.getElementById('Find');
  inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const searchValue = inputElement.value.trim().toLowerCase();

      for (const chartElement of chartwaits) {
        const productName = chartElement.querySelector('.ChartTsp').textContent.toLowerCase();

        if (productName.includes(searchValue)) {
          chartElement.style.display = 'flex';
        } else {
          chartElement.style.display = 'none';
        }
      }
    }
  });
  const inputHistoryElement = document.getElementById('FindOLD');
  inputHistoryElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const searchValue = inputHistoryElement.value.trim().toLowerCase();

      for (const chartElement of chartolds) {
        const productName = chartElement.querySelector('.ChartTsp').textContent.toLowerCase();

        if (productName.includes(searchValue)) {
          chartElement.style.display = 'flex';
        } else {
          chartElement.style.display = 'none';
        }
      }
    }
  });



// kết thúc
// từ chối đơn hàng

  const delButtons = document.querySelectorAll('.HUY');
  delButtons.forEach((delButton) => {
    delButton.addEventListener('click', function () {
 // Lấy tên người dùng và sản phẩm từ các phần tử cha
  const username = delButton.parentNode.querySelector('.ChartUsername').textContent.replace('Tài khoản: ', '');
  const tensp=delButton.parentNode.querySelector('.ChartTsp').textContent;
  const sl=delButton.parentNode.querySelector('.ChartSL').textContent.replace('SL:','');
  const duong=delButton.parentNode.querySelector('.ChartDuong').textContent.replace('Đường:','');
  const da=delButton.parentNode.querySelector('.ChartDa').textContent.replace('Đá:','');
  const size=delButton.parentNode.querySelector('.ChartSize').textContent.replace('Size:','');
  const topping=delButton.parentNode.querySelector('.ChartTopping').textContent.replace('Topping:','');
  // const time=delButton.parentNode.querySelector('.')
  const tien=delButton.parentNode.querySelector('.ChartTien').textContent.replace('Tổng:','');
  const date=delButton.parentNode.querySelector('.ChartTime').textContent;
  console.log('chào '+username+' tensp '+tensp+' số lượng: '+sl+' đường: '+duong+' đá: '+da+' size: '+size+' Topping: '+topping+' tiền: '+tien+' Ngày:'+date);
 // Gọi hàm xóa sản phẩm với thông tin sản phẩm cần xóa
 removeSingleProductFromAllAccounts(username,tensp,sl,duong,da,size,topping,tien,date);
    });
  });

  // QUẢN LÝ TÀI KHOẢN
  const usersDataArray = getUsers();

  usersDataArray.forEach(function(userData) {
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.style.display='flex';
    userElement.style.alignItems='baseline';
    userElement.style.justifyContent='space-around';
    userElement.style.flexWrap='wrap';

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${userData.email}`;

    const passwordElement = document.createElement('p');
    passwordElement.textContent = `Password: ${userData.password}`;

    const deleteButton = document.createElement('h5');
    deleteButton.textContent = 'Xóa tài khoản';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      deleteAccount(userData.email);
      reload();
    });

    userElement.appendChild(emailElement);
    userElement.appendChild(passwordElement);
    userElement.appendChild(deleteButton);

    users.appendChild(userElement);
  });
  const countAccount=document.querySelector('.user_count');
  countAccount.textContent=usersDataArray.length;
});


// hiệu ứng đếm số 
function countUp(targetElement, targetNumber) {
  let currentNumber = 0;
  const numberString = targetNumber.toString().padStart(targetNumber.toString().length, '0');
  const increment = Math.ceil(targetNumber / 30); // Số lượng tăng lên sau mỗi frame

  const interval = setInterval(() => {
    const currentString = currentNumber.toString().padStart(targetNumber.toString().length, '0');
    let newString = '';
    for (let i = 0; i < numberString.length; i++) {
      const currentDigit = parseInt(currentString[i]);
      const targetDigit = parseInt(numberString[i]);
      const newDigit = Math.min(currentDigit + 1, targetDigit);
      newString += newDigit.toString();
    }
    currentNumber = parseInt(newString);
    
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber;
    }

    targetElement.textContent = currentNumber;
  }, 250); // Thời gian chờ giữa các frame (ms)
}
const allProducts = getAllProducts();
const filteredProducts = allProducts.filter(productData => productData.product.check === 2);
const targetNumber = filteredProducts.length;
const targetElement = document.querySelector('.SoLuongMuaNumber');
const totalThanhtien = calculateTotalThanhtien();
const targetThanhTien=document.querySelector('.DoanhThuNumber');
sidebarItems[2].addEventListener('click',function(){
  countUp(targetElement, targetNumber);
  countUp(targetThanhTien,totalThanhtien);
})





// show tổng giá của tầng sản phẩm


// Lấy các phần tử HTML
const startDayInput = document.getElementById('start-day');
const endDayInput = document.getElementById('end-day');
const typeInput = document.getElementById('TYPE');
const filterButton = document.querySelector('.FilterAccept');
const showOutDiv = document.getElementById('SHOWOUT');

filterButton.addEventListener('click', function() {
  const startDayParts = startDayInput.value.split('-');
  const endDayParts = endDayInput.value.split('-');
  
  const startDay = parseInt(startDayParts[2]);
  const startMonth = parseInt(startDayParts[1]);
  const endDay = parseInt(endDayParts[2]);
  const endMonth = parseInt(endDayParts[1]);
  // Kiểm tra endDay phải là ngày sau startDay
  // Lấy giá trị ngày bắt đầu và kết thúc từ input
  if ((startDay >endDay && startMonth===endMonth) || (startMonth>endMonth)) {
    alert('Ngày kết thúc phải sau ngày bắt đầu');
    return;
  }

  // Lấy giá trị loại từ input
  const selectedType = typeInput.value;
  
  // Xóa các phần tử hiện có trong showOutDiv
  while (showOutDiv.firstChild) {
    showOutDiv.removeChild(showOutDiv.firstChild);
  }

  // Tạo biến để lưu tổng thanh toán
  let totalPayment = 0;

  

  // Lặp qua mảng các sản phẩm và kiểm tra điều kiện
  for (const { username, product } of allProducts) {
    if (product.check === 2) {
      // Chuyển đổi giá trị thời gian của sản phẩm thành đối tượng Date chỉ với ngày và tháng
      const productTime = product.time;
      const timeParts = productTime.split(/[\/ :]/);

      // Chuyển đổi các phần tử thành số nguyên
      const day = parseInt(timeParts[0]);
      const month = parseInt(timeParts[1]);

      const isWithinRange = (month > startMonth || (month === startMonth && day >= startDay)) &&
                           (month < endMonth || (month === endMonth && day <= endDay));

      if (isWithinRange && (product.Type === selectedType || selectedType === 'TẤT CẢ')) {
        // Cộng tổng thanh toán
        totalPayment += parseInt(product.thanhtien);
      }
    }
  };

  // Hiển thị tổng thanh toán
  // Tạo một thẻ div để chứa thông tin sản phẩm
  const productDiv = document.createElement('div');
  productDiv.classList.add('Total');
  productDiv.textContent = `${selectedType} - ${totalPayment}`;

  // Thêm sản phẩm vào showOutDiv
  showOutDiv.appendChild(productDiv);
  
  const divs = document.querySelectorAll('.Total');
  DETAIL.classList.add('invisible')
  if (divs) {
    divs.forEach(element => {
      element.addEventListener('click', function() {
        // Tách chuỗi nội dung thành mảng các phần tử
        const contentParts = element.textContent.split(' - ');
        divs.forEach(element => {
          element.classList.add('invisible');
        });
        // Lấy giá trị của selectedType từ mảng
        const Type = contentParts[0];
        DETAIL.classList.remove('invisible');
        while(DETAIL.firstChild){
          DETAIL.removeChild(DETAIL.firstChild)
        }
        for (const { username, product } of allProducts) {
          if ((product.check === 2 && product.Type === Type) || (Type==='TẤT CẢ' && product.check===2)) {
            const newChart = new Pro_Chart(
              DETAIL,
              product.img,
              product.tensp,
              "SL:" + product.soluong,
              "Đường:" + product.duong,
              "Đá:" + product.da,
              "Size:" + product.size,
              "Topping:" + product.topping,
              "Tổng:" + product.thanhtien,
              product.time
            );
            const chartUsername = document.createElement('h5');
            chartUsername.classList.add('ChartUsername');
            chartUsername.style.fontSize = '11px';
            chartUsername.textContent = `Tài khoản: ${username}`;
            newChart.element.prepend(chartUsername);
          }
          const chartElements = Array.from(document.querySelectorAll('#DETAIL .chart'));
          chartElements.forEach(chart => {
            const hoanThanhElement = chart.querySelector('.HoanThanh');
            const HuyElement = chart.querySelector('.HUY');
            hoanThanhElement.classList.add('invisible');
            HuyElement.classList.add('invisible');
          });
        }
      })
    });
  }
});
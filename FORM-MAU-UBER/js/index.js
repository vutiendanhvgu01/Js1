function TinhTien(){
    var laySoKm = document.getElementById('soKm').value
    laySoKm = parseFloat(laySoKm)
    var layThoiGianCho = document.getElementById('thoiGianCho').value
    layThoiGianCho = parseFloat(layThoiGianCho)
    // console.log(laySoKm)
    // console.log(layThoiGianCho)
    var divThanhTien =document.getElementById('divThanhTien')
    divThanhTien.style.display ="block"
    var xuatTien = document.getElementById('xuatTien')
    

    var loaiXe = layLoaiUber()
     
    // console.log(loaiXe)
    switch(loaiXe){
        case "uberX":
            if(laySoKm <=1){
                var thanhTien = parseFloat(laySoKm)*8000 + parseFloat(layThoiGianCho)*2000
            } else if(laySoKm>1 && laySoKm<=20){
                var thanhTien = 1*8000 + parseFloat(laySoKm - 1)*12000 + parseFloat(layThoiGianCho)*2000
            } else{
                var thanhTien = 1*8000 + 20*12000 + parseFloat(laySoKm-21)*10000 + parseFloat(layThoiGianCho)*2000
            }
            break
        case "uberSUV":
            if(laySoKm <=1){
                var thanhTien = parseFloat(laySoKm)*9000 + parseFloat(layThoiGianCho)*3000
            } else if(laySoKm>1 && laySoKm<=20){
                var thanhTien = 1*9000+parseFloat(laySoKm-1)*14000 + parseFloat(layThoiGianCho)*3000
            } else{
                var thanhTien = 1*9000+20*14000+parseFloat(laySoKm-21)*12000 + parseFloat(layThoiGianCho)*3000
            }
            break
        case "uberBlack":
            if(laySoKm <=1){
                var thanhTien = parseFloat(laySoKm)*8000 + parseFloat(layThoiGianCho)*4000
            } else if(laySoKm>1 && laySoKm<=20){
                var thanhTien = 1*10000+parseFloat(laySoKm-1)*16000 + parseFloat(layThoiGianCho)*4000
            } else{
                var thanhTien = 1*10000+20*16000+parseFloat(laySoKm-21)*14000 + parseFloat(layThoiGianCho)*4000
            }
            break        
    }
    
    xuatTien.innerHTML = thanhTien
}
function layLoaiUber(){
    var ketQua
    var uberX = document.getElementById('uberX').checked
    var uberSUV = document.getElementById('uberSUV').checked
    var uberBlack = document.getElementById('uberBlack').checked
    if(uberX == false && uberSUV == false && uberBlack == false){
        alert("Vui long chon loai xe")

    }else if(uberX){
        ketQua = "uberX"
    }else if(uberSUV){
        ketQua = "uberSUV"
    }else if(uberBlack){
        ketQua = "uberBlack"
    }
    return ketQua
}
function layHoaDon(){
    var columnHoaDon = document.querySelectorAll('.td-col')
    console.log(columnHoaDon)
    // setTimeout(() => 
    // columnHoaDon[0].innerHTML = "Danh"
    // )
    var laySoKm = document.getElementById('soKm').value
    laySoKm = parseFloat(laySoKm)
    var layThoiGianCho = document.getElementById('thoiGianCho').value
    layThoiGianCho = parseFloat(layThoiGianCho)
    var loaiXe = layLoaiUber()
     
    // console.log(loaiXe)
    switch(loaiXe){
        case "uberX":
            if(laySoKm <=1){
                columnHoaDon[0].innerHTML ="uberX"
                columnHoaDon[1].innerHTML = laySoKm
                columnHoaDon[2].innerHTML = 8000
                columnHoaDon[3].innerHTML = laySoKm*8000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 2000
                columnHoaDon[15].innerHTML = layThoiGianCho*2000
                var thanhTien = parseFloat(laySoKm)*8000 + parseFloat(layThoiGianCho)*2000
                
                columnHoaDon[19].innerHTML = thanhTien
            } else if(laySoKm>1 && laySoKm<=20){
                columnHoaDon[0].innerHTML ="uberX"
                columnHoaDon[1].innerHTML = 1
                columnHoaDon[2].innerHTML = 8000
                columnHoaDon[3].innerHTML = 1*8000
                columnHoaDon[4].innerHTML ="uberX"
                columnHoaDon[5].innerHTML = laySoKm-1
                columnHoaDon[6].innerHTML = 12000
                columnHoaDon[7].innerHTML = (laySoKm-1)*12000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 2000
                columnHoaDon[15].innerHTML = layThoiGianCho*2000
                var thanhTien = 1*8000 + parseFloat(laySoKm - 1)*12000 + parseFloat(layThoiGianCho)*2000
                columnHoaDon[19].innerHTML = thanhTien
            } else{
                columnHoaDon[0].innerHTML ="uberX"
                columnHoaDon[1].innerHTML = 1
                columnHoaDon[2].innerHTML = 8000
                columnHoaDon[3].innerHTML = 1*8000
                columnHoaDon[4].innerHTML ="uberX"
                columnHoaDon[5].innerHTML = 19
                columnHoaDon[6].innerHTML = 12000
                columnHoaDon[7].innerHTML = 19*12000
                columnHoaDon[8].innerHTML ="uberX"
                columnHoaDon[9].innerHTML = laySoKm-20
                columnHoaDon[10].innerHTML = 10000
                columnHoaDon[11].innerHTML = (laySoKm-20)*10000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 2000
                columnHoaDon[15].innerHTML = layThoiGianCho*2000
                var thanhTien = 1*8000 + 20*12000 + parseFloat(laySoKm-21)*10000 + parseFloat(layThoiGianCho)*2000
                columnHoaDon[19].innerHTML = thanhTien
            }
            break
        case "uberSUV":
            if(laySoKm <=1){
                columnHoaDon[0].innerHTML ="uberSUV"
                columnHoaDon[1].innerHTML = laySoKm
                columnHoaDon[2].innerHTML = 9000
                columnHoaDon[3].innerHTML = laySoKm*9000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 3000
                columnHoaDon[15].innerHTML = layThoiGianCho*3000
                var thanhTien = parseFloat(laySoKm)*9000 + parseFloat(layThoiGianCho)*3000
                columnHoaDon[19].innerHTML = thanhTien
            } else if(laySoKm>1 && laySoKm<=20){
                columnHoaDon[0].innerHTML ="uberSUV"
                columnHoaDon[1].innerHTML = 1
                columnHoaDon[2].innerHTML = 9000
                columnHoaDon[3].innerHTML = 1*9000
                columnHoaDon[4].innerHTML ="uberSUV"
                columnHoaDon[5].innerHTML = laySoKm-1
                columnHoaDon[6].innerHTML = 14000
                columnHoaDon[7].innerHTML = (laySoKm-1)*14000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 3000
                columnHoaDon[15].innerHTML = layThoiGianCho*3000
                var thanhTien = 1*9000+parseFloat(laySoKm-1)*14000 + parseFloat(layThoiGianCho)*3000
                columnHoaDon[19].innerHTML = thanhTien
            } else{
                columnHoaDon[0].innerHTML ="uberSUV"
                columnHoaDon[1].innerHTML = 1
                columnHoaDon[2].innerHTML = 9000
                columnHoaDon[3].innerHTML = 1*9000
                columnHoaDon[4].innerHTML ="uberX"
                columnHoaDon[5].innerHTML = 19
                columnHoaDon[6].innerHTML = 14000
                columnHoaDon[7].innerHTML = 19*14000
                columnHoaDon[8].innerHTML ="uberX"
                columnHoaDon[9].innerHTML = laySoKm-20
                columnHoaDon[10].innerHTML = 12000
                columnHoaDon[11].innerHTML = (laySoKm-20)*12000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 3000
                columnHoaDon[15].innerHTML = layThoiGianCho*3000
                var thanhTien = 1*9000+20*14000+parseFloat(laySoKm-21)*12000 + parseFloat(layThoiGianCho)*3000
                columnHoaDon[19].innerHTML = thanhTien
            }
            break
        case "uberBlack":
            if(laySoKm <=1){
                columnHoaDon[0].innerHTML ="uberBlack"
                columnHoaDon[1].innerHTML = laySoKm
                columnHoaDon[2].innerHTML = 10000
                columnHoaDon[3].innerHTML = laySoKm*10000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 4000
                columnHoaDon[15].innerHTML = layThoiGianCho*4000
                var thanhTien = parseFloat(laySoKm)*8000 + parseFloat(layThoiGianCho)*4000
                columnHoaDon[19].innerHTML = thanhTien
            } else if(laySoKm>1 && laySoKm<=20){
                columnHoaDon[0].innerHTML ="uberBlack"
                columnHoaDon[1].innerHTML = 1
                columnHoaDon[2].innerHTML = 10000
                columnHoaDon[3].innerHTML = 1*10000
                columnHoaDon[4].innerHTML ="uberBlack"
                columnHoaDon[5].innerHTML = laySoKm-1
                columnHoaDon[6].innerHTML = 16000
                columnHoaDon[7].innerHTML = (laySoKm-1)*16000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 4000
                columnHoaDon[15].innerHTML = layThoiGianCho*4000
                var thanhTien = 1*10000+parseFloat(laySoKm-1)*16000 + parseFloat(layThoiGianCho)*4000
                columnHoaDon[19].innerHTML = thanhTien
            } else{
                columnHoaDon[0].innerHTML ="uberBlack"
                columnHoaDon[1].innerHTML = 1
                columnHoaDon[2].innerHTML = 10000
                columnHoaDon[3].innerHTML = 1*10000
                columnHoaDon[4].innerHTML ="uberBlack"
                columnHoaDon[5].innerHTML = 19
                columnHoaDon[6].innerHTML = 16000
                columnHoaDon[7].innerHTML = 19*16000
                columnHoaDon[8].innerHTML ="uberBlack"
                columnHoaDon[9].innerHTML = laySoKm-20
                columnHoaDon[10].innerHTML = 14000
                columnHoaDon[11].innerHTML = (laySoKm-20)*14000
                columnHoaDon[13].innerHTML = layThoiGianCho
                columnHoaDon[14].innerHTML = 4000
                columnHoaDon[15].innerHTML = layThoiGianCho*4000
                var thanhTien = 1*10000+20*16000+parseFloat(laySoKm-21)*14000 + parseFloat(layThoiGianCho)*4000
                columnHoaDon[19].innerHTML = thanhTien
            }
            break        
    }
}
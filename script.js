window.addEventListener('load', function() {
    // Trì hoãn việc thực thi JavaScript cho đến khi cửa sổ được tải hoàn tất
    console.log("Loading");
});

function generateImage() {
    // Lấy văn bản từ ô nhập
    var inputText = document.getElementById('inputText').value;

    // Lấy đối tượng hình ảnh và tạo một đối tượng hình ảnh mới
    var image = document.getElementById('outputImage');
    var newImage = new Image();
    var overlayImage = new Image();
    newImage.src = 'img.png';

    // Địa chỉ URL của hình ảnh gốc (đặt đường dẫn thích hợp)
    overlayImage.src = 'overlay.png';

    // Khi hình ảnh được tải hoàn tất, chèn văn bản vào hình ảnh
    overlayImage.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        // Đặt kích thước của canvas bằng kích thước của hình ảnh
        canvas.width = newImage.width;
        canvas.height = newImage.height;
        overlayImage.width = 50;
        overlayImage.height = 50;
        // Vẽ hình ảnh gốc lên canvas
        context.drawImage(newImage, 0, 0);
        context.drawImage(overlayImage, canvas.width / 2 - overlayImage.width / 2, canvas.height / 2 - overlayImage.height / 2);

        // Đặt font và vẽ văn bản vào giữa canvas
        context.font = '100px Helvetlns';
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.fillText(inputText, canvas.width / 2, canvas.height / 2);

        // Đặt nguồn của hình ảnh mới là dữ liệu URL của canvas
        image.src = canvas.toDataURL('image/jpeg');

    };

}
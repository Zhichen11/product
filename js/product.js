let quantity = 1;

        function increaseQuantity() {
            quantity++;
            document.getElementById('quantity').value = quantity;
        }

        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity').value = quantity;
            }
        }

        function addToCart() {
            const cartQuantity = parseInt(document.getElementById('cartQuantity').innerText);
            document.getElementById('cartQuantity').innerText = cartQuantity + quantity;
            // 在這裡你可以添加將商品添加到購物車的邏輯
        }
        document.addEventListener('DOMContentLoaded', function () {
            const ratingContainer = document.querySelector('.rating');
            const stars = document.querySelectorAll('.star');
        
            stars.forEach(function (star) {
                star.addEventListener('mouseover', function () {
                    const value = this.getAttribute('data-value');
                    highlightStars(value);
                });
        
                star.addEventListener('mouseout', function () {
                    const currentValue = ratingContainer.getAttribute('data-rating');
                    highlightStars(currentValue);
                });
        
                star.addEventListener('click', function () {
                    const value = this.getAttribute('data-value');
                    ratingContainer.setAttribute('data-rating', value);
                    // 在這裡添加將評分資訊傳送到後端的程式碼
                    sendDataToBackend(value);
                });
            });
        
            function highlightStars(value) {
                stars.forEach(function (star) {
                    star.style.color = value >= star.getAttribute('data-value') ? '#f8d30b' : '#ddd';
                });
            }
        
            function sendDataToBackend(value) {
                // 使用 XMLHttpRequest 或 Fetch API 將評分資訊傳送到後端
                // 這裡僅為示範，實際上需要根據你的後端接口進行相應的修改
                const xhr = new XMLHttpRequest();
                xhr.open('POST', '/your-backend-endpoint', true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({ rating: value }));
        
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        console.log('評分資訊成功傳送到後端');
                    } else {
                        console.error('評分資訊傳送失敗');
                    }
                };
            }
        });

        
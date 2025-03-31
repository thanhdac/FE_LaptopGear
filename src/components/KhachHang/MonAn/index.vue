<template>
    <div class="container py-4">
        <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <h2 class="card-title mb-0 fw-bold">Danh Sách Các Món Ăn</h2>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary px-3">
                            <i class="fas fa-sort-amount-down-alt me-1"></i>
                            Tăng dần
                        </button>
                        <button class="btn btn-sm btn-outline-primary px-3">
                            <i class="fas fa-sort-amount-up-alt me-1"></i>
                            Giảm dần
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://hongphatfood.com/wp-content/uploads/2020/05/vifon-beef-pho-6.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Phở Bò">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Phở Bò</h6>
                        <p class="text-muted small mb-2">Quán Phở Gia Truyền</p>
                        <p class="mb-0"><del class="text-muted">50000đ</del> <strong class="ms-2">45000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2024_1_12_638406880045931692_cach-lam-bun-cha-ha-noi-0.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bún Chả">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bún Chả</h6>
                        <p class="text-muted small mb-2">Quán Phở Gia Truyền</p>
                        <p class="mb-0"><del class="text-muted">40000đ</del> <strong class="ms-2">35000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://drt.danang.vn/content/images/2024/06/quan-banh-canh-da-nang-7.png" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bánh Canh">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bánh Canh</h6>
                        <p class="text-muted small mb-2">Quán Phở Gia Truyền</p>
                        <p class="mb-0"><del class="text-muted">30000đ</del> <strong class="ms-2">25000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://i.ex-cdn.com/vntravellive.com/files/news/2023/05/15/luu-ngay-5-quan-banh-mi-ngon-nen-thu-tai-sai-gon-151953.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bánh Mì">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bánh Mì</h6>
                        <p class="text-muted small mb-2">Tiệm Bánh Mì Sài Gòn</p>
                        <p class="mb-0"><del class="text-muted">20000đ</del> <strong class="ms-2">18000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://cdn.tgdd.vn/2021/02/CookProduct/1200-1200x676-16.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Mì Quảng">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Mì Quảng</h6>
                        <p class="text-muted small mb-2">Quán Mì Quảng Đà Nẵng</p>
                        <p class="mb-0"><del class="text-muted">60000đ</del> <strong class="ms-2">55000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://static.vinwonders.com/production/com-tam-da-nang-1.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Cơm Tấm">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Cơm Tấm</h6>
                        <p class="text-muted small mb-2">Quán Cơm Tấm Sài Gòn</p>
                        <p class="mb-0"><del class="text-muted">45000đ</del> <strong class="ms-2">40000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://file.hstatic.net/200000438723/file/1_61384613d3e04acfa07abeed78c87c04_grande.png" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Chả Giò">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Chả Giò</h6>
                        <p class="text-muted small mb-2">Quán Ăn Gia Đình</p>
                        <p class="mb-0"><del class="text-muted">35000đ</del> <strong class="ms-2">30000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://daylambanh.edu.vn/wp-content/uploads/2019/03/banh-xeo-bang-bot-pha-san-600x400.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bánh Xèo">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bánh Xèo</h6>
                        <p class="text-muted small mb-2">Quán Bánh Xèo Miền Tây</p>
                        <p class="mb-0"><del class="text-muted">55000đ</del> <strong class="ms-2">50000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://www.huongnghiepaau.com/wp-content/uploads/2019/01/hu-tieu-nam-vang-1.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Hủ Tiếu">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Hủ Tiếu</h6>
                        <p class="text-muted small mb-2">Quán Hủ Tiếu Nam Vang</p>
                        <p class="mb-0"><del class="text-muted">40000đ</del> <strong class="ms-2">35000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://duonggiahotel.vn/wp-content/uploads/2023/11/banh-beo-da-nang-avt.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bánh Bèo">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bánh Bèo</h6>
                        <p class="text-muted small mb-2">Quán Bánh Bèo Huế</p>
                        <p class="mb-0"><del class="text-muted">25000đ</del> <strong class="ms-2">20000đ</strong></p>
                    </div>
                </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://danangbest.com/upload_content/banh-cuon-da-nang-7.webp" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bánh Cuốn">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bánh Cuốn</h6>
                        <p class="text-muted small mb-2">Quán Bánh Cuốn Thanh Trì</p>
                        <p class="mb-0"><del class="text-muted">30000đ</del> <strong class="ms-2">25000đ</strong></p>
                    </div>
                </div>
            </div>
<!-- abc -->
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card h-100 shadow-sm">
                    <img src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/08_2022/banh-trang-muoi-ot-tay-ninh.jpg" class="card-img-top" style="height: 150px; object-fit: cover;" alt="Bánh Tráng">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">Bánh Tráng</h6>
                        <p class="text-muted small mb-2">Quán Bánh Tráng Tây Ninh</p>
                        <p class="mb-0"><del class="text-muted">35000đ</del> <strong class="ms-2">30000đ</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style></style>
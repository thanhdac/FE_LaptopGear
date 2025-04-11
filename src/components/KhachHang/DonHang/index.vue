<template>
    <div class="row">
        <div class="col-lg-5 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">MÓN ĂN HIỆN TRONG GIỎ HÀNG</h5>
                </div>
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <img src="data:image/jpeg;base64,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"
                                        height="40" width="60" class="me-3">
                                    <h5 class="mb-0">Bánh xèo tôm nhảy Năm Hiền</h5>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample" style="">
                                <div class="accordion-body">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4"><img
                                                        src="https://i.ytimg.com/vi/ZbSbc9Z8K6E/maxresdefault.jpg"
                                                        class="img-fluid rounded-start" alt="..."
                                                        style="height: 170px; width: 100%;">
                                                </div>
                                                <div class="col-md-8">
                                                    <h5 class="card-title mt-1"><b>Cơm Chiên Dương Châu</b></h5>
                                                    <table class="table table-borderless mb-0">
                                                        <tbody>
                                                            <tr class="align-middle">
                                                                <td>Số Lượng</td>
                                                                <td>
                                                                    <div class="input-group">
                                                                        <span class="input-group-text"
                                                                            id="basic-addon1">-</span>
                                                                        <input type="text" class="form-control">
                                                                        <span class="input-group-text"
                                                                            id="basic-addon1">+</span>
                                                                    </div>
                                                                </td>

                                                            </tr>
                                                            <tr class="align-middle">
                                                                <td>Giá Bán</td>
                                                                <td>10.000 đ</td>
                                                            </tr>
                                                            <tr class="text-nowrap">
                                                                <td>Thành Tiền</td>
                                                                <td>20.000 đ</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <img src="https://login.medlatec.vn//ImagePath/images/20230420/20230420_Nuoc-ep-dua-co-chua-nhieu-vitamin-va-khoang-chat-.jpg"
                                        height="40" width="60" class="me-3">
                                    <h5 class="mb-0">Quán Bà bé</h5>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample" style="">
                                <div class="accordion-body">
                                    <div class="card mb-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-4"><img
                                                        src="https://lyoncoffee.com.vn/wp-content/uploads/hinh-anh-ly-ca-phe-dep-nhat-15.jpg"
                                                        class="img-fluid rounded-start" alt="..."
                                                        style="height: 170px; width: 100%;">
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title"><b>Cafe Sữa</b></h5>
                                                        <table class="table table-borderless mb-0">
                                                            <tbody>
                                                                <tr class="align-middle">
                                                                    <td>Số Lượng</td>
                                                                    <td>
                                                                        <div class="input-group">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1">-</span>
                                                                            <input type="text" class="form-control">
                                                                            <span class="input-group-text"
                                                                                id="basic-addon1">+</span>
                                                                        </div>
                                                                    </td>

                                                                </tr>
                                                                <tr class="align-middle">
                                                                    <td>Giá Bán</td>
                                                                    <td>10.000 đ</td>
                                                                </tr>
                                                                <tr class="text-nowrap">
                                                                    <td>Thành Tiền</td>
                                                                    <td>20.000 đ</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">MÓN ĂN ĐÃ ĐẶT</h5>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table hover">
                        <thead class="text-center align-middle">
                            <tr class="table-secondary">
                                <th>Mã đơn hàng</th>
                                <th>Tên Quán Ăn</th>
                                <th>Ngày Đặt</th>
                                <th>Tổng Tiền</th>
                                <th>Trạng Thái</th>
                                <th>Chi Tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>#123456</th>
                                <td>Tên Quán Ăn</td>
                                <td class="text-center">2025-04-10</td>
                                <td class="text-end">100.000 đ</td>
                                <td class="text-center">
                                    <span class="badge rounded-pill w-100 bg-success py-2">
                                        <span style="font-size: 15px;">Đã giao</span>
                                    </span>
                                </td>
                                <td class="text-center">
                                    <button type="button" class="btn btn-primary btn-sm radius-30 px-4"
                                        data-bs-toggle="modal" data-bs-target="#orderDetailsModal">
                                        <i class="bx bx-detail me-1"></i>Chi tiết
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="orderDetailsModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header text-white">
                    <h5 class="modal-title">
                        <i class="bx bx-package me-2"></i>
                        Chi Tiết Đơn Hàng #123456
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <!-- Thông Tin Đơn Hàng -->
                        <div class="col-12 d-flex">
                            <div class="card border-0 bg-light flex-fill mb-0">
                                <div class="card-body">
                                    <h6 class="card-title mb-3">
                                        <i class="bx bx-info-circle me-2"></i>Thông Tin Đơn Hàng
                                    </h6>
                                    <div class="mb-2">
                                        <i class="bx bx-user text-primary me-2"></i>
                                        <strong>Khách Hàng:</strong>
                                        <span class="ms-1">Nguyễn Văn A</span>
                                    </div>
                                    <div class="mb-2">
                                        <i class="bx bx-calendar text-primary me-2"></i>
                                        <strong>Ngày Đặt:</strong>
                                        <span class="ms-1">2024-03-10</span>
                                    </div>
                                    <div class="mb-2">
                                        <i class="bx bx-check-circle text-primary me-2"></i>
                                        <strong>Trạng Thái:</strong>
                                        <span class="badge rounded-pill bg-success px-3 ms-1">
                                            <i class="bx bxs-circle me-1"></i>
                                            Đã giao
                                        </span>
                                    </div>
                                    <div class="mb-2">
                                        <i class="bx bx-check-circle text-primary me-2"></i>
                                        <strong>Địa Chỉ Nhận Hàng:</strong>
                                        <span class="ms-1"> 123 Đường ABC, Quận 1, TP.HCM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Chi Tiết Sản Phẩm -->
                    <h6 class="mb-3">
                        <i class="bx bx-cart me-2"></i>Chi Tiết Đơn Hàng
                    </h6>
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered mb-0">
                            <thead class="">
                                <tr class="align-middle bg-primary text-light text-center">
                                    <th>Món Ăn</th>
                                    <th class="">Số Lượng</th>
                                    <th class="">Đơn Giá</th>
                                    <th class="">Ghi Chú</th>
                                    <th class="">Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <i class="bx bx-dish me-2 text-primary"></i>
                                            Mì trộn tê cay
                                        </div>
                                    </td>
                                    <td class="text-center">1</td>
                                    <td class="text-end">50.000 đ</td>
                                    <td class="text-end">
                                        ghi chú
                                    </td>
                                    <td class="text-end fw-bold">50.000 đ</td>
                                </tr>
                            </tbody>
                            <tfoot class="table-light">
                                <tr class="align-middle">
                                    <td class="text-start">
                                        <strong>Tổng Cộng:</strong>
                                    </td>
                                    <td colspan="5" class="text-end">
                                        <span class="text-primary fs-5 fw-bold">
                                            100k
                                        </span>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="bx bx-x me-1"></i>Đóng
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style>

</style>
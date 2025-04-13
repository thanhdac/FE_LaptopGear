<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">DANH SÁCH ĐƠN HÀNG ĐÃ ĐẶT</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table hover align-middle">
                            <thead class="text-center align-middle">
                                <tr class="table-secondary">
                                    <th>Mã đơn hàng</th>
                                    <th>Tên Quán Ăn</th>
                                    <th>Ngày Đặt</th>
                                    <th>Tiền Hàng</th>
                                    <th>Phí Ship</th>
                                    <th>Tổng Tiền</th>
                                    <th>Trạng Thái</th>
                                    <th>Shipper</th>
                                    <th>Thông Tin Nhận Hàng</th>
                                    <th>Chi Tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center">value.ma_don_hang</th>
                                    <td>value.ten_quan_an</td>
                                    <td class="text-center">value.created_at</td>
                                    <td class="text-end">value.tien_hang</td>
                                    <td class="text-end">value.phi_ship</td>
                                    <td class="text-end">value.tong_tien</td>
                                    <td class="text-center">
                                        <span class="badge rounded-pill w-100 bg-success py-2">
                                            <span style="font-size: 15px;">Đã giao</span>
                                        </span>
                                    </td>
                                    <td>value.ho_va_ten_shipper</td>
                                    <td>
                                        value.dia_chi - value.ten_nguoi_nhan - value.so_dien_thoai
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
    </div>
    <div class="modal fade" id="orderDetailsModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header text-white">
                    <h5 class="modal-title">
                        <i class="bx bx-package fa-lg"></i>
                        CHI TIẾT ĐƠN HÀNG - <b class="text-danger">chi_tiet.ma_don_hang</b>
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <!-- Chi Tiết Sản Phẩm -->
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered mb-0">
                            <thead class="">
                                <tr class="align-middle table-primary text-center">
                                    <th>Tên Món Ăn</th>
                                    <th>Số Lượng</th>
                                    <th>Đơn Giá</th>
                                    <th>Ghi Chú</th>
                                    <th>Thành Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>value.ten_mon_an</td>
                                    <td class="text-center">value.ten_so_luong</td>
                                    <td class="text-end">value.don_gia</td>
                                    <td class="text-end">value.ghi_chu</td>
                                    <td class="text-end fw-bold">value.thanh_tien</td>
                                </tr>
                            </tbody>
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

<style></style>
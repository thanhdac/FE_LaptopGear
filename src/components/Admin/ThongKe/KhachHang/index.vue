<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5 col-md-6">
                            <label for="">Từ ngày</label>
                            <input type="date" class="form-control mt-2 mb-2">
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <label for="">Đến ngày</label>
                            <input type="date" class="form-control mt-2">
                        </div>
                        <div class="col-lg-2 col-md-12">
                            <label for="">&nbsp;</label>
                            <button class="btn btn-primary w-100 mt-2">Thống Kê</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    Bảng thống kê
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">THỐNG KÊ KHÁCH HÀNG MỚI</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover align-middle">
                            <thead>
                                <tr class="table-danger text-center">
                                    <th>#</th>
                                    <th>Tên Khách Hàng</th>
                                    <th>Số Đơn Hàng</th>
                                    <th>Tổng Tiền Đã Đặt</th>
                                    <th>Đơn Hàng Lớn Nhất</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center">1</th>
                                    <td class="">value.ten_khach_hang</td>
                                    <td class="text-center">value.so_luong_don_hang</td>
                                    <td class="text-center">value.tong_tien_dat_hang</td>
                                    <td class="text-end">value.don_hang_lon_nhat</td>
                                </tr>
                            </tbody>
                        </table>
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

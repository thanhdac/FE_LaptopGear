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
                    <h5 class="mt-2">THỐNG KÊ MÓN ĂN BÁN CHẠY</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover align-middle">
                            <thead>
                                <tr class="table-danger text-center">
                                    <th>#</th>
                                    <th>Tên Món Ăn</th>
                                    <th>Số Lượng Đã Bán</th>
                                    <th>Số Lượng Khách Hàng Đặt</th>
                                    <th>Tổng Doanh Thu</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center">1</th>
                                    <td class="">value.ten_mon_an</td>
                                    <td class="text-center">value.so_luong_ban</td>
                                    <td class="text-center">value.so_luong_khach_hang_mua</td>
                                    <td class="text-end">value.tong_tien</td>
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

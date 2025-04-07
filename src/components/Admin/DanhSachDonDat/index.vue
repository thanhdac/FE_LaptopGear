<template>
    <div class="card radius-10 border-top border-0 border-3 border-info">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="col-5">
                    <div class="input-group">
                        <span class="input-group-text">
                            <i class="fas fa-search"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Tìm kiếm đơn đặt..." />
                    </div>
                </div>

                <div class="d-flex gap-2">
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown">
                            Sắp xếp theo
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item">Mới nhất</a></li>
                            <li><a class="dropdown-item">Cũ nhất</a></li>
                            <li><a class="dropdown-item">Giá cao - thấp</a></li>
                            <li><a class="dropdown-item">Giá thấp - cao</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="">
                        <tr class="align-middle text-center bg-primary text-white">
                            <th>Mã đơn</th>
                            <th>Khách hàng</th>
                            <th>Tổng tiền</th>
                            <th>Ngày đặt</th>
                            <th>Trạng thái</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="align-middle text-center">
                            <td>12345</td>
                            <td>Nguyễn Văn A</td>
                            <td>500.000đ</td>
                            <td>2025-02-14</td>
                            <td>
                                <button class="btn btn-warning btn-sm">Chờ xác nhận</button>
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm me-2" data-bs-toggle='modal'
                                    data-bs-target='#chiTietModal' style="color: white;">
                                    <i class="fas fa-eye"></i> Chi tiết
                                </button>
                                <button class="btn btn-success btn-sm me-2">
                                    <i class="fas fa-check"></i> Xác nhận
                                </button>
                                <button class="btn btn-danger btn-sm" data-bs-toggle='modal' data-bs-target='#huyModal'>
                                    <i class="fas fa-times"></i> Hủy
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class='modal fade' id='chiTietModal' tabindex='-1' aria-labelledby='modalLabel' aria-hidden='true'>
        <div class='modal-dialog'>
            <div class='modal-content'>
                <div class='modal-header'>
                    <h5 class='modal-title' id='modalLabel'>Chi Tiết Đơn Hàng</h5>
                    <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
                <div class='modal-body'>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Tên Người Nhận</th>
                                <td>Nguyễn Văn A</td>
                            </tr>
                            <tr>
                                <th>Địa chỉ</th>
                                <td>123 Đường ABC, Quận 1, TP.HCM</td>
                            </tr>
                            <tr>
                                <th>Số điện thoại</th>
                                <td>0123456789</td>
                            </tr>
                            <tr>
                                <th>Quán</th>
                                <td>Quán Ăn Ngon</td>
                            </tr>
                            <tr>
                                <th>Shippper</th>
                                <td>Nguyễn Văn A</td>
                            </tr>
                            <tr>
                                <th>Mã voucher</th>
                                <td>ABC123</td>
                            </tr>
                            <tr>
                                <th>Phí ship</th>
                                <td>20.000đ</td>
                            </tr>
                            <tr>
                                <th>Trạng thái</th>
                                <td><span class="badge bg-warning">Chờ xác nhận</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class='modal-footer'>
                    <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="huyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Hủy Đơn Hàng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-dark">Cảnh Báo</h6>
                                <div class="text-dark">
                                    <span>Bạn muốn hủy đơn hàng <b>xxx</b> này</span> <br>
                                    <span>
                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="deleteQuyen()"
                        data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() { },
    methods: {}
};
</script>

<style></style>
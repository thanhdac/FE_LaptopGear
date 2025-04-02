<template>
    <!-- edit -->
    <div class="modal fade" id="suaVoucher" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Cập Nhật Mã Voucher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Mã Voucher</label>
                        <input  type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Thời Gian Bắt Đầu</label>
                        <input  type="date" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Thời Gian Kết Thúc</label>
                        <input  type="date" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Tiền Giảm</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Phần Trăm Giảm</label>
                        <input  type="number" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Tiền Tối Đa</label>
                        <input  type="text" class="form-control mt-2">
                        <div class="mb-2">
                            <label>Đơn Hàng Tối Thiểu</label>
                            <textarea  class="form-control mt-2"
                                rows="5"></textarea>
                            <div class="mb-2">
                                <label>Tình trạng</label>
                                <select class="form-select mt-2" >
                                    <option value="0">Tạm Tắt</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button  type="button" class="btn btn-primary"
                                data-bs-dismiss="modal">Cập
                                nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- xoa -->
    <div class="modal fade" id="delVoucher" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">Xóa Voucher</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc muốn xóa voucher <b class="text-danger">....</b> này
                    không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button  type="button" class="btn btn-danger"
                        data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">

        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h6 class="mt-2"><b>DANH SÁCH MÃ VOUCHER</b></h6>
                    <div>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themMoi">Thêm
                            Mới</button>
                    </div>
                    <div class="modal fade" id="themMoi" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header ">
                                    <h1 class="modal-title fs-5 " id="staticBackdropLabel">Thêm Mới Voucher</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Mã Voucher</label>
                                                <input  type="text"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Số Tiền Giảm</label>
                                                <input  type="text"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Thời Gian Bắt Đầu</label>
                                                <input  type="date"
                                                    class="form-control mt-2">
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Thời Gian Kết Thúc</label>
                                                <input  type="date"
                                                    class="form-control mt-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <label>Phần Trăm Giảm</label>
                                        <input  type="number"
                                            class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Số Tiền Tối Đa</label>
                                        <input  type="text"
                                            class="form-control mt-2">
                                        <div class="mb-2">
                                            <label>Đơn Hàng Tối Thiểu</label>
                                            <textarea 
                                                class="form-control mt-2" rows="5"></textarea>
                                            <div class="mb-2">
                                                <label>Tình trạng</label>
                                                <select class="form-select mt-2" >
                                                    <option value="0">Tạm Tắt</option>
                                                    <option value="1">Hiển Thị</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" >Thêm Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="tbale table-responsive">
                        <table class="table table-bordered table-hover ">
                            <thead>
                                <tr>
                                    <th class="align-middle text-center">#</th>
                                    <th class="align-middle text-center">Mã Voucher</th>
                                    <th class="align-middle text-center">Thời Gian Bắt Đầu</th>
                                    <th class="align-middle text-center">Thời Gian Kết Thúc</th>
                                    <th class="align-middle text-center">Số Tiền Giảm</th>
                                    <th class="align-middle text-center">Phần Trăm Giảm</th>
                                    <th class="align-middle text-center">Số Tiền Tối Đa</th>
                                    <th class="align-middle text-center">Đơn Hàng Tối Thiểu</th>
                                    <th class="align-middle text-center">Tình Trạng</th>
                                    <th class="align-middle text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <th class="align-middle text-center">1</th>
                                        <td class="align-middle text-center">SPRING2025</td>
                                        <td class="align-middle text-center">2025-03-15</td>
                                        <td class="align-middle text-center">2025-04-25</td>
                                        <td class="align-middle text-end">50000</td>
                                        <td class="align-middle text-center">0%</td>
                                        <td class="align-middle">50000</td>
                                        <td class="align-middle text-center">150000</td>
                                        <td class="align-middle">
                                            <button class="btn btn-success w-100" >Hiển thị</button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button class="btn btn-primary me-1" style='width: 100px' data-bs-toggle="modal" data-bs-target="#suaVoucher">Cập Nhật</button>
                                            <button class="btn btn-danger" style='width: 100px' data-bs-toggle="modal" data-bs-target="#delVoucher">Xóa</button>
                                        </td>
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

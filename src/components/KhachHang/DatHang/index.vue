<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 text-center">
            <h1>ĐẶT HÀNG</h1>
            <p>Trang chủ - Đặt hàng</p>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-7 col-md-12">
            <div class="card">
                <div class="container">
                    <h4 class="mt-3"><b>Thông tin người đặt hàng</b></h4>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <label for="">Họ và Tên</label>
                            <input type="text" class="form-control" placeholder="Nhập họ và tên của bạn">
                            <label class="mt-2" for="">E-Mail</label>
                            <input type="text" class="form-control" placeholder="Nhập email của bạn">
                            <label class="mt-2" for="">Ghi chú</label>
                            <input type="text" class="form-control mb-3" placeholder="Nhập ghi chú của bạn">
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <label for="">Số điện thoại</label>
                            <input type="text" class="form-control" placeholder="Nhập số điện thoại của bạn">
                            <label class="mt-2" for="">Địa chỉ</label>
                            <select class="form-control" name="" id="">
                                <option value="0">DC1</option>
                                <option value="1">DC2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-5 col-md-12">
            <div class="col">
                <div class="card border-danger border-start border-5 border-1 radius-10" style="background-color: #f2f2f2;">
                    <div class="card-body">
                        <div>
                            <h4 class="my-1">TỔNG HÓA ĐƠN</h4>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <div class="row mt-2">
                            <h5>Sản phẩm</h5>
                            <p>Hình ảnh sản phẩm ...</p>
                            <hr>
                            <div class="row">
                                <div class="col-lg-6">
                                    <p>Thành tiền</p>
                                    <p>Phí vận chuyển</p>
                                </div>
                                <div class="col-lg-6 text-end">
                                    <p><b>0 vnđ</b></p>
                                    <p><b>0 vnđ</b></p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-lg-6">
                                    <h5>Tổng cộng</h5>
                                </div>
                                <div class="col-lg-6 text-end">
                                    <p><b>0 vnđ</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <button class="btn btn-info">Đặt Hàng</button>
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
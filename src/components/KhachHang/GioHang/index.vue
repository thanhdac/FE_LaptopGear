<template>
    <div class="row">
        <div class="col-lg-12 col-md-12 text-center">
            <h1>GIỎ HÀNG</h1>
            <p>Trang chủ - Giỏ hàng</p>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-7 col-md-12">
            <div class="container">
                <table class="table table-bordered table-hover tabel-responsive ">
                    <thead class="table-secondary">
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
<template v-for="(item, index) in list_gio_hang" :key="index">
                            <tr>
                            <td>{{ index + 1 }}</td>
                            <td> {{ item.ten_sp }}</td>
                            <td> {{ item.hinh }}</td>
                            <td> {{ item.don_gia }}</td>
                            <td> {{ item.so_luong }}</td>
                            <td> {{ item.don_gia }}</td>
                            <td>
                                <button>Hello</button>
                            </td>
                        </tr>
</template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-lg-5 col-md-12">
            <div class="col">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Mã giảm giá" 
                        aria-describedby="basic-addon1">
                    <button class="btn btn-info" type="button" >Áp dụng mã</button>
                </div>
                <div class="card border-danger border-start border-5 border-1 radius-10" style="background-color: #f2f2f2;">
                    <div class="card-body">
                        <div>
                            <h4 class="my-1">TÓM TẮT GIỎ HÀNG</h4>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="container">
                        <div class="row mt-2">
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
                    <button class="btn btn-info">Thanh toán</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list_gio_hang: [],
    //   list_san_pham: [],

    };
  },
  mounted() {
    // this.getGioHang();
        this.getSanPham();
  },
    //   getGioHang() {
    //   axios.get("http://127.0.0.1:8000/api/admin/san-pham/get-data")
    //   .then((res) => {
    //     this.list_san_pham = res.data.data;
    //   });
    // },
  methods: {
    getSanPham() {
      axios.get("http://127.0.0.1:8000/api/khach-hang/gio-hang/get-data").then((res) => {
        this.list_gio_hang = res.data.data;
      });
    },
  },
};
</script>
<style></style>
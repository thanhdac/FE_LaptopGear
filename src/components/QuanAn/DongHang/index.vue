<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header mt-2">
                    <h5>DANH SÁCH ĐƠN HÀNG</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-primary align-middle text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Thời Gian Nhận Đơn</th>
                                    <th>Mã Đơn Hàng</th>
                                    <th>Tên Khách Hàng</th>
                                    <th>Tên Shipper</th>
                                    <th>Tiền Hàng</th>
                                    <th>DS Món Ăn</th>
                                    <th>Tình Trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, key) in list_don_hang" :key="key">
                                    <tr class="align-middle">
                                        <td class="text-center">{{ key + 1 }}</td>
                                        <td class="text-center">{{ value.created_at }}</td>
                                        <td class="text-center">{{ value.ma_don_hang }}</td>
                                        <td>{{ value.ten_nguoi_nhan }}</td>
                                        <td class="text-end">{{ formatVND(value.tien_hang) }}</td>
                                        <td>{{ value.ho_va_ten_shipper }}</td>
                                        <td>
                                            <span>v.ten_mon_an - v.ghi_chu</span>
                                        </td>
                                        <td>
                                            <button v-if="value.tinh_trang == 1"
                                                class="btn btn-warning btn-sm w-100">Đang làm</button>
                                            <button v-if="value.tinh_trang == 2" class="btn btn-success btn-sm w-100">Đã
                                                xong</button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list_don_hang: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number,)
        },
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/quan-an/don-hang/data", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("quan_an_login"),
                    },
                })
                .then((res) => {
                    this.list_don_hang = res.data.data;
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
    },
}
</script>
<style></style>
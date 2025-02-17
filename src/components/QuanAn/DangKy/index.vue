<template>
    <div class="container mt-3">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
            <div class="col mx-auto">
                <div class="card">
                    <div class="card-body">
                        <div class="border p-4 rounded">
                            <div class="text-center">
                                <h3 class="">ĐĂNG KÝ QUÁN ĂN</h3>
                            </div>
                            <div class="login-separater text-center mb-4">
                                <hr>
                            </div>
                            <div class="form-body">
                                <form class="row g-3">
                                    <div class="row">
                                        <div class="row g-3">
                                            <div class="col-lg-6">
                                                <label>Tên Quán Ăn</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="quan_an_create.ten_quan_an" type="text"
                                                        class="form-control" placeholder="Nhập tên quán ăn">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Email</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="quan_an_create.email" type="email"
                                                        class="form-control" placeholder="Nhập email của bạn">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Password</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="quan_an_create.password" type="password"
                                                        class="form-control" placeholder="Nhập mật khẩu">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Re Password</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="quan_an_create.re_password" type="password"
                                                        class="form-control" placeholder="Nhập lại mật khẩu">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Số Điện Thoại</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="quan_an_create.so_dien_thoai" type="text"
                                                        class="form-control" placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Mã Số Thuế</label>
                                                <div class="ms-auto position-relative">
                                                    <input v-model="quan_an_create.ma_so_thue" type="text"
                                                        class="form-control" placeholder="Nhập mã số thuế">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Giờ mở cửa</label>
                                                <div class="ms-auto position-relative">
                                                    <input placeholder="Nhập giờ mở cửa" v-model="quan_an_create.gio_mo_cua"
                                                        type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Giờ đóng cửa</label>
                                                <div class="ms-auto position-relative">
                                                    <input placeholder="Nhập giờ đóng cửa" v-model="quan_an_create.gio_dong_cua"
                                                        type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Tỉnh Thành</label>
                                                <div class="ms-auto position-relative">
                                                    <select v-model="quan_an_create.id_tinh_thanh" class="form-select">
                                                        <template v-for="(value, index) in list_tinh_thanh"
                                                            :key="index">
                                                            <option v-bind:value="value.id">{{ value.ten_tinh_thanh }}
                                                            </option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <label>Quận Huyện</label>
                                                <div class="ms-auto position-relative">
                                                    <select v-model="quan_an_create.id_quan_huyen" class="form-select">
                                                        <template v-for="(value, index) in list_quan_huyen"
                                                            :key="index">
                                                            <option v-bind:value="value.id">{{ value.ten_quan_huyen }}
                                                            </option>
                                                        </template>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <label>Địa Chỉ</label>
                                                <div class="ms-auto position-relative">
                                                    <textarea v-model="quan_an_create.dia_chi" type="text"
                                                        class="form-control" placeholder="Nhập địa chỉ"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mt-4">
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button v-on:click="dangKyQuanAn()" type="button"
                                                        class="btn btn-primary radius-30 w-100">Đăng
                                                        Kí</button>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-4">
                                                <p class="mb-0">Bạn đã có tài khoản?
                                                    <router-link to="/quan-an/dang-nhap">
                                                        <a href="">Đăng Nhập</a>
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
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
            quan_an_create: {
                'email': "",
                'password': "",
                're_password': "",
                'ma_so_thue': "",
                'ten_quan_an': "",
                'dia_chi': "",
                'so_dien_thoai': "",
                'gio_mo_cua': "",
                'gio_dong_cua': "",
                'id_quan_huyen': "",
                'id_tinh_thanh': "",
            },
            list_tinh_thanh: [],
            list_quan_huyen: []
        }

    },
    mounted() {
        this.loadDataTinhThanh();
        this.loadDataQuanHuyen();
    },
    methods: {
        loadDataTinhThanh() {
            axios
                .get('http://127.0.0.1:8000/api/admin/tinh-thanh/data-open')
                .then((res) => {
                    this.list_tinh_thanh = res.data.data;
                })
        },
        loadDataQuanHuyen() {
            axios
                .get('http://127.0.0.1:8000/api/admin/quan-huyen/data-open')
                .then((res) => {
                    this.list_quan_huyen = res.data.data;
                })
        },
        dangKyQuanAn() {
            axios
                .post('http://127.0.0.1:8000/api/quan-an/dang-ky', this.quan_an_create)
                .then(res => {
                    this.quan_an_create = {};
                    this.$toast.success(res.data.message);
                })
                .catch(error => {
                    var obj = error.response.data.errors;
                    var result = Object.keys(obj).map((key) => [key, obj[key]]);
                    result.forEach((value_1, key_1) => {
                        var xxx = value_1[1];
                        xxx.forEach((value, key) => {
                            this.$toast.error(value);
                        });
                    });
                });
        },
    },
}
</script>
<style></style>
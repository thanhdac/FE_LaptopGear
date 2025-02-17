<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            Danh Sách Quyền
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themMoiModal">Thêm
                                Quyền</button>
                        </div>
                        <div class="col-lg-12">
                            <div class="input-group mt-3 w-100">
                                <input type="text" class="form-control search-control border border-2 border-secondary"
                                    placeholder="Search...">
                                <span class="position-absolute top-50 search-show translate-middle-y"
                                    style="left: 15px;"><i class="bx bx-search"></i></span>
                                <button class="btn btn-outline-secondary" type="button" @click="searchQuyen">Tìm
                                    Kiếm</button>
                            </div>
                        </div>
                        <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Quyền</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-12 mb-2">
                                            <label class="form-label">Tên Quyền</label>
                                            <input v-model="create_quyen.ten_quyen" type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary" @click="themQuyen()"
                                            data-bs-dismiss="modal">Tạo
                                            Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle">
                                <tr class="bg-primary text-light">
                                    <th>#</th>
                                    <th>Tên Quyền</th>
                                    <th>Cấp Quyền</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value, index) in list_quyen" :key="index" class="align-middle">
                                    <th class="text-center">{{ index + 1 }}</th>
                                    <td>{{ value.ten_quyen }}</td>
                                    <td class="text-center">
                                        <button class="btn btn-info text-white">Phân
                                            Quyền</button>
                                    </td>
                                    <td class="text-center">
                                        <i @click="Object.assign(update_quyen, value)"
                                            class="fa-solid fa-square-pen fa-3x text-primary me-2"
                                            data-bs-toggle="modal" data-bs-target="#updateModal"></i>
                                        <i @click="delete_quyen = value" class="fa-solid fa-trash fa-3x text-danger"
                                            data-bs-toggle="modal" data-bs-target="#xoaQuyenModal"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="col-12 mb-2">
                                        <label class="form-label">Tên Quyền</label>
                                        <input v-model="update_quyen.ten_quyen" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" @click="updateQuyen()"
                                        data-bs-dismiss="modal">Xác
                                        Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="xoaQuyenModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div
                                        class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa quyền <b class="text-danger">{{
                                                            delete_quyen.ten_quyen }}</b> này
                                                        không?
                                                    </p>
                                                    <p>
                                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-danger" @click="deleteQuyen()"
                                        data-bs-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Danh Sách Chức Năng
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle bg-primary text-light">
                                        <th>#</th>
                                        <th>Tên Chức Năng</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in list_chuc_nang" :key="index">
                                        <tr class="align-middle">
                                            <th class="text-center">{{ index + 1 }}</th>
                                            <td class="text-wrap">{{ value.ten_chuc_nang }}</td>
                                            <td class="text-center">
                                                <button class="btn btn-success">Cấp Quyền</button>
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
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Đang Phân Quyền Cho <b class="text-danger">Admin</b>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle bg-primary text-light">
                                        <th>Tên Chức Năng</th>
                                        <th>Tên Quyền</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align-middle">
                                        <td class="text-wrap">Lấy danh sách danh mục</td>
                                        <td>Admin</td>
                                        <td class="text-center">
                                            <button class="btn btn-danger">Xóa</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
            list_chuc_nang: [
                { 'id': '1', 'ten_chuc_nang': 'Lấy Danh Sách Các Quán Ăn' },
                { 'id': '2', 'ten_chuc_nang': 'Tạo Mới Quán Ăn ' },
                { 'id': '3', 'ten_chuc_nang': 'Xóa Quán Ăn' },
                { 'id': '4', 'ten_chuc_nang': 'Cập Nhật Quán Ăn' },
                { 'id': '5', 'ten_chuc_nang': 'Thêm món ăn' },
                { 'id': '6', 'ten_chuc_nang': 'Xóa Món Ăn' },
                { 'id': '7', 'ten_chuc_nang': 'Cập Nhật Món Ăn' },
                { 'id': '8', 'ten_chuc_nang': 'Lấy Danh Sách Các Món Ăn' },
                { 'id': '10', 'ten_chuc_nang': 'Giao món ăn' },
                { 'id': '10', 'ten_chuc_nang': 'Giao hàng' },
                { 'id': '11', 'ten_chuc_nang': 'Lấy Danh Sách Mã Giảm Giá' },
                { 'id': '12', 'ten_chuc_nang': 'Tạo Mới Mã Giảm Giá' },
                { 'id': '13', 'ten_chuc_nang': 'Xóa Mã Giảm Giá' },
                { 'id': '14', 'ten_chuc_nang': 'Cập Nhật Mã Giảm Giá' },
                { 'id': '15', 'ten_chuc_nang': 'Đối Trạng Thái Mã Giảm Giá' },
                { 'id': '16', 'ten_chuc_nang': 'Xem Chi Tiết Đơn hàng' },
                { 'id': '17', 'ten_chuc_nang': 'Đặt món ăn' },
                { 'id': '18', 'ten_chuc_nang': 'Tạo Mới Phân Quyền' },
                { 'id': '19', 'ten_chuc_nang': 'Cập Nhật Phân Quyền' },
                { 'id': '20', 'ten_chuc_nang': 'Xóa Phân Quyền' },
                { 'id': '21', 'ten_chuc_nang': 'Lấy Danh Sách Chức Năng' },
                { 'id': '22', 'ten_chuc_nang': 'Tạo Mới Chi Tiết Phân Quyền' },
                { 'id': '23', 'ten_chuc_nang': 'Lấy Danh Sách Chi Tiết Phân Quyền' },
            ],
            list_quyen: [],
            create_quyen: {},
            update_quyen: {},
            delete_quyen: {}
        }
    },
    mounted() {
        this.layDataQuyen();
    },
    methods: {
        themQuyen() {
            axios
                .post('http://127.0.0.1:8000/api/admin/phan-quyen/create', this.create_quyen)
                .then(response => {
                    if (response.data.status) {
                        this.$toast.success(response.data.message);
                        this.create_quyen = {}
                        this.layDataQuyen();
                    } else {
                         this.$toast.error(response.data.message);
                    }
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

        layDataQuyen() {
            axios
                .get('http://127.0.0.1:8000/api/admin/phan-quyen/data')
                .then(response => {
                    this.list_quyen = response.data.data;
                })
        },
        updateQuyen() {
            axios
                .post('http://127.0.0.1:8000/api/admin/phan-quyen/update', this.update_quyen)
                .then(response => {
                   if (response.data.status) {
                        this.$toast.success(response.data.message);
                        this.layDataQuyen();
                    } else {
                         this.$toast.error(response.data.message);
                    }
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
        deleteQuyen() {
            axios
                .post('http://127.0.0.1:8000/api/admin/phan-quyen/delete', this.delete_quyen)
                .then(response => {
                   if (response.data.status) {
                        this.$toast.success(response.data.message);
                        this.layDataQuyen();
                    } else {
                         this.$toast.error(response.data.message);
                    }
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
        }
    }
}
</script>

<style></style>
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
                        <input v-model="suavoucher.ma_code" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Thời Gian Bắt Đầu</label>
                        <input v-model="suavoucher.thoi_gian_bat_dau" type="date" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Thời Gian Kết Thúc</label>
                        <input v-model="suavoucher.thoi_gian_ket_thuc" type="date" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Tiền Giảm</label>
                        <input v-model="suavoucher.so_giam_gia" type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Phần Trăm Giảm</label>
                        <input v-model="suavoucher.loai_giam" type="number" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Số Tiền Tối Đa</label>
                        <input v-model="suavoucher.so_tien_toi_da" type="text" class="form-control mt-2">
                        <div class="mb-2">
                            <label>Đơn Hàng Tối Thiểu</label>
                            <textarea v-model="suavoucher.don_hang_toi_thieu" class="form-control mt-2" rows="5"></textarea>
                            <div class="mb-2">
                                <label>Tình trạng</label>
                                <select v-model="suavoucher.tinh_trang" class="form-select mt-2">
                                    <option value="0">Tạm Tắt</option>
                                    <option value="1">Hiển Thị</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button v-on:click="updatevoucher()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập
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
                    Bạn có chắc muốn xóa voucher <b class="text-danger">{{ xoavoucher.ma_code }}</b> này
                    không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button v-on:click="deletevoucher()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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
                        <button v-on:click="Object.assign(taovoucher,item)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themMoi">Thêm
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
                                                <input v-model="taovoucher.ma_code" type="text" class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Số Tiền Giảm</label>
                                                <input v-model="taovoucher.so_giam_gia" type="text" class="form-control mt-2">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Thời Gian Bắt Đầu</label>
                                                <input v-model="taovoucher.thoi_gian_bat_dau" type="date" class="form-control mt-2">
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-2">
                                                <label>Thời Gian Kết Thúc</label>
                                                <input v-model="taovoucher.thoi_gian_ket_thuc" type="date" class="form-control mt-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <label>Phần Trăm Giảm</label>
                                        <input v-model="taovoucher.loai_giam" type="number" class="form-control mt-2">
                                    </div>
                                    <div class="mb-2">
                                        <label>Số Tiền Tối Đa</label>
                                        <input v-model="taovoucher.so_tien_toi_da" type="text" class="form-control mt-2">
                                        <div class="mb-2">
                                            <label>Đơn Hàng Tối Thiểu</label>
                                            <textarea v-model="taovoucher.don_hang_toi_thieu" class="form-control mt-2" rows="5"></textarea>
                                            <div class="mb-2">
                                                <label>Tình trạng</label>
                                                <select v-model="taovoucher.tinh_trang" class="form-select mt-2">
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
                                    <button v-on:click="createvoucher()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm
                                        Mới</button>
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
                                <template v-for="(item, index) in voucher" :key="index">
                                    <tr>
                                        <th class="align-middle text-center">{{ index + 1 }}</th>
                                        <td class="align-middle text-center">{{ item.ma_code }}</td>
                                        <td class="align-middle text-center">{{ item.thoi_gian_bat_dau }}</td>
                                        <td class="align-middle text-center">{{ item.thoi_gian_ket_thuc }}</td>
                                        <td class="align-middle text-center">{{ item.loai_giam }}</td>
                                        <td class="align-middle">{{ item.so_giam_gia }}</td>
                                        <td class="align-middle text-center">{{ item.so_tien_toi_da }}</td>

                                        <td class="align-middle text-end">{{ item.don_hang_toi_thieu }}</td>
                                        <td class="align-middle">
                                            <button v-on:click="changetrangthai(item)" v-if="item.tinh_trang == 0" class="btn btn-warning me-1" style="color: white;">Tạm Tắt </button>
                                            <button v-on:click="changetrangthai(item)" v-else class="btn btn-success" style="color: white;">Hiển Thị </button>
                                        </td>
                                        <td class="align-middle text-center">
                                            <button v-on:click="Object.assign(suavoucher,item)" class="btn btn-primary me-1" style='width: 100px'
                                                data-bs-toggle="modal" data-bs-target="#suaVoucher">Cập Nhật</button>
                                            <button v-on:click="Object.assign(xoavoucher,item)" class="btn btn-danger" style='width: 100px' data-bs-toggle="modal"
                                                data-bs-target="#delVoucher">Xóa</button>
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
            voucher: [],
            taovoucher: {},
            suavoucher: {},
            xoavoucher: {}
        }
    },
    mounted() {
        this.getvoucher();
    },
    methods: {
        getvoucher() {
            axios
                .get('http://127.0.0.1:8000/api/quan-an/voucher/data', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("quan_an_login"),
                    },
                })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                .then(res => {
                    this.voucher = res.data.data;
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });
        },

        

        createvoucher() {
            axios
                .post('http://127.0.0.1:8000/api/quan-an/voucher/create', this.taovoucher, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("quan_an_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.getvoucher();
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.res.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },

        updatevoucher() {
            axios
                .post('http://127.0.0.1:8000/api/quan-an/voucher/update', this.suavoucher, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("quan_an_login"),
                    },
                })
                .then(res => {
                    this.getvoucher();
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                });
        },

        deletevoucher() {

            axios
                .post("http://127.0.0.1:8000/api/quan-an/voucher/delete", this.xoavoucher, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("quan_an_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.getvoucher();
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.res.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },

        changetrangthai(item) {
            axios
                .post("http://127.0.0.1:8000/api/quan-an/voucher/change", item, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("quan_an_login"),
                    },
                })
                .then((res) => {
                    if (res.data.status) {
                        this.getvoucher();
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.res.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        }


    },

}
</script>
<style></style>

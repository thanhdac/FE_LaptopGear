<template>
    <div class="card shadow-sm mb-4">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="https://down-bs-vn.img.susercontent.com/vn-11134513-7r98o-lsv21q8k90uxa6@resize_ss640x400!@crop_w640_h400_cT"
                    style="width: 100%; height: 300px; object-fit: cover;" class="img-fluid rounded-start"
                    alt="Restaurant Image">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title fw-bold">{{ tt_quan_an.ten_quan_an }}</h4>
                    <div class="text-muted">
                        <i class="fas fa-location-dot me-2"></i>
                        {{ tt_quan_an.id_dia_chi }}
                    </div>
                    <div class="d-flex gap-3 py-3">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <div>999+ đánh giá</div>
                        <div class="text-success"><i class="fa-solid fa-circle fa-2xs"></i> Mở cửa</div>
                    </div>
                    <div class="mb-3">
                        <p>
                            <i class="fa-regular fa-clock"></i> {{ tt_quan_an.gio_mo_cua }} - {{ tt_quan_an.gio_dong_cua }}
                        </p>
                        <p><i class="fa-solid fa-circle-dollar-to-slot"></i> 20.000 - 100.000</p>
                    </div>
                    <hr>
                    <div class="row row-cols-auto row-cols-1 row-cols-md-3 align-items-center">

                        <div class="col">
                            <div class="row">
                                <div class="col-lg-5">
                                    <label class="form-label">PHÍ DỊCH VỤ </label>
                                    <p class="text-danger">0.0% Phí dịch Vụ</p>
                                </div>
                                |
                                <div class="col-lg-5">
                                    <label class="form-label">DỊCH VỤ BỞI </label>
                                    <p class="text-danger">FOODZONE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-4">
        <h3 class="mb-4"><i class="fas fa-utensils me-2"></i><b class="text-danger">THỰC ĐƠN</b></h3>
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <div class="alert alert-warning border-start border-warning border-4">
                            <div class="d-flex align-items-center">
                                <i class="fas fa-ticket-alt text-danger fa-2x"></i>
                                <div class="ms-3">
                                    <span class="fs-5 fw-semibold">HOME CREDIT giảm 50k cho đơn từ 100k</span>
                                </div>
                            </div>
                        </div>

                        <div class="position-relative mb-4">
                            <input type="text" class="form-control form-control-lg ps-5"
                                placeholder="Tìm kiếm món ăn...">
                            <i
                                class="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                        </div>

                        <h5 class="mb-3 fw-bold">Món Đang Giảm Giá</h5>
                        <template v-for="(v, k) in monAnData" :key="k">
                            <div class="card mb-3 hover-shadow">
                                <div class="d-flex align-items-center p-3">
                                    <img :src="v.hinh_anh" :alt="v.ten_mon_an" class="me-3 rounded"
                                        style="width: 120px; height: 90px; object-fit: cover;">
                                    <div class="flex-grow-1">
                                        <h5 class="mb-1 fw-bold">{{ v.ten_mon_an }}</h5>
                                        <p class="mb-1 text-muted">{{ v.ten_quan_an }}</p>
                                        <p class="mb-0">
                                            <del class="text-muted">{{ v.gia_ban.toLocaleString() }}đ</del>
                                            <strong class="text-danger ms-2">{{ v.gia_khuyen_mai.toLocaleString()
                                                }}đ</strong>
                                        </p>
                                    </div>
                                    <button v-on:click="themGioHang(v.id)" class="btn btn-outline-primary">+</button>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow-sm sticky-top" style="top: 10rem;">
                    <div class="card-header bg-success py-3">
                        <h5 class="mb-0 text-white">
                            <i class="fas fa-shopping-cart me-2"></i>Đơn Hàng
                        </h5>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="align-middle">Tên món</th>
                                    <th class="align-middle">Số lượng</th>
                                    <th class="align-middle">Đơn giá</th>
                                    <th class="align-middle">Ghi chú</th>
                                    <th class="align-middle">Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(v, k) in list_gio_hang" :key="k">
                                    <tr class="align-middle">
                                        <td>{{ v.ten_mon_an }}</td>
                                        <td style="width: 100px;">
                                            <input v-model="v.so_luong" type="number" class="form-control" placeholder="1">
                                        </td>
                                        <td>{{ v.don_gia }}</td>
                                        <td>
                                            <input v-model="v.ghi_chu" type="text" class="form-control" placeholder="Ghi chú">
                                        </td>
                                        <td>{{ v.thanh_tien }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between">
                            <h5>Tổng tiền:</h5>
                            <h5>{{ tong_tien }}</h5>
                        </div>
                        <button class="btn btn-success w-100 mt-3">Tạo Đơn Hàng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    props: ['id_quan_an'],
    data() {
        return {
            id_quan_an: this.$route.params.id_quan_an,
            tt_quan_an: {},
            monAnData : [],
            list_gio_hang : [],
            tong_tien     : 0,
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang/don-dat-hang/' + this.id_quan_an, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("khach_hang_login"),
                    },
                })
                .then((res) => {
                    if(res.data.status) {
                        this.tt_quan_an     = res.data.data_1;
                        this.monAnData      = res.data.data_2;
                        this.list_gio_hang  = res.data.data_3;
                        this.tong_tien      = res.data.tong_tien;   
                    } else {
                        this.$router.push('/khach-hang/quan-an');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        themGioHang(id_mon_an) {
            var payload = {
                'id' : id_mon_an,
            };
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/don-dat-hang/create", payload, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("khach_hang_login"),
                    },
                })
                .then((res) => {
                    if(res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
}
</script>
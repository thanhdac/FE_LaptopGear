<template>
    <div class="row mt-4">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-8">
                            <h4 class="mt-2 text-danger">
                                <b>TẤT CẢ SẢN PHẨM</b> <i class="fa-solid fa-laptop"></i>
                            </h4>
                        </div>
                        <div class="col-lg-2">
                            <div>
                                <select class="form-select" aria-label="Default select example">
                                    <option value="">-- Danh Mục Sản Phẩm --</option>
                                    <!-- <template v-for="(value, index) in list_laptop" :key="index"> -->
                                    <!-- <option :value="value.id">{{ v.ten_phan_loai }}</option> -->
                                    <!-- </template> -->
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="btn-group w-100" role="group">
                                <button type="button" class="btn btn-white w-100">
                                    Chọn Mức Giá
                                </button>
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button"
                                        class="btn btn-white dropdown-toggle dropdown-toggle-nocaret px-1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bx bx-slider ms-1"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-start" aria-labelledby="btnGroupDrop1">
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('under50')">Dưới 50.000 VNĐ</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('50to100')">50.000 - 100.000
                                                VNĐ</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('100to200')">100.000 - 200.000
                                                VNĐ</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('200to300')">200.000 - 300.000
                                                VNĐ</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"
                                                @click.prevent="filterByPrice('above300')">Trên 300.000 VNĐ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="card-body">
        <div class="row product-grid">
            <template v-for="(value, index) in list_laptop" :key="index">
                <div class="col-lg-3 ">
                    <router-link :to="'/khach-hang/chi-tiet-san-pham/' + value.id">
                        <div class="card flex-fill">
                            <div
                                class="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-bottom-end small fw-bold">
                                 <i class="fa-solid fa-tag text-light me-2"></i>Giảm 28%
                            </div>
                            <img :src="value.hinh" class="card-img-top ms-5" style="height: 200px; width: 65%" />
                            <div class="card-body">
                                <h6 class="card-title cursor-pointer">
                                    {{ value.ten_sp }}
                                </h6>
                                <div class="clearfix">
                                    <!-- <p class="mb-0 float-start">{{ v.ten_quan_an }}</p> -->
                                </div>
                                <p class="mt-2 text-end">
                                <del class="text-muted me-2 small">19.190.000đ </del>
                                <span class="fw-bold text-danger fs-5"><b>{{ formatVND(value.don_gia) }} </b></span>
                                <!-- <strong class="ms-2">{{ v.gia_khuyen_mai }}đ</strong> -->
                                </p>
                                <div class="d-flex align-items-center mt-auto">
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 mb-0">
                                        <!-- <span class="text-primary"><button class="btn btn-outline-primary btn-sm">{{ value.danh_muc_may }}</button></span> -->

                                    </div>
                                    <div class="col-lg-6">
                                        <span class="text-primary text-end" ><button class="btn btn-warning btn-sm" style="width: 100%;">Mua ngay</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </template>
            <div class="col-lg-12 text-center">
                <button type="button" class="btn btn-lg btn-outline-success" style="width: 30%">
                    <i class="fa-regular fa-hand-point-up"></i>Xem Thêm
                </button>
            </div>
        </div>
    </div>
    

</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_laptop: [],
        }
    },
    mounted() {
        this.getDta();
    },
    methods: {
        getDta() {
            axios
                .get("http://127.0.0.1:8000/api/client/Laptop/get-data-trang-chu")
                .then((res) => {
                    if (res.data.data) {
                        this.list_laptop = res.data.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        formatVND(number) {
            return new Intl.NumberFormat("vi-VI", { style: "currency", currency: "VND" }).format(number,);
        },
    },
}
</script>
<style></style>
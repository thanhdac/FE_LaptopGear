<template>
    <div class="card border-0 shadow-sm mb-4">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <h2 class="card-title mb-0 fw-bold">Danh Sách Các Món Ăn</h2>
                </div>
                <div class="btn-group">
                    <button class="btn btn-sm btn-outline-primary px-3">
                        <i class="fas fa-sort-amount-down-alt me-1"></i>
                        Tăng dần
                    </button>
                    <button class="btn btn-sm btn-outline-primary px-3">
                        <i class="fas fa-sort-amount-up-alt me-1"></i>
                        Giảm dần
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="row ">
        <template v-for="(value, index) in list_mon_an" :key="index">
            <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="card shadow-sm">
                    <img v-bind:src="value.hinh_anh" class="card-img-top" style="height: 150px; object-fit: cover;">
                    <div class="card-body">
                        <h6 class="card-title fw-semibold mb-2">{{ value.ten_mon_an }}</h6>
                        <p class="text-muted small mb-2">{{ value.ten_quan_an }}</p>
                        <p class="mb-0"><del class="text-muted">{{ value.gia_ban }}</del> <strong class="ms-2">{{
                            value.gia_khuyen_mai }}</strong></p>
                    </div>
                </div>
            </div>
        </template>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_mon_an: []
        }
    },
    mounted() {
        this.loadMonAn()
    },
    methods: {
        loadMonAn() {
            axios
                .get('http://127.0.0.1:8000/api/khach-hang/data-mon-an', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("khach_hang_login"),
                    },
                })
                .then((res) => {
                    this.list_mon_an = res.data.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>

<style></style>
<template>
    <div class="row">
        <div class="col-lg-6 mt-4 " style="background-color: #ffffff; ">
            <div class="">
                <div class="ratio ratio-16x9 shadow-lg overflow-hidden " style="height: 450;">
                    <!-- <img src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/laptop-new-arrival-sales-banner-1-5fe0c47813869.png"
                        alt=""> -->
                    <!-- <iframe :src="tt_san_pham.hinh" title="YouTube video player" allowfullscreen></iframe> -->
                    <div style="text-align: center; margin-bottom: 30px;" class="mb-5" >
                        <img :src="tt_san_pham.hinh" style="width: 65%; margin-bottom: 30px;" class="mb-4"  alt="">
                    </div>
                </div>
            </div>
            <hr>
            <div class="pb-4 mb-4 border-bottom mt-3">
                <!-- <h1 class="fw-bold text-dark mb-1">{{ chi_tiet_phim.ten_phim }}</h1> -->
                <div class="">
                    <span class="badge bg-primary p-2 me-2 mb-1">Văn phòng</span>
                    <span class="badge bg-primary p-2 me-2 mb-1">Gaming</span>
                    <span class="badge bg-primary p-2 me-2 mb-1">Đồ họa</span>
                    <span class="badge bg-primary p-2 me-2 mb-1">Editer</span>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="container py-4">
                <div class="row g-4">
                    <!-- Phần thông tin chi tiết phim -->
                    <div class="col-col-md-8">
                        <div class="row  mt-2">
                            <div class="col-lg-12">

                                <h2 class="fw-bold mb-3 text-primary position-relative border-bottom pb-2">
                                    <span>Thông tin chi tiết</span>
                                    <div class="bg-danger"
                                        style="width: 60px; height: 4px; position: absolute; bottom: -2px; left: 0;">
                                    </div>
                                </h2>
                                <div class="card shadow-sm">
                                    <div class="card-body bg-light">
                                        <div class="mb-3 pb-3 border-bottom">
                                            <span class="fw-bold text-dark pe-2">Tên sản phẩm: </span>
                                            <b>{{ tt_san_pham.ten_sp }}</b>
                                        </div>
                                        <div class="mb-3 pb-3 border-bottom">
                                            <span class="fw-bold text-dark pe-2">Giá máy:</span>
                                            <b class="text-danger">{{ formatVND(tt_san_pham.don_gia) }} </b>
                                        </div>
                                        <div>
                                            <span class="fw-bold text-dark pe-2">Mô tả:</span>
                                            {{ tt_san_pham.mo_ta }}
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="d-grid gap-3 mb-4">
                                            <button class="btn btn-outline-danger py-3 fw-bold" data-bs-toggle="modal"
                                                v-on:click="themGioHang()" data-bs-target="#">
                                                <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-grid gap-3 mb-4">
                                            <router-link to="/khach-hang/dat-hang">
                                                <button class="btn btn-primary py-3 fw-bold" style="width: 100%;"
                                                    data-bs-toggle="modal" data-bs-target="#">
                                                    <i class="fa-solid fa-cart-shopping"></i> Đặt hàng
                                                </button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="mb-4">
                            <h4 class="fw-bold mb-3 position-relative border-bottom pb-2">
                                <span>Review máy</span>
                                <div class="bg-danger"
                                    style="width: 60px; height: 4px; position: absolute; bottom: -2px; left: 0;"></div>
                            </h4>
                            <div class="d-grid gap-3 mb-4">
                                <button class="btn btn-outline-danger py-3 fw-bold" data-bs-toggle="modal"
                                    data-bs-target="#Trailer">
                                    <i class="fa-brands fa-youtube"></i> Xem ngay
                                </button>

                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <p class="fs-6 lh-base text-dark text-justify">
                                        <!-- {{ chi_tiet_phim.noi_dung }} -->

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <!-- Comment Section -->
                <div class="bg-white rounded shadow-sm p-3 p-md-4">
                    <h2 class="fs-3 fw-bold text-danger pb-2 mb-3 border-bottom position-relative">BÌNH LUẬN</h2>
                    <div class="mb-4">
                        <div class="mb-3">
                            <textarea class="form-control" rows="4"
                                placeholder="Ý kiến của bạn về ưu đãi này..."></textarea>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-danger px-3 py-2 fw-semibold">GỬI BÌNH LUẬN</button>
                        </div>
                    </div>
                    <div>
                        <template v-for="(value, index) in tt_danh_gia" :key="index">
                            <div class="d-flex mb-4 pb-4 border-bottom">
                                <div class="me-3">
                                    <img src="https://i.pravatar.cc/48?img=12" alt="User Avatar" class="rounded-circle"
                                        width="48" height="48">
                                </div>
                                <div>
                                    <div class="mb-2">
                                        <span class="fw-semibold me-2">{{ value.ten_dang_nhap }}</span>
                                        <span class="small text-secondary">{{ value.ngay_danh_gia }}</span>
                                    </div>
                                    <div class="text-secondary">
                                        {{ value.noi_dung }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <!-- <div class="d-flex">
                            <div class="me-3">
                                <img src="https://i.pravatar.cc/48?img=32" alt="User Avatar" class="rounded-circle"
                                    width="48" height="48">
                            </div>
                            <div>
                                <div class="mb-2">
                                    <span class="fw-semibold me-2">{{ tt_danh_gia.ten_dang_nhap }}</span>
                                    <span class="small text-secondary">06/05/2025</span>
                                </div>
                                <div class="text-secondary">
                                    Rất thích chương trình này. Tiết kiệm được một khoản khi đi xem phim cùng gia đình.
                                    Mong DZ có nhiều
                                    ưu đãi như vậy.
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>

                <div class="bg-white rounded shadow-sm p-3 p-md-4 mt-3">
                    <h4>Các dòng máy đang bán chạy khác</h4>
                    <div class="row">
                        <template v-for="(value, index) in tt_san_pham_khac" :key="index">
                            <div class="col-lg-3">
                                <router-link :to="'/khach-hang/chi-tiet-san-pham/' + value.id">
                                    <div class="card">
                                        <div class="card-img-top">
                                            <img :src="value.hinh" class="img-fluid" alt="">
                                        </div>
                                        <div class="card-img-overlay text-center" style="margin-top: 200px;">
                                            <div class="col">
                                                <br>
                                                <button class="btn btn-info p-2 mt-3" style="width: 170px;"> <i
                                                        class="fa-solid fa-cart-shopping"></i> Xem máy</button>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>

                        </template>


                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal Ticket-->
    <div class="modal fade" id="DatHang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title fs-3" id="exampleModalLabel">Thông tin giao hàng</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-3">
                            <VDatePicker v-model='selectedDate' />
                        </div>
                        <div class="col-lg-12">
                            <label for="">Tên người nhận</label>
                            <input type="text" class="form-control mt-2" placeholder="Nhập tên người nhận">
                            <label class="mt-3" for="">Số điện thoại</label>
                            <input type="text" class="form-control mt-2" placeholder="Nhập tên người nhận">
                            <label class="mt-3" for="">Địa chỉ</label>
                            <input type="text" class="form-control mt-2" placeholder="Nhập tên người nhận">
                            <label class="mt-3" for="">Số lượng</label>
                            <input type="number" class="form-control mt-2" placeholder="Nhập tên người nhận">
                            <label class="mt-3" for="">Ghi chú</label>
                            <input type="text" class="form-control mt-2" placeholder="Nhập tên người nhận">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="Trailer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title fs-3" id="exampleModalLabel">Review sản phẩm</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-3">
                            <VDatePicker v-model='selectedDate' />
                        </div>
                        <div class="col-lg-12">
                            <div class="ratio ratio-16x9">
                                <iframe id="youtubeVideo" :src="'https://www.youtube.com/embed/' + tt_san_pham.trailer "
                                    title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    props: ['id_san_pham'],
    data() {
        return {
            list_sanpham: [],
            id_san_pham: this.$route.params.id_san_pham,
            tt_san_pham: {},
            tt_danh_gia: {},
            tt_san_pham_khac: {},
        };
    },
    mounted() {
        // this.getLaptop();
        console.log(this.id_san_pham);
        this.loadData();
        this.getLaptop();


    },

    methods: {
        themGioHang() {
            axios.post("http://127.0.0.1:8000/api/khach-hang/chi-tiet-san-pham/add-data", this.tt_san_pham).then((res) => {
                if (res.data.status) {
                    this.$toast.success(res.data.message);
                    this.tt_san_pham = {};
                    this.loadData();
                }
            });
        },
        // ThemGioHang(id_san_pham) {
        //         var gioHang = {
        //             'id' : id_san_pham,
        //         };
        //         axios
        //             .post('http://127.0.0.1:8000/api/client/Laptop/san-pham/create', gioHang)
        //             .then((res) => {
        //                 if(res.data.status) {
        //                     this.$toast.success(res.data.message);
        //                 } else {
        //                     this.$toast.error("Thêm vào giỏ hàng thất bại");
        //                 }
        //             })  
        //             .catch((error) => {
        //                 console.log(error);
        //             });
        //     },
        getLaptop() {
            axios
                .get("http://127.0.0.1:8000/api/client/Laptop/get-data")
                .then((res) => {
                    if (res.data.data) {
                        this.tt_san_pham_khac = res.data.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        loadData() {
            axios
                // .get("http://127.0.0.1:8000/api/client/Laptop/san-pham/" + this.id_san_pham)
                .get("http://127.0.0.1:8000/api/client/Laptop/san-pham/" + this.id_san_pham)
                .then((res) => {
                    if (res.data.status) {
                        this.tt_san_pham = res.data.data_1;
                        this.tt_danh_gia = res.data.data_2;
                        // this.tt_san_pham_khac = res.data.data_3;
                    } else {
                        this.$router.push('/trang-chu')
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
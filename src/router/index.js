import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkNhanVienLogin from "./checkNhanVienLogin";

const routes = [
  // Admin
  {
    path: "/admin/khach-hang",
    component: () => import("../components/Admin/KhachHang/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/danh-muc",
    component: () => import("../components/Admin/DanhMuc/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/danh-sach-don-dat",
    component: () => import("../components/Admin/DanhSachDonDat/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/quan-an",
    component: () => import("../components/Admin/QuanAn/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/shipper",
    component: () => import("../components/Admin/Shipper/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/voucher",
    component: () => import("../components/Admin/Voucher/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/phan-quyen",
    component: () => import("../components/Admin/PhanQuyen/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/Admin/NhanVien/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/profile",
    component: () => import("../components/Admin/Profile/index.vue"),
    beforeEnter: checkNhanVienLogin,
  },
  {
    path: "/admin/dang-nhap",
    component: () => import("../components/Admin/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },
  //  Khách Hàng
  {
    path: "/khach-hang/dang-nhap",
    component: () => import("../components/KhachHang/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/khach-hang/dang-ky",
    component: () => import("../components/KhachHang/DangKi/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/khach-hang/profile",
    component: () => import("../components/KhachHang/Profile/index.vue"),
    meta: { layout: "client" },

  },
  {
    path: "/khach-hang/Test",
    component: () => import("../components/KhachHang/Test/index.vue"),
    meta: { layout: "client" },

  },

  // Quán Ăn
  {
    path: "/quan-an/dang-ky",
    component: () => import("../components/QuanAn/DangKy/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/quan-an/dang-nhap",
    component: () => import("../components/QuanAn/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },

  // Shipper
  {
    path: "/shipper/dang-ky",
    component: () => import("../components/Shipper/DangKy/index.vue"),
    meta: { layout: "blank" },
  },
  {
    path: "/shipper/dang-nhap",
    component: () => import("../components/Shipper/DangNhap/index.vue"),
    meta: { layout: "blank" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

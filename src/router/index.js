import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
// import checkNhanVienLogin from "./checkNhanVienLogin";
// import checkKhachHang from "./checkKhachHang";
const routes = [
  // Admin
  {
  	path: "/admin/quan-ly-danh-muc",
  	component: () => import("../components/Admin/QuanLyDanhMuc/index.vue"),
  	beforeEnter: checkNhanVienLogin,
  },
    {
  	path: "/admin/quan-ly-san-pham",
  	component: () => import("../components/Admin/QuanLySanPham/index.vue"),
  	beforeEnter: checkNhanVienLogin,
  },
  // {
  // 	path: "/admin/khach-hang",
  // 	component: () => import("../components/Admin/KhachHang/index.vue"),
  // 	beforeEnter: checkNhanVienLogin,
  // },
  // {
  // 	path: "/admin/profile",
  // 	component: () => import("../components/Admin/Profile/index.vue"),
  // 	beforeEnter: checkNhanVienLogin,
  // },
  // {
  // 	path: "/admin/dang-nhap",
  // 	component: () => import("../components/Admin/DangNhap/index.vue"),
  // 	meta: { layout: "blank" },
  // },

  //  Khách Hàng
  {
    path: "/trang-chu",
    component: () => import("../components/KhachHang/TrangChu/index.vue"),
    meta: { layout: "client" },
    props: true,
  },
  // {
  // 	path: "/khach-hang/dang-nhap",
  // 	component: () => import("../components/KhachHang/DangNhap/index.vue"),
  // 	meta: { layout: "blank" },
  // },
  // {
  // 	path: "/khach-hang/san-pham",
  // 	component: () => import("../components/KhachHang/SanPham/index.vue"),
  // 	meta: { layout: "client" },
  // },
  {
    path: "/khach-hang/chi-tiet-san-pham/:id_san_pham",
    component: () => import("../components/KhachHang/ChiTietSanPham/index.vue"),
    meta: { layout: "client" },
  },
  // {
  // 	path: "/khach-hang/dang-ky",
  // 	component: () => import("../components/KhachHang/DangKi/index.vue"),
  // 	meta: { layout: "blank" },
  // },
  // {
  // 	path: "/khach-hang/profile",
  // 	component: () => import("../components/KhachHang/Profile/index.vue"),
  // 	meta: { layout: "client" },
  // 	beforeEnter: checkKhachHang,
  // },
  // Từng quán nội dung hiển thị sẽ khác nhau. Giống về cấu trúc
  // Làm sao để ta biết là khác nhau ra sao => dựa vào id_quan_an
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;

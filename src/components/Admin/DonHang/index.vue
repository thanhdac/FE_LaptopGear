<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card radius-10 border-top border-0 border-3 border-info">
        <div class="card-header d-flex justify-content-between">
          <h4 class="mt-2 text-primary"><b>DANH SÁCH ĐƠN HÀNG</b></h4>
        </div>
        <div class="card-body table-responsive">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search...." />
            <button class="btn btn-secondary input-group-text" style="width: 110px">Tìm kiếm</button>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr class="bg-primary text-light text-nowrap">
                  <th class="text-center">#</th>

                  <th class="text-center">Tên Khách Hàng</th>
                  <th class="text-center">Ngày Lập</th>
                  <th class="text-center">Ghi Chú</th>
                  <th class="text-center">Địa Chỉ</th>
                  <th class="text-center">Số Điện Thoại</th>
                  <th class="text-center">Trạng Thái</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, index) in list_hoa_don" :key="index">
                  <tr>
                    <th class="align-middle text-center">{{ index + 1 }}</th>
                    <td class="align-middle text-wrap ">
                      {{ item.ho_ten }}
                    </td>
                    <td class="align-middle text-wrap text-center">
                      {{ item.ngay_hoa_don }}
                    </td>
                    <td class="align-middle text-wrap ">
                      {{ item.ghi_chu }}
                    </td>
                    <td class="align-middle text-wrap">
                      {{ item.dia_chi }}
                    </td>
                    <td class="align-middle text-wrap text-center">
                      {{ item.so_dien_thoai }}
                    </td>
                    <td class="align-middle text-wrap text-center">
                      <b v-if="item.trang_thai == 0" class="text-danger w-100" style="color: white">
                        Chờ Xét Duyệt
                      </b>
                      <b v-if="item.trang_thai == 1" class="text-primary w-100" style="color: white">
                        Đã Xét Duyệt
                      </b>
                    </td>

                    <td @click="duyetHoaDon(item)" class="align-middle text-warning text-nowrap text-center" >
                      <button v-if="item.trang_thai == 0" class="btn btn-secondary me-2 " style="color: white; width: 127px;">
                        Duyệt Đơn
                      </button>
                      <button v-if="item.trang_thai == 1" class="btn btn-success  me-2" style="color: white">
                        Đã Duyệt Đơn
                      </button>
                      <button
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        v-on:click="Object.assign(del_hoa_don, item)"
                      >
                        Hủy Đơn
                      </button>
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

  <!-- Modal Xóa -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Hủy Hóa Đơn</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger" role="alert">
            Bạn có chắc chắn muốn hủy hóa đơn của 
            <strong>{{ del_hoa_don.ten_dang_nhap }}</strong
            >?
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoaHoaDon()">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list_hoa_don: [],
      del_hoa_don: {},
    };
  },
  mounted() {
    this.getHoaDon();
  },
  methods: {
    getHoaDon() {
      axios.get("http://127.0.0.1:8000/api/admin/don-hang/get-data").then((res) => {
        this.list_hoa_don = res.data.data;
      });
    },
    duyetHoaDon() {},
    xoaHoaDon() {
      axios.post("http://127.0.0.1:8000/api/admin/don-hang/delete", this.del_hoa_don).then((res) => {
        if (res.data.status) {
          this.$toast.success(res.data.message);
          this.getHoaDon();
        }
      });
    },
    duyetHoaDon(value) {
      axios.post("http://127.0.0.1:8000/api/admin/don-hang/change-status", value).then((res) => {
        if (res.data.status) {
          this.$toast.success(res.data.message);
          this.getHoaDon();
        }
      });
    },
  },
};
</script>

<style></style>

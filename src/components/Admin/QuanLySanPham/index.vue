<template>
  <div class="card">
    <div class="card-body">
      <ul class="nav nav-tabs nav-primary" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            href="#danhMuc"
            role="tab"
            aria-selected="true"
          >
            <div class="d-flex align-items-center">
              <div class="tab-icon">
                <i class="fa-solid fa-bars me-2"></i>
              </div>
              <div class="tab-title">Quản Lý Sản Phẩm</div>
            </div>
          </a>
        </li>
      </ul>
      <div class="tab-content py-3">
        <div class="tab-pane fade active show" id="danhMuc" role="tabpanel">
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="card-title mt-2 mb-4">Danh Sách Sản Phẩm</h2>
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#themMoiMoldel"
            >
              <i class="fas fa-plus"></i> Thêm Mới Sản Phẩm
            </button>
            <!-- Modal Thêm Mới-->
            <div
              class="modal fade"
              id="themMoiMoldel"
              tabindex="-1"
              aria-labelledby="themMoiMoldel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addCategoryModalLabel">
                      Thêm Mới Sản Phẩm
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="ten_danh_muc" class="form-label"
                          >Tên Sản Phẩm</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="ten_danh_muc"
                          placeholder="Nhập tên danh mục"
                          v-model="create_danh_muc.ten_danh_muc"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="hinh_anh" class="form-label"
                          >Hình Ảnh</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="hinh_anh"
                          placeholder="Nhập hình ảnh"
                          v-model="create_danh_muc.hinh_anh"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="hinh_anh" class="form-label"
                          >Danh Mục</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="hinh_anh"
                          placeholder="Nhập hình ảnh"
                          v-model="create_danh_muc.hinh_anh"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="tinh_trang" class="form-label"
                          >Trạng thái</label
                        >
                        <select
                          class="form-control"
                          v-model="create_danh_muc.tinh_trang"
                        >
                          <option value="0">Tạm tắt</option>
                          <option value="1">Hiển thị</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div class="mb-3">
                    <label for="hinh_anh" class="form-label">Mô tả</label>
                    <input
                      type="text"
                      class="form-control"
                      id="hinh_anh"
                      placeholder="Nhập hình ảnh"
                      v-model="create_danh_muc.hinh_anh"
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      v-on:click="themMoi()"
                    >
                      Thêm Mới
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-bordered table-hover mb-0">
              <thead class="table-light">
                <tr class="align-middle text-center table-secondary">
                  <th>#</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Đơn Gía</th>
                  <th>Hình Ảnh</th>
                  <th>Danh Mục</th>
                  <th>Trạng Thái</th>
                  <th>Mô tả</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(value, index) in list_danh_muc" :key="index">
                  <tr class="align-middle">
                    <th class="text-center">{{ index + 1 }}</th>
                    <td>{{ value.ten_danh_muc }}</td>
                    <td>{{ value.slug_danh_muc }}</td>
                    <td class="text-center">
                      <img
                        v-bind:src="value.hinh_anh"
                        alt=""
                        style="width: 120px"
                      />
                    </td>
                    <td class="text-center">
                      {{
                        value.ten_danh_muc_cha ? value.ten_danh_muc_cha : "-"
                      }}
                    </td>
                    <td class="text-center" v-on:click="changeStatus(value)">
                      <button
                        v-if="value.tinh_trang == 0"
                        class="btn btn-warning me-1"
                        style="color: white"
                      >
                        Tạm Tắt
                      </button>
                      <button
                        v-else
                        class="btn btn-success"
                        style="color: white"
                      >
                        Hiển Thị
                      </button>
                    </td>
                    <td class="text-center">
                      <button
                        v-on:click="Object.assign(update_danh_muc, value)"
                        class="btn btn-warning btn-sm me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#updateModal"
                        style="color: white"
                      >
                        <i class="fas fa-edit"></i> Sửa
                      </button>
                      <button
                        v-on:click="Object.assign(delete_danh_muc, value)"
                        class="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        <i class="fas fa-trash"></i> Xóa
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
    <!-- Modal Cập Nhật -->
    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      aria-labelledby="updateModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateModalLabel">Cập Nhật Danh Mục</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="update_ten_danh_muc" class="form-label"
                  >Tên Danh Mục</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="update_ten_danh_muc"
                  v-model="update_danh_muc.ten_danh_muc"
                />
              </div>
              <div class="mb-3">
                <label for="update_slug_danh_muc" class="form-label"
                  >Slug Danh Mục</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="update_slug_danh_muc"
                  v-model="update_danh_muc.slug_danh_muc"
                />
              </div>
              <div class="mb-3">
                <label for="update_hinh_anh" class="form-label">Hình Ảnh</label>
                <input
                  type="text"
                  class="form-control"
                  id="update_hinh_anh"
                  v-model="update_danh_muc.hinh_anh"
                />
              </div>
              <div class="mb-3">
                <label for="update_id_danh_muc_cha" class="form-label"
                  >Danh Mục Cha</label
                >
                <select
                  class="form-control"
                  v-model="update_danh_muc.id_danh_muc_cha"
                >
                  <template
                    v-for="(value, index) in list_danh_muc"
                    :key="index"
                  >
                    <option v-bind:value="value.id">
                      {{ value.ten_danh_muc }}
                    </option>
                  </template>
                </select>
              </div>
              <div class="mb-3">
                <label for="update_tinh_trang" class="form-label"
                  >Trạng thái</label
                >
                <select
                  class="form-control"
                  v-model="update_danh_muc.tinh_trang"
                >
                  <option value="0">Tạm tắt</option>
                  <option value="1">Hiện thị</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="capNhat()"
            >
              Cập Nhật
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Xóa -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Xóa Danh Mục</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="alert alert-warning">
              Bạn có chắc chắn muốn xóa danh mục
              <strong>{{ delete_danh_muc.ten_danh_muc }}</strong> không?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="xoa()"
            >
              Xóa
            </button>
          </div>
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
      list_danh_muc: [],
      create_danh_muc: {},
      update_danh_muc: {},
      delete_danh_muc: {},
    };
  },
  mounted() {
    this.LoadDataDanhMuc();

  },
  methods: {
    LoadDataDanhMuc() {
      axios
        .get("http://localhost:8000/api/admin/danh-muc/data", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("nhan_vien_login"),
          },
        })
        .then((res) => {
          this.list_danh_muc = res.data.data;
        });
    },
    themMoi() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/danh-muc/create",
          this.create_danh_muc,
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem("nhan_vien_login"),
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            this.$toast.success(res.data.message);
            this.LoadDataDanhMuc();
            this.create_danh_muc = {};
          }
        })
        .catch((res) => {
          const list = Object.values(res.response.data.errors);
          list.forEach((v, i) => {
            this.$toast.error(v[0]);
          });
        });
    },
    capNhat() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/danh-muc/update",
          this.update_danh_muc,
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem("nhan_vien_login"),
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            this.LoadDataDanhMuc();
            this.$toast.success(res.data.message);
          }
        })
        .catch((res) => {
          const list = Object.values(res.response.data.errors);
          list.forEach((v, i) => {
            this.$toast.error(v[0]);
          });
        });
    },
    xoa() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/danh-muc/delete",
          this.delete_danh_muc,
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem("nhan_vien_login"),
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            this.LoadDataDanhMuc();
            this.$toast.success(res.data.message);
          }
        })
        .catch((res) => {
          const list = Object.values(res.response.data.errors);
          list.forEach((v, i) => {
            this.$toast.error(v[0]);
          });
        });
    },
    changeStatus(value) {
      axios
        .post("http://127.0.0.1:8000/api/admin/danh-muc/change-status", value, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("nhan_vien_login"),
          },
        })
        .then((res) => {
          if (res.data.status) {
            this.LoadDataDanhMuc();
            this.$toast.success(res.data.message);
          }
        })
        .catch((res) => {
          const list = Object.values(res.response.data.errors);
          list.forEach((v, i) => {
            this.$toast.error(v[0]);
          });
        });
    },
  },
};
</script>

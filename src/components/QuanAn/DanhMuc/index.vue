<template>
    <!-- them moi -->
    <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header ">
                    <h1 class="modal-title fs-5 " id="exampleModalLabel">Thêm Mới Danh Mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tên Danh Mục</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Slug</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Hình Ảnh</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Dạnh Mục Cha</label>
                        <select class="form-control mt-2">
                            <option value="0">Không Có</option>
                            <option value="1">Bánh Xèo</option>
                            <option value="2">Mỳ Quảng</option>

                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Trạng Thái</label>
                        <select class="form-select mt-2">
                            <option value="0">Tạm Tắt</option>
                            <option value="1">Hoạt Động</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Cập Nhật -->
    <div class="modal fade" id="capnhat" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header ">
                    <h5 class="modal-title " id="editModalLabel">Cập Nhật Danh Mục</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tên Danh Mục</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Slug</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Hình Ảnh</label>
                        <input type="text" class="form-control mt-2">
                    </div>
                    <div class="mb-2">
                        <label>Dạnh Mục Cha</label>
                        <select class="form-control mt-2">
                            <option value="0">Không Có</option>
                            <option value="1">Bánh Xèo</option>
                            <option value="2">Mỳ Quảng</option>

                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Tình Trạng</label>
                        <select class="form-control mt-2">
                            <option value="0">Tạm Tắt</option>
                            <option value="1">Hoạt Động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Lưu Thay Đổi</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Xóa -->
    <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title text-white" id="deleteModalLabel">Xóa Danh Mục</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc muốn xóa danh mục <b class="text-danger"> .....</b> này
                    không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mt-2"><b>DANH SÁCH DANH MỤC</b></h6>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoi">Thêm Mới</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="align-middle text-center">#</th>
                            <th class="align-middle text-center">Tên Danh Mục</th>
                            <th class="align-middle text-center">Slug</th>
                            <th class="align-middle text-center">Hình Ảnh</th>
                            <th class="align-middle text-center">Danh Mục Cha</th>
                            <th class="align-middle text-center">Trạng Thái</th>
                            <th class="align-middle text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle text-center">1</td>
                            <td class="align-middle">Bánh truyền thống</td>
                            <td class="align-middle">banh-xeo-truyen-thong</td>
                            <td class="align-middle text-center">
                                <img src="https://afamilycdn.com/150157425591193600/2021/9/10/24130700020582136376707604290604352532348575n-1631264758126969867816.jpeg"
                                    width="50">
                            </td>
                            <td class="align-middle text-center">
                                Bánh Xèo
                            </td>
                            <td class="align-middle  ">
                                <button class="btn btn-success w-100">Hiển thị</button>
                            </td>
                            <td class="align-middle text-center text-nowrap">
                                <button class="btn btn-primary me-1" style="width: 100px;" data-bs-toggle="modal"
                                    data-bs-target="#capnhat">Cập Nhật</button>
                                <button data-bs-toggle="modal" data-bs-target="#xoa" class="btn btn-danger"
                                    style="width: 100px;">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

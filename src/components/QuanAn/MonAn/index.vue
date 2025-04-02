<template>
    <div class="card">
        <div class="card-header ">
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mt-2"><b>DANH SÁCH MÓN ĂN</b></h6>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themmoi">Thêm Mới Món
                    Ăn</button>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">#</th>
                            <th class="text-center align-middle">Tên Món Ăn</th>
                            <th class="text-center align-middle">Slug Món Ăn</th>
                            <th class="text-center align-middle">Giá Bán</th>
                            <th class="text-center align-middle">Giá Khuyến Mãi</th>
                            <th class="text-center align-middle">Mô Tả</th>
                            <th class="text-center align-middle">Tên Quán</th>
                            <th class="text-center align-middle">Hình Ảnh</th>
                            <th class="text-center align-middle">Danh Mục</th>
                            <th class="text-center align-middle">Tình Trạng</th>
                            <th class="text-center align-middle">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center align-middle">1</td>
                            <td class="text-center align-middle">Cafe Dừa</td>
                            <td class="text-center align-middle">cafe-dua</td>
                            <td class="text-end align-middle">20000</td>
                            <td class="text-end align-middle">15000</td>
                            <td class="align-middle">Cafe đậm đà hòa quyện với vị béo ngọt của nước cốt dừa tươi, tạo nên hương vị độc đáo và hấp dẫn</td>
                            <td class="text-center align-middle">2</td>
                            <td class="text-center align-middle">
                                <img src="https://myvietcoffee.com/wp-content/uploads/2024/10/cach-lam-ca-phe-nuoc-cot-dua.jpg" alt="" style="width: 50px; height: 50px;">
                            </td>
                            <td class="text-center align-middle"> 17 </td>
                            <td class="align-middle">
                              <button class="btn btn-success">Hiển thị</button>
                           </td>
                            <td class="text-center align-middle">
                                <button data-bs-toggle="modal" data-bs-target="#capnhat" class="btn btn-primary me-1 " style="width: 100px ;">Cập Nhật</button>
                                <button  data-bs-toggle="modal" data-bs-target="#xoa" class="btn btn-danger" style="width: 100px;">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="modal fade" id="themmoi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Thêm Mới Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Món Ăn</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Slug Món Ăn</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Giá Bán</label>
                                <input type="number" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Giá Khuyến Mãi</label>
                                <input type="number" class="form-control mt-2" >
                            </div>
                         
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Mô Tả</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Tên Quán</label>
                                <input type="text" class="form-control mt-2" >
                                <!-- <select class="form-control">
                                    <option value="0">Quan ABC</option>
                                    <option value="1">Quan BCD</option>
                                </select> -->
                            </div>
                            <div class="mb-2">
                                <label>Hình Ảnh</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Tình Trạng</label>
                                <select class="form-select mt-2" >
                                    <option value="1">Còn hàng</option>
                                    <option value="0">Hết hàng</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-2">
                                <label>Danh Mục</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="capnhat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Cập Nhật Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Tên Món Ăn</label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Slug Món Ăn</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Giá Bán</label>
                                <input type="number" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Giá Khuyến Mãi</label>
                                <input type="number" class="form-control mt-2" >
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-2">
                                <label>Mô Tả</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Tên Quán</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                            <div class="mb-2">
                                <label>Hình Ảnh</label>
                                <input type="text" class="form-control mt-2">
                            </div>
                            <div class="mb-2">
                                <label>Tình Trạng</label>
                                <select class="form-select mt-2" >
                                    <option value="1">Còn hàng</option>
                                    <option value="0">Hết hàng</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-2">
                                <label>Danh Mục</label>
                                <input type="text" class="form-control mt-2" >
                            </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Xóa Món Ăn</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa món ăn:
                    <b class="text-danger">...........</b> không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

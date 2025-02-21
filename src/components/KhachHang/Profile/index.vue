<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card border-0 shadow-sm">
                    <div class="card-body p-4">
                        <ul class="nav nav-tabs nav-fill mb-4">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#profile">
                                    <i class="fa-solid fa-user me-2"></i>Thông tin cá nhân
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#address">
                                    <i class="fa-solid fa-location-dot me-2"></i>Địa chỉ nhận hàng
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#password">
                                    <i class="fa-solid fa-lock me-2"></i>Đổi mật khẩu
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="profile">
                                <div class="row g-4">
                                    <div class="col-lg-4">
                                        <div class="card border-0 shadow-sm h-100">
                                            <div class="card-body text-center p-4">
                                                <img src="https://scs.duytan.edu.vn/upload/images/13-1-2021-7-24-29-57.JPG" 
                                                     alt="Avatar"
                                                     class="rounded-circle mb-3 shadow-sm"
                                                     width="120" height="120">
                                                <h5 class="mb-1">Nguyễn Quốc Long</h5>
                                                <p class="text-muted mb-3">Khách hàng thân thiết</p>
                                                <div class="row g-3">
                                                    <div class="col-6">
                                                        <div class="p-3 bg-light rounded-3">
                                                            <h6 class="mb-1">12</h6>
                                                            <small class="text-muted">Đơn hàng</small>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="p-3 bg-light rounded-3">
                                                            <h6 class="mb-1">5</h6>
                                                            <small class="text-muted">Đánh giá</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-8">
                                        <div class="card border-0 shadow-sm h-100">
                                            <div class="card-body p-4">
                                                <h5 class="card-title mb-4">Thông tin cá nhân</h5>
                                                <form>
                                                    <div class="row g-3">
                                                        <div class="col-md-6">
                                                            <label class="form-label fw-semibold">Họ và tên</label>
                                                            <input type="text" class="form-control" placeholder="Nhập họ và tên">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label fw-semibold">Email</label>
                                                            <input type="email" class="form-control" placeholder="example@email.com">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label fw-semibold">Số điện thoại</label>
                                                            <input type="tel" class="form-control" placeholder="0123 456 789">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label fw-semibold">Ngày sinh</label>
                                                            <input type="date" class="form-control">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label fw-semibold">Ảnh đại diện</label>
                                                            <input type="file" class="form-control" accept="image/*">
                                                        </div>
                                                    </div>
                                                    <div class="text-end mt-4">
                                                        <button type="button" class="btn btn-light me-2">Huỷ</button>
                                                        <button type="submit" class="btn btn-primary px-4">Lưu thay đổi</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="address">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                    <h5 class="mb-0">Địa chỉ giao hàng</h5>
                                    <button class="btn btn-primary">
                                        <i class="fa-solid fa-plus me-2"></i>Thêm địa chỉ
                                    </button>
                                </div>
                                <div class="card border-0 shadow-sm mb-3">
                                    <div class="card-body p-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="mb-1">Nguyễn Quốc Long</h6>
                                                <p class="mb-1">0123456789</p>
                                                <p class="mb-0 text-muted">202 Võ Nguyên Giáp</p>
                                            </div>
                                            <div >
                                                <button class="btn btn-outline-primary btn-2xl me-2">
                                                    <i class="fa-solid fa-pen"></i>
                                                </button>
                                                <button class="btn btn-outline-danger btn-2xl">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="password">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="card border-0 shadow-sm">
                                            <div class="card-body p-4">
                                                <h5 class="card-title mb-4">Đổi mật khẩu</h5>
                                                <form>
                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Mật khẩu hiện tại</label>
                                                        <input type="password" class="form-control" placeholder="Nhập mật khẩu hiện tại">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label fw-semibold">Mật khẩu mới</label>
                                                        <input type="password" class="form-control" placeholder="Nhập mật khẩu mới">
                                                    </div>
                                                    <div class="mb-4">
                                                        <label class="form-label fw-semibold">Xác nhận mật khẩu mới</label>
                                                        <input type="password" class="form-control" placeholder="Nhập lại mật khẩu mới">
                                                    </div>
                                                    <button type="submit" class="btn btn-primary px-4">Cập nhật mật khẩu</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style>
</style>
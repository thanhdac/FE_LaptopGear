<template>
    <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div class="col mx-auto">
                    <div class="card radius-10">
                        <div class="card-body p-4">
                            <div class="text-center mb-4">
                                <img src="https://dzfullstack.com/assets/images/logo-1.png" width="150" alt="" />
                                <h4 class="mt-3 font-weight-bold">ĐĂNG NHẬP ADMIN</h4>
                            </div>
                            <div class="form-body">
                                <form class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label">Email</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-transparent">
                                                <i class="fa-solid fa-envelope"></i>
                                            </span>
                                            <input type="email" class="form-control border-start-0" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Mật khẩu</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-transparent">
                                                <i class="fa-solid fa-lock"></i>
                                            </span>
                                            <input type="password" class="form-control border-start-0" placeholder="Mật khẩu">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-primary">
                                                <i class="fa-solid fa-right-to-bracket me-2"></i>
                                                Đăng Nhập
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
    
}
</script>
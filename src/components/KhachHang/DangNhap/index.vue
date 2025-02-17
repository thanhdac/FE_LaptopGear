<template>
    <div class="container mt-5">
        <div class="row w-100">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <div class="card shadow p-4">
                    <h1 class="text-center mb-3">🍔 Chào Mừng Đến Với FoodZone</h1>
                    <p class="text-center text-muted">Đăng nhập để thưởng thức những món ăn ngon!</p>

                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">📧 Email:</label>
                            <input id="email" type="email" class="form-control" placeholder="Nhập email của bạn">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">🔒 Mật Khẩu:</label>
                            <input id="password" type="password" class="form-control"
                                placeholder="Nhập mật khẩu của bạn">
                        </div>

                        <div class="d-grid">
                            <button class="btn btn-primary w-100">
                                🚀 Đăng Nhập
                            </button>
                        </div>
                    </form>

                    <div class="text-center mt-3">
                        <a href="#" class="text-decoration-none">🔑 Quên mật khẩu?</a> |
                        <router-link to="/khach-hang/dang-ky">
                            <a href="#" class="text-decoration-none">📝 Tạo tài khoản mới</a>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

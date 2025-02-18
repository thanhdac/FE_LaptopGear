<template>
    <div class="container mt-5">
        <div class="row w-100">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <div class="card shadow p-4">
                    <h1 class="text-center mb-3">🍔 Chào Mừng Đến Với FoodZone</h1>
                    <p class="text-center text-muted">Đăng nhập để thưởng thức những món ăn ngon!</p>

                    <div>
                        <div class="mb-3">
                            <label for="email" class="form-label">📧 Email:</label>
                            <input v-model="user.email" id="email" type="email" class="form-control" placeholder="Nhập email của bạn">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">🔒 Mật Khẩu:</label>
                            <input v-model="user.password" id="password" type="password" class="form-control"
                                placeholder="Nhập mật khẩu của bạn">
                        </div>

                        <div class="d-grid">
                            <button v-on:click="Login()" class="btn btn-primary w-100">
                                🚀 Đăng Nhập
                            </button>
                        </div>
                    </div>

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
import axios from 'axios';
export default {
    data() {
        return {
            user : {
                email: '',
                password: ''
            }   
        }
    },
    methods: {
        Login() {
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/dang-nhap", this.user)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        }
    },
}
</script>

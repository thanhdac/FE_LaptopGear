<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				<li class="nav-item">
					<router-link to="/trang-chu">
						<a class="nav-link" href="/trang-chu">
							<div class="parent-icon"><i class="fa-solid fa-home"></i>
							</div>
							<div class="menu-title">Trang Chủ</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/khach-hang/san-pham">
						<a class="nav-link" href="/khach-hang/san-pham">
							<div class="parent-icon"><i class="fa-solid fa-laptop"></i>
							</div>
							<div class="menu-title">Sản Phẩm</div>
						</a>
					</router-link>
				</li>
				<!-- <li class="nav-item">
					<router-link to="/khach-hang/san-pham">
						<a class="nav-link" href="/khach-hang/quan-an">
							<div class="parent-icon"><i class="fa-solid fa-shop"></i>
							</div>
							<div class="menu-title">Cơ Sở Laptop Grear</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/khach-hang/don-dat-hang">
						<a class="nav-link" href="/khach-hang/don-dat-hang">
							<div class="parent-icon"><i class="fa-solid fa-cart-shopping"></i>
							</div>
							<div class="menu-title">Đơn Đặt Hàng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/khach-hang/don-hang">
						<a class="nav-link" href="/khach-hang/don-hang">
							<div class="parent-icon"><i class="fa-solid fa-file-invoice"></i>
							</div>
							<div class="menu-title">Đơn Hàng</div>
						</a>
					</router-link>
				</li> -->
				
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>
<template>
	<div class="topbar d-flex align-items-center">
		<nav class="navbar navbar-expand">
			<div class="topbar-logo-header">
				<div class="">
					<img src="../../../../img/Admin.png" style="width: 150px;" class="logo-icon mb-1"
						alt="logo icon">
				</div>
			</div>
			<div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
			<div class="search-bar flex-grow-1">
				<div class="position-relative search-bar-box">
					<input type="text" class="form-control search-control" placeholder="Tìm Kiếm?">
					<span class="position-absolute top-50 search-show translate-middle-y"><i
							class='bx bx-search'></i></span>
					<span class="position-absolute top-50 search-close translate-middle-y"><i
							class='bx bx-x'></i></span>
				</div>
			</div>
			<div class="user-box dropdown">
				<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
					role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="../../../../img/logo1.png" class="user-img"
						alt="user avatar">
					<div class="user-info ps-3">
						<p class="user-name mb-0">{{ ho_ten }}</p>
						<p class="designattion mb-0">Chức vụ</p>
					</div>
				</a>
				<ul class="dropdown-menu dropdown-menu-end">
					<li>
						<router-link to="/admin/profile">
							<a class="dropdown-item" href="/admin/profile"><i
									class="bx bx-user"></i><span>Profile</span></a>
						</router-link>
					</li>
					<li><a class="dropdown-item" href="javascript:;"><i
								class='bx bx-log-out-circle'></i><span>Logout</span></a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	data() {
		return {
			ho_ten: localStorage.getItem('ho_ten_nhan_vien')
		}
	},
}
</script>
<style></style>
<template>
    <div class="card shadow-sm">
        <div class="card-body">
            <!-- Search and Filter Section -->
            <div class="d-lg-flex align-items-center mb-4 gap-3">
                <div class="position-relative flex-grow-1">
                    <input type="text" class="form-control ps-5 radius-30" placeholder="Tìm kiếm đơn hàng">
                    <span class="position-absolute top-50 product-show translate-middle-y">
                        <i class="bx bx-search"></i>
                    </span>
                </div>
                <div class="mt-3 mt-lg-0">
                    <select class="form-select">
                        <option value="">Tất cả trạng thái</option>
                        <option value="completed">Đã giao</option>
                        <option value="pending">Đang giao</option>
                        <option value="cancelled">Đã hủy</option>
                    </select>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                        <tr class="align-middle">
                            <th class="text-center">Mã đơn hàng</th>
                            <th>Tên quán ăn</th>
                            <th>Trạng thái</th>
                            <th>Ngày đặt</th>
                            <th class="text-end">Tổng tiền</th>
                            <th class="text-center">Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="align-middle">
                            <td class="text-center">
                                <div class="d-flex align-items-center justify-content-center">
                                    <span class="fw-bold">#123456</span>
                                </div>
                            </td>
                            <td>Quán Ăn 1</td>
                            <td>
                                <span class="badge rounded-pill px-3 bg-success">
                                    <i class="bx bxs-circle me-1"></i>
                                    Đã giao
                                </span>
                            </td>
                            <td>2024-03-10</td>
                            <td class="text-end fw-bold">100.000đ</td>
                            <td class="text-center">
                                <button type="button" class="btn btn-primary btn-sm radius-30 px-4"
                                    data-bs-toggle="modal" data-bs-target="#orderDetailsModal">
                                    <i class="bx bx-detail me-1"></i>Chi tiết
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

        <!-- Modal Chi Tiết Đơn Hàng -->
        <div class="modal fade" id="orderDetailsModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header text-white">
                        <h5 class="modal-title">
                            <i class="bx bx-package me-2"></i>
                            Chi Tiết Đơn Hàng #123456
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <!-- Thông Tin Đơn Hàng -->
                            <div class="col-md-6 d-flex">
                                <div class="card border-0 bg-light flex-fill">
                                    <div class="card-body">
                                        <h6 class="card-title mb-3">
                                            <i class="bx bx-info-circle me-2"></i>Thông Tin Đơn Hàng
                                        </h6>
                                        <div class="mb-2">
                                            <i class="bx bx-user text-primary me-2"></i>
                                            <strong>Khách Hàng:</strong>
                                            <span class="ms-1">Nguyễn Văn A</span>
                                        </div>
                                        <div class="mb-2">
                                            <i class="bx bx-calendar text-primary me-2"></i>
                                            <strong>Ngày Đặt:</strong>
                                            <span class="ms-1">2024-03-10</span>
                                        </div>
                                        <div class="mb-2">
                                            <i class="bx bx-check-circle text-primary me-2"></i>
                                            <strong>Trạng Thái:</strong>
                                            <span class="badge rounded-pill bg-success px-3 ms-1">
                                                <i class="bx bxs-circle me-1"></i>
                                                Đã giao
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Địa Chỉ Giao Hàng -->
                            <div class="col-md-6 d-flex">
                                <div class="card border-0 bg-light flex-fill">
                                    <div class="card-body">
                                        <h6 class="card-title mb-3">
                                            <i class="bx bx-map me-2"></i>Địa Chỉ Giao Hàng
                                        </h6>
                                        <p class="mb-1">
                                            <i class="bx bx-location-plus text-primary me-2"></i>
                                            123 Đường ABC, Quận 1, TP.HCM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Chi Tiết Sản Phẩm -->
                        <h6 class="mb-3">
                            <i class="bx bx-cart me-2"></i>Chi Tiết Sản Phẩm
                        </h6>
                        <div class="table-responsive">
                            <table class="table table-hover border">
                                <thead class="table-light">
                                    <tr class="align-middle">
                                        <th>Sản Phẩm</th>
                                        <th class="text-center">Số Lượng</th>
                                        <th class="text-end">Đơn Giá</th>
                                        <th class="text-end">Ghi Chú</th>
                                        <th class="text-end">Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="align-middle">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <i class="bx bx-dish me-2 text-primary"></i>
                                                Mì trộn tê cay
                                            </div>
                                        </td>
                                        <td class="text-center">1</td>
                                        <td class="text-end">50k</td>
                                        <td class="text-end">
                                            <input type="text" class="form-control" disabled placeholder="Ghi chú">
                                        </td>
                                        <td class="text-end fw-bold">50k</td>
                                    </tr>
                                </tbody>
                                <tfoot class="table-light">
                                    <tr class="align-middle">
                                        <td colspan="3" class="text-end">
                                            <strong>Tổng Cộng:</strong>
                                        </td>
                                        <td class="text-end">
                                            <span class="text-primary fs-5 fw-bold">
                                                100k
                                            </span>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                            <i class="bx bx-x me-1"></i>Đóng
                        </button>
                        <button type="button" class="btn btn-primary">
                            <i class="bx bx-printer me-1"></i>In đơn hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: '',
            statusFilter: '',
            selectedOrder: null,
            orders: [
                {
                    id: 'OS-000354',
                    customerName: 'Nguyễn Văn A',
                    status: 'completed',
                    totalPrice: 485000,
                    orderDate: new Date('2024-03-10'),
                    shippingAddress: '123 Đường ABC, Quận 1, TP.HCM',
                    items: [
                        { id: 1, name: 'Burger', quantity: 2, price: 50000, note: 'Không hành' },
                        { id: 2, name: 'Pizza', quantity: 1, price: 385000, note: '' }
                    ]
                },
                {
                    id: 'OS-000355',
                    customerName: 'Trần Thị B',
                    status: 'pending',
                    totalPrice: 968000,
                    orderDate: new Date('2024-03-10'),
                    shippingAddress: '456 Đường XYZ, Quận 2, TP.HCM',
                    items: [
                        { id: 1, name: 'Combo 1', quantity: 1, price: 968000, note: 'Thêm nước ngọt' }
                    ]
                }
            ]
        }
    },
    computed: {
        filteredOrders() {
            return this.orders.filter(order => {
                const matchesSearch = !this.searchTerm ||
                    order.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                    order.customerName.toLowerCase().includes(this.searchTerm.toLowerCase());

                const matchesStatus = !this.statusFilter || order.status === this.statusFilter;

                return matchesSearch && matchesStatus;
            });
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.table td,
.table th {
    vertical-align: middle;
}

.btn-sm {
    padding: 0.25rem 0.5rem;
}

.badge {
    padding: 0.5em 1em;
}
</style>
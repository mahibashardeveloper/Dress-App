<template>

    <header class="container py-5">
        <div class="row align-items-center">
            <div class="col-md-4 p-3">
                <div class="position-relative">
                    <input type="text" name="search" class="form-control shadow-none rounded-0 border-0 border-bottom ps-5" placeholder="Search Here">
                    <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                        <i class="bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p-3 text-center">
                <div class="h1">SaleHub</div>
            </div>
            <div class="col-md-4 p-3">
                <div class="d-flex justify-content-center justify-content-md-end align-items-center">
                    <div class="dropdown pe-4 border-end">
                        <a href="javascript:void(0)" class="d-inline-block text-decoration-none text-dark fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end rounded-0 p-3 mt-3">
                            <li>
                                <a class="dropdown-item mb-2 py-2" href="javascript:void(0)">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item mb-2 py-2" href="javascript:void(0)">
                                    Registration Account
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item mb-2 py-2" href="javascript:void(0)">
                                    checkout
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item py-2" href="javascript:void(0)">
                                    My Wishlist
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="javascript:void(0)" class="d-inline-block text-decoration-none text-dark ps-4" @click="cardBodyController">
                        <i class="bi bi-cart"></i> <span class="badge bg-dark text-white px-2 py-2 ms-2"> 0 Items </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-evenly align-items-center flex-wrap py-5 nav-links">
            <a href="javascript:void(0)" class="link-hover">Dresses</a>
            <a href="javascript:void(0)" class="link-hover">Shoes</a>
            <a href="javascript:void(0)" class="link-hover">Denim Jacket</a>
            <a href="javascript:void(0)" class="link-hover">Winter Coats</a>
            <a href="javascript:void(0)" class="link-hover">Cardigans</a>
            <a href="javascript:void(0)" class="link-hover">Blazers</a>
            <a href="javascript:void(0)" class="link-hover">Sweater Dresses</a>
            <a href="javascript:void(0)" class="link-hover">T-Shirts</a>
            <a href="javascript:void(0)" class="link-hover">Accessories</a>
        </div>
        <div class="cart-body" :class="{active: isActiveCartBody}">
            <div class="cart-header">
                <div class="cart-title">
                    Cart Items
                </div>
                <a href="javascript:void(0)" class="cart-close" @click="cardBodyController">
                    <i class="bi bi-x-lg"></i>
                </a>
            </div>
            <div class="cart-items">
                The Cart Is Empty
            </div>
            <div class="cart-footer">
                <a href="javascript:void(0)" class="btn-checkout">
                    Checkout
                </a>
            </div>
        </div>
    </header>

</template>

<script>

export default {

    data(){

        return{

            isActiveCartBody: false,

        }

    },

    mounted() {



    },

    methods: {

        cardBodyController(){

            this.isActiveCartBody = !this.isActiveCartBody;

        }

    }

}

</script>

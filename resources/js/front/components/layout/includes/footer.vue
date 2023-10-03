<template>

    <footer class="container py-5 nav-links">
        <div class="row py-5">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3">
                <div class="h2 mb-4">
                    SaleHub
                </div>
                <div class="text-secondary">
                    <div class="mb-4">
                        Call Us : +123-456-789
                    </div>
                    <div class="mb-4">
                        info@example.com
                    </div>
                    <div class="mb-4">
                        Monday till Friday 10 to 6 EST
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3">
                <div class="h3 mb-4">
                    Customer Support
                </div>
                <a href="javascript:void(0)" class="footer-link">
                    Customer Service
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Shipping and Delivery
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Returns
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Size Charts
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Email Signup
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Contact Us
                </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3">
                <div class="h3 mb-4">
                    Our Shop
                </div>
                <a href="javascript:void(0)" class="footer-link">
                    New Arrivals
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Top Trending
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Autumn Collection
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Back in Stock
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Bikini Tops
                </a>
                <a href="javascript:void(0)" class="footer-link">
                    Bikini Bottoms
                </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3">
                <div class="h3 mb-4">
                    Newsletter
                </div>
                <div class="mb-4 text-secondary">
                    Get 15% off your first purchaxse! Plus, be the first to know about sales, new product launches and exclusive offers!
                </div>
                <form class="position-relative mb-4">
                    <input type="text" name="" class="form-control shadow-none rounded-0 border-secondary" placeholder="Email Address">
                    <div class="position-absolute top-50 end-0 translate-middle-y">
                        <button type="submit" name="" class="btn btn-dark rounded-0">
                            Join
                        </button>
                    </div>
                </form>
                <div class="d-flex align-items-center justify-content-start">
                    <a href="javascript:void(0)" class="text-decoration-none text-dark me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Facebook link of SaleHub">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-dark me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Twitter-X link of SaleHub">
                        <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-dark me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Pinterest link of SaleHub">
                        <i class="bi bi-pinterest"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-dark me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Vimeo link of SaleHub">
                        <i class="bi bi-vimeo"></i>
                    </a>
                    <a href="javascript:void(0)" class="text-decoration-none text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Instagram link of SaleHub">
                        <i class="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>

    export default {

        data(){ return{  } },

        mounted() {

            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        },

        methods: {  }

    }

</script>

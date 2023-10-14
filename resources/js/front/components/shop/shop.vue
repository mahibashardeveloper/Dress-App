<template>

    <div class="container product-section py-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div class="p-3" v-for="each in products">
                <div class="item">
                    <div class="image">
                        <img :src="each.front_image" class="img-fluid image-front" alt="front image">
                        <img :src="each.back_image" class="img-fluid image-back" alt="back image">
                        <div class="btn-position">
                            <a href="javascript:void(0)" class="btn-wish">
                                <i class="bi bi-heart"></i>
                            </a>
                            <a href="javascript:void(0)" class="btn-cart">
                                <i class="bi bi-images"></i>
                            </a>
                        </div>
                        <a href="javascript:void(0)" class="select-option">
                            Select Option
                        </a>
                    </div>
                    <div class="pt-2">
                        <div class="fw-bold mb-3">
                            {{each.name}}
                        </div>
                        <div class="fw-bold mb-3">
                            ${{each.price}}
                        </div>
                        <div class="d-flex">
                            <div class="sm-photo">
                                <img :src="each.front_image" class="img-fluid" alt="product 01">
                            </div>
                            <div class="sm-photo">
                                <img :src="each.back_image" class="img-fluid" alt="product 01">
                            </div>
                            <div class="sm-photo text-more">
                                2+
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

    data(){

        return{

            products:[
                {id: 1, name: 'product name 1', price: '50', front_image: '/images/big-image/big-image-01.jpg', back_image: '/images/big-image/big-image-02.jpg'},
                {id: 2, name: 'product name 2', price: '100', front_image: '/images/big-image/big-image-03.jpg', back_image: '/images/big-image/big-image-04.jpg'},
                {id: 3, name: 'product name 3', price: '150', front_image: '/images/big-image/big-image-05.jpg', back_image: '/images/big-image/big-image-06.jpg'},
                {id: 4, name: 'product name 4', price: '200', front_image: '/images/big-image/big-image-07.jpg', back_image: '/images/big-image/big-image-08.jpg'},
                {id: 5, name: 'product name 5', price: '250', front_image: '/images/big-image/big-image-09.jpg', back_image: '/images/big-image/big-image-10.jpg'},
                {id: 5, name: 'product name 5', price: '250', front_image: '/images/big-image/big-image-11.jpg', back_image: '/images/big-image/big-image-12.jpg'},
                {id: 5, name: 'product name 5', price: '250', front_image: '/images/big-image/big-image-13.jpg', back_image: '/images/big-image/big-image-14.jpg'},
            ],

        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>

<template>

    <section class="w-100 auth-section">
        <div class="container">
            <div class="row justify-content-center align-items-center min-vh-100 p-3">
                <div class="col-md-6 border py-4">
                    <div class="form-group">
                        <div class="h3">Create New account</div>
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" name="name" class="form-control shadow-none" required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" name="email" class="form-control shadow-none" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control shadow-none" required>
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Password Confirmation</label>
                        <input type="text" name="name" class="form-control shadow-none" required>
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Phone Number</label>
                        <input type="text" name="name" class="form-control shadow-none" required>
                    </div>
                    <div class="form-group">
                        <label for="name" class="form-label">Address</label>
                        <input type="text" name="name" class="form-control shadow-none" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" name="" class="btn btn-dark w-100">Login</button>
                    </div>
                    <div class="form-group">
                        <div class="text-secondary">Already have any account - <router-link :to="{name: 'login'}">login</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

export default {

    data(){

        return{



        }

    },

    mounted() {



    },

    methods: {



    }

}

</script>

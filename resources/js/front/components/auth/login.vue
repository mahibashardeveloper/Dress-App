<template>

    <section class="w-100 auth-section">
        <div class="container">
            <div class="row justify-content-center align-items-center vh-100 p-3">
                <div class="col-md-6 border py-4">
                    <div class="form-group">
                        <div class="h3">Welcome to your account</div>
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
                        <div class="row">
                            <div class="col-md-6">
                                <label for="remember" class="form-label">
                                    <input type="checkbox" name="remember" id="remember" class="form-check-input me-2"> Remember Me
                                </label>
                            </div>
                            <div class="col-md-6 text-md-end">
                                <router-link :to="{name: 'forget'}" class="text-decoration-none text-danger">
                                    Forget Password
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" name="" class="btn btn-dark w-100">Login</button>
                    </div>
                    <div class="form-group">
                        <div class="text-secondary">Don't have any account - <router-link :to="{name: 'register'}">Create New Account</router-link></div>
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

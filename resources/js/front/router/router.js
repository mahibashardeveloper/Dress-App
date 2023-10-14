import {createRouter, createWebHistory} from "vue-router";

// layout ----- ----- ----- ----- ----- ----- ----- ----- -----

import layout from "../components/layout/layout.vue";

// home ----- ----- ----- ----- ----- ----- ----- ----- -----

import home from "../components/home/home.vue";

// login ----- ----- ----- ----- ----- ----- ----- ----- -----

import login from "../components/auth/login.vue";

// register ----- ----- ----- ----- ----- ----- ----- ----- -----

import register from "../components/auth/register.vue";

// forget ----- ----- ----- ----- ----- ----- ----- ----- -----

import forget from "../components/auth/forget.vue";

// shop

import shop from "../components/shop/shop.vue";

// company name

const Company_name = "SaleHub - ";

// directory ----- ----- ----- ----- ----- ----- ----- ----- -----

const ROOT_URL = "/front";

// sub directory links ----- ----- ----- ----- ----- ----- ----- ----- -----

const routes = [

        // layout

        {path: ROOT_URL, name: 'layout', component: layout,

        children: [

            // home

            {path: ROOT_URL + '/home', name: 'home', component: home, meta: {title: Company_name + 'home' } },

            // login

            {path: ROOT_URL + '/login', name: 'login', component: login, meta: {title: Company_name + 'login' } },

            // register

            {path: ROOT_URL + '/register', name: 'register', component: register, meta: {title: Company_name + 'register' } },

            // forget

            {path: ROOT_URL + '/forget', name: 'forget', component: forget, meta: {title: Company_name + 'forget' } },

            // shop

            {path: ROOT_URL + '/shop', name: 'shop', component: shop, meta: {title: Company_name + 'shop' } },

        ],

    },

];

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router;

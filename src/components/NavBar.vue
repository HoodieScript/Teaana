<template>
  <nav
    class="navbar navigation fixed-top navbar-expand-lg"
    toggleable="lg"
    type="dark"
    variant="dark"
  >
    <div class="navbar-brand">
      <ul class="navbar-nav">
        <li class="nav-item">
          <img
            src="../assets/Images/TeaAna.png"
            alt="Logo"
            class="img img-fluid"
            v-bind:href="homelink"
          />
        </li>
      </ul>
    </div>
    <div class="d-flex flex-row order-2 order-lg-3">
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link mr-2" v-bind:href="cartlink">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </li>

        <li class="nav-item">
          <button
            type="button"
            class="btn btn-sm m-1 text-white"
            style="background-color: #5cd85a"
            data-toggle="modal"
            data-target="#Loginmodal"
          >
            Login
          </button>
        </li>
        <li class="nav-item">
          <button
            type="button"
            class="btn btn-sm m-1 text-white"
            style="background-color: #028476"
            data-toggle="modal"
            data-target="#Registermodal"
          >
            Register
          </button>
        </li>

        <li class="nav-item dropdown show" v-if="data != null">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
            {{ data.user.email }}</a
          >
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton ">
            <a class="dropdown-item p-2" :href="profilelink">Profile</a>
            <a class="dropdown-item p-2" :href="logoutlink" @click="logout()"
              >Log out</a
            >
          </div>
        </li>
      </ul>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
    </div>
    <div
      class="collapse navbar-collapse nav order-3 order-lg-2"
      id="navbarNavDropdown"
    >
      <ul class="navbar-nav mr-auto text-left">
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/" v-scroll-to="'#banner-section'">
              Home
            </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/" v-scroll-to="'#product-section'">
              Product
            </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/" v-scroll-to="'#about-section'">
              About
            </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/" v-scroll-to="'#contact-section'">
              Contact
            </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link mr-2" v-bind:href="shoplink"> Store </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* import $ from "jquery"; */
import axios from "axios";
//allows cookies
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      homelink: "/",
      shoplink: "/store",
      cartlink: "/cart",
      profilelink: "/profile",
      logoutlink: "/",
      data: null,
    };
  },
  methods: {
    /*    getProfile: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/profile");
        this.data = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  */ logout: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/logout", {
          withCredentials: true,
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getProfile();

    /*  function smooth_scroll_to(elem) {
      var offset = 1500;

      offset = $(elem).offset().top - 60;

      $("html, body").animate(
        {
          scrollTop: offset,
        },
        500,
        "swing"
      );
    }

    $(".nav ul li a").click(function (e) {
      e.preventDefault();
      var elem = $(this).attr("href");
      smooth_scroll_to(elem);
    }); */
  },
};
</script>

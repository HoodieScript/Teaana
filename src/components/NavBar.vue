<template>
  <section>
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

          <li class="nav-item" v-if="account == null">
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
          <li class="nav-item" v-if="account == null">
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

          <li class="nav-item dropdown show" v-if="account != null">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              {{ account.user }}</a
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
    <div
      class="modal fade login"
      id="Loginmodal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content w-75 mx-auto">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="staticBackdropLabel"
              style="color: #028476"
            >
              Hi there!
            </h5>
            <button
              type="button"
              class="border-0 close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-4">
            <form class="p-4">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="email address"
                  id="email"
                  required
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  id="password"
                  required
                  v-model="password"
                />
                <!-- <small class="d-flex justify-content-end">
                <a class="text-secondary">forgot password?</a></small
              > -->
              </div>

              <button
                type="button"
                class="float-right btn btn-sm pl-3 pr-3 text-white"
                style="background-color: #028476"
                @click="login()"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      account: null,
    };
  },
  methods: {
    getProfile: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/profile", {
          withCredentials: true,
        });
        this.account = res.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    logout: async function () {
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
  },
};
</script>

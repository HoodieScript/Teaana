<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <aside class="sidenav border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">
        <img src="../assets/Images/TeaAna.png" class="img img-fluid" />
      </div>
      <ul class="list-group list-group-flush" id="nav">
        <a
          href="#"
          class="list-group-item list-group-item-action bg-transparent"
        >
          <router-link to="/teaana-customer">Customer</router-link></a
        >
        <a class="list-group-item list-group-item-action bg-transparent">
          <router-link to="/teaana-orders">Orders</router-link></a
        >

        <a class="list-group-item list-group-item-action bg-transparent">
          <router-link to="/teaana-products">Products</router-link></a
        >
        <a class="list-group-item list-group-item-action bg-transparent">
          <router-link to="/teaana-supplies">Supplies</router-link></a
        >

        <a class="list-group-item list-group-item-action bg-transparent">
          <router-link to="/teaana-addons">Add-ons</router-link></a
        >
      </ul>
    </aside>
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-success" id="menu-toggle">
          <i class="fas fa-bars"></i>
        </button>

        <div class="ml-auto">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <button class="btn btn-transparent" @click="logout()">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main class="container"><TeaAnaOrders /></main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

import $ from "jquery";
import TeaAnaOrders from "../components/TeaAnaOrders.vue";
export default {
  components: {
    TeaAnaOrders,
  },
  methods: {
    logout: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/logout/", {
          withCredentials: true,
        });
        swal("Account Log out!", "You have been directed to login!", "success");

        window.location.href = "teaana-login";
        /*         this.$router.push("/teaana-login");
         */
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },
};
</script>

<style>
#wrapper {
  overflow-x: hidden;
}
.sidenav {
  background-color: #444;
}
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
}
.sidebar-heading img {
  width: 60px;
}
#sidebar-wrapper .list-group {
  width: 15rem;
}
.list-group-item {
  border: 0px !important;
  color: white !important;
}

#nav a:hover {
  color: #c5c7c5 !important;
  transition: 0.3s;
}
#page-content-wrapper {
  min-width: 100vw;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #5cd85c;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
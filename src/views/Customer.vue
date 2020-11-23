<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <aside class="sidenav border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">
        <img src="../assets/Images/TeaAna.png" class="img img-fluid" />
      </div>
      <ul class="list-group list-group-flush">
        <a
          href="#"
          class="list-group-item list-group-item-action bg-transparent"
          >Customer</a
        >
        <a
          href="#"
          class="list-group-item list-group-item-action bg-transparent"
          >Products</a
        >
        <a
          href="#"
          class="list-group-item list-group-item-action bg-transparent"
          >Orders</a
        >
      </ul>
    </aside>
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-success" id="menu-toggle">
          <i class="fas fa-bars"></i>
        </button>

        <div class="ml-auto" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                **Username**
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main class="container">//</main>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
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

.list-group-item:hover {
  color: #5cd85c !important;
  transition: 0.3s;
}
#page-content-wrapper {
  min-width: 100vw;
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
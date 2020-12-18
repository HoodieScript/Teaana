<template >
  <div class="container-fluid p-0">
    <div class="row vh-100">
      <div
        class="col-lg-4 x d-flex justify-content-center h-100 align-items-center form-login"
      >
        <form class="w-75 p-5">
          <div class="form-header mb-5">
            <h4>Sign in your Account</h4>
          </div>
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
      <div
        class="col-lg-8 bg-login d-flex justify-content-center h-100 align-items-center"
        id="#login-bg"
      >
        <figure>
          <img
            src="../assets/Images/TeaAna.png"
            class="img img-fluid"
            data-aos="zoom-out"
            data-aos-duration="1500"
          />
        </figure>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-login {
  background-image: url("../assets/Images/teas.jpg");
  background-size: auto;
  background-repeat: no-repeat;
}
.bg-login img {
  width: 65%;
}
@media only screen and (max-width: 992px) {
  .form-login {
    background-image: url("../assets/Images/teas.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .form-login form {
    background-color: rgb(255, 255, 255, 0.9);
    border-radius: 20px;
    width: 90vw;
  }
  .bg-login {
    display: none !important;
  }
}
</style>
<script>
import axios from "axios";
import swal from "sweetalert";
import $ from "jquery";

axios.defaults.withCredentials = true;

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: async function () {
      axios
        .post(
          "https://api.tea-ana.com/v1/auth/login/cms",
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data.data);
          $("#Registermodal").modal("hide");
          swal(
            "Account Signed-in!",
            "You can now access admin panel!",
            "success"
          );
          /*           alert(`Token received: ${response.data.token}`);
          localStorage.setItem("token", response.data.token);
 */
          /*           window.location.href = "teaana-customer";
          
           */
          this.$store.commit("setAuthentication", true);
          this.$router.replace({ name: "StoredCustomers" });
          /*           this.$router.push({ name: "teaana-customer" });
           */
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    mounted() {},
  },
};
</script>
<template>
  <div class="container-fluid p-0">
    <div class="row vh-100">
      <div
        class="col-lg-4 x d-flex justify-content-center h-100 align-items-center"
      >
        <form class="w-75 p-5" @submit.prevent="onSubmit">
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
            <!-- <small class="d-flex justify-content-end">
                <a class="text-secondary">forgot password?</a></small
              > -->
          </div>

          <button
            type="submit"
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
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      email: "",
      password: "",
      url: "https://api.tea-ana.com/v1/auth",
      account: "",
    };
  },
  methods: {
    login: async function () {
      try {
        const res = await axios.post(
          this.url + "/login",
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        );
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    getProfile: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/profile");
        this.account = res.data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
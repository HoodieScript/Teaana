<template>
  <div
    class="modal fade register"
    id="Registermodal"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content w-75 mx-auto">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Create Account</h5>
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
                type="text"
                class="form-control"
                placeholder="Username"
                id="username"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="email address"
                id="emailaddress"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="tel"
                class="form-control"
                placeholder="contact number"
                id="contactno"
                v-model="phone"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                id="password"
                v-model="password"
              />
            </div>

            <button
              type="submit"
              class="float-right btn btn-sm pl-3 pr-3 text-white"
              style="background-color: #028476"
              @click="register()"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
//allows cookies
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      name: "",
      email: "",

      password: "",
      phone: "",
      url: "https://api.tea-ana.com/v1/auth",
    };
  },
  methods: {
    register: async function () {
      await axios
        .post(this.url + "/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<template>
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
        <div class="modal-footer google">
          <button class="btn btn-md m-auto border rounded-lg">
            <img
              class="img img-fluid p-0 vertical-align-middle m-2"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
            <span class="text-dark">Sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import $ from "jquery";
axios.defaults.withCredentials = true;
export default {
  data() {
    return {
      email: "",
      password: "",
      url: "https://api.tea-ana.com/v1/auth/",
    };
  },
  methods: {
    login: async function () {
      axios
        .post(
          "https://api.tea-ana.com/v1/auth/login",
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data.data);
          $("#Loginmodal").modal("hide");
          swal("Account Signed-in!", "You can now order products!", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>
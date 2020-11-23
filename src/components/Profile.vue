<template>
  <section class="row p-0 container-fluid">
    <div class="profile-info col-lg-3">
      <div class="p-5">
        <form>
          <p class="text-center font-weight-bold">Account</p>
          <div class="form-group row">
            <input
              type="email"
              class="form-control"
              readonly
              placeholder="Email Address"
            />
          </div>
          <div class="form-group row">
            <input
              type="password"
              class="form-control"
              readonly
              placeholder="Password"
            />
          </div>
          <div class="form-group row">
            <input
              type="number"
              class="form-control"
              readonly
              placeholder="Contact Number"
            />
          </div>
        </form>
        <div class="float-right">
          <button
            class="btn btn-sm text-white pl-3 pr-3"
            data-toggle="modal"
            data-target="#EditProfilemodal"
            style="background-color: #028476; border-radius: 20px"
          >
            Edit
          </button>
        </div>
      </div>
    </div>

    <div class="record bg-white border-left col-lg-9">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-link">
          <a
            href="#firsttab"
            class="nav-item text-dark font-weight-bold active"
            role="tab"
            data-toggle="tab"
          >
            <label style="color: #5cd85c">Active</label>
            <label>Order</label>
          </a>
        </li>
        <li class="nav-link">
          <a
            href="#secondtab"
            class="nav-item text-dark font-weight-bold"
            role="tab"
            data-toggle="tab"
          >
            <label style="color: #5cd85c">Past</label>
            <label>Order</label>
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane table-responsive p-0 active" id="firsttab">
          <div class="scrollable overflow-auto">
            <table class="table sticky table-borderless text-center">
              <thead class="col-lg-12">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date ordered</th>
                </tr>
              </thead>
              <tbody>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Chicken</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Coffee</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>

                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tab-pane fade table-responsive p-0" id="secondtab">
          <div class="scrollable overflow-auto">
            <table class="table sticky table-borderless text-center">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date ordered</th>
                </tr>
              </thead>
              <tbody>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Coffee</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
                <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                  <td>Milktea</td>
                  <td>₱149.00</td>
                  <td>09/11/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.profile-info,
.record {
  padding-top: 120px;
}

.scrollable {
  height: 60vh;
}

.scrollable table.sticky th {
  position: sticky;
  top: 0;
  background-color: white;
}
.scrollable table {
  table-layout: fixed;
}

tr td {
  padding-top: 3%;
  padding-bottom: 3%;
}

a.active {
  border-bottom: 1px solid #444;
}
.scrollable::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #444;
  border-radius: 10px;
  background-color: #f5f5f5;
  position: absolute;
}

.scrollable::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.scrollable::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #444;
}
</style>
<script>
import axios from "axios";
//allows cookies
axios.defaults.withCredentials = true;
export default {
  data() {
    return {};
  },
  methods: {
    getProfile: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/profile");
        this.data = res.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
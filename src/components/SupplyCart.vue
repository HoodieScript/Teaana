<template >
  <section class="container-fluid">
    <div class="cart row border">
      <div class="col-lg-8 p-4">
        <h1 class="text-left mb-3 font-weight-bold">
          <label>Your</label> <label>Cart</label>
        </h1>

        <div class="scrollable-2 overflow-auto">
          <table class="table mycart sticky table-borderless text-center">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-for="(cartlist, idx) in cartlists" :key="idx">
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td>
                  <img
                    class="img img-fluid w-75 m-auto border-0 form-control"
                    alt="Tea-ana-product"
                    style="height: auto"
                    :src="path + cartlist.supply.imagePath"
                    fluid
                  />
                </td>
                <td>{{ cartlist.supply.name }}</td>
                <td>{{ cartlist.supply.price }}</td>
                <td>{{ cartlist.quantity }}</td>
                <td>
                  <button
                    class="btn"
                    data-toggle="modal"
                    data-target="#updatecart"
                  >
                    view details
                  </button>
                  <button class="btn" @click="Deletecart(cartlist.id)">
                    &times;
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-4 border minvh-100 form p-4">
        <h1 class="text-dark">Payment</h1>
        <form class="p-4">
          <div class="form-group text-left mb-3">
            <p class="text-dark">Shipping Address</p>
            <small class="text-secondary"
              >Note: Place your current Address / Landmark</small
            >
            <textarea
              class="form-control"
              name="feedback"
              rows="5"
              placeholder="State your address here..."
              required
              v-model="address"
            ></textarea>
          </div>
          <div class="form-group text-left">
            <p class="text-dark">Payment Method</p>
            <small>Note: Send an exact amount of payment</small>

            <select
              class="form-control custom-select"
              v-model="paymentmethod"
              required
            >
              <option value="Cash">Cash</option>
              <option value="Paymaya">Paymaya</option>
              <option value="G-cash">G-cash</option>
            </select>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span
                  class="input-group-text bg-transparent border-0 font-weight-bold"
                  id="basic-addon1"
                  >Total</span
                >
              </div>
              <input
                type="number"
                class="border-0 text-right form-control bg-white"
                readonly
                placeholder="0.00"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model.number="totalItem"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="button"
                value="Check out"
                class="btn btn-sm mx-auto w-50 border-0 text-white"
                style="background-color: #028476"
                @click="Paymentsubmit()"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import $ from "jquery";
axios.defaults.withCredentials = true;
/* import $ from "jquery"; */
export default {
  data() {
    return {
      path: "https://api.tea-ana.com/uploads/",
      cartlists: [],
      /* data fields */
      imagePath: null,
      name: null,
      price: null,
      quantity: null,
      account: null,
      /* payment info */
      address: null,
      paymentmethod: null,
      total: null,
    };
  },
  methods: {
    getProfile: async function () {
      try {
        const res = await axios.get("https://api.tea-ana.com/v1/auth/profile", {
          withCredentials: true,
        });
        this.account = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getSuppliescart() {
      let response = await axios.get(
        `https://api.tea-ana.com/v1/cart/supplies` //endpoint
      );
      this.cartlists = response.data.cart;
      console.log(this.cartlists);
    },

    async Deletecart(id) {
      axios
        .delete(`https://api.tea-ana.com/v1/cart/supplies/` + id)
        .then((res) => {
          console.log(res);
          swal("Record Delete!", "New changes are applied!", "success");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    Paymentsubmit: async function () {
      axios
        .post("https://api.tea-ana.com/v1/orders/supplies", {
          address: this.address,
          paymentmethod: this.paymentmethod,
          total: this.price,
        })
        .then((response) => {
          console.log(response);
          $("#product-cart").modal("hide");
          swal("Thank you!", "Your Order has succcessfully Added !", "success");
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  computed: {
    totalItem: function () {
      let sum = 0;
      this.cartlists.forEach(function (cartlist) {
        sum +=
          parseFloat(cartlist.supply.price) * parseFloat(cartlist.quantity);
      });

      return sum;
    },
  },
  async created() {
    this.getSuppliescart();
  },
};
</script>

<style>
.table-image th,
td {
  vertical-align: middle;
}

table td:nth-child(2),
td:nth-child(3),
td:nth-child(4) {
}
.cart {
  padding-top: 120px;
}

.payments {
  border-bottom: 2px solid grey;
}

.cart h1 label:nth-child(odd) {
  color: #5cd85c;
}
.cart h1 label:nth-child(even) {
  color: #028476;
}
.scrollable-2::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #444;
  border-radius: 10px;
  background-color: #f5f5f5;
  position: absolute;
}

.scrollable-2::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.scrollable-2::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #444;
}
@media only screen and (max-width: 992px) {
  table.mycart td:nth-child(1) {
    display: none;
  }
  table td {
    font-size: 10px;
  }
  table td button {
    font-size: 10px;
  }
  table.mycart th:nth-child(1) {
    display: none;
  }
}
.scrollable-2 {
  height: 60vh;
}

.scrollable-2 table.sticky th {
  position: sticky;
  top: 0;
  background-color: white;
}
.scrollable-2 table {
  table-layout: fixed;
}
tr td {
  padding-top: 3%;
  padding-bottom: 3%;
  vertical-align: middle;
  align-self: center;
  align-content: center;
  align-items: center;
}
.table > tbody > tr > td {
  vertical-align: middle;
}
</style>

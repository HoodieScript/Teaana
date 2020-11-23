<template>
  <section class="container-fluid">
    <div class="cart row border">
      <div class="col-lg-8 p-4">
        <h1 class="text-left mb-3 font-weight-bold">
          <label>Your</label> <label>Cart</label>
        </h1>
        <!-- <div class="scrollable-2-2 overflow-auto">
          <table
            class="table sticky table-borderless table-responsive text-center"
          >
            <thead>
              <tr>
                <th scope="col" style="visibility: hidden">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col" style="visibility: hidden">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td class="w-25">
                  <img
                    src="../assets/Images/solo.png"
                    class="img-fluid img w-50"
                    alt="products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>2</td>
                <td>240.00</td>
                <td class="">
                  <tr>
                    <button class="btn text-secondary bg-trasnparent">
                      <i class="fas fa-times"></i>
                    </button>
                  </tr>
                  <tr>
                    <button
                      class="btn btn-transparent"
                      style="color: #5cd85c"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      view details
                    </button>
                  </tr>
                </td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td class="w-25">
                  <img
                    src="../assets/Images/solo.png"
                    class="img-fluid img w-50"
                    alt="products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>2</td>
                <td>240.00</td>
                <td class="">
                  <tr>
                    <button class="btn text-secondary bg-trasnparent">
                      <i class="fas fa-times"></i>
                    </button>
                  </tr>
                  <tr>
                    <button
                      class="btn btn-transparent"
                      style="color: #5cd85c"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      view details
                    </button>
                  </tr>
                </td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td class="w-25">
                  <img
                    src="../assets/Images/solo.png"
                    class="img-fluid img w-50"
                    alt="products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>2</td>
                <td>240.00</td>
                <td class="">
                  <tr>
                    <button class="btn text-secondary bg-trasnparent">
                      <i class="fas fa-times"></i>
                    </button>
                  </tr>
                  <tr>
                    <button
                      class="btn btn-transparent"
                      style="color: #5cd85c"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      view details
                    </button>
                  </tr>
                </td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td class="w-25">
                  <img
                    src="../assets/Images/solo.png"
                    class="img-fluid img w-50"
                    alt="products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>2</td>
                <td>240.00</td>
                <td class="">
                  <tr>
                    <button class="btn text-secondary bg-trasnparent">
                      <i class="fas fa-times"></i>
                    </button>
                  </tr>
                  <tr>
                    <button
                      class="btn btn-transparent"
                      style="color: #5cd85c"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      view details
                    </button>
                  </tr>
                </td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td class="w-25">
                  <img
                    src="../assets/Images/solo.png"
                    class="img-fluid img w-50"
                    alt="products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>2</td>
                <td>240.00</td>
                <td class="">
                  <tr>
                    <button class="btn text-secondary bg-trasnparent">
                      <i class="fas fa-times"></i>
                    </button>
                  </tr>
                  <tr>
                    <button
                      class="btn btn-transparent"
                      style="color: #5cd85c"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      view details
                    </button>
                  </tr>
                </td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td class="w-25">
                  <img
                    src="../assets/Images/solo.png"
                    class="img-fluid img w-50"
                    alt="products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>2</td>
                <td>240.00</td>
                <td class="">
                  <tr>
                    <button class="btn text-secondary bg-trasnparent">
                      <i class="fas fa-times"></i>
                    </button>
                  </tr>
                  <tr>
                    <button
                      class="btn btn-transparent"
                      style="color: #5cd85c"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      view details
                    </button>
                  </tr>
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
        <div class="scrollable-2 overflow-auto">
          <table class="table mycart sticky table-borderless text-center">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td>
                  <img
                    class="img img-fluid"
                    src="../assets/Images/solo.png"
                    alt="Teaana-products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>1</td>
                <td>₱149.00</td>
                <td>
                  <button class="btn">view details</button>
                  <button class="btn" data-toggle="modal" data-target="#">
                    &times;
                  </button>
                </td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td>
                  <img
                    class="img img-fluid"
                    src="../assets/Images/solo.png"
                    alt="Teaana-products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>1</td>
                <td>₱149.00</td>
                <td>&times;</td>
              </tr>
              <tr class="mt-2 shadow-sm" style="border-radius: 20px">
                <td>
                  <img
                    class="img img-fluid"
                    src="../assets/Images/solo.png"
                    alt="Teaana-products"
                  />
                </td>
                <td>Cream Cheese Oreo Milktea</td>
                <td>1</td>
                <td>₱149.00</td>
                <td>&times;</td>
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
            ></textarea>
          </div>
          <div class="form-group text-left">
            <p class="text-dark">Payment Method</p>
            <small>Note: Send an exact amount of payment</small>
            <form>
              <div class="d-flex payments mb-4">
                <button class="btn">
                  <img
                    src="../assets/Images/gcash.png"
                    class="img img-fluid"
                    alt="Gcash-payment"
                  />
                </button>
                <button class="btn">
                  <img
                    src="../assets/Images/paymaya.png"
                    class="img img-fluid"
                    alt="Payment-payment"
                  />
                </button>
                <button class="btn">
                  <img
                    src="../assets/Images/cashondelivery.png"
                    class="img img-fluid"
                    alt="CashonDelivery-payment"
                  />
                </button>
              </div>
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
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="submit"
                  value="Check out"
                  class="btn btn-sm mx-auto w-50 border-0 text-white"
                  style="background-color: #028476"
                />
              </div>
            </form>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
//import axios from 'axios';
export default {};
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

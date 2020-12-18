<template>
  <div>
    <NavBar2 />
    <Login />
    <CartList />
    <Register />
    <Footer />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import CartList from "@/components/SupplyCart.vue";
import Footer from "@/components/NavFooter.vue";
import NavBar2 from "@/components/NavBar2.vue";
export default {
  components: {
    NavBar2,
    Login,
    Register,
    CartList,
    
    Footer,
  },
};
</script>
<style scoped>
.cart {
  margin-top: 50px;
}
</style>

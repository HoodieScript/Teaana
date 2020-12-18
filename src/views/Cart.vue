<template>
  <div>
    <NavBar />
    <Login />
    <CartList />
    <Register />
    <Footer />
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import CartList from "@/components/Cartlist.vue";
import Footer from "@/components/NavFooter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
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

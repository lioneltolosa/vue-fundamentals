<template>
  <div id="app">
    <!-- Root Foo: {{rootFoo}} <br/>
    Robots Foo: {{robotsFoo}} <br/>
    Users Foo: {{usersFoo}} <br/>
    <br/>
    Root Getter Foo: {{rootGetterFoo}} <br/>
    Robots Getter Foo: {{robotsGetterFoo}} <br/>
    Users Getter Foo: {{usersGetterFoo}} <br/> -->
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link active-class="foo" class="nav-link" :to="{ name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png">
                Built a Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="foo" class="nav-link" :to="{ name: 'Build'}" exact>
              Built
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link active-class="foo" class="nav-link" :to="{ name: 'Cart'}" exact>
              Cart
            </router-link>
            <div class="cart-list">
              {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
        <main>
          <router-view/>
        </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: (state) => state.users.foo,
    }),
    ...mapState('robots', { robotsFoo: 'foo' }),
    ...mapGetters({ rootGetterFoo: 'foo' }),
    ...mapGetters('robots', { robotsGetterFoo: 'foo' }),
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
body {
    background: linear-gradient(to bottom, #555, #999);
    background-attachment: fixed;
}
</style>
<style scoped>
/* .content >>> .robot-name {
  color: red;
  border: 2px blue solid;
} */
.foo {
  color: white;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
    padding: 30px;
    background-color: white;
    width: 964px;
    min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-list {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 15px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumpurple;
}
</style>

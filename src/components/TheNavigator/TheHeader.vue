<template>
  <header>
    <ul>
      <li>
        <router-link to="/">
          <img
            src="../../assets/TheNavigation/ChocolateBar_logo.png"
            alt="BeChocolate"
          />
        </router-link>
      </li>
      <li>
        <router-link to="/"> Home </router-link>
        <router-link to="#"> Craft Chocolate </router-link>
        <router-link to="#"> Rating </router-link>
        <router-link to="#"> Community </router-link>
        <router-link to="#"> Your Shop </router-link>
      </li>
      <li>
        <router-link to="#">
          <img src="../../assets/TheNavigation/shopping-bag 2.png" alt="Cart" />
        </router-link>
        <router-link to="#">
          <font-awesome-icon icon="fa-solid fa-user" size="lg" />
          Profile
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
  height: 140px;
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 116px;
  list-style: none;

  li {
    margin: auto 0;

    img {
      width: 40px;
    }
    a {
      position: relative;

      margin: auto 2rem;
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      color: #44342b;

      &:hover {
        font-weight: bold;
      }

      &.router-link-active {
        font-weight: bold;
      }

      // &::before {
      //   position: absolute;
      //   content: "💢";

      //   bottom: -20px;
      //   right: 0;
      //   transform: translate(-50%, 50%);
      // }
    }
  }
}
</style>

<template>
  <div>
    <div>
      <p>***** Our Items *****</p>
    </div>

    <div class="container w-3/4 mx-auto"><p>Rating of this Month</p></div>

    <div class="container w-3/4 mx-auto my-20 ">
      <div
        class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Voting now
        </h5>
        <p
          class="mb-8 mt-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          asperiores veritatis neque, deleniti iure necessitatibus!
        </p>
        <div
          class="flex flex-col justify-center items-center space-y-4 sm:flex sm:space-x-4"
        >
          <div
            href="#"
            class="w-full 2xl:w-2/4 lg:2/4 md:w-3/4 sm:w-full h-44 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="w-fll h-full text-left text-center my-auto">
              <div class="mb-1 text-xl">start vote now</div>

              <div class="my-1 flex text-3xl font-sans font-semibold">
                <counting-time :deadline="deadLineSetting"></counting-time>
              </div>

              <div class="text-md">End in {{ deadLineSetting }}</div>
            </div>
          </div>

          <base-button
            link
            to="/"
            class="w-full mt-8 sm:w-auto bg-gray-800 hover:bg-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
          >
            <font-awesome-icon
              icon="fa-square-poll-vertical"
              class="text-3xl mr-4"
            />
            <div class="text-left">
              <div class="mb-1 text-xs">Join Vote</div>
              <div class="-mt-1 font-sans text-sm font-semibold">
                Click Here
              </div>
            </div>
          </base-button>
        </div>
      </div>
    </div>

    <div class="container w-3/4 mx-auto">
      <div
        class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
              >5.0</span
            >
          </div>
          <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white"
              >$599</span
            >
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountingTime from "../../components/RatingView/CountingTime.vue";
import BaseButton from "../../components/UI/BaseButton.vue";

export default {
  components: { CountingTime, BaseButton },
  data() {
    return {
      deadLineSetting: "September 30, 2022",
    };
  },
};
</script>

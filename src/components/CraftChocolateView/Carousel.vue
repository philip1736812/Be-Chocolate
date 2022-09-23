<template>
  <div id="indicators-carousel" class="relative" data-carousel="static">
    <!-- Carousel wrapper -->
    <div
      class="relative h-52 overflow-hidden rounded-lg md:h-96 2xl:h-80 xl:h-72 lg:h-72 md:h-64"
    >
      <!-- Items-->
      <div
        v-for="(picUrl, index) in imgSource.length"
        :key="picUrl + index"
        :id="`carousel-item-${index + 1}`"
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
        :data-carousel-item="index == 0 ? `active` : ''"
      >
        <img
          :src="imgSource[index]"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        v-for="(picUrl, index) in imgSource.length"
        :key="picUrl + index"
        :id="`carousel-indicator-${index + 1}`"
        type="button"
        class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
        :aria-current="index == 0 ? true : false"
        :aria-label="`Slide ${index + 1}`"
        :data-carousel-slide-to="index"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="dataCarouselPrev"
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="dataCarouselNext"
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    imgSource: {
      type: Array,
      required: true,
      default: [],
    },
  },
  setup(props) {
    const items = props.imgSource.map((_, i) => {
      return {
        position: i,
        el: null,
      };
    });

    const options = {
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: props.imgSource.map((_, i) => {
          return {
            position: i,
            el: null,
          };
        }),
      },
    };

    return { items, options };
  },
  data() {
    return {
      carousel: null,
    };
  },
  mounted() {
    if (!this.imgSource || this.imgSource.length <= 0) return;
    this.imgSource.forEach((_, i) => {
      this.items[i].el = this.$el.querySelector(`#carousel-item-${i + 1}`);
    });

    const { items } = this.options.indicators;
    items.forEach((ele, i) => {
      ele.el = this.$el.querySelector(`#carousel-indicator-${i + 1}`);
    });

    this.carousel = new Carousel(this.items, this.options);
  },

  methods: {
    dataCarouselPrev() {
      this.carousel.prev();
    },
    dataCarouselNext() {
      this.carousel.next();
    },
  },
};
</script>

<style lang="scss" scoped></style>

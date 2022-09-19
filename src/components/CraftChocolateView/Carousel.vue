<template>
  <div id="indicators-carousel" class="relative" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-52 overflow-hidden rounded-lg md:h-96 2xl:h-80 xl:h-72 lg:h-72 md:h-64" >
      <!-- Item 1 -->
      <div
        id="carousel-item-1"
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
        data-carousel-item="active"
      >
        <img
          src="http://drive.google.com/uc?export=view&id=1bc9DJhE9csefiM34WwIPyhUCbC-Cc8TW"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div
        id="carousel-item-2"
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
        data-carousel-item=""
      >
        <img
          src="http://drive.google.com/uc?export=view&id=1bc9DJhE9csefiM34WwIPyhUCbC-Cc8TW"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div
        id="carousel-item-3"
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
        data-carousel-item=""
      >
        <img
          src="http://drive.google.com/uc?export=view&id=1bc9DJhE9csefiM34WwIPyhUCbC-Cc8TW"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div
        id="carousel-item-4"
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
        data-carousel-item=""
      >
        <img
          src="http://drive.google.com/uc?export=view&id=1bc9DJhE9csefiM34WwIPyhUCbC-Cc8TW"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
      <div
        id="carousel-item-5"
        class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
        data-carousel-item=""
      >
        <img
          src="http://drive.google.com/uc?export=view&id=1bc9DJhE9csefiM34WwIPyhUCbC-Cc8TW"
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
        id="carousel-indicator-1"
        type="button"
        class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        id="carousel-indicator-2"
        type="button"
        class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        id="carousel-indicator-3"
        type="button"
        class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        id="carousel-indicator-4"
        type="button"
        class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
      <button
        id="carousel-indicator-5"
        type="button"
        class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        aria-current="false"
        aria-label="Slide 5"
        data-carousel-slide-to="4"
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
  data() {
    return {
      items: [
        {
          position: 0,
          el: null,
        },
        {
          position: 1,
          el: null,
        },
        {
          position: 2,
          el: null,
        },
        {
          position: 3,
          el: null,
        },
        {
          position: 4,
          el: null,
        },
      ],

      options: {
        indicators: {
          activeClasses: "bg-white dark:bg-gray-800",
          inactiveClasses:
            "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
          items: [
            {
              position: 0,
              el: null,
            },
            {
              position: 1,
              el: null,
            },
            {
              position: 2,
              el: null,
            },
            {
              position: 3,
              el: null,
            },
            {
              position: 4,
              el: null,
            },
          ],
        },
      },

      carousel: null,
    };
  },
  mounted() {
    this.items.forEach((ele, i) => {
      ele.el = this.$el.querySelector(`#carousel-item-${i + 1}`);
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

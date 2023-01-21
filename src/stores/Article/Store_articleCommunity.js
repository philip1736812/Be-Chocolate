import { defineStore } from "pinia";

export const useCommunityStore = defineStore({
  id: "communityStore",
  state() {
    return {
      hashTag: [
        "Blend To Bar",
        "Copy or Inspired",
        "Why we are poor", 
        "quantity more quality",
        "First cacao",
        "Grow without wether",
        "Save the cacao",
        "Bengal Nation",
        "DO NOT CARE",
        "Good thing grow",
        "Warm",
        "Stage and belt",
        "Up Coin",
      ],
      articles: [
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          createdDate: "",
          ownerId: "",
          hashTag: ["Blend To Bar", "Copy or Inspired", "Warm"],
          topic: "What Is Bean To Bar, Craft Chocolate?",
          content: [
            "Bean-to-bar, small batch, craft, artisan, micro-batch chocolate; whatever you call it, each one boils down to the same idea of a new way of making chocolate.",
            "Although some terms are older than others, all of them refer to a small-scale chocolate making movement. It began in earnest in the 1990’s and gained momentum around 2005-2007, and now counts itself as having as many thousands of small chocolate makers all around the world. Do you know your local bean to bar chocolate maker?",
          ],
          picHeaderUrl:
            "https://static01.nyt.com/images/2020/02/12/dining/11chocpicks1/merlin_168313677_0f78d0d0-564a-429b-b0fc-429b736081e5-superJumbo.jpg",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          createdDate: "",
          ownerId: "",
          hashTag: [
            "Why we are poor",
            "quantity more quality",
            "Stage and belt",
          ],
          topic: "The Craft Of Chocolate",
          content: [
            "Chocolate as we taste it starts as a seed that someone took the time to plant and then care for, just as someone created and cared for you. And just like you wouldn’t want someone to only see one still image from your life, you shouldn’t limit your chocolate experience to the bar in front of you. Each chocolate bar you taste is just a snapshot of the life of those cacao nibs and the many seeds used to make that batch of chocolate. Even that same chocolate will taste different a year later, if you can let it sit that long.",
            "Craft chocolate makers understand and manipulate this fact, cultivating the different personalities of each batch of cacao they make into chocolate. Making bean to bar chocolate has been compared to making beer or wine, especially in regards to vintages for each cocoa bean.",
            "The old type, or the old model for chocolate making, is considered to be that of the “Big Five” Chocolate makers: Mars, Nestle, Hershey’s, Kraft/Mondelez, and Cadbury (now owned by Kraft/Mondelez). The term “Big Chocolate” has two functions. For one, it refers to their ubiquity around the world. They’re producers of a large percentage of the world’s industrial chocolate, and provide most people’s first experience with chocolate.",
            "But it also refers to them forming an industry mindset, one which controls a majority of cocoa sales. In real-world terms that means they have a monopoly on purchasing the cocoa grown in some parts of the world, notably West Africa. On top of that, they often control the conditions in which it is grown & harvested & processed. So what is bean to bar chocolate exactly, and how has it proven itself to be different?",
          ],
          picHeaderUrl:
            "https://static01.nyt.com/images/2020/02/12/dining/11chocpicks1/merlin_168313677_0f78d0d0-564a-429b-b0fc-429b736081e5-superJumbo.jpg",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          createdDate: "",
          ownerId: "",
          hashTag: [
            "First cacao",
            "Grow without wether",
            "Save the cacao",
            "Up Coin",
          ],
          topic: "When Did Craft Chocolate Start?",
          content: [
            "A shift in consumerism towards businesses with more transparent practices and fair traded ingredients started in the 1980’s. This eventually led to the formation of several equal trade and environmentally-friendly certification companies. However, it’s generally accepted that the craft chocolate movement began in earnest around 2005.",
            "This was around the time at which Scharffen Berger Chocolate Maker was sold (it’s now owned by Hershey’s) and Taza Chocolate was formed. The aforementioned Taza joined with four other companies (Askinosie, Patric, Amano, and DeVries) in 2008 to form the now-defunct association of Craft Chocolate Makers of America. Much of what these companies were initially making was bean to bar dark chocolate made with only cacao & sugar, though their repertoires quickly expanded.",
            "By 2010, there were dozens of such small-scale producers just in the US. Around 2015 there was another noticeable bump, and since then, hundreds of tiny chocolate producers have popped up worldwide. This third wave includes some makers who craft chocolate from their own cacao, often called tree-to-bar chocolate makers. This exponential increase has caused a huge shift in availability of microbatch chocolate-making equipment, bumping the numbers up even higher.",
          ],
          picHeaderUrl:
            "https://static01.nyt.com/images/2020/02/12/dining/11chocpicks1/merlin_168313677_0f78d0d0-564a-429b-b0fc-429b736081e5-superJumbo.jpg",
        },
        {
          id: Math.trunc(Math.random() * (999999 - 100000) + 100000),
          createdDate: "",
          ownerId: "",
          hashTag: ["Bengal Nation", "DO NOT CARE", "Good thing grow"],
          topic: "Why Eat Craft Chocolate?",
          content: [
            "“You don’t get rich as a chocolate maker unless you’re exploiting someone else along the way.”",
            "There are simply too many people involved in the dozens of stages of the chocolate making process. So for most makers, it comes down to a desire to make a positive ecological and economic impact upon the far reaches of our earth, alongside a need to publicly realize their long-time love affair with often dark chocolate and flavor exploration. This combination has resulted in a huge leap in bars bearing some kind of quality certification.",
            "Including some kind of connection to the farmers who harvested your beans has become a de facto prerequisite to being considered an artisan maker. But it was the inundation of equality- and ecologically-driven certifications that finally lead Taza Chocolate’s founder Alex Whitmore to found Direct Trade certification. Not costing anything to the farmer, unlike other certifications, direct trade indicates simply that the maker bought the cacao straight from the farmer at a price both parties found to be fair.",
          ],
          picHeaderUrl:
            "https://static01.nyt.com/images/2020/02/12/dining/11chocpicks1/merlin_168313677_0f78d0d0-564a-429b-b0fc-429b736081e5-superJumbo.jpg",
        },
      ],
    };
  },

  getters: {
    getArticle(state) {
      return state.articles;
    },
    getHashTag(state) {
      return state.hashTag;
    },
  },
});

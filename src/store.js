import { createStore } from 'zmp-core/lite';

const store = createStore({
  state: {
    quotes: [
        {data: "NFTs are unique"},
        {data: "Millennials LOVE NFTs"},
        {data: "Pretty much anything can become an NFT"},
        {data: "Singapore, Hong Kong, and China show the most interest in NFTs"},
        {data: "NFTs are helping artists reach new audiences"},
        {data: "Ethereum is still the biggest blockchain for NFTs"},
        {data: "NFT rely on smart contracts"},
        {data: "VanityBlocks NFTs use an entire Ethereum block"},
        {data: "Snoop Dogg is a secret NFT kingpin"},
        {data: "You can see an NFT’s entire ownership history"},
        {data: "People get rich off NFTs"},
        {data: "Ongoing royalties are a thing"},
        {data: "The NFT market exploded in 2021"},
        {data: "The price of ETH is a lot higher since the first NFTs"},
        {data: "Colored Coins was the first NFT project"},
        {data: "Cryptopunks is considered the first (true) NFT project"},
        {data: "Cryptokitties was one of the first NFT projects"},
        {data: "NBA Top Shots kept the NBA league going during lockdown"},
        {data: "NFTs aren’t going anywhere"},
        {data: "Creating an NFT is easy"},
        {data: "Axie Infinity has surpassed $4 billion in NFT sales"},
        {data: "Cryptopunks were given away for FREE"},
        {data: "Memes are now immortalized as NFTs"},
        {data: "People donated NFTs to Ukraine’s War Efforts"},
        {data: "NFT real estate is big business"},
        {data: "Beeple’s “Everydays” sold for $69.3 million"},
        {data: "“The Merge” is the most expensive NFT ever sold"},
        {data: "Cardano Now Has NFTs"},
        {data: "NFTs can be used to secure loans"},
        {data: "The original doge meme has been fractionalized"},
        {data: "Gary Vee is a vocal supporter of NFTs"},
        {data: "Ethereum 2.0 and Layer 2 solutions will help with gas fees"},
        {data: "You can mint NFTs for free on OpenSea"},
        {data: "Damien Hirst has created NFTs"},
        {data: "NFT Games have their own marketplaces"},
        {data: "Visa bought an NFT for $150,000"},
        {data: "Eminem bought a Bored Ape NFT"},
        {data: "OpenSea is the biggest NFT marketplace"},
        {data: "3LAU has made millions selling NFT MP3s"},
        {data: "Jack Dorsey sold an NFT of his first Tweet for $2.9 Million"},
        {data: "Fewocious is one of the NFT scene’s biggest success stories"},
        {data: "The number of active users on OpenSea is now over a million"},
        {data: "Axie Infinity is (still) the most popular NFT game"},
        {data: "The Azuki collection’s artist formerly worked on Overwatch"},
        {data: "Axie Infinity players can “borrow” NFTs"},
        {data: "Anyone can create a fractional NFT"},
        {data: "Most NFT collections are generative"},
        {data: "Your NFT has a de facto Rarity Score"},
        {data: "You can buy NFTs in bulk"},
        {data: "Twitter is the main hangout for NFT collectors"},
        {data: "The Average cost of minting an NFT is $70-$150"},
        {data: "Eminem sold an NFT collection for over $1.7 million"},
        {data: "$41 billion was spent on NFTs in 2021"},
        {data: "Traditional artists are finding success with NFTs"},
        {data: "Most NFT sales in 2021 were less than $200"},
        {data: "15,000 – 50,000 NFTs are sold each week"},
        {data: "You can’t forge an NFT"},
        {data: "Art theft is a growing NFT problem"},
        {data: "An NFT of NYAN Cat sold for $600,000"},
        {data: "Larva Labs sold Cryptopunks to Yuga Labs"},
        {data: "Paris Hilton is a keen NFT investor"},
        {data: "The NFT space is coming under fire for environmental concerns"},
        {data: "Big businesses are jumping into Decentraland"},
        {data: "A quarter of millennials collect NFTs"},
        {data: "Nigeria has a growing NFT art scene"},
        {data: "Californians buy more NFTs than any other US people"},
        {data: "Most people still don’t know what NFTs are – for real though"},
        {data: "South park made an episode based on NFTs"},
        {data: "Ethereum is energy-intensive"},
        {data: "Ethereum 2.0 will make NFT transactions a lot greener"},
        {data: "There are green NFT blockchains"},
        {data: "Elon Musk’s girlfriend made $5.8 million in 20 minutes with NFTs"},
        {data: "The “Disaster Girl” meme NFT sold for $500k"},
        {data: "Esports NFTs may be the next big thing"},
        {data: "PUBG may use Solana to create NFTs"},
        {data: "You can earn as you play with NFT gaming"},
        {data: "Designers are using NFTs to create Metaverse wearables"},
        {data: "Kings of Leon generated over $2 million from album NFT sales"},
        {data: "The Sandbox is a user-generated, NFT-powered, Metaverse"},
        {data: "NFTs are immutable"},
        {data: "Some NFT collections allow “Breeding”"},
        {data: "You can keep up to date with NFT drops using NFT calendar"},
        {data: "Lindsay Lohan auctioned a furry NFT of herself…"},
        {data: "A LeBron James NFT sold for $210k"},
        {data: "Madonna now owns a Bored Ape too!"},
        {data: "The World of Women project celebrates diversity"},
        {data: "You can stake your NFTs and earn money"},
        {data: "Bug exploits and phishing scams are the only ways to lose an NFT"},
        {data: "Rarible is a community-owned NFT marketplace"},
        {data: "A plot of Decentraland LAND is worth $3.5 million"},
        {data: "Yuga Labs raised $450 million to build a metaverse for BAYC"},
        {data: "CNFT.io is Cardano’s biggest NFT marketplace"},
        {data: "OpenSea now supports Solana NFTs"},
        {data: "The most expensive Bored Ape is #2087"},
        {data: "The most expensive Cryptopunk is #5822"},
        {data: "Cryptopunk #9998 sold for $532 million"},
        {data: "NFTs may be a solution to ticket scalping"},
        {data: "Axie Infinity accounted for two-thirds of all in-game transactions in 2021"},
        {data: "Magic the Gathering’s director left to make an NFT game"}
    ],

    results: null,
    image: null,
    linkBack: null,

    loading: {
      data: 'true',
    },

    api: null,

    detail: null,

    os: null,

    userID: null,

    history: [],

    historyDetail: null,

    memberDetail: null,
  },

  getters: {
    quotes({ state }) {
      return state.quotes
    },

    image( {state} ) {
      return state.image
    },

    results({ state }) {
      return state.results
    },

    loading({ state }){
      return state.loading
    },

    detail({ state }) {
      return state.detail
    },

    linkBack({ state }) {
      return state.linkBack
    },

    api({ state }) {
      return state.api
    },

    os({ state }) {
      return state.os
    },

    userID({ state }) {
      return state.userID
    },

    history({ state }) {
      return state.history
    },

    historyDetail({ state }) {
      return state.historyDetail
    },

    memberDetail({ state }) {
      return state.memberDetail
    }
  },
  actions: {
    setQuotes({ state }, data) {
      state.quotes = { ...state.quotes, ...data }
    },

    setImage({ state }, data) {
      state.image = { ...state.image, ...data }
    },

    setResults({ state }, data) {
      state.results = { ...state.results, ...data}
    },

    setLoading({ state }, data) {
      state.loading = { ...state.loading, data}
    },

    setDetail({ state }, data) {
      state.detail = { ...state.detail, ...data}
    },

    setLinkBack({ state }, data) {
      state.linkBack = { ...state.linkBack, ...data}
    },

    setApi({ state }, data) {
      state.api = { ...state.api, ...data}
    },

    setOs({ state }, data) {
      state.os = { ...state.os, ...data}
    },

    setUserID({ state }, data) {
      state.userID = { ...state.userID, ...data}
    },

    setHistory({ state }, data) {
      state.history = { ...state.history, ...data}
    },

    setHistoryDetail({ state }, data) {
      state.historyDetail = { ...state.historyDetail, ...data}
    },

    setMemberDetail({ state }, data) {
      state.memberDetail = { ...state.memberDetail, ...data}
    }
  }
})

export default store;

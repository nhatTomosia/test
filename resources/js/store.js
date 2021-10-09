import { createStore } from 'vuex'
const store = createStore({
    state() {
        return{
            messageToggled: false,
            user:'',
            authToken:'',
            finishedTweet:false,
            followers:[],
            followings:[],
            connect: [],
            tweets: [],
        }
    },
    mutations: {
        toggleMessage(state) {
            state.messageToggled = !state.messageToggled;
        },
        fetchFollowers(state, user) {
            axios.post('api/followers',user).then(response => {
                state.followers = response.data;
            });
        },
        removeFollowers(state){
            state.followers =[];
        },
        fetchFollowings(state, user) {
            axios.post('/api/following',user).then(response => {
                state.followings =response.data;
            });
        },
        removeFollowings(state){
            state.followings =[];
        },
        finishTweet(state, boolean) {
            state.finishedTweet = boolean;
        },
        setUser(state, authToken) {
            axios.get('/api/user', {
                headers:{
                'Authorization': `Bearer ${authToken}`
                }
            }).then(response=> {
                state.user = response.data;
            })
        },
        loginUser(state,user) {
            state.user = user;
        },
        removeUser(state) {
            state.user = '';
        },
        getTweets(state,user){
            axios.post('/api/newsfeed', user).then(response => {
                state.tweets = response.data;
            })
        },
        addTweet(state,tweet) {
            state.tweets.unshift(tweet);
        },
        removeTweet(state,tweet) {
            state.tweets.splice(tweet.index);
        },
        removeTweets(state){
            state.tweets = [];
        },
        getConnect(state, user) {
            axios.post('/api/connect',user).then(response => {
                state.connect = response.data;
              })   
        },
        removeConnect(state){
            state.connect=[];
        },

        setAuthToken(state,authToken) {
            state.authToken = authToken;
        },
        removeAuthToken(state) {
            state.authToken = '';
        }
    },
    actions: {
        logout({commit}){
            commit('removeTweets');
            commit('removeFollowers');
            commit('removeFollowings');
            commit('removeConnect');
            commit('removeUser');
            commit('removeAuthToken');
        },
    },
    getters() {

    }
})
export default store;
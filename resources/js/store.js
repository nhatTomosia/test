import { createStore } from 'vuex'
const store = createStore({
    state() {
        return{
            messageToggled: false,
            user:'',
            authToken:'',
            finishedTweet:false,
            connect: [],
            tweets: [],
            pagesCount: null,
            newsFeedPageNumber: 1
        }
    },
    mutations: {
        
        toggleMessage(state) {
            state.messageToggled = !state.messageToggled;
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
                axios.post('/api/connect', response.data).then(response => {
                    state.connect = response.data;
                })  
            })
            
        },
        loginUser(state,user) {
            state.user = user;
        },
        removeUser(state) {
            state.user = '';
        },

        resetNewsFeed(state) {
            state.newsFeedPageNumber = 1;
            state.tweets = [];
        },
        getTweets(state) {
            axios.post('/api/newsfeed?page=' + state.newsFeedPageNumber , state.user)
            .then(response => {
                $.each(response.data.data, (key, value) => {
                    state.tweets.push(value);
                })
                state.newsFeedPageNumber++;
                state.pagesCount = response.data.last_page;
            })
        },
        
        addTweet(state,tweet) {
            state.tweets.unshift(tweet)
        },
        deleteTweet(state, tweet) {
            state.tweets.splice(state.tweets.indexOf(tweet),1);
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
            commit('removeConnect');
            commit('removeUser');
            commit('removeAuthToken');
        },

        fetchUserDetail({commit}, authToken) {            
            commit('setAuthToken',authToken);
            commit('setUser', authToken);
        }
    },
    getters() {

    }
})
export default store;
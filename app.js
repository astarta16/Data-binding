const app = Vue.createApp({
    data(){
        return {
            name: 'Nini',
            age: 21,
            imageUrl: 'https://cdn.utaustinbootcamps.com/wp-content/uploads/sites/119/2021/03/CDG_blog_post_image_05-850x412.jpg'
        };
    },
    methods: {
        calculateAge () {
            return this.age + 5;
        },
        calculateRandom(){
            return Math.random();
        }
    }
})

app.mount('#assignment');
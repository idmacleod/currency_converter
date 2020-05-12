import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            appName: "vueFX",
            fx: {}
        },
        methods: {
            fetchFx: function () {
                fetch('https://api.exchangeratesapi.io/latest')
                    .then(response => response.json())
                    .then(data => this.fx = data)
                    .catch(error => console.log(error));
            }
        },
        mounted: function () {
            this.fetchFx();
        }
    })
})
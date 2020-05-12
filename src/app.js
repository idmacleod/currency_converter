import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            appName: "vueFX",
            fx: {},
            amount: null,
            currency1: "EUR",
            currency2: "CAD"
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
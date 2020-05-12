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
        },
        computed: {
            fxRate: function () {
                if (this.currency1 === "EUR") {
                    return this.fx.rates[this.currency2];
                }
            },
            convertedAmount: function () {
                if (this.amount) {
                    return this.amount * this.fxRate;
                }
            }
        }
    })
})
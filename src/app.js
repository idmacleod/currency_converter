import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            fx: {},
            amount: 1,
            currency1: "EUR",
            currency2: "EUR"
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
                if (this.currency1 === this.currency2 ) { return 1; }
                if (this.currency1 === "EUR") { return this.fx.rates[this.currency2]; }
                if (this.currency2 === "EUR") { return 1 / this.fx.rates[this.currency1]; }
                return this.fx.rates[this.currency2] / this.fx.rates[this.currency1];
            },
            convertedAmount: function () {
                if (this.amount) {
                    return this.amount * this.fxRate;
                }
            }
        },
        filters: {
            financial: function (number) {
                if (!number) { return "0.00"; }
                return number.toFixed(2);
            }
        }
    })
})
var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
    el: '#app',
    data: {
        sitename: "Vue.js 애완용품샵",
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
        },
        product: {
            id: 1001,
            title: "고양이 사료, 25파운드",
            description: "유기농 사료입니다.",
            price: 2000,
            image: "../images/cat.jpeg",
            availableInventory: 5
        },
        cart: []
    },
    methods: {
        addToCart: function () {
            this.cart.push(this.product.id);
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
    },
    computed: {
        cartItemCount() {
            return this.cart.length || '';
        },
        canAddToCart() {
            return this.product.availableInventory > this.cartItemCount;
        }
    },
    filters: {
        formatPrice(price) {
            if (!parseInt(price)) { return ""; }
            if (price > 99999) {
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split("").reverse();
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ",");
                    index += 4;
                }
                return "$" + priceArray.reverse().join("");
            } else {
                return "$" + (price / 100).toFixed(2);
            }
        }
    }
});

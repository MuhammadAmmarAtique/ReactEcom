function formatPrice({ price }) {
    return new Intl.NumberFormat("en-PK", //formatting suitable for pakistan
    {
        style: "currency",
        currency: "PKR",
        maximumFractionDigits: 2,   // after point 2 numbers come
    }).format(price * 250);        // suppose price is coming in dollars and 1 dollar = 250pkr
}

export default formatPrice;

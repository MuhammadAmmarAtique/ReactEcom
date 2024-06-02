function formatPrice({ price }) {
    return new Intl.NumberFormat("en-PK", //formatting suitable for pakistan
    {
        style: "currency",
        currency: "PKR",
        maximumFractionDigits: 0,   // after point no numbers will come
    }).format(price);        
}

export default formatPrice;

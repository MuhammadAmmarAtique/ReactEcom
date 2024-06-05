const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "LOAD_PRODUCTS_DATA_IN_FILTER_CONTEXT_FROM_PRODUCT_CONTEXT":

      //  getting data to show highest price value in html range tag for price in filtersection.js 
      const PriceArray = action.payload.map((elem)=> elem.price)
      const minPrice = Math.min(...PriceArray)
      const maxPrice = Math.max(...PriceArray)
      
      return {
        ...state,
        isLoading: false,
        allProducts: [...action.payload], //making a copy of products using spread operator.
        filterProducts: [...action.payload],

        //price
        filters:{
         ...state.filters,
         price:maxPrice,      //showing maxprice by default
         minPrice: minPrice,
         maxPrice:maxPrice

        }
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "SET_SORTING_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let ProductsToBeSorted = [...state.filterProducts];
      let newSortedProducts;

      if (state.sortingValue === "highest") {
        newSortedProducts = ProductsToBeSorted.sort(
          (a, b) => b.price - a.price
        );
      } else if (state.sortingValue === "lowest") {
        newSortedProducts = ProductsToBeSorted.sort(
          (a, b) => a.price - b.price
        );
      } else if (state.sortingValue === "a-z") {
        newSortedProducts = ProductsToBeSorted.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.sortingValue === "z-a") {
        newSortedProducts = ProductsToBeSorted.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      return {
        ...state,
        filterProducts: newSortedProducts,
      };

    case "SET_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,    //using this "[name]" name will dynamically add i.e text,category,company etc
        },           //+ based on that name, value will be stored in that state and remaining states will remains same.
      };

    case "FILTER_PRODUCTS":
      let ProductsToBeFiltered = [...state.allProducts];
      let newFilteredProducts = ProductsToBeFiltered; //for default case (when products page will load initially)

      const { text, category, company, color, price } = state.filters;
      // here below we will run code based on "thruthy" values, like if value is present and its not empty, only then run 
      // the code.

      //1) search functionality (filters products based on what user entered in search field)
      if (text) {
        let UserEnteredText = text.toLowerCase();
        newFilteredProducts = newFilteredProducts.filter((product) =>
          product.name.toLowerCase().includes(UserEnteredText)
        );
      }
      //2) filters products based on user selected category)
      if (category && category !== "All") {  //if value is "All" dont filter the products (i.e dont run this code),  
        let UserSelectedCategory = category; // show all products to user.

        newFilteredProducts = newFilteredProducts.filter(
          (product) => product.category === UserSelectedCategory
        );
      }

       //3) filters products based on user selected company)
       if (company && company !=="All") {
        let UserSelectedCompany = company;

        newFilteredProducts = newFilteredProducts.filter(
          (product) => product.company === UserSelectedCompany
        );
      }

       //4) filters products based on user selected color) 
       if (color && color !== "All") {
        let UserSelectedColor = color;

        newFilteredProducts = newFilteredProducts.filter(
          (product) => product.colors.includes(UserSelectedColor)  //product.colors is an array
        );
      }

      // 4) filters products based on user selected price)
      //  (showing all products of price less then and equal to userselected price)
      if (price && price !== 0) {
        let UserSelectedPrice = price;
        newFilteredProducts = newFilteredProducts.filter(
          (product) =>  product.price <= UserSelectedPrice
        );
        
      }

      return {
        ...state,
        filterProducts: newFilteredProducts,
      };

      case "CLEAR_FILTERS":
        return {
          ...state,
          filters: {
            text: "",  
            category: "All",
            company: "All",
            color:"All",
            // 
           price: 0,
           minPrice:state.filters.minPrice, 
          maxPrice:state.filters.maxPrice
          },
        };
    default:
      return state;
  }
};

export default FilterReducer;

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/Productscontext";
import { useEffect } from "react";

function SingleProduct() {
  const { id } = useParams();

  const { getSingleProductData, isSingleProductLoading, SingleProduct } =useProductContext();


  const {
    id: alias, // renaming product id as alias.
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count } //nested destructuring
  } = SingleProduct.data;   //destructuring singleproduct object
  
  console.log("title: ", title);
  useEffect(() => {
    getSingleProductData(`https://fakestoreapi.com/products/${id}`);
  }, [id]);

  return <Wrapper> <h1>{title}, {rate}</h1> </Wrapper>;
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductsContext";
import { useEffect } from "react";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import PageNavigation from "../components/PageNavigation";
import { Container } from "../styles/Container";
// import MyImage from "../components/MyImage" //use it if data of images from api is coming as array of objects (like in one array there are 3 images as an object)
import FormatPrice from "../helpers/FormatPrice";
import Star from "../components/Star"
import AddToCart from "../components/AddToCart";
import Loader from "../components/Loader"


function SingleProduct() {
  const { id } = useParams();

  const { getSingleProductData, isSingleProductLoading, SingleProduct } = useProductContext();

  useEffect(() => {
    getSingleProductData(`https://fakestoreapi.com/products/${id}`);
}, [id]);

  // Check if the data is still loading or if it's not yet available
  if (isSingleProductLoading || !SingleProduct.data) {
    return <Loader/>;
  }

  const {
    id: alias, // renaming product id as alias.
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count }, //nested destructuring (where rate is rating and count is a number of reviews)
  } = SingleProduct.data; //destructuring singleproduct object

  return (
    <Wrapper>
      <PageNavigation title={title} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
          {/* <MyImage imgs={image} /> */}
            <img
              src={image}
              alt="product image"
              height="300px"
              width="300px"
            ></img>
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{title}</h2>
            <Star rating={rate} reviews={count} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Product Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                ID : <span> {alias} </span>
              </p>
              <p>
                Rating:
                <span> {rate}</span>
              </p>
              <p>
                Category :<span> {category} </span>
              </p>
            </div>
            <hr />
            <AddToCart product={SingleProduct}/>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

export default SingleProduct;

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

  .product_images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

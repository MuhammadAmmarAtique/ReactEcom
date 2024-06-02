import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

const Products = () => {

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        {/* left side */}
        <div>
          <FilterSection />
        </div>

        {/* right side */}
        <section className="product-view--sort">
          {/* a)RS-top */}
          <div className="sort-filter">
            <Sort />
          </div>
          {/* a)RS-bottom */}
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
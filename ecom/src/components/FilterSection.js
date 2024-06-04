import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";

function FilterSection() {
  const { filters, setFiltersValue, allProducts } = useFilterContext();
  const text = filters.text;
  const category = filters.category;
  const color = filters.color;

  // ExtractData FUNCTION (making a function for this file to extract specific data from all products)
  // (like data for category,company,colors,price)

  function ExtractData(AllProducts, dataToExtract) {
    const ExtractedData = [];
    AllProducts.forEach((product) => {
      ExtractedData.push(product[dataToExtract]);
    });

    return ["All", ...new Set(ExtractedData)]; //using "Set" to end reptition in extracted data
  }
  // #1 calling above function to get "category" related data
  const categoryData = ExtractData(allProducts, "category");

  // #2 calling above function to get "company" related data
  const companyData = ExtractData(allProducts, "company");

  // #3 calling above function to get "colors" related data
  const extractedColorsData = ExtractData(allProducts, "colors");
  
  // Getting unique colors from the extractedColorsData
  const ColorsData = [...new Set(extractedColorsData.flat())]
  return (
    <Wrapper>
      {/* 1) search field */}
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search"
            name="text" //name and value will be used in setFilterValue function
            value={text}
            onChange={(e) => setFiltersValue(e)}
          />
        </form>
      </div>

      {/* 2)category */}
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={(e) => setFiltersValue(e)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3)company */}
      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={(e) => setFiltersValue(e)}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      {/* 4)colors */}
      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {ColorsData.map((curColor, index) => {
            if (curColor === "All") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={(e) => setFiltersValue(e)}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={curColor === color ? "btnStyle active" : "btnStyle"}
                onClick={(e) => setFiltersValue(e)}
              >
                {curColor === color ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default FilterSection;

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

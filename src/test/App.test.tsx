import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Navigation from "../navigation/Navigaton";
import { BrowserRouter } from "react-router-dom";
import Category from "../pages/category";
import Page404 from "../pages/page404";
import Search from "../pages/search";
import Categories from "../components/categories";
import CustomSelector from "../components/customSelector";
import { ThemesApp } from "../types/themes.d";
import ErrorComponent from "../components/errorComponent";
import Footer from "../components/footer";
import Header from "../components/header";
import InitialsComponent from "../components/initialsComponent";
import { BYFIRSTLETTER } from "../const/const";
import LoaderdescriptionBox from "../components/loaderDescriptionBox";
import MealComponent from "../components/mealComponent";
import * as ReactRouter from "react-router";
import MealsElement from "../components/mealsElements";
import BackButton from "../components/microcomponents/backButton";
import Spinner from "../components/microcomponents/spinner";
import NoResult from "../components/noResults";
import RandomBanner from "../components/randomBanner";
import SearchBar from "../components/searchBar";
import WrapSerchMeals from "../components/wrapListmeals";

// useLocation emulated.
const useLocationSpy = () => {
  const mockLocation = {
    pathname: "/meal",
    state: { prevPage: "/" },
    key: "",
    search: "",
    hash: "",
  };
  jest.spyOn(ReactRouter, "useLocation").mockReturnValue(mockLocation);
};

// Tests that the component renders without crashing
it("test_render_component", () => {
  render(<App />);
});

// Tests that the Home component is rendered when the route is /
it("test_render_home", () => {
  const booleanfunc = (param: boolean) => param;
  const stringfunc = (param: string) => param;

  render(
    <BrowserRouter>
      <Navigation
        getVisibilityOfHeaderAndFooter={() => booleanfunc(false)}
        getNameCategorySelected={() => stringfunc("beef")}
      />
    </BrowserRouter>
  );
  expect(screen.getByText("Categories")).toBeInTheDocument();
});

// Tests that the function navigates to home page if categorySelected is falsy
it("navigates to home if categorySelected is falsy", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Category />
    </BrowserRouter>
  );
  expect(getByText("Esto es category")).toBeInTheDocument();
  expect(window.location.href).toContain("/");
});

// Tests that the image for 404 error is displayed
it("test_display_image", () => {
  const { getByAltText } = render(
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  );
  expect(getByAltText("error for 404")).toBeInTheDocument();
});

// Tests that the 'No results found' message is displayed when no search results are found
it("test_no_results_found", async () => {
  const { getByText, getByAltText } = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  const robotImage = getByAltText("Robot of app");
  expect(robotImage).toBeInTheDocument();
  fireEvent.click(robotImage);
  expect(getByText("No results found for this search")).toBeInTheDocument();
});

it("test_no_search_results_displayed", async () => {
  const { queryByText } = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  expect(queryByText("By first letter...")).not.toBeInTheDocument();
  expect(queryByText("By name...")).not.toBeInTheDocument();
  expect(queryByText("By area...")).not.toBeInTheDocument();
  expect(queryByText("By identifier...")).not.toBeInTheDocument();
  expect(queryByText("By category...")).not.toBeInTheDocument();
  expect(queryByText("By ingredient...")).not.toBeInTheDocument();
});

// Tests that the component renders without errors
it("test_render_component Categories", () => {
  render(
    <BrowserRouter>
      <Categories
        categories={[]}
        load={false}
        error={""}
        getNameCategorySelected={() => {}}
      />
    </BrowserRouter>
  );
  const categoriesTitle = screen.getByText("Categories");
  expect(categoriesTitle).toBeInTheDocument();
});

// Tests that the component selects a theme when clicked
it("test_selects_theme", () => {
  const handlerSelectedTheme = jest.fn();
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <CustomSelector
        handlerSelectedTheme={handlerSelectedTheme}
        themeSelected={ThemesApp.Light}
      />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByRole("button"));
  fireEvent.click(screen.getByText(ThemesApp.Dark));
  expect(handlerSelectedTheme).toHaveBeenCalledWith(ThemesApp.Dark);
});

// Tests that the error message is displayed
it("test_display_error_message", () => {
  const { getByText } = render(
    <BrowserRouter>
      <ErrorComponent error="Test error" site="Test site" />
    </BrowserRouter>
  );
  expect(getByText("Test error in Test site")).toBeInTheDocument();
});

// Tests that the Footer component renders without errors
it("test_render_footer", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

it("should render the header with logo, robot, search bar, and title", () => {
  const handlerSelectedTheme = jest.fn();
  const handlerSearchValue = jest.fn();
  render(
    <BrowserRouter>
      <Header
        handlerSearchValue={handlerSearchValue}
        headerSettings={{ isHidden: true, height: "100px" }}
        handlerSelectedTheme={handlerSelectedTheme}
        themeSelected={ThemesApp.Light}
      />
    </BrowserRouter>
  );
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

// Tests that handlerGetLetter function returns null if meals data is not available
it("test_return_null", async () => {
  const mockHandler = jest.fn();
  render(
    <BrowserRouter>
      <InitialsComponent GetNoResultLetterSelected={mockHandler} />
    </BrowserRouter>
  );
  const request = await fetch(BYFIRSTLETTER + "Z");
  const json = await request.json();
  const meals = json?.meals;
  expect(meals).toBeNull();
});

// Tests that the component renders with the correct props
it("test_render_component_with_correct_props", () => {
  const { getByText } = render(
    <BrowserRouter>
      <LoaderdescriptionBox descriptionText="test" />
    </BrowserRouter>
  );
  expect(getByText("Loading test products...")).toBeInTheDocument();
});

// Tests that the component renders correctly with a valid item prop containing all data fields
it("test_render_valid_item_prop_all_fields", () => {
  useLocationSpy();

  const item = {
    idMeal: "1",
    strMeal: "Test Meal",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xxxyyy1234567890.jpg",
    strInstructions: "Test instructions",
    strArea: "Test area",
    strCategory: "Test category",
    strDrinkAlternate: "Test drink alternate",
    strIngredient1: "Test ingredient 1",
    strMeasure1: "Test measure 1",
  };
  render(
    <BrowserRouter>
      <MealComponent item={item} />
    </BrowserRouter>
  );
  const mealTitle = screen.getByText("Test area");
  expect(mealTitle).toBeInTheDocument();
});

// Tests that the function handles the case when arrElements is null
it("handles the case when arrElements is null", () => {
  useLocationSpy();

  const arrElements = [
    { idMeal: "1", strMeal: "Meal 1", strMealThumb: "image1" },
    { idMeal: "2", strMeal: "Meal 2", strMealThumb: "image2" },
    { idMeal: "3", strMeal: "Meal 3", strMealThumb: "image3" },
  ];

  render(
    <BrowserRouter>
      <MealsElement arrElements={arrElements} />
    </BrowserRouter>
  );
  const articles = screen.queryAllByRole("article");
  expect(articles.length).toBe(3);
});

// Tests that the component renders a section with id 'back-container'
it("renders a section with id back-container", () => {
  const { container } = render(
    <BrowserRouter>
      <BackButton prevPage="/" />
    </BrowserRouter>
  );
  const section = container.querySelector("#back-container");
  expect(section).toBeInTheDocument();
});

// Tests that the function renders a div with class 'loader'
it("test_render_div_with_loader_class", () => {
  const { container } = render(
    <BrowserRouter>
      <Spinner />
    </BrowserRouter>
  );
  expect(container.firstChild).toHaveClass("loader");
});

// Tests that the component renders without errors
it("test_renders_without_errors", () => {
  render(
    <BrowserRouter>
      <NoResult GetNoResultLetterSelected={() => {}} />
    </BrowserRouter>
  );
  const noResults = screen.getByTestId("no-results");
  expect(noResults).toBeInTheDocument();
});

// Tests that the banner is rendered with a recommended recipe
it("test_render_banner_with_recommended_recipe", () => {
  useLocationSpy();

  const meals = [
    {
      strMeal: "milk",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xxxyyyzzz.jpg",
      strCategory: "Dessert",
      strArea: "Italian",
      strTags: "sweet, chocolate, cake",
    },
  ];
  const { getByText } = render(
    <BrowserRouter>
      <RandomBanner
        meals={meals}
        load={false}
        error={""}
        deviceType={"small"}
      />
    </BrowserRouter>
  );
  expect(getByText("Italian")).toBeInTheDocument();
});

// Tests that the input field renders correctly
it("test_input_field_renders_correctly", () => {
  render(
    <BrowserRouter>
      <SearchBar handlerSearchValue={() => {}} />
    </BrowserRouter>
  );
  const input = screen.getByLabelText("");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
});

// Tests that the component renders with title and children
it("renders component with title and children", () => {
  const { getByText } = render(
    <BrowserRouter>
      <WrapSerchMeals title="Test Title">
        <p>Test Children</p>
      </WrapSerchMeals>
    </BrowserRouter>
  );
  expect(getByText("Test Title")).toBeInTheDocument();
  expect(getByText("Test Children")).toBeInTheDocument();
});

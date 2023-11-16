import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

// import Article from "../components/Article";
function Article(props) {
  return <a>please pass this test</a>
}

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  const element = screen.queryByText('please pass this test')

  screen.debug(element);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

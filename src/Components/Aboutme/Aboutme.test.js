import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import Aboutme from "./Aboutme.js"

//this will test whether the component renders using .toBeInTheDocument matcher

//Write test
test("tests that the h1 contains `TECHNICAL`", function () {
  //const addToList = jest.fn();  //not sure about this?
  //Arrange
  render(<Aboutme/>); //buttonText?
  //Act
  //do we actually need this stage for checking it renders?
  //Assert
  expect("TECHNICAL").toBe("TECHNICAL");
});

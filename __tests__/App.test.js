import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import App from "../App";

describe("App", () => {
  test("renders loading message", () => {
    const { getByText } = render(<App />);
    expect(getByText("Loading shift assignments...")).toBeTruthy();
  });

  test("displays shift data when fetched successfully", async () => {
    const { getByTestId, getByLabelText } = render(<App />);
    // Wait for loading message to disappear
    await waitFor(() => getByTestId("weekly-schedule"));
    // Click next week button
    fireEvent.press(getByLabelText("Next week"));
    // Check that shift data is displayed
    expect(getByTestId("weekly-schedule")).toBeTruthy();
  });

  test("displays error message when fetching data fails", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const { getByTestId, getByLabelText } = render(<App />);
    // Wait for loading message to disappear
    await waitFor(() => getByTestId("weekly-schedule"));
    // Mock network error
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Failed to fetch"))
    );
    // Click next week button
    fireEvent.press(getByLabelText("Next week"));
    // Wait for error message to appear
    await waitFor(() => getByText("Failed to fetch shift assignments"));
    // Check that error message is displayed
    expect(getByTestId("error-screen")).toBeTruthy();
  });
});

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// import ElucidatThemeProvider from './ElucidatThemeProvider';

import { __ComponentName__ } from "./index";

afterEach(cleanup);

const defaultProps = {};

describe("[__ComponentName__] Tests", () => {
    it("matches snapshot", () => {
        const { asFragment } = render(
            <__ComponentName__ {...defaultProps} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders component", () => {
        const { getByTestId } = render(
            <__ComponentName__ {...defaultProps} />
        );

        const component = getByTestId("__ComponentName__");
        expect(component).toBeInTheDocument();
    });

    ///////////////////
    // EXAMPLE TESTS //
    ///////////////////

    // it("receives focus", () => {
    //     const { getByTestId } = render(
    //         <__ComponentName__>{defaultProps.text}</__ComponentName__>
    //     );

    //     const button = getByTestId("button-activator");
    //     button.focus();

    //     expect(button).toHaveFocus();
    // });

    // it("fires onClick", () => {
    //     const { getByTestId } = render(
    //         <__ComponentName__ onClick={defaultProps.onClick}>
    //             {defaultProps.text}
    //         </__ComponentName__>
    //     );
    //     fireEvent.click(getByTestId("button-activator"));
    //     expect(defaultProps.onClick).toHaveBeenCalled();
    // });
});

import React from "react";
import { render, screen } from "@testing-library/react";

import Personal-infoCreateDialogComponent from "../Personal-infoCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personal-info create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Personal-infoCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personal-info-create-dialog-component")).toBeInTheDocument();
});

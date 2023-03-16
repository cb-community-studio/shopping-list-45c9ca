import React from "react";
import { render, screen } from "@testing-library/react";

import Personal-infoEditDialogComponent from "../Personal-infoEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personal-info edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Personal-infoEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personal-info-edit-dialog-component")).toBeInTheDocument();
});

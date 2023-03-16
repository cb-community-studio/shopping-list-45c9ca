import React from "react";
import { render, screen } from "@testing-library/react";

import Personal-infoPage from "../Personal-infoPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personal-info page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Personal-infoPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personal-info-datatable")).toBeInTheDocument();
    expect(screen.getByRole("personal-info-add-button")).toBeInTheDocument();
});

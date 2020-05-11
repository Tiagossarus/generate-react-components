import React from "react";
import PropTypes from "prop-types";
// import { useTranslation } from "react-i18next";

// import { useStyles } from "./__ComponentName__.styles";

export const __ComponentName__ = props => {
    // const { t } = useTranslation();
    // const classes = useStyles();

    return (
        <>
            <h1>Component</h1>
        </>
    );
};

__ComponentName__.defaultProps = {
    foo: "bar",
};

__ComponentName__.propTypes = {
    foo: PropTypes.string,
};

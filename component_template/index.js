import React from "react";
import PropTypes from "prop-types";
// import { useTranslation } from "react-i18next";

// import { useStyles } from "./styles";

export const __ComponentName__ = props => {
    // const { t } = useTranslation();
    // const classes = useStyles();

    return <div data-testid="__ComponentName__">Component</div>;
};

__ComponentName__.defaultProps = {};

__ComponentName__.propTypes = {
    children: PropTypes.node,
};

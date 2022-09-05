import React from "react";
import Front from "./sides/Front";
import Back from "./sides/Back";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    flipCard: {
        backgroundColor: "transparent",
        width: "300px",
        height: "200px",
        border: "1px solid #f1f1f1",
        perspective: "1000px"
    },
    flipCardInner: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        transition: "transform 0.8",
        transformStyle: "preserve-3d",
        "&:hover": {
            transform: "rotateY(180deg)"
        }
    },
    myButton: {
        color: "green",
        margin: {
            // jss-expand gives more readable syntax
            top: 5,
            right: 0,
            bottom: 0,
            left: "1rem"
        },
        "& span": {
            // jss-nested applies this to a child span
            fontWeight: "bold" // jss-camel-case turns this into 'font-weight'
        }
    },
    myLabel: {
        fontStyle: "italic"
    }
});
console.log(useStyles);
const FlipCard = ({ children }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.flipCard },
        React.createElement("div", { className: classes.flipCardInner }, ...children)));
};
FlipCard.Front = Front;
FlipCard.Back = Back;
export { FlipCard };
//# sourceMappingURL=FlipCard.js.map
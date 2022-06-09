import { makeStyles } from "@material-ui/core/styles";
import { darkPrimary, darkSecondary, LinkedInBlue } from "../../assets/Colors";

export default makeStyles((theme) => ({
    upload: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        padding: "0 10px",
        borderRadius: 7,
        backgroundColor: theme.palette.type === "dark" && darkPrimary,
        [theme.breakpoints.down("xs")]: {
            borderRadius: 0,
        },
    },

    upload__header: {
        height: "auto",
        display: "flex",
        alignItems: "center",
        padding: "10px 0 5px 0",
    },

    header__form: {
        flex: 1,
        height: "50px",
        display: "flex",
        alignItems: "center",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.15)",
        overflow: "hidden",
        "& > .MuiSvgIcon-root": {
            marginLeft: 10,
        },
        "& > input": {
            height: "100%",
            flex: 1,
            border: 0,
            outlineWidth: 0,
            paddingLeft: 10,
            color: theme.palette.type === "dark" && "lightgrey",
            fontSize: 14,
            fontWeight: 600,
            backgroundColor: "transparent",
            "&::placeholder": {
                color: theme.palette.type === "dark" && "grey",
            },
        },
        "& > button": {
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            border: 0,
            outlineWidth: 0,
            backgroundColor: LinkedInBlue,
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
            transition: "all 0.4s ease",
            "&:hover": {
                backgroundColor: "#008edb",
            },
        },
    },

    selectedFile: {
        display: "flex",
        alignItems: "center",
        paddingBottom: 5,
    },

    uploading: {
        display: "flex",
        alignItems: "center",
        margin: "5px 0",
        paddingLeft: 5,
        "& > p": {
            fontSize: 12,
            fontWeight: 600,
        },
    },

    progress: {
        flex: 1,
        height: 8,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
        "& > *": {
            backgroundColor: "#008edb",
        },
    },

    upload__media: {
        height: "50px",
        display: "flex",
        alignItems: "center",
        padding: "2px 0",
        opacity: 0.8,
    },

    media__options: {
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 4,
        transition: "all 0.4s ease",
        "&:hover": {
            backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
        },
        "& > h4": {
            fontWeight: 400,
            marginLeft: 10,
            [theme.breakpoints.down("md")]: {
                display: "none",
            },
        },
    },
}));
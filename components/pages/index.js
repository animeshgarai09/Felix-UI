import Colors from "./colors";
import Installation from "./installation";
import Typography from "./typography";

import ReactAlert from "./react/alert";
import ReactAvatar from "./react/avatar";
import ReactBadge from "./react/badge";
import ReactButton from "./react/button";
import ReactCard from "./react/card";
import ReactToast from "./react/toast";
import ReactGrid from "./react/grid";
import ReactImage from "./react/image";
import ReactInput from "./react/input";
import ReactList from "./react/list";
import ReactMenu from "./react/menu";
import ReactModal from "./react/modal";
import ReactNavigation from "./react/navigation";
import ReactRating from "./react/rating";
import ReactToggleButton from "./react/toggleButton";

import CSSAlert from "./css/alert";
import CSSAvatar from "./css/avatar";
import CSSBadge from "./css/badge";
import CSSButton from "./css/button";
import CSSCard from "./css/card";
import CSSGrid from "./css/grid";
import CSSImage from "./css/image";
import CSSInput from "./css/input";
import CSSList from "./css/list";
import CSSModal from "./css/modal";
import CSSNavigation from "./css/navigation";
import CSSRating from "./css/rating";
import CSSToggleButton from "./css/toggleButton";


export default {
    Installation: <Installation />,
    Colors: <Colors />,
    Typography: <Typography />,
    Button: {
        react: <ReactButton />,
        css: <CSSButton />,
    },
    Image: {
        react: <ReactImage />,
        css: <CSSImage />,
    },
    Input: {
        react: <ReactInput />,
        css: <CSSInput />,
    },
    List: {
        react: <ReactList />,
        css: <CSSList />,
    },
    Alert: {
        react: <ReactAlert />,
        css: <CSSAlert />,
    },
    Avatar: {
        react: <ReactAvatar />,
        css: <CSSAvatar />,
    },
    Badge: {
        react: <ReactBadge />,
        css: <CSSBadge />,
    },
    Card: {
        react: <ReactCard />,
        css: <CSSCard />,
    },
    Toast: <ReactToast />,
    Menu: <ReactMenu />,
    Grid: {
        react: <ReactGrid />,
        css: <CSSGrid />,
    },
    Modal: {
        react: <ReactModal />,
        css: <CSSModal />,
    },
    Navigation: {
        react: <ReactNavigation />,
        css: <CSSNavigation />,
    },
    Rating: {
        react: <ReactRating />,
        css: <CSSRating />,
    },
    "Toggle button": {
        react: <ReactToggleButton />,
        css: <CSSToggleButton />,
    }
}

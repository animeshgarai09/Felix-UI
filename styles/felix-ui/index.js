// import './global.scss'
import Avatar from "./components/Avatar/Avatar";
import AvatarGroup from "./components/Avatar/AvatarGroup";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import ButtonGroup from "./components/Button/ButtonGroup";
import ProductWrapper from "./components/Card/ProductCard/ProductWrapper";
import ProductImage from "./components/Card/ProductCard/ProductImage";
import { ProductBody, ProductActions } from "./components/Card/ProductCard/ProductBody";
import FelixProvider, { useToast } from "./components/FelixProvider/FelixProvider";
import { List, ListItem } from "./components/List/List";
import Image from "./components/Image/Image";
import Badge from "./components/Badge/Badge";
import IconButton from "./components/IconButton/IconButton";
import Input from './components/Input/Input'
import { useLockBodyScroll } from "./components/Hooks/useLockBodyScroll";
import { useOnClickOutside } from "./components/Hooks/useOnClickOutside";
import { useClipboard } from "./components/Hooks/useClipboard";

export {
    Avatar,
    AvatarGroup,
    Alert,
    Button,
    ButtonGroup,
    Badge,
    ProductWrapper,
    ProductImage,
    ProductBody,
    ProductActions,
    FelixProvider,
    useToast,
    List,
    ListItem,
    IconButton,
    Image,
    Input,
    useLockBodyScroll,
    useOnClickOutside,
    useClipboard
}


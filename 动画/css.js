import spring,{toString} from "css-spring"
const keyframes = spring(
    { scale: 0 }, // from
    { scale: 1 }, // to
    // precision表示精度有2位
    { damping: 14, stiffness: 170, precision: 2}
);
const keyframeString = toString(keyframes);
console.log(keyframeString);


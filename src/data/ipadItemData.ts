import { AppleItem } from "../model/AppleItem";
import ipadPro from "../assets/ipad_pro.png";
import ipadAir from "../assets/ipad_air.png";
import ipad from "../assets/ipad.png";
import ipadMini from "../assets/ipad_mini.png";

export const ipadItemData: AppleItem[] = [
    {
        imageUrl: ipadPro,
        name: "iPad Pro",
        description: "The ultimate iPad experience.",
        price: 799,
    },
    {
        imageUrl: ipadAir,
        name: "iPad Air",
        description: "Powerful. Colorful. Wonderful.",
        price: 599,
    },
    {
        imageUrl: ipad,
        name: "iPad",
        description: "Delightfully capable. Surprisingly affordable.",
        price: 329,
    },
    { imageUrl: ipadMini, name: "iPad mini”", description: "Mega power. Mini sized.", price: 499 },
];

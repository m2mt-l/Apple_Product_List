import { AppleItem } from "../model/AppleItem";
import iphone14Pro from "../assets/iphone_14_pro.jpg";
import iphone14 from "../assets/iphone_14.jpg";
import iphone13 from "../assets/iphone_13.jpg";
import iphoneSe from "../assets/iphone_se.jpg";

export const iphoneItemData: AppleItem[] = [
    {
        imageUrl: iphone14Pro,
        name: "iPhone 14 Pro",
        description: "The ultimate iPhone.",
        price: 999,
    },
    { imageUrl: iphone14, name: "iPhone 14", description: "A total powerhouse.", price: 799 },
    { imageUrl: iphone13, name: "iPhone 13", description: "As amazing as ever.", price: 599 },
    {
        imageUrl: iphoneSe,
        name: "iPhone SE”",
        description: "Serious power. Serious value.",
        price: 429,
    },
];

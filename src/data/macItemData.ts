import { AppleItem } from "../model/AppleItem";
import macBookAirM1 from "../assets/mbam1.png";
import macBookAirM2 from "../assets/mbam2.png";
import macBookPro from "../assets/mbp13.png";
import macBookPro14and16 from "../assets/mbp14_and_16.png";
import iMac24 from "../assets/imac24.png";
import macMini from "../assets/macmini.png";
import macStudio from "../assets/macstudio.png";
import macPro from "../assets/macpro.png";

export const macItemData: AppleItem[] = [
    {
        imageUrl: macBookAirM1,
        name: "MacBook Air",
        description: "M1",
        price: 999,
    },
    { imageUrl: macBookAirM2, name: "MacBook Air", description: "M2", price: 1199 },
    { imageUrl: macBookPro, name: "MacBook Pro", description: "", price: 1299 },
    { imageUrl: macBookPro14and16, name: "MacBook Pro 14” and 16”", description: "", price: 1999 },
    { imageUrl: iMac24, name: "iMac 24", description: "", price: 1299 },
    { imageUrl: macMini, name: "Mac mini", description: "", price: 699 },
    { imageUrl: macStudio, name: "Mac Studio", description: "", price: 1999 },
    { imageUrl: macPro, name: "Mac Pro", description: "", price: 5999 },
];

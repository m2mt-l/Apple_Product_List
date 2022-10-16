import { AppleItemList } from "../model/AppleItemList";
import { macItemData } from "./macItemData";
import { ipadItemData } from "./ipadItemData";
import { iphoneItemData } from "./iphoneItemData";
import { watchItemData } from "./watchItemData";

export const productList: AppleItemList = {
    Mac: macItemData,
    iPad: ipadItemData,
    iPhone: iphoneItemData,
    Watch: watchItemData,
};

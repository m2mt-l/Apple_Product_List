import React from "react";
import Item from "./Item";
import { AppleCategory } from "../model/AppleCategory";
import { AppleItem } from "../model/AppleItem";
import { productList } from "../data/productList";
import { AppleItemList } from "../model/AppleItemList";
class Category extends React.Component<AppleCategory, AppleItem> {
    render(): React.ReactNode {
        const name = this.props.name;
        const item = productList[name as keyof AppleItemList];
        return (
            <div className="text-2xl font-bold mt-3">
                {name}
                <div className="bg-cyan-400 flex flex-center mx-auto overflow-x-auto">
                    {item.map((item) => {
                        return (
                            <Item
                                key={item.name}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Category;

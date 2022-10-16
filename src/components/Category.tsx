import React from "react";
import Item from "./Item";
import { AppleCategory } from "../model/AppleCategory";
import { AppleItem } from "../model/AppleItem";
import { macItemData } from "../data/macItemData";

class Category extends React.Component<AppleCategory, AppleItem> {
    render(): React.ReactNode {
        const name = this.props.name;
        return (
            <div className="text-2xl font-bold">
                {name}
                <div className="flex flex-start container mx-auto overflow-x-auto">
                    {macItemData.map((item) => {
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

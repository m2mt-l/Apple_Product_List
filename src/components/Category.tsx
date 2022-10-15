import React from "react";
import { AppleCategory } from "../model/AppleCategory";

class Category extends React.Component<AppleCategory> {
    render(): React.ReactNode {
        const name = this.props.name;
        return <div className="container mx-auto overflow-x-auto text-2xl font-bold">{name}</div>;
    }
}

export default Category;

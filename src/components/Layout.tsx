import React from "react";
import Header from "./Header";
import { appleProduct } from "../data/appleCategory";
import Category from "./Category";
class Layout extends React.Component {
    componentDidMount(): void {
        document.title = "Apple Product List";
    }

    render(): React.ReactNode {
        return (
            <div>
                <Header />
                <div className="flex flex-col justify-start content-start flex-wrap">
                    {appleProduct.map((product) => {
                        return <Category key={product.name} name={product.name} />;
                    })}
                </div>
            </div>
        );
    }
}
export default Layout;

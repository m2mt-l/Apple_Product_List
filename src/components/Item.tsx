import React from "react";
import { AppleItem } from "../model/AppleItem";
class Item extends React.Component<AppleItem> {
    render(): React.ReactNode {
        const imageUrl = this.props.imageUrl;
        const name = this.props.name;
        const description = this.props.description;
        const price = this.props.price;

        return (
            <div className="mt-6 py-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {/* <div className="bg-red-400 text-center min-h-80 aspect-w-1 aspect-h-1 w-full  rounded-md group-hover:opacity-75 lg:w-80 lg:h-80"> */}
                <div className="bg-red-400 text-center w-80 h-50">
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-full w-full object-scale-down object-center"
                    />
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span className="inset-0"></span>
                            {name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                    <p className="text-sm font-medium text-gray-900">${price}</p>
                </div>
            </div>
        );
    }
}

export default Item;

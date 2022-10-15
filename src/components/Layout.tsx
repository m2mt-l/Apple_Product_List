import React from "react";
import Header from "./Header";

class Layout extends React.Component {
    componentDidMount(): void {
        document.title = "Apple Product List";
    }

    render(): React.ReactNode {
        return (
            <div>
                <Header />
            </div>
        );
    }
}
export default Layout;

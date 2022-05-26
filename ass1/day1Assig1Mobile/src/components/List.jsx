import React from "react";

let List = ({data}) => {
    const list = data.map((el) => {
        return (<li>{el}</li>);
    });
    return <ul>{list}</ul>;
}


export default List;

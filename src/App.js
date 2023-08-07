import React, { useEffect, useState } from "react";
import Tasks from './Tasks';
import TaskTable from './TaskTable';
import SearchBar from './SearchBar';
import TaskForm from './TaskForm';
import Profile from './Profile';
import Avatar from './Avatar';
import './App.css';
function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
                label={"Only show products in stock"}/>
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
      {product.name}
    </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}




const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];



function MainFrame(){
    // let TASKS;
    // (async () => {
    //     TASKS =  fetchTasks().then(tasks =>{tasks;});
    //
    // })();

 //todo find proper place
    return <div className="App-header">
       {/*<div><FilterableProductTable products={PRODUCTS}/></div>*/}
<div>_____________________________________________________</div>

        <Tasks/>
<h1>Text Area example</h1>

        <textarea>
  Hello there, this is some text in a text area
</textarea>
        <TaskTable/>
        <div>_____________________________________________________</div>
        <TaskForm/>
        <div>_____________________________________________________</div>
        <div><Profile/></div>
        <div>_____________________________________________________</div>
        <div><Avatar/></div>
    </div>




}
export default function App2() {
    return <MainFrame />;
}

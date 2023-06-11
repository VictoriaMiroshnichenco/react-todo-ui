import { useState } from 'react';

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
function TaskRow({ task }) {

    const description = task.completed===false ? task.description :
        <span style={{ color: 'grey' }}>
                {task.description}
        </span>;
    return (
        <tr>
            <td>{description}</td>
            <td>{task.completed}</td>
        </tr>
    );
}
function TaskTable({ tasks, filterText, activeOnly }) {
    const rows = [];
    let lastCategory = null;

    tasks.forEach((task) => {
        if (
            task.description.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (activeOnly && task.completed===true) {
            return;
        }

        rows.push(
            <TaskRow
                task={task}
                key={task.desctiption} />
        );

    });

    return (
        <table>
            <thead>
            <tr>
                <th>Task</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({
                       filterText,
                       inStockOnly,
                       onFilterTextChange,
                       onInStockOnlyChange,
                       label
                   }) {
    return (
        <form>
            <input
                type="text"
                value={filterText} placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)} />
            <label>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                {label}
            </label>
        </form>
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



const TASKS = [{
        "id": "5820a4c2abe74f409da89217bf905a0c",
        "description": "Read a\n Book",
        "created": "2018-09-02T16:00:01",
        "modified": "2018-09-02T16:00:01",
        "completed": false
    },
    {
        "id": "7fd921cfd2b64dc7b995633e8209f385",
        "description": "Buy\n Milk",
        "created": "2018-09-23T15:00:01",
        "modified": "2018-09-23T15:00:01",
        "completed": false
    },
    {
        "id": "a44b6db26aef49e39d1b68622f55c347",
        "description": "Go to Spring\n One 2018",
        "created": "2018-09-18T12:00:00",
        "modified": "2018-09-18T12:00:00",
        "completed": true
    }];
function TaskPane({ tasks }) {
    const [filterText, setFilterText] = useState('');
    const [activeOnly, setActiveOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={activeOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setActiveOnly}
                label={"Only show active tasks"}/>
            <TaskTable
                tasks={tasks}
                filterText={filterText}
                activeOnly={activeOnly} />
        </div>
    );
}

function MainFrame(){
    return <div>
       <div><FilterableProductTable products={PRODUCTS}/></div>
<div>_____________________________________________________</div>
        <div><TaskPane tasks={TASKS} /></div>
    </div>
};
export default function App() {
    return <MainFrame />;
}

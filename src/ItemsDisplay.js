function ItemDisplay({items,deleteItem}) {

    function displayData(item) {
        return (
            <tr>
                <th>{item.id}</th>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteItem(item) }>Delete</button>
                </td>
            </tr>

        )
    }
    return (
        <div className="container">
            <div className="row pl-0"><h2>Items</h2></div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Name</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(displayData)}
                    </tbody>

                </table>
            </div>


        </div>
    )

}

export default ItemDisplay
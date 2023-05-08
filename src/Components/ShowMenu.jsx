import React, { useState, useEffect } from 'react';

import axios from 'axios';



import ShowCategory from '../Components/ShowCategory';

import { Card, Button } from 'react-bootstrap';



import { useNavigate } from 'react-router-dom';

// import Routers from '../../Routes/Routers';




function ShowMenu() {

    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    // const [selectedItem, setSelectedItem] = useState(null);

    // const [editedItem, setEditedItem] = useState({});

    const [deletedItemId, setDeletedItemId] = useState(null);






    useEffect(() => {

        axios.get("https://localhost:7070/api/Menus")

            .then(response => {

                setItems(response.data);

                console.log(response.data);

            })

            .catch(error => {

                console.log(error);

            });

    }, [deletedItemId]);





    // function handleEdit(event, item) {

    //     console.log(`Editing item ${item.menuId}`);

    //     navigate('/editmenu', { state: { menuId: item.menuId } });

    // }




    //Deleting a menu




    // function handleDelete(item) {

    //     // event.preventDefault();

    //     const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);

    //     if (confirmDelete) {

    //         axios.delete(`https://localhost:7070/api/Menus/${item.menuId}`)

    //             .then(() => {

    //                 console.log(`Deleted item ${item.menuId}`);

    //                 setDeletedItemId(item.menuId);

    //                 // setItems(prevItems => prevItems.filter(prevItem => prevItem.menuId !== item.menuId));

    //             })

    //             .catch(error => {

    //                 console.error(`Error deleting item ${item.menuId}:`, error);

    //             });

    //     }




    //     console.log(`Deleting item ${item.menuId}`);

    //     // Implement delete logic here

    // }

    function handleClick(item) {

        //     setSelectedItem(item.menuId);

        navigate(`/ShowCategory`, { state: { menuId: item.menuId } });






        console.log(`Clicked item ${item.menuId}`);




        // if (!item.categories || item.categories.length === 0) {

        //     navigate(`/AddCategoryButton`, { state: { menuId: item.menuId } });

        // }

        // Implement click logic here




    }

    return (

        <div className="MenuList">




            <div className="row">

                {items.map(item => (

                    <div key={item.menuId} className="col-md-4 mb-4">

                        <Card>

                            <Card.Img

                                variant="top"

                                src={item.menuImage}

                                alt={item.menuName}

                                onClick={() => handleClick(item)}

                                style={{ cursor: 'pointer' }}

                            />

                            <Card.Body>

                                <Card.Title className='title'  onClick={() => handleClick(item)}>{item.menuName}</Card.Title>

                                {/* <Card.Title>{item.menuName}</Card.Title> */}

                                <Card.Text>{item.menuDescription}</Card.Text>

                                {/* <Button variant="primary" style={{ margin: "10px" }} onClick={(event) => handleEdit(event, item)}>Edit</Button>

                                <Button variant="danger" style={{ margin: "10px" }} onClick={e => { e.preventDefault(); handleDelete(item); }}>Delete</Button> */}

                            </Card.Body>

                        </Card>

                    </div>

                ))}




                {/* new adding card */}






                <div className='col-md-4 mb-4'>

                    {/*         <Card>

        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQ8Te5K2tD29NIgMhTb9FOz4eMHfkdAr0A&usqp=CAU"} alt={"Add Menu"} />

        <Card.Body>

        <Card.Title className='title'  onClick={() => handleClick()}>{"Add Menu"}</Card.Title>

        <Card.Text>{"Add a new menu item"}</Card.Text>

        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleDelete();}}>Add Menu</Button>

        </Card.Body>

        </Card> */}

                </div>

            </div>




        </div>





        // <div className='MenuList'>

        // {selectedItem ? (

        //         <CategoryItems item={selectedItem} />

        //       ) : (

        //    <center> <table>

        //     <thead>

        //       <tr>

        //         <th>Menu ID</th>

        //         <th>Menu Name</th>

        // {/*         <th>Description</th> */}

        //         <th>Image</th>

        //        <th>Edit</th>

        //         <th>Delete</th>

        //       </tr>

        //     </thead>

        //     <tbody>

        //       {items.map(item => (

        //         <tr key={item.menuId}>

        //           <td>{item.menuId}</td>

        //           <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuName}</a></td>

        // {/*           <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuDescription}</a></td> */}

        //           <td><img src = {item.menuImage} alt = {item.menuName} /></td>

        //           <td><button onClick={() => handleEdit(item)}>Edit</button></td>

        //           <td><button onClick={() => handleDelete(item)}>Delete</button></td>

        //         </tr>

        //       ))}

        //     </tbody>

        //   </table>

        //   </center>

        //       )}

        //   </div>

    );

}

export default ShowMenu;
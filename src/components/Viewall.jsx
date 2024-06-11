import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,changeData] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8081/view").then(
            (response) => {
                changeData(response.data)

            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Departments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(

                                        (value, index) => {
                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.id}</td>
                                                <td>{value.department}</td>
                                            </tr>

                                        }
                                    )   
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
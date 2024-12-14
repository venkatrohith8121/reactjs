import { useState, useEffect } from "react";

const Comment = () => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true when the fetch starts
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`Http error! Status: ${response.status}`); // Correct error throwing
                }
                const result = await response.json();
                setData(result);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []); // Empty dependency array ensures the effect runs once on mount

    const filteredData = filter ? data.filter((item) => item.company.bs === filter) : data;

    if (loading) return <h2>Loading...</h2>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>User Data Table</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Company</th>
                        <th>
                            <div>
                                <span> Designation
                                    <select onChange={(e) => setFilter(e.target.value)}>
                                        <option value="">All</option>
                                        <option value="Consulting">Consulting</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Manufacturing">Manufacturing</option>
                                    </select>
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.company.bs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Comment;

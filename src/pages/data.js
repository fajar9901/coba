import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (kdmtk) => {
    axios.delete(`http://127.0.0.1:5000/api/data${kdmtk}`)
      .then(response => {
        console.log(response.data.message);
        fetchData(); // Fetch updated data after successful deletion
      })
      .catch(error => {
        console.error(error);
      });
  };
  


  return (
    <div>
     <div className="card" >
        <div className="Titel"style={{ display: "flex", justifyContent: "center" }} >
                    <h2>List Daftar Matakuliah</h2>
                </div>
                <table>
        <thead>
          <tr>
            <th>Kode Matakuliah</th>
            <th >Nama Matakuliah</th>
            <th>Jumlah SKS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.kdmtk}>
              <td>{item.kdmtk}</td>
              <td>{item.namamtk}</td>
              <td>{item.sks}</td>
              <td>
                <button className="my-button btn-red" onClick={() => handleDelete(item.kdmtk)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
     </div>
    </div>
  );
}

export default Data;

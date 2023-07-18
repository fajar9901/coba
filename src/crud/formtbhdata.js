import React, { Component } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
// import Tabel from "../../tabel";
import Button from 'react-bootstrap/Button';
// import Alert from "./Alert";
// import { MDBInput } from 'mdb-react-ui-kit';
import Alert from "../pages/componen/Alert.js"
const apiURL = "http://localhost:3000/users/"
 
class Formtbhdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: [],       // Untuk tampung Get all data
            totalData: 0,       // Untuk Hitung All Data
            isUpdate: false,    // Untuk Fileter Fungsi 
            Notif: {            // Untuk Tampung respon Dari Server
                alertShow: false,
                actionType: '',
                responCode: 0,
            },
            DataUserNew: {      // untuk Tampung data Update / New data
                id: 1,
                nama: '',
                alamat: '',
                telpon: ''
            }
        }
 
    }
 
    componentDidMount() {
        this.GetdataUsers()
    }
 
 
    GetdataUsers() {
        fetch(apiURL).then(res => {
            if (res.status === 200)
                return res.json()
            else
                return <p>No data Found</p>
        }).then(resdata => {
            console.log(resdata)
            // console.log('Numrow', resdata.length)
            this.setState({
                dataUser: resdata,
                totalData: resdata.length
            })
        })
    }
    SaveNewDataUSer = () => {
        const Newdata = this.state.DataUserNew;
 
        fetch(apiURL, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Newdata)
        }).then((res) => {
            console.log(res)
            console.log("Status Create", res.status)
 
            // Untuk Tampung respon Dari Server
            this.setState({
                Notif: {
                    alertShow: true,
                    actionType: 'created',
                    responCode: res.status,
                }
            })
 
            this.GetdataUsers()
            this.ClearForm()
        });
    }
    UpdateDataUser = () => {
        const dataUpdate = this.state.DataUserNew;
        const id = dataUpdate.id;
 
        fetch(apiURL + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUpdate)
        }).then((res) => {
            console.log(res)
            console.log("Status Update", res.status)
 
            // Untuk Tampung respon Dari Server
            this.setState({
                Notif: {
                    alertShow: true,
                    actionType: 'updated',
                    responCode: res.status,
                }
            })
 
            this.GetdataUsers()
            this.ClearForm()
        });
    }
    DeleteDataUser = (data) => {
        const id = data;
        fetch(apiURL + id, {
            method: 'DELETE',
        }).then((res) => {
            console.log(res)
            console.log("Status Delete", res.status)
 
            // Untuk Tampung respon Dari Server
            this.setState({
                Notif: {
                    alertShow: true,
                    actionType: 'deleted',
                    responCode: res.status,
                }
            })
 
            this.GetdataUsers()
            this.ClearForm()
        });
 
    }
    HendelOnchange = (event) => {
        // console.log('Form Change')
        const NumberingId = this.state.totalData + 1; // Untuk ID New Data
        let prmInputUser = { ...this.state.DataUserNew }; // Copy State
        if (!this.state.isUpdate) { //Cek Jika Update Data Idnya Tidak Di Ubah
            prmInputUser['id'] = NumberingId;
        }
        prmInputUser[event.target.name] = event.target.value;
        this.setState({
            DataUserNew: prmInputUser
        })
 
    }
    ClearForm = () => {
 
        this.setState({
            isUpdate: false,
            DataUserNew: {
                id: 1,
                nama: '',
                alamat: '',
                telpon: ''
            }
        })
 
        // Mengembalikan Nilai Awal Notif
        setInterval(() => {
            this.setState({
                Notif: {
                    alertShow: false,
                    actionType: '',
                    responCode: 0,
                }
            })
        }, 4500);
    }
    HendelSimpan = () => {
        if (this.state.isUpdate) {
            this.UpdateDataUser();
        } else {
            this.SaveNewDataUSer();
        }
    }
    HendelUpdate = (data) => {
        console.log('Update id', data.id);
        console.log('Update arry', data);
        this.setState({
            DataUserNew: data,
            isUpdate: true
        })
    }
    HendelDelete = (data) => {
        console.log('Id delete =', data)
        const id = data;
 
        if (window.confirm('Apakah data ' + id + ' ?')) {
            this.DeleteDataUser(id)
        }
    }
 
    render() {
 
        return (
            <div className="card">
                <div className="Titel"style={{ display: "flex", justifyContent: "center" }} >
                    <h2>CRUD API</h2>
                </div>
                <MDBContainer fluid>

                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                            <MDBCol col='12'>
                            <Alert data={this.state.Notif} />
                            <MDBCard className='bg-aqua my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Tambah Data</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>
                                <MDBInput wrapperClass='mb-4 w-100' label='Nama ' id='nama' type='text'name="nama"  onChange={this.HendelOnchange} value={this.state.DataUserNew.nama}/>
                                <MDBInput wrapperClass='mb-4 w-100' label='No.Telpon' id='telpom' type='text' name="telpon" onChange={this.HendelOnchange} value={this.state.DataUserNew.telpon}/>
                                <MDBInput wrapperClass='mb-4 w-100' label='Alamat' id='alamat' type='text' name='alamat' onChange={this.HendelOnchange} value={this.state.DataUserNew.alamat}/>
                                <button className="my-button btn-blue" onClick={this.HendelSimpan} >Simpan</button>

                                </MDBCardBody>
                            </MDBCard>

                            </MDBCol>
                        </MDBRow>

                        </MDBContainer>
 
                {/* <div className="container">
                    <Alert data={this.state.Notif} />
                    <div className="conten">
                        <div className="form-inline"  >
                            <label htmlFor="nama">Nama : </label>
                            <input type="text" id="nama" placeholder="Nama.." name="nama" onChange={this.HendelOnchange} value={this.state.DataUserNew.nama} /> 
                            <label htmlFor="telpon">Telpon:</label>
                            <input type="text" id="telpon" placeholder="No.Telpon..." name="telpon" onChange={this.HendelOnchange} value={this.state.DataUserNew.telpon} /> 
                            <label htmlFor="alamat">Alamat:</label>
                            <input wrapperClass='mb-2 w-50' type="text" id="alamat" placeholder="Alamat..." name="alamat" onChange={this.HendelOnchange} value={this.state.DataUserNew.alamat} />
                            <button className="my-button btn-blue" onClick={this.HendelSimpan} >Simpan</button>
                        </div>
                    </div>
                </div> */}

            </div>
        )
    }
}
 
export default Formtbhdata;
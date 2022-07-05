import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

const UpdateKainbatik = () => {
    //deklarasi state
    const [_nomor, setNomor] = useState('');
    const [_namabatik, Namabatik] = useState('');
    const [_tanggalbeli, setTanggalbeli] = useState('');
    const [_namapembeli, setNamapembeli] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const { nomor, namabatik, tanggalbeli, namapembeli } = router.query;

    useEffect(() =>{
        if (typeof nomor == 'string') {
            setNomor(nomor);
        }
        if (typeof namabatik == 'string') {
            setNamabatik(namabatik)
        }
        if (typeof tanggalbeli == 'string') {
            setTanggalbeli(tanggalbeli)
        }
        if (typeof namapembeli == 'string') {
            setNamapembeli(namapembeli)
        }
    }, [nomor, namabatik, tanggalbeli, namapembeli])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios 
                .put('http://localhost:5000/sepatu/${_merk}', {
                    nomor: _nomor,
                    namabatik: _namabatik,
                    tanggalbeli: _tanggalbeli,
                    namapembeli: _namapembeli,
                })
                .then(response => {
                    console.log(response);
                });
            
            alert("Update Data Sukses")
            Router.push('/admin/datasepatu')
        } catch (e) {
            console.log({message: e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-blod text-center mb-3">
                        Edit Data Kain Batik
                    </h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="nomor"
                                type="text"
                                placeholder="nomor"
                                value={_nomor}
                                onChange={(e) => setNomor(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="namabatik"
                                type="text"
                                placeholder="namabatik"
                                value={_namabatik}
                                onChange={(e) => setNamabatik(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="tanggalbeli"
                                type="text"
                                placeholder="tanggalbeli"
                                value={_tanggalbeli}
                                onChange={(e) => setTanggalbeli(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="namapembeli"
                                type="text"
                                placeholder="namapembeli"
                                value={_namapembeli}
                                onChange={(e) => setNamapembeli(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse w-75">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default UpdateKainbatik;
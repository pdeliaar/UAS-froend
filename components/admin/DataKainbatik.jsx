import Link from "next/link";
const DataKainbatik = ({data}) =>{
    return(
       <div className='container'>
           <h3>Data Kain Batik</h3>
           <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Nama Batik</th>
                        <th>Tanggal Beli</th>
                        <th>Nama Pembeli</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((mhs,idx)=>(
                        <tr key = {idx}>
                            <td>{kb.nomor}</td>
                            <td>{kb.namaBatik}</td>
                            <td>{kb.tanggalBeli}</td>
                            <td>{kb.namaPembeli}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/updatekainbatik?nomor=${kb.nomor}
                                        &namabatik=${kb.namaBatik}&tanggalbeli=${kb.tanggalBeli}
                                        &namapembeli=${kb.namaPembeli}`}
                                    >
                                        <a>Edit</a>
                                    </Link>
                                </div>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataKainbatik;

const DataKainbatik = ({data}) =>{
    return(
       <div className='container'>
           <h3>Data Kain Batik</h3>
           <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Nama Batik</th>
                        <th>Tanggal Beli </th>
                        <th>Nama Pembeli</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((kb,idx)=>(
                        <tr key = {idx}>
                            <td>{kb.nomor}</td>
                            <td>{kb.namabatik}</td>
                            <td>{kb.tanggalbeli}</td>
                            <td>{kb.namapembeli}</td>
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataKainbatik;
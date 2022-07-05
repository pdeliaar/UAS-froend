import LayoutAdmin from "../../components/admin/LayOutAdmin"
import KainbatikByNomor from "../../components/admin/KainbatikByNomor"
import DataKainbatik from "../../components/admin//DataKainbatik"

const datakainbatik = ({data}) =>{
        {Array.isArray(data) ? data : data = [data]}
    return(
        <LayoutAdmin>
            <KainbatikByNomor/>
            <DataKainbatik data = {data}/>
        </LayoutAdmin>
    )
}

export async function getServerSideProps({query}){
    const nim = query.nomor;
    let url = `http://localhost:5000/kainbatik`
    if (typeof nomor === 'string'){
        url = `http://localhost:5000/kainbatik/${nomor}`
    }
    //fetch data
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datakainbatik;
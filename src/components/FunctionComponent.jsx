import './FCcss.css'

const FunctionComponent = ({info, openModal})=>{

    
    return(
        <div className="main">
            <div className="heading">
                <h1 className="name">{info.name}</h1>
                <p className="position">{info.position}</p>
            </div>
            <div className="body">
                <p className="birth">{info.birth}</p>
                <p className='gender'>{info.gender}</p>
                <p className="emain">{info.email}</p>
                <p className="address">{info.address}</p>
            </div>
            <div className="desc">{info.desc}</div>
            <button onClick={()=>{openModal()}}>Update</button>
        </div>
    )
}

export default FunctionComponent
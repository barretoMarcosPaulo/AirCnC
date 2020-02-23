import React,{useState, useMemo} from 'react'
import './styles.css'
import camera from '../../assets/camera.svg' 

import api from '../../services/api'

export default function New({ history }) {
    const[company, setCompany] = useState('')
    const[techs, setTechs] = useState('')
    const[price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const preview = useMemo(()=>{
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    },[thumbnail]
    )

    async function handleSubmit(event){
        event.preventDefault()

        const data = new FormData()
        const user_id = localStorage.getItem('user')
    
        data.append('thumbnail',thumbnail)
        data.append('company',company)
        data.append('techs',techs)
        data.append('price',price)
    

        const response = await api.post('/spots',data,{
            headers: {user_id}
        })

        history.push('/dashboard')
        console.log(response)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label id="thumbnail" style={{backgroundImage: `url(${preview})`}} className={thumbnail ?'has-thumbnail':''}>
                    <input type='file' onChange={event => setThumbnail(event.target.files[0])}/>
                    <img src={camera}/>
                </label>

                <label htmlFor="company">EMPRESA*</label>
                <input
                    id="company"
                    placeholder="Sua Empresa"
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                />

                <label htmlFor="techs">TECNOLOGIAS* <span>Separadas por vírgula</span> </label>
                <input
                    id="techs"
                    placeholder="Quais tecnologias usam"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />

                <label htmlFor="price">VALOR DA DIÀRIA* <span>Em branco para gratuito</span> </label>
                <input
                    id="price"
                    placeholder="Valor cobrado por dia"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />

                <button className="btn">CADASTRAR</button>


            </form>
        </>
    )
}
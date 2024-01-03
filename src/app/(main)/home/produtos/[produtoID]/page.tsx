const produtos = ({params}: {params:{produtoID:string}}) => {
    return (
        <div className=" container mx-auto col-12 flex-col justify-items-center">
            <h1>detalhes do produto {params.produtoID}</h1>
         
            
        </div>
    )
}

export default produtos;
// export default function reviewDetalhes({params}:{
//     params:{
//         produtoID:string,
//         reviewsID:string
//     }}){
//     return(
//             <h1>
//                 Review {params.reviewsID} para produto {params.produtoID}
//             </h1>
// )}

const reviewDetalhes = ({
  params
}: {
  params: {
    produtoID: string;
    reviewsID: string;
  };
}) => {
  return (
    <h1>
      Review {params.reviewsID} para produto {params.produtoID}
    </h1>
  );
};

export default reviewDetalhes;

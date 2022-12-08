// import React from 'react';
// import { withProduct } from 'hocs';
// // const SomeArticle = () => {
// //   return (
// //     <ProductContext.Consumer>
// //       {(product) => <SomeArticleWithProduct product={product} />}
// //     </ProductContext.Consumer>
// //   );
// // };
// // function SomeArticleWithProduct({ product }) {
// //   return (
// //     <div>
// //       <h5>SomeArticle</h5>
// //       <p>{product}</p>
// //     </div>
// //   );
// // }
// const SomeArticle = ({ product }) => {
//   return (
//     <div>
//       <h5>SomeArticle</h5>
//       <p>{product}</p>
//     </div>
//   );
// };

// const SomeArticleWithProduct = withProduct(SomeArticle);

// // const SomeArticleWithAll = withProduct(withTheme(SomeArticle));

// export default SomeArticleWithProduct;

import React from 'react';
import { useContext } from 'react';
import { ProductContext } from 'App';
const SomeArticle = () => {
  const product = useContext(ProductContext);
  return (
    <div>
      <h5>SomeArticle</h5>
      <p>{product}</p>
    </div>
  );
};

export default SomeArticle;

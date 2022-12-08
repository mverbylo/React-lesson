import { ProductContext } from '../App';

export function withProduct(Component) {
  function NewComponent(props) {
    return (
      <ProductContext.Consumer>
        {(product) => <Component product={product} {...props} />}
      </ProductContext.Consumer>
    );
  }

  return NewComponent;
}
// export const withTheme = (Component) => (props) =>
//   (
//     <ThemeContext.Consumer>
//       {([theme, onClick]) => <Component theme={theme} onClick={onClick} />}
//     </ThemeContext.Consumer>
//   );

const Card=(props)=>{
return (
  <div className="container">
    <CardWrapper>
      <ProductImage
        src={product.image + "?v=" + product.id}
        alt={product.name}
      />
      <ProductName>{product.name}</ProductName>
      <ProductCardPrice>{formatCurrency(product.price)}</ProductCardPrice>
      <ProductCardButtons>
        {isInCart(product) && (
          <ButtonAddMore
            onClick={() => {
              increase(product);
            }}
            className="btn"
          >
            Add More
          </ButtonAddMore>
        )}

        {!isInCart(product) && (
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        )}
      </ProductCardButtons>
    </CardWrapper>
    </div>
  );
}
export default Card
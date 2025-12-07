const paths = {
  home: "/",
  support: "/support",
  product(id: string){
    return `/product/${id}`
  },
  cart: "/shopping-cart",
  checkout(id: string){
    return `/check-out/${id}`
  }
}

export default paths
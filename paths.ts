import { info } from "console"

const paths = {
  home: "/",
  support: "/support",
  info: "/info",
  product(id: string){
    return `/product/${id}`
  },
  cart: "/shopping-cart",
  checkout(id: string){
    return `/check-out/${id}`
  }
}

export default paths
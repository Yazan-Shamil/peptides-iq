import { useState, useEffect } from "react"
import { medusa } from "@/lib/medusa"
import { Cart } from "@/types"

export function useCart() {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cartId = localStorage.getItem("cart_id")
    if (cartId) {
      medusa.cart.retrieve(cartId).then((data: any) => setCart(data.cart))
    }
  }, [])

  async function addItem(variantId: string, quantity: number) {
    setLoading(true)
    try {
      let cartId = localStorage.getItem("cart_id")
      if (!cartId) {
        const data: any = await medusa.cart.create()
        cartId = data.cart.id
        localStorage.setItem("cart_id", cartId!)
      }
      const data: any = await medusa.cart.addItem(cartId!, { variant_id: variantId, quantity })
      setCart(data.cart)
    } finally {
      setLoading(false)
    }
  }

  async function removeItem(itemId: string) {
    if (!cart) return
    setLoading(true)
    try {
      const data: any = await medusa.cart.deleteItem(cart.id, itemId)
      setCart(data.cart)
    } finally {
      setLoading(false)
    }
  }

  const itemCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0

  return { cart, loading, addItem, removeItem, itemCount }
}

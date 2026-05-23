export interface Product {
  id: string
  title: string
  description: string
  thumbnail: string | null
  variants: ProductVariant[]
  categories: ProductCategory[]
}

export interface ProductVariant {
  id: string
  title: string
  prices: Price[]
  inventory_quantity: number
}

export interface Price {
  amount: number
  currency_code: string
}

export interface ProductCategory {
  id: string
  name: string
  handle: string
}

export interface CartItem {
  id: string
  variant_id: string
  quantity: number
  unit_price: number
  title: string
  thumbnail: string | null
}

export interface Cart {
  id: string
  items: CartItem[]
  total: number
  subtotal: number
  shipping_total: number
}

export interface Order {
  id: string
  status: string
  display_id: number
  created_at: string
  items: CartItem[]
  total: number
}

const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

async function medusaFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${MEDUSA_BACKEND_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "",
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`Medusa API error: ${response.statusText}`)
  }

  return response.json()
}

export const medusa = {
  products: {
    list: () => medusaFetch("/store/products"),
    retrieve: (id: string) => medusaFetch(`/store/products/${id}`),
  },
  cart: {
    create: () => medusaFetch("/store/carts", { method: "POST" }),
    retrieve: (id: string) => medusaFetch(`/store/carts/${id}`),
    addItem: (cartId: string, body: object) =>
      medusaFetch(`/store/carts/${cartId}/line-items`, {
        method: "POST",
        body: JSON.stringify(body),
      }),
    updateItem: (cartId: string, itemId: string, body: object) =>
      medusaFetch(`/store/carts/${cartId}/line-items/${itemId}`, {
        method: "POST",
        body: JSON.stringify(body),
      }),
    deleteItem: (cartId: string, itemId: string) =>
      medusaFetch(`/store/carts/${cartId}/line-items/${itemId}`, {
        method: "DELETE",
      }),
  },
  orders: {
    retrieve: (id: string) => medusaFetch(`/store/orders/${id}`),
  },
}

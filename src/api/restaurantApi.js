// src/services/api/restaurantApi.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export async function fetchRestaurantsByType(restaurantType, sortOrder = "desc") {
  const res = await fetch(
    `${BASE_URL}/api/restaurant/type/${restaurantType}?sortBy=${sortOrder}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `요청 실패 (${res.status})`);
  }

  return await res.json();
}

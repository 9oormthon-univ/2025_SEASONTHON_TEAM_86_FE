// src/services/api/restaurantApi.js
const BASE_URL = import.meta.env.VITE_BASE_URL ?? "";

export async function fetchRestaurantsByType(restaurantType, sortOrder = "desc") {
  const res = await fetch(
    `${BASE_URL}api/restaurant/type/${restaurantType}?sortBy=${sortOrder}`,
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


export async function fetchMenusByRestaurant(restaurantId) {
  const url = `${BASE_URL}api/restaurant/menu/restaurant/${restaurantId}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `요청 실패 (${res.status})`);
  }

  return await res.json(); // [{ restaurantMenuId, restaurantName, menuName, menuPrice, menuInfo, menuImageUrl }]
}


export async function fetchRestaurantDetail(restaurantId) {
  const url = `${BASE_URL}api/restaurant/${restaurantId}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `요청 실패 (${res.status})`);
  }

  return await res.json(); // 가게 정보 + 메뉴 배열 포함
}

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


export async function searchRestaurants(restaurantName, sortBy = 'vote') {
  const res = await fetch(
    `${BASE_URL}api/restaurant/search?restaurantName=${encodeURIComponent(restaurantName)}&sortBy=${sortBy}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  if (!res.ok) {
    throw new Error(`검색 실패: ${res.status}`);
  }

  return await res.json();
}

export async function fetchTop3Restaurants() {
  const res = await fetch(`${BASE_URL}api/restaurant/vote/top3`);
  if (!res.ok) throw new Error('Top3 불러오기 실패');
  return await res.json();
}

export async function fetchAllRestaurants() {
  const res = await fetch(`${BASE_URL}api/restaurant/vote/all`);
  if (!res.ok) throw new Error('전체 랭킹 불러오기 실패');
  return await res.json();
}

export async function fetchLikeAll() {
  const res = await fetch(`${BASE_URL}api/restaurant/like/all`);
  if (!res.ok) throw new Error("전체 좋아요순 불러오기 실패");
  return await res.json();
}

export async function fetchLikeTop1() {
  const res = await fetch(`${BASE_URL}api/restaurant/like/top1`);
  if (!res.ok) throw new Error("좋아요 Top1 불러오기 실패");
  return await res.json();
}

export async function fetchLikeTop3() {
  const res = await fetch(`${BASE_URL}api/restaurant/like/top3`);
  if (!res.ok) throw new Error("좋아요 Top3 불러오기 실패");
  return await res.json();
}
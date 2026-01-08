// tests/integration/v1/status/get.test.js
const BASE = process.env.BASE_URL || "http://localhost:3000";

describe("GET /api/v1/status", () => {
  test("returns 200", async () => {
    const res = await fetch(`${BASE}/api/v1/status`);
    const data = await res.json();
    expect(res.status).toBe(200);
  });
});

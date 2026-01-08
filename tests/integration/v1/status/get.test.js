// tests/integration/v1/status/get.test.js
const BASE = process.env.BASE_URL || "http://localhost:3000";

describe("GET /v1/status", () => {
  test("returns 200", async () => {
    const res = await fetch(`${BASE}/api/v1/status`);
    expect(res.status).toBe(200);
  });
});

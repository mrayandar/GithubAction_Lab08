const request = require("supertest");
const { app, server } = require("../src/server"); // Import both app and server

afterAll(() => {
  server.close();
});

describe("Event API", () => {
  test("should create an event", async () => {
    const res = await request(server).post("/api/events").send({
      name: "Meeting",
      description: "Project discussion",
      date: "2025-03-20",
      time: "10:00 AM",
      category: "Work",
    });

    expect(res.statusCode).toBe(201);
  });

  test("should return events", async () => {
    const res = await request(server).get("/api/events");
    expect(res.statusCode).toBe(200);
  });
});

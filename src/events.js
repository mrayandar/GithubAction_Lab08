let events = []; // In-memory array

const createEvent = (req, res) => {
    const { name, description, date, time, category, reminder } = req.body;
    if (!name || !date || !time) return res.status(400).json({ error: "Missing fields" });

    const newEvent = { id: events.length + 1, name, description, date, time, category, reminder };
    events.push(newEvent);
    res.status(201).json(newEvent);
};

const getEvents = (req, res) => res.json(events);

module.exports = { createEvent, getEvents };

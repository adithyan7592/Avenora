import { Router } from "express";
import Contact from "../models/Contact.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Name, email and message are required.",
      });
    }

    if (mongooseReady()) {
      const saved = await Contact.create({
        name,
        email,
        phone,
        interest,
        message,
      });
      return res.status(201).json({ ok: true, id: saved._id });
    }

    return res.status(201).json({
      ok: true,
      stored: "memory",
      note: "MongoDB is not connected; enquiry was accepted but not persisted.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Unable to submit enquiry." });
  }
});

function mongooseReady() {
  return Contact.db?.readyState === 1;
}

export default router;

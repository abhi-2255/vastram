import { Router } from "express";
import Product from "../models/Product";

const router = Router();

// 📌 Get popular products (limit 6 for example)
router.get("/popular", async (req, res) => {
    try {
        const products = await Product.find().limit(6);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// 📌 Get new arrivals
router.get("/new-arrivals", async (req, res) => {
    try {
        const products = await Product.find({ isNewArrival: true }).limit(4);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching new arrivals" });
    }
});

export default router;

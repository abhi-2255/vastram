import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    price: number;
    image: string;
    category: string;
    isNewArrival: boolean;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    isNewArrival: { type: Boolean, default: false },
});

export default mongoose.model<IProduct>("Product", ProductSchema);

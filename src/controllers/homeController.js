import { render } from "../config/viewEngine.js";
import * as model from "../models/mahasiswaModel.js";

export const home = async (c) => {
  // 1. Ambil semua data mahasiswa dari database melalui model
  const data = await model.getAll();
  
  // 2. Kirim variabel yang dibutuhkan oleh home.ejs
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    mahasiswa: data, // Untuk tabel di dashboard
    totalMahasiswa: data.length // Untuk angka total di card dashboard
  }, c);
  
  return c.html(html);
};
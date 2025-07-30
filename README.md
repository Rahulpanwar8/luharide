# LuhaRide - Taxi Union Digital Ride Platform 🚖📱

> A real-life solution built for the remote hilly regions of **Uttarakhand**, especially **Purola**, to digitize taxi union services and make transportation smoother and smarter.

## 🌟 Overview

LuhaRide is a community-focused ride-listing platform designed to bring local taxi union services online. In many rural areas like Purola, people don't know **which taxi is available**, **what time it departs**, or **who is going where**. This leads to confusion, delays, and inconvenience.

With LuhaRide, taxi unions can **post rides**, and users can **check available rides instantly** — all without needing to create an account.

## 🔥 Key Features

- ✅ **No fake users** – Only authorized union members can post rides.
- ✅ **No user login required** – Users can see all available rides directly.
- ✅ **Real-time ride updates** – Union admins can post and update rides anytime.
- ✅ **Easy and mobile-friendly UI** – Designed to feel like a native app.
- ✅ **Local-first approach** – Targeted solution for real-world problems in hilly, remote regions.

## 🔧 Tech Stack

| Tech        | Usage                          |
|-------------|--------------------------------|
| React JS    | Frontend UI                    |
| PHP (Laravel or Core PHP) | Backend APIs and Data handling |
| Firebase / Firestore | (Optional) Auth or real-time DB |
| MySQL       | Ride data and admin storage    |
| GitHub      | Version Control and Deployment |
| GitHub Pages / Custom Hosting | Deployment   |

## 🛠 Project Structure

```
/luharide
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── RideCard.jsx
│   │   └── Technologies.jsx
│   ├── App.jsx
│   └── index.css
├── backend/
│   ├── api/
│   └── db.php (example)
├── README.md
```

## 📈 Future Roadmap

- 🔒 OTP or QR-code verification for Union drivers
- 📱 Android app with notifications
- 📍 GPS-based ride tracking and pickup location
- 🧾 Admin dashboard to manage rides and analytics
- 🗺 Expand to other remote towns and regions

## 🚀 Getting Started (for Devs)

1. Clone the repo:
   ```bash
   git clone https://github.com/Rahulpanwar8/luharide.git
   ```
2. Go to the frontend directory:
   ```bash
   cd luharide
   npm install
   npm run dev
   ```

3. Set up backend (PHP/MySQL):
   - Import `rides.sql` to MySQL
   - Update config in `backend/db.php`

4. Connect frontend to API:
   - Use Axios or fetch to call endpoints from your backend.

## 🌐 Live Preview

➡️ [Visit Project (Demo)](https://luharide.in)

## 🤝 About the Creator

👋 My name is **Rahul Panwar**, an Embedded Engineer & Developer from **Uttarakhand**. I built LuhaRide to solve a real-world problem I personally experienced in my hometown **Purola**, where taxi unions operate offline with no digital footprint. LuhaRide aims to bring these small communities into the digital age — one ride at a time.

---

📫 Want to collaborate? Reach out at [rahulpanwar.dev@gmail.com](mailto:helprahulpanwar@gmail.com)


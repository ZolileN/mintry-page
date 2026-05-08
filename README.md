# MINTRY.FABRIC

### Close the Attribution Void.

**Mintry Fabric** is a high-performance transport-layer interceptor designed to provide real-time metering and budget enforcement for AI agentic fleets. It flips the model from reactive billing alerts to proactive financial mandates.

![Mintry Hero Animation](https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop)

---

## 🚀 Key Features

- **Transport-Layer Interception**: No code changes required. It sits at the network layer to monitor every token and cent in real-time.
- **Universal Mandates**: Assign precise "Hard Caps" to tasks or agents. When the cap is hit, the Fabric engages a kill-switch instantly.
- **High-Performance Ledger**: Powered by **SQLite (Turso)** with WAL mode for zero-latency cost attribution.
- **Language Agnostic**: Sidecar proxy architecture supports Python, Node.js, Go, Java, and more.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Canary)
- **Styling**: Vanilla CSS with CSS Variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Turso](https://turso.tech/) (libSQL / SQLite)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🏁 Getting Started

### 1. Prerequisites

- Node.js 18.17 or later
- A Turso database (for the waitlist functionality)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ZolileN/mintry-page.git
cd mintry-page
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory (use `.env.example` as a template):

```bash
cp .env.example .env.local
```

Fill in your Turso credentials:

```env
TURSO_DATABASE_URL=your_libsql_url
TURSO_AUTH_TOKEN=your_auth_token
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

- `/app`: Next.js App Router (Layouts, Pages, API Routes)
- `/components`: Reusable React components (Waitlist Form, etc.)
- `app/globals.css`: Core design system and styles
- `public/`: Static assets

## 📜 Attribution

Built for the 2026 Agentic Stack. Stop flying blind. Join the Fabric.

---

© 2026 Mintry Inc.

MASTRA AI LEAD GENERATION SYSTEM

This project is a high-performance AI-powered Lead Generation pipeline designed for digital agencies, tourism, and local businesses. It leverages the power of Mastra AI and Groq (Llama 3.3) to analyze incoming inquiries and persists them into a Neon PostgreSQL database.

Technical Architecture
AI Engine: Groq / Llama 3.3-70b-versatile

Orchestration: Mastra AI Framework

Database: PostgreSQL (Neon Serverless)

Data Access: Direct SQL Integration (postgres.js) for high reliability and performance

Frontend Background: Built by a React/TypeScript specialist with a focus on clean architecture.

Key Features & Strategic Approach
Real-time Analysis: Automatically extracts customer intent and contact information from raw messages.

Direct SQL Persistence: Bypassed standard ORM initialization bottlenecks to ensure 100% reliability in high-concurrency ESM environments.

Scalable Infrastructure: Designed with a global perspective, ready to handle leads for health tourism, local hotels, and creative industries.

Local Development
-Clone the repository
-Install dependencies
-Environment Setup: Create a .env file with your DATABASE_URL (Neon) and GROQ_API_KEY.
-Run the Agent
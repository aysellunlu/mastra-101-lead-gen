import 'dotenv/config';
import { Mastra } from '@mastra/core';
import { Agent } from '@mastra/core/agent';
import postgres from 'postgres';
import crypto from 'crypto';

const sql = postgres(process.env.DATABASE_URL);

async function run() {
    console.log("🚀 Saf SQL Operasyonu Başlatılıyor...");
    
    try {
        const mastra = new Mastra({
            agents: {
                leadAgent: new Agent({
                    name: 'Lead-Agent',
                    instructions: 'Müşteriyi analiz et.',
                    model: { id: 'groq/llama-3.3-70b-versatile' },
                }),
            },
        });

        const agent = mastra.getAgent('leadAgent');
        
        console.log("🤖 AI Ahmet'in mesajını analiz ediyor...");
        const result = await agent.generate("Merhaba ben Ahmet, Bodrum'dan yazıyorum. Otelim için pazarlama lazım.");
        console.log("\nAI ANALİZİ:", result.text);
        console.log("\n💾 Veri Frankfurt (Neon) veritabanına mühürleniyor...");
        
        const insertResult = await sql`
            INSERT INTO "Lead" (id, name, interest, email)
            VALUES (
                ${crypto.randomUUID()}, 
                'Ahmet (Bodrum SQL)', 
                'Dijital Pazarlama', 
                'ahmet@taudigi.com'
            )
            RETURNING *
        `;

        console.log("✅ BAŞARI! Kayıt Tamamlandı:", insertResult[0]);

        const total = await sql`SELECT count(*) FROM "Lead"`;
        console.log(`\n📊 Tablodaki Toplam Kayıt Sayısı: ${total[0].count}`);

    } catch (error) {
        console.error("❌ Kritik Hata:", error.message);
        if (error.message.includes('relation "Lead" does not exist')) {
            console.log("💡 İpucu: Veritabanında 'Lead' tablosu bulunamadı. Prisma migrasyonunu kontrol et.");
        }
    } finally {
        await sql.end();
    }
}

run();
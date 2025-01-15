const express = require('express');
const Groq = require('groq-sdk');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Initialize Groq API client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// Chat endpoint to handle user queries
app.post('/query', async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({ error: 'Message is required.' });
        }

        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content:
                        "You are a helpful assistant working for 01 Founders. Your task is to persuade prospective students to join the program while answering their questions politely and precisely. Here's the syllabus of the program: [Syllabus details...]",
                },
                {
                    role: 'user',
                    content: userMessage,
                },
            ],
            model: 'mixtral-8x7b-32768',
            temperature: 0.1,
        });

        const responseMessage = completion.choices[0]?.message?.content || 'No response received.';
        res.json({ message: responseMessage });
    } catch (error) {
        console.error('Error handling /query request:', error);
        res.status(500).json({ error: 'An internal server error occurred.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
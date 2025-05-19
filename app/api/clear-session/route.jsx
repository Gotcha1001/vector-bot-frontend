import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get('http://localhost:5000/clear-session');
        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in /api/clear-session:', error);
        return new Response(JSON.stringify({ message: 'Failed to clear session' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
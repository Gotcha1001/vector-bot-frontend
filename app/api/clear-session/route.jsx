// import axios from 'axios';

// export async function GET() {
//     try {
//         const response = await axios.get('http://localhost:5000/clear-session');
//         return new Response(JSON.stringify(response.data), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error('Error in /api/clear-session:', error);
//         return new Response(JSON.stringify({ message: 'Failed to clear session' }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }


// update to run locally and on the deployed backend 

import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/clear-session`);
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
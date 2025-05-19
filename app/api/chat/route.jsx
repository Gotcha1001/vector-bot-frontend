// import axios from 'axios';

// export async function POST(request) {
//     try {
//         const { question } = await request.json();
//         if (!question) {
//             return new Response(JSON.stringify({ error: 'No question provided' }), {
//                 status: 400,
//                 headers: { 'Content-Type': 'application/json' },
//             });
//         }

//         const response = await axios.post('http://localhost:5000/chat', { question });
//         return new Response(JSON.stringify(response.data), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error('Error in /api/chat:', error);
//         return new Response(JSON.stringify({ error: error.message }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }




// import axios from 'axios';

// export async function POST(request) {
//     try {
//         const { question } = await request.json();
//         if (!question) {
//             return new Response(JSON.stringify({ error: 'No question provided' }), {
//                 status: 400,
//                 headers: { 'Content-Type': 'application/json' },
//             });
//         }

//         console.log('Sending question to backend:', question);
//         const response = await axios.post('http://localhost:5000/chat', { question });
//         console.log('Received from backend:', response.data);

//         return new Response(JSON.stringify(response.data), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     } catch (error) {
//         console.error('Error in /api/chat:', error);
//         return new Response(JSON.stringify({ error: error.message }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }


// run locally and to the deployed backend url 

import axios from 'axios';

export async function POST(request) {
    try {
        const { question } = await request.json();
        if (!question) {
            return new Response(JSON.stringify({ error: 'No question provided' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        console.log('Sending question to backend:', question);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, { question });
        console.log('Received from backend:', response.data);

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in /api/chat:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

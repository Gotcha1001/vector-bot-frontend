// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import MotionWrapperDelay from './components/FramerMotion/MotionWrapperDelay';

// export default function Home() {
//   const [question, setQuestion] = useState('');
//   const [conversation, setConversation] = useState([]);
//   const [imageUrl, setImageUrl] = useState('/images/Codenow.jpg');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!question.trim()) return;
//     setLoading(true);
//     const newConversation = [...conversation, { role: 'user', content: question }];
//     setConversation(newConversation);

//     try {
//       const response = await axios.post('/api/chat', { question });
//       const { answer, image_url } = response.data;
//       setConversation([...newConversation, { role: 'bot', content: answer }]);
//       if (image_url) {
//         setImageUrl(image_url);
//       } else if (question.toLowerCase().includes('image') || question.toLowerCase().includes('picture')) {
//         setConversation([
//           ...newConversation,
//           { role: 'bot', content: answer },
//           { role: 'bot', content: 'Sorry, I couldn’t find a matching image. Try specifying, e.g., "Wesley playing piano."' },
//         ]);
//       }
//     } catch (error) {
//       setConversation([
//         ...newConversation,
//         { role: 'bot', content: `Failed to connect to server: ${error.message}` },
//       ]);
//     } finally {
//       setQuestion('');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-500 to-black flex flex-col items-center justify-center p-4">
//       <MotionWrapperDelay
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         variants={{
//           hidden: { opacity: 0, x: 100 },
//           visible: { opacity: 1, x: 0 },
//         }}
//       >    <h1 className="text-5xl font-bold text-white mb-6">My Personal Knowledge Worker</h1> </MotionWrapperDelay>

//       <div className="mb-6">
//         <MotionWrapperDelay
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           variants={{
//             hidden: { opacity: 0, y: -100 },
//             visible: { opacity: 1, y: 0 },
//           }}
//         >   <img
//             src={imageUrl}
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
//           /></MotionWrapperDelay>

//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-96 overflow-y-auto mb-4">
//         {conversation.map((msg, index) => (
//           <p key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-800'}`}>
//             <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
//           </p>
//         ))}
//       </div>
//       <div className="flex w-full max-w-2xl">
//         <input
//           type="text"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Ask a question..."
//           className="p-3 border rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="p-3 bg-purple-700 text-white rounded-r-lg hover:bg-purple-800 disabled:bg-gray-400"
//         >
//           {loading ? 'Loading...' : 'Send'}
//         </button>
//       </div>
//       <button
//         onClick={async () => {
//           await axios.get('/api/clear-session');
//           setConversation([]);
//           setImageUrl('/images/Codenow.jpg');
//         }}
//         className="mt-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//       >
//         Clear Session
//       </button>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';
import axios from 'axios';
import MotionWrapperDelay from './components/FramerMotion/MotionWrapperDelay';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);
  const [imageUrl, setImageUrl] = useState('/images/Codenow.jpg');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;
    setLoading(true);
    const newConversation = [...conversation, { role: 'user', content: question }];
    setConversation(newConversation);

    try {
      const response = await axios.post('/api/chat', { question });
      const { answer, image_url } = response.data;

      console.log("Received response:", response.data); // Debug log

      setConversation([...newConversation, { role: 'bot', content: answer }]);

      if (image_url) {
        console.log("Setting image URL:", image_url); // Debug log
        setImageUrl(image_url);
      } else if (question.toLowerCase().includes('image') ||
        question.toLowerCase().includes('picture') ||
        question.toLowerCase().includes('photo')) {
        console.log("Image requested but not found"); // Debug log
        setConversation([
          ...newConversation,
          { role: 'bot', content: answer },
          { role: 'bot', content: 'Sorry, I couldn\'t find a matching image. Try specifying, e.g., "Wesley playing piano."' },
        ]);
      }
    } catch (error) {
      console.error("API error:", error); // Debug log
      setConversation([
        ...newConversation,
        { role: 'bot', content: `Failed to connect to server: ${error.message}` },
      ]);
    } finally {
      setQuestion('');
      setLoading(false);
    }
  };

  // Handle pressing Enter key in the input field
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-500 to-black flex flex-col items-center justify-center p-4">
      <MotionWrapperDelay
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-5xl font-bold text-white mb-6">My Personal Knowledge Worker</h1>
      </MotionWrapperDelay>

      <div className="mb-6">
        <MotionWrapperDelay
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            src={imageUrl}
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </MotionWrapperDelay>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-96 overflow-y-auto mb-4">
        {conversation.length === 0 ? (
          <p className="text-gray-500 text-center">Start a conversation! Ask me anything about Wesley.</p>
        ) : (
          conversation.map((msg, index) => (
            <p key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-800'}`}>
              <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
            </p>
          ))
        )}
      </div>
      <div className="flex w-full max-w-2xl">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question about Wesley or request an image..."
          className="p-3 border rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="p-3 bg-purple-700 text-white rounded-r-lg hover:bg-purple-800 disabled:bg-gray-400"
        >
          {loading ? 'Loading...' : 'Send'}
        </button>
      </div>
      <MotionWrapperDelay
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >        <button
        onClick={async () => {
          await axios.get('/api/clear-session');
          setConversation([]);
          setImageUrl('/images/Codenow.jpg');
        }}
        className="mt-4 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
          Clear Session
        </button>  </MotionWrapperDelay>

    </div>
  );
}
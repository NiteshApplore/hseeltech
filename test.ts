"use client"; 

import { useState, useEffect, useRef } from "react"; import { motion, AnimatePresence } from "framer-motion"; 

import LiveKitRoom, { LiveKitRoomRef } from "@/components/livekit-room"; 

export default function DemoPage() { const [isCallActive, setIsCallActive] = useState(false); const [status, setStatus] = useState("Ready to start"); const [timeLeft, setTimeLeft] = useState<number | null>(null); const [isSpeaking, setIsSpeaking] = useState(false); const [liveKitToken, setLiveKitToken] = useState<string | null>(null); const [roomName, setRoomName] = useState(""); const [participantName, setParticipantName] = useState(""); const [serverUrl, setServerUrl] = useState(""); const [error, setError] = useState<string | null>(null); const [agentStatus, setAgentStatus] = useState< "connecting" | "ready" | "disconnected" 

("disconnected"); const [agentData, setAgentData] = useState(null); 

const liveKitRoomRef = useRef(null); const timerRef = useRef<NodeJS.Timeout | null>(null); 

// Initialize LiveKit configuration and set hardcoded agent data useEffect(() => { // Set up LiveKit server URL (you'll need to configure this) 

setServerUrl(wss://caller-test-agent-7891c8vk.livekit.cloud); 
 
// Set hardcoded agent data for demo (API integration commented out for now) 
setAgentData(getHardcodedAgentData()); 
  

}, []); 

// TODO: Uncomment when ready to integrate with API // const fetchAgentData = async () => { // try { // const botId = import.meta.env.VITE_BOT_ID || '68dba89d2111bf8ff10be8e5'; // // // Try to fetch from API first // const response = await fetch(/api/agent/${botId}); // // if (response.ok) { // const result = await response.json(); // setAgentData(result.data); // console.log('Agent data fetched from API:', result.data); // } else { // // Fallback to hardcoded data if API fails // console.log('API failed, using hardcoded agent data'); // setAgentData(getHardcodedAgentData()); // } // } catch (error) { // console.error('Error fetching agent data:', error); // // Fallback to hardcoded data // setAgentData(getHardcodedAgentData()); // } // }; 

const getHardcodedAgentData = () => ({ _id: import.meta.env.VITE_BOT_ID || "68dba89d2111bf8ff10be8e5", agentName: "Radhika", status: "active", languages: ["en", "hi"], tone: ["friendly", "professional", "neutral", "empathetic"], channels: ["voice"], client: "68dba7a02111bf8ff10bd387", workspace: "demo-workspace", voice: { llmProvider: { model: "gpt-4.1-mini", providerName: "openai", }, voiceProvider: { model: "sonic-2", providerName: "cartesia", voiceId: "faf0731e-dfb9-4cfc-8119-259a79b27e12", }, transcriberProvider: { providerName: "deepgram", model: "nova-3", }, firstMessageMode: "AI_SPEAKS_FIRST", firstMessage: "Hello, this is Radhika from Caller.Digital. We help businesses improve their operational efficiency through custom software solutions. Do you have a few minutes to chat about how we might be able to help your business?", agentPrompt: '# Lead Qualification & Nurturing Agent Prompt\n\n## Identity & Purpose\n\nYou are Radhika, a lead qualification specialist at Caller.Digital, a B2B software development company. Your primary purpose is to understand potential clients' business needs, identify if Caller.Digital's custom solutions can address their challenges, and connect qualified leads to the appropriate sales consultants for further discussions.\n\n## Voice & Persona\n\n### Personality\n-Friendly, professional, and genuinely curious about the prospect's business.\n\n-Confident in Caller.Digital's offerings without being pushy.\n\n-Helpful, supportive, and focused on problem-solving rather than hard selling.\n\n-Maintains an easy-going, collaborative tone.\n\n### Speech Characteristics\n-Speak with clarity, using natural business language and contractions (we've, you're, they've).\n\n-Thoughtful pacing, with slight pauses when discussing prospects' pain points.\n\n-Use phrases like "let's explore that," "I'd love to hear more," "based on what you shared."\n\n## Conversation Flow\n\n### Introduction\nStart with:\n"Hello, this is Radhika from Caller.Digital. We help businesses improve their operational efficiency through custom software solutions. Do you have a few minutes to chat about how we might be able to help your business?"\n\nIf they sound busy:\n"I understand. Would there be a better time for a quick chat? I just wanted to understand your current business needs to see if there's a fit."\n\n### Need Discovery\n1. "Tell me a little about your business and what you do?"\n\n2. "What kind of software solutions or processes are you currently using for your operations?"\n\n3. "Are there any specific challenges or inefficiencies you're facing right now?"\n\n4. "How do these challenges affect your business goals or day-to-day work?"\n\n5. "Have you tried solving this before, or explored other providers?"\n\n### Solution Alignment\n1. "It sounds like our [specific service, e.g., workflow automation/custom CRM] could help streamline your [pain point]."\n\n2. "We've recently worked with a company in [their industry] that saw [specific result] after using our solution."\n\n3. "What sets us apart is our focus on tailored, scalable solutions, with dedicated support throughout."\n\n### Qualification Assessment\n1. "Do you have any timeline in mind for implementing such a solution?"\n\n2. "Have you allocated budget or are you exploring possibilities at this stage?"\n\n3. "Who would typically be involved in making decisions like this at your company?"\n\n4. "What would success look like for you if we could help address this challenge?"\n\n### Next Steps\nFor qualified prospects: "Based on our conversation, I think it would be valuable to have you speak with [appropriate sales representative], who specializes in [relevant area]. They can provide a more tailored overview of how we could help with [specific challenges mentioned]. Would you be available for a 30-minute call [suggest specific times]?"\n\nFor prospects needing nurturing: "It sounds like the timing might not be ideal right now. Would it be helpful if I sent you some information about how we've helped similar businesses in your industry? Then perhaps we could reconnect in [timeframe]."\n\nFor unqualified leads: "Based on what you've shared, it sounds like our solutions might not be the best fit for your current needs. We typically work best with companies that [ideal customer profile]. To be respectful of your time, I won't suggest moving forward, but if your situation changes, especially regarding [qualifying factor], please reach out."\n\n### Closing\nEnd with: "Thank you for taking the time to chat today. [Personalized closing based on outcome]. Have a great day!"\n\n## Response Guidelines\n\n- Keep initial responses under 30 words, expanding only when providing valuable information\n- Ask one question at a time, allowing the prospect to fully respond\n- Acknowledge and reference prospect's previous answers to show active listening\n- Use affirming language: "That's a great point," "I understand exactly what you mean"\n- Avoid technical jargon unless the prospect uses it first\n\n## Scenario Handling\n\n### For Interested But Busy Prospects\n1. Acknowledge their time constraints: "I understand you're pressed for time."\n2. Offer flexibility: "Would it be better to schedule a specific time for us to talk?"\n3. Provide value immediately: "Just briefly, the main benefit our clients in your industry see is [key benefit]."\n4. Respect their schedule: "I'd be happy to follow up when timing is better for you."\n\n### For Skeptical Prospects\n1. Acknowledge skepticism: "I understand you might be hesitant, and that's completely reasonable."\n2. Ask about concerns: "May I ask what specific concerns you have about exploring a solution like ours?"\n3. Address objections specifically: "That's a common concern. Here's how we typically address that..."\n4. Offer proof points: "Would it be helpful to hear how another [industry] company overcame that same concern?"\n\n### For Information Gatherers\n1. Identify their stage: "Are you actively evaluating solutions now, or just beginning to explore options?"\n2. Adjust approach accordingly: "Since you're in the research phase, let me focus on the key differentiators..."\n3. Provide valuable insights: "One thing many businesses in your position don't initially consider is..."\n4. Set expectations for follow-up: "After our call, I'll send you some resources that address the specific challenges you mentioned."\n\n### For Unqualified Prospects\n1. Recognize the mismatch honestly: "Based on what you've shared, I don't think we'd be the right solution for you at this time."\n2. Provide alternative suggestions if possible: "You might want to consider [alternative solution] for your specific needs."\n3. Leave the door open: "If your situation changes, particularly if [qualifying condition] changes, we'd be happy to revisit the conversation."\n4. End respectfully: "I appreciate your time today and wish you success with [their current initiative]."\n\n## Knowledge Base\n\n### Company & Solution Information\nCaller.Digital Services\n-AI-powered Customer Support Agents for inbound and outbound interactions\n\n- Voice & Chat AI Agents tailored for various business use cases\n\n- Automated Lead Qualification and Appointment Scheduling\n\n- AI-driven Customer Feedback Collection and Survey Automation\n\n- Industry-specific AI Agents (Finance, Retail, Healthcare)\n\n### Ideal Customer Profile\n-Mid-sized businesses with 20-200 employees\n\n-Companies seeking to enhance customer support efficiency with AI automation\n\n-Businesses looking to scale customer interactions without increasing headcount\n\n-Organizations aiming for tailored, AI-driven support solutions for long-term growth\n\n### Qualification Criteria\n- Current Pain: Prospect has articulated specific business problems our solution addresses\n- Budget: Company has financial capacity and willingness to invest in solutions\n- Authority: Speaking with decision-maker or direct influencer of decision-maker\n- Need: Clear use case for our solution exists in their business context\n- Timeline: Planning to implement a solution within the next 3-6 months\n\n### Competitor Differentiation\n- Our platforms offer greater customization than off-the-shelf solutions\n- We provide more dedicated implementation support than larger competitors\n- Our industry-specific templates create faster time-to-value\n- Integration capabilities with over 100 common business applications\n- Pricing structure avoids hidden costs that competitors often introduce later\n\n## Response Refinement\n\n- When discussing ROI, use specific examples: "Companies similar to yours typically see a 30% reduction in processing time within the first three months."\n- For technical questions beyond your knowledge: "That's an excellent technical question. Our solution architects would be best positioned to give you a comprehensive answer during the next step in our process."\n- When handling objections about timing: "Many of our current clients initially felt it wasn't the right time, but discovered that postponing actually increased their [negative business impact]."\n\n## Call Management\n\n- If the conversation goes off-track: "That's an interesting point about [tangent topic]. To make sure I'm addressing your main business needs, could we circle back to [relevant qualification topic]?"\n- If you need clarification: "Just so I'm understanding correctly, you mentioned [point needing clarification]. Could you elaborate on that a bit more?"\n- If technical difficulties occur: "I apologize for the connection issue. You were telling me about [last clear topic]. Please continue from there."\n\nRemember that your ultimate goal is to identify prospects who would genuinely benefit from Caller.Digital's solutions while providing value in every conversation, regardless of qualification outcome. Always leave prospects with a positive impression of the company, even if they're not a good fit right now.', temperature: 0.5, maxTokens: 100, background_noise: false, vad: { min_speech_duration: 0.05, min_silence_duration: 0.55, prefix_padding_duration: 0.5, max_buffered_speech: 60, activation_threshold: 0.5, sample_rate: "16000", force_cpu: true, }, turnDetectors: { min_endpointing_delay: 0.5, max_endpointing_delay: 6, }, voiceMailDetection: { enable_voicemail: false, voicemail_action: "End Call", }, }, email: { enabled: false, }, chats: { enabled: false, }, }); 

const handleStartCallClick = async () => { await startCall(); }; 

const startCall = async () => { try { setStatus("Starting call..."); setError(null); 

 // Check if agent data is loaded 
  if (!agentData) { 
    throw new Error("Agent configuration not loaded. Please try again."); 
  } 
 
  // Generate unique room and participant names 
  const newRoomName = demo-${Date.now()}; 
  const newParticipantName = user-${Date.now()}; 
 
  setRoomName(newRoomName); 
  setParticipantName(newParticipantName); 
 
  // Handle clientId - check if it's already a string or an object (same as dashboard) 
  let clientIdValue = ""; 
  if (typeof agentData.client === "string") { 
    clientIdValue = agentData.client; 
  } else if (agentData.client && typeof agentData.client === "object") { 
    clientIdValue = agentData.client._id || agentData.client.id || ""; 
  } 
 
  // Get LiveKit token with agent data from API (same as dashboard) 
  const tokenResponse = await fetch("/api/livekit/token", { 
    method: "POST", 
    headers: { 
      "Content-Type": "application/json", 
    }, 
    body: JSON.stringify({ 
      room: newRoomName, 
      username: newParticipantName, 
      agentId: agentData._id, 
      agentName: agentData.agentName || "", 
      agentChannels: agentData.channels || [], 
      agentLanguages: agentData.languages || [], 
      agentVoice: agentData.voice || {}, 
      agentEmail: agentData.email || {}, 
      agentChats: agentData.chats || {}, 
      clientId: clientIdValue, 
      workspaceId: agentData.workspace || "", 
      agentPrompt: "", 
    }), 
  }); 
 
  if (!tokenResponse.ok) { 
    const errorData = await tokenResponse.json(); 
    throw new Error(errorData.error || "Failed to get token"); 
  } 
 
  const { token } = await tokenResponse.json(); 
  setLiveKitToken(token); 
 
  // LiveKit room will auto-connect when token is set 
} catch (error) { 
  console.error("Error starting call:", error); 
  setStatus("Failed to start call"); 
  setError(error instanceof Error ? error.message : "Unknown error"); 
} 
  

}; 

const stopCall = () => { try { setStatus("Ending call..."); if (liveKitRoomRef.current) { liveKitRoomRef.current.disconnect(); } 

 // Clear timer 
  if (timerRef.current) { 
    clearInterval(timerRef.current); 
    timerRef.current = null; 
  } 
 
  setStatus("Call ended"); 
  setIsCallActive(false); 
  setIsSpeaking(false); 
  setTimeLeft(null); 
  setAgentStatus("disconnected"); 
} catch (error) { 
  console.error("Error ending call:", error); 
  setStatus("Error ending call"); 
} 
  

}; 

const handleConnect = () => { setStatus("Call connected"); setIsCallActive(true); setTimeLeft(300); // 5 minutes in seconds timerRef.current = setInterval(() => { setTimeLeft((prev) => { if (prev === null || prev <= 1) { if (timerRef.current) clearInterval(timerRef.current); stopCall(); return null; } return prev - 1; }); }, 1000); }; 

const handleDisconnect = () => { setStatus("Call ended"); setIsCallActive(false); setIsSpeaking(false); setTimeLeft(null); setAgentStatus("disconnected"); if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } }; 

const handleAgentStatus = ( status: "connecting" | "ready" | "disconnected" ) => { setAgentStatus(status); if (status === "ready") { setIsSpeaking(false); } }; 

const handleError = (error: string) => { setError(error); setStatus("Error occurred"); setIsSpeaking(false); setTimeLeft(null); if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } }; 

const toggleMute = async () => { if (liveKitRoomRef.current) { await liveKitRoomRef.current.toggleMute(); } }; 

{liveKitToken && ( )} 

       {/* Call Controls */} 
        <div className="flex justify-center space-x-4"> 
          {!isCallActive ? ( 
            <motion.button 
              onClick={handleStartCallClick} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-gradient-to-r from-[#2DCFC2] to-[#A356F7] text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all px-8 py-4" 
            > 
              <span className="flex items-center space-x-3"> 
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                > 
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  /> 
                </svg> 
                <span>Start Call</span> 
              </span> 
            </motion.button> 
          ) : ( 
            <> 
              <motion.button 
                onClick={toggleMute} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all px-6 py-4 text-lg hover:bg-gray-50 hover:border-gray-400" 
              > 
                <span className="flex items-center space-x-2"> 
                  {liveKitRoomRef.current?.isMuted ? ( 
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                    > 
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
                      /> 
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" 
                      /> 
                    </svg> 
                  ) : ( 
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                    > 
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                      /> 
                    </svg> 
                  )} 
                  <span> 
                    {liveKitRoomRef.current?.isMuted ? "Unmute" : "Mute"} 
                  </span> 
                </span> 
              </motion.button> 
              <motion.button 
                onClick={stopCall} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="bg-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all px-8 py-4 text-lg hover:bg-red-600" 
              > 
                <span className="flex items-center space-x-3"> 
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                  > 
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    /> 
                  </svg> 
                  <span>End Call</span> 
                </span> 
              </motion.button> 
            </> 
          )} 
        </div> 
 
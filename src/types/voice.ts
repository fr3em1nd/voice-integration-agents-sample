export interface VoiceMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: number;
  audioUrl?: string;
  interrupted?: boolean;
}

export interface AudioChunk {
  id: string;
  data: ArrayBuffer;
  timestamp: number;
  isFinal: boolean;
}

export interface TranscriptionResult {
  text: string;
  isFinal: boolean;
  confidence: number;
  timestamp: number;
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ToolResult {
  id: string;
  result: unknown;
  error?: string;
}

export interface SessionMetrics {
  sessionId: string;
  startTime: number;
  endTime?: number;
  totalMessages: number;
  totalInterruptions: number;
  averageLatency: number;
  sttLatency: number[];
  llmLatency: number[];
  ttsLatency: number[];
  toolCalls: number;
}

export interface ReplayEvent {
  id: string;
  sessionId: string;
  timestamp: number;
  type: 'audio_input' | 'transcription' | 'llm_response' | 'tool_call' | 'audio_output' | 'interruption';
  data: unknown;
}

export type VoiceSessionState = 'idle' | 'listening' | 'processing' | 'speaking' | 'interrupted';

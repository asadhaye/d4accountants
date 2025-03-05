import mongoose from 'mongoose';

export interface IMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: Date;
}

export interface IConversation {
  sessionId: string;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new mongoose.Schema<IMessage>({
  role: {
    type: String,
    enum: ['user', 'assistant', 'system'],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const conversationSchema = new mongoose.Schema<IConversation>({
  sessionId: {
    type: String,
    required: true,
    unique: true,
  },
  messages: [messageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add middleware to update the updatedAt field
conversationSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Add indexes
conversationSchema.index({ sessionId: 1 });
conversationSchema.index({ createdAt: -1 });

export const Conversation = mongoose.models.Conversation || 
  mongoose.model<IConversation>('Conversation', conversationSchema);

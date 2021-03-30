import mongoose, {Schema, Document} from 'mongoose';

export interface IRooms extends Document {
  roomId: string,
  users: [{
    id: string,
    userName: string
  }];
  messages: [{
    userName: string,
    text: string
  }]
}

const RoomsSchema = new Schema(
  {
    roomId: {
      type: String,
    },
    users: {
      type: [{
        id: String,
        userName: String
      }]
    },
    messages: {
      type: [{
        userName: String,
        text: String
      }]},
  },
  {
    timestamps: true,
    usePushEach: true,
  },
);

const RoomsModel = mongoose.model<IRooms>('Message', RoomsSchema);

export default RoomsModel;

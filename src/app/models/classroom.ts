export class Classroom {
  roomName: string;
  roomNumber: number;
  constructor(roomName, roomNumber) {
    this.roomName = roomName;
    this.roomNumber = roomNumber;
  }
}



export class ClassroomWithCode {
  roomName: string;
  roomNumber: number;
  code: number;
  constructor(roomName, roomNumber, code) {
    this.roomName = roomName;
    this.roomNumber = roomNumber;
    this.code = code;
  }
}

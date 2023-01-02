import { Server } from "../interface/Server";

class ConcreteServer implements Server {
    on(): void {
        console.log("유저의 상태를 활성화 합니다. - 메세지 수신 시 알림창이 뜹니다.")
    }
    off(): void {
        console.log("유저의 상태를 비활성화 합니다. - 메세지 수신 시 알림창이 뜨지 않습니다.")
    }
}

export default ConcreteServer;
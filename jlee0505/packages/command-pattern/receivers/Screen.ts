import { Screen } from "../interface/Screen";

class ConcreteScreen implements Screen {
    on(): void {
        console.log("유저의 상태를 활성화 합니다. - 아바타 옆에 초록 동그라미가 표시됩니다.")
    }
    off(): void {
        console.log("유저의 상태를 비활성화 합니다. - 아바타 옆에 회색 동그라미가 표시됩니다.")
    }
}

export default ConcreteScreen;
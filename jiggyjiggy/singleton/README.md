참고 사이트([유튜브] [10분 테코톡] 🧇 크로플의 싱글턴과 정적클래스
): https://www.youtube.com/watch?v=C6CczyrkYXU

## 싱글턴이란?
- 클래스의 인스턴스를 하나만 생성하고, 어디서든 그 인스턴스를 참조할 수 있도록 하는 패턴
- 생성자가 여러 번 호출 되더라도 실제로 생성되는 객체는 하나

## 싱글턴을 쓰는 이유?
- 고정된 메모리 영역을 가지고 하나의 인스턴스만 사용하기 때문에 메모리 낭비 방지
- 싱글턴 클래스의 인스턴스는 전역이기 때문에 다른 클래스의 인스턴스들이 데이터를 공유하기 쉬움
- DBCP(DataBase Connection Pool)처럼 공통된 객체를 여러 개 생성해야 하는 상황에 많이 사용

## 싱글턴 구현
1. Eager initialization
2. Static block initialization
3. Lazy initialization
4. Thread safe initialization
5. Double-Checked Locking
6. Bill Pugh Solution
> 1번을 시작으로 6번까지 단점을 보완하는 방향으로 발전된 구현법
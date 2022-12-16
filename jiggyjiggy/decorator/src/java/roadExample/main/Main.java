package decorator.src.java.roadExample.main;

import decorator.src.java.roadExample.todo.CrossingDecorator;

public class Main {
    public static void main(String[] args) {

        Display road = new RoadDisplay();
        road.draw();
        // 기본 도로 표시

        Display roadWithLine = new LaneDecorator(new RoadDisplay());
        roadWithLine.draw();
        // 기본 도로 표시
        // 차선 표시

        Display roadWithTraffic = new TrafficDecorator(new RoadDisplay());
        roadWithTraffic.draw();
        // 기본 도로 표시
        // 교통량 표시

        // TODO: 기본도로표시 + 차선표시 + 교통량 표시
        Display roadWithLaneAndTraffic = new TrafficDecorator(new LaneDecorator(new RoadDisplay()));
        roadWithLaneAndTraffic.draw();

        // TODO: 교차로를 표시하는 추가 기능을 지원하면서 기존의 다른 추가기능(차선 표시, 교통량 표시)과의 조합을 지원
        // CrossingDecorator 생생 -> todo#CrossingDecorator
        Display roadWithCrossingLaneAndTraffic = new CrossingDecorator(new TrafficDecorator(new LaneDecorator(new RoadDisplay())));
        roadWithCrossingLaneAndTraffic.draw();
        // 기본 도로 표시
        // 차선 표시
        // 교통량 표시
        // 교차로 표시
    }
}

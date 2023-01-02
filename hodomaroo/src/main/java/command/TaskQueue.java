package command;

import java.security.Provider;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;
import java.util.function.Supplier;

public class TaskQueue {

    private Queue<Task> tasks = new LinkedList<>();
    private Stack<Task> lastExecuted = new Stack<>();

    void executeFirst() {
        if (tasks.isEmpty()) {
            System.out.println("처리할 작업이 없습니다.");
            return;
        }
        lastExecuted.add(tasks.peek());
        tasks.poll().execute();
    }

    void addTask(Task task) {
        System.out.println(task.toString() + "을 작업 큐에 추가합니다.");
        tasks.add(task);
    }

    void rollback() {
        lastExecuted.pop().rollback();
    }

    void clear() {
        tasks.clear();
        lastExecuted.clear();
    }

    void taskQueueInfo(){
        System.out.println("-----작업 목록-----\n");
        tasks.forEach((task) -> System.out.println(task.toString()));
    }
}

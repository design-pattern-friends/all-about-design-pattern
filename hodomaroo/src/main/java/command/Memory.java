package command;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Memory {
    private static List<Resourse> resources = List.of(new Resourse(), new Resourse(), new Resourse());
    private static Map<Program,Resourse> allocatedMap = new HashMap();

    public static boolean allocate(Program program){
        for(Resourse resourse : resources){
            if(resourse.allocation(program)){
                allocatedMap.put(program, resourse);
                return true;
            }
        }

        System.out.println("할당에 실패했습니다..");
        return false;
    }

    public static boolean release(Program program){
        if(!allocatedMap.containsKey(program)){
            System.out.println("할당되지 않은 프로그램입니다.");
            return false;
        }

        allocatedMap.get(program).release();
        return true;
    }

    public static void printAllocationMap(){
        System.out.println("--- 할당 정보 ---");
        resources.forEach((resource) -> resource.status());
    }
}

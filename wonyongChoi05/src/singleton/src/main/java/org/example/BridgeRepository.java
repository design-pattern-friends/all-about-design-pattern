package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 25.
 */
public class BridgeRepository {
    public void setBridge() {
        PrecourseRepository instance = PrecourseRepository.getInstance();
        instance.setLevel(4);
        instance.setComment("java-bridge");
    }
}

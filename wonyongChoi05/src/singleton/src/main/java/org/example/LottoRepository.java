package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on ${DATE}
 */
public class LottoRepository {
    public void setLotto() {
        PrecourseRepository instance = PrecourseRepository.getInstance();
        instance.setLevel(3);
        instance.setComment("java-lotto");
    }
}
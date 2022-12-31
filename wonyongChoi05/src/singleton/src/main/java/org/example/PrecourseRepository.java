package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 25.
 */
public class PrecourseRepository {

    private int level;
    private String comment;
    private static final PrecourseRepository precourseRepository = new PrecourseRepository();

    private PrecourseRepository() {
    }

    public static PrecourseRepository getInstance() {
        return precourseRepository;
    }

    public int getLevel() {
        return level;
    }

    public String getComment() {
        return comment;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}

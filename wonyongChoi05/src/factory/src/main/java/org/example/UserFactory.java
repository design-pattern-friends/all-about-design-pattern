package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 19.
 */
public class UserFactory implements User {

    @Override
    public Shape shape() {
        return new Shape();
    }

}

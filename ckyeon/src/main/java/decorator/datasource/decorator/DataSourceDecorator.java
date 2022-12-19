package decorator.datasource.decorator;

import decorator.datasource.DataSource;

public class DataSourceDecorator implements DataSource {

    private final DataSource dataSource;

    public DataSourceDecorator(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void writeDate(String data) {
        dataSource.writeDate(data);
    }

    @Override
    public String readData() {
        return dataSource.readData();
    }
}

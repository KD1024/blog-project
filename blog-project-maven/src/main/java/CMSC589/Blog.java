package CMSC589;

import java.sql.Timestamp;

import javax.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String created_time;
    private String updated_time;
    private String title;
    private String content;

    public Blog() {
    }

    public Blog(String title, String content) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        this.setTitle(title);
        this.setContent(content);
        this.setCreatedTime(Long.toString(timestamp.getTime()));
        this.setUpdatedTime(Long.toString(timestamp.getTime()));
    }

    public Blog(int id, String title, String content) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        this.setId(id);
        this.setTitle(title);
        this.setContent(content);
        this.setCreatedTime(Long.toString(timestamp.getTime()));
        this.setUpdatedTime(Long.toString(timestamp.getTime()));
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCreatedTime() {
        return created_time;
    }

    public void setCreatedTime(String time) {
        this.created_time = time;
    }

    public String getUpdatedTime() {
        return updated_time;
    }

    public void setUpdatedTime(String time) {
        this.updated_time = time;
    }

    public void updateTime() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        this.setUpdatedTime(Long.toString(timestamp.getTime()));
    }

    @Override
    public String toString() {
        return "Blog{" + "id=" + id + ", title='" + title + '\'' + ", content='" + content + '\'' + '}';
    }
}

package CMSC589;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import CMSC589.CustomException.*;

import java.util.List;
import java.util.Map;

@RestController
public class BlogController {

    @Autowired
    BlogRespository blogRespository;

    @GetMapping("/blog")
    public List<Blog> index() {
        return blogRespository.findAll();
    }

    @GetMapping("/blog/{id}")
    public Blog show(@PathVariable String id) {
        int blogId = Integer.parseInt(id);
        return blogRespository.findOne(blogId);
    }

    @PostMapping("/blog")
    public Blog create(@RequestBody Map<String, String> body) {
        String title = body.get("title");
        String content = body.get("content");
        if (title == null || title.length() == 0) {
            throw new LackTitleException();
        } else if (content == null || content.length() == 0) {
            throw new LackContentException();
        } else {
            return blogRespository.save(new Blog(title, content));
        }
    }

    @PutMapping("/blog/{id}")
    public Blog update(@PathVariable String id, @RequestBody Map<String, String> body) {
        int blogId = Integer.parseInt(id);
        Blog blog = blogRespository.findOne(blogId);
        if (blog == null) {
            throw new NoGivenBlogException(blogId);
        } else {
            blog.setTitle(body.get("title"));
            blog.setContent(body.get("content"));
            blog.updateTime();
            if (blog.getTitle() == null || blog.getTitle().length() == 0) {
                throw new LackTitleException();
            } else if (blog.getContent() == null || blog.getContent().length() == 0) {
                throw new LackContentException();
            } else {
                return blogRespository.save(blog);
            }
        }
    }

    @DeleteMapping("blog/{id}")
    public boolean delete(@PathVariable String id) {
        int blogId = Integer.parseInt(id);
        Blog blog = blogRespository.findOne(blogId);
        if (blog == null) {
            throw new NoGivenBlogException(blogId);
        } else {
            blogRespository.delete(blogId);
            return true;
        }
    }

}
package CMSC589.CustomException;

public class NoGivenBlogException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 667131669157408238L;

    public NoGivenBlogException() {
        super("The blog is not in the database.");
    }

    public NoGivenBlogException(int id) {
        super("The blog with ID " + id + " is not in the database.");
    }
}
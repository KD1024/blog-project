package CMSC589.CustomException;

public class LackContentException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = 9212038974514157306L;

    public LackContentException() {
        super("Lack of content in the input.");
    }

}